import React, { Component } from 'react';
import { stock } from './stockIngredients';
import './RecipeList.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

/* let getRecipeInstructions = url => fetch(url).then(result => result.json()) */

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false,
      showRecipe: false,
      info: []
    }
  }

  displayRecipeBox = (id) => {
    console.log('this is the', id)
    fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API_SPOONACULAR_KEY}`)
      .then(result => {
        console.log('this is the', result)
        return result.json()
      })
      .then(jason => {
        let recipeInfo = jason.length ? jason[0].steps : []
        let recipeIngredients = recipeInfo.map(item => item.ingredients)
        console.log(recipeIngredients.flat().map(ingredient => ingredient.name))
        this.setState({
          showRecipe: true,
          info: recipeInfo
        })
      })
  }

  closeRecipeBox = () => {
    this.setState({
      showRecipe: false
    })
  }

  /*https://api.spoonacular.com/recipes/complexSearch?apiKey=71b0a410e528408b9c88a08d281b4d6f&query=Beef&number=3&sortDirection=desc*/

  componentDidMount() {
    let stock2 = stock.join()
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_SPOONACULAR_KEY}&ingredients=${stock2}&number=14`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Almost there...</div>;
    }
    else {
      return (
        <div className="recipeListContainer">
          <Carousel >
            {items.map(item => (
              <div className="recipeContainer" data-id={item.id}>
                <p className="legend"><span onClick={() => this.displayRecipeBox(item.id)} >{item.title}</span></p>
                <img src={item.image} className="recipeImg" alt="images" />
              </div>
            ))}
          </Carousel>
          {
            this.state.showRecipe &&
            <div className="recipeStepsBox">
              <h3>Step-by-Step Instructions</h3>
              {this.state.info.length ?
                this.state.info.map(indexer => (
                  <div>
                    Step {indexer.number}
                    <p className="stepStyle">{indexer.step}</p>
                  </div>
                ))
                : <div>
                  <h2>Sorry, recipe not available.</h2>
                  </div>
              }
              <button id="recipeButton" onClick={this.closeRecipeBox}>Back to Recipes</button>
            </div>
          }
          {console.log(this.state.info)}
        </div>
      );
    }
  }
}

export default RecipeList;
