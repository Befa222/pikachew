import React, { useEffect, useState } from "react";
import { AppBar,Toolbar, Grid, Card, CardContent, CircularProgress, CardMedia, Typography, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import {toFirstCharUppercase} from "./Constants";
import axios from "axios";
import './pokedex.css'

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
      paddingTop: "20px",
      paddingLeft: "50px",
      paddingRight: "50px",
    },
    cardMedia: {
      margin: "auto",
    },
    cardContent: {
      textAlign: "center",
    },
    searchContainer: {
      display: "flex",
      backgroundColor: fade(theme.palette.common.white, 0.15),
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "5px",
      marginBottom: "5px",
      marginLeft: "42%"
    },
    searchIcon: {
      alignSelf: "flex-end",
      marginBottom: "5px",
    },
    searchInput: {
      width: "200px",
      margin: "5px",
    },
  }));

  const Pokedex = (props) => {
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState({});
    const [filter, setFilter] = useState("");
    const [pokemon, setPokemon] = useState(undefined);
    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=895`)
        .then(function (response) {
          const { data } = response;
          const { results } = data;
          const newPokemonData = {};
          results.forEach((pokemon, index) => {
            newPokemonData[index + 1] = {
              id: index + 1,
              name: pokemon.name,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`,
            };
          });
          setPokemonData(newPokemonData);
        });
    }, []);

    const findPokemon = (id) => {
      axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
    }
    const handleSearchChange = (e) => {
      setFilter(e.target.value);
    };
    const getPokemonCard = (pokemonId) => {
      const { id, name, sprite } = pokemonData[pokemonId];
      return (
        
        <Grid item xs={4} key={pokemonId}>
          
          <Card onClick={() => findPokemon(id)}>
            <CardMedia
              className={classes.cardMedia}
              image={sprite}
              style={{ width: "130px", height: "130px" }} 
            />
            <CardContent className={classes.cardContent}>
              <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
            </CardContent>
            {pokemon && 
          <div>
          {/* <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p> */}
        </div>
          }
          </Card>
        </Grid>
      );
    };
    return (
      <>
        <AppBar position="static">
        <button onClick={props.toHome} className="backHomeButton">BACK TO HOME</button>
          <Toolbar>
            <div className={classes.searchContainer}>
              <SearchIcon className={classes.searchIcon} />
              <TextField
                className={classes.searchInput}
                onChange={handleSearchChange}
                label="Pokemon"
                variant="standard"
              />
            </div>
          </Toolbar>
        </AppBar>
        {pokemonData ? (
          <Grid container spacing={2} className={classes.pokedexContainer}>
            {Object.keys(pokemonData).map(
              (pokemonId) =>
                pokemonData[pokemonId].name.includes(filter) &&
                getPokemonCard(pokemonId)
            )}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </>
    );
  };
  export default Pokedex;