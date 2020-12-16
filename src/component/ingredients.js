import React, { Component } from 'react'
import PokeBubbleText from './PokeBubbleTextIngredients'
import "./ingredients.css"
import pikachuIngredients from '../images/pikachuIngredients.png'
import SearchBar from './searchBar'
import { fridge } from './fridge'
import { stock } from './stockIngredients'
import Sound2 from './sound2'

let magGlassTarget, i;

class Ingredients extends Component {
    state = {
        showIngredients: true,
        ingredientsMeat: [],
        ingredientsFish: [],
        ingredientsVegetables: [],
        ingredientsFruits: [],
        ingredientsDairy: [],
        ingredientsGrains: [],
        ingredientsHerbs: [],
        ingredientsSauces: [],
        finalIngredients: []
    }

    removeArrow = () => document.querySelector(".css-6q0nyr-Svg").remove()

    searchBarGlass = () => {
        magGlassTarget = document.querySelectorAll(".css-tlfecz-indicatorContainer");
        for (i = 0; i < magGlassTarget.length; i++) {
            magGlassTarget[i].style.padding = "15px"
            magGlassTarget[i].style.backgroundImage = "url('https://friconix.com/png/fi-xnsuhm-search.png')"
            magGlassTarget[i].style.backgroundSize = "contain"
        }
    }
    componentDidMount() {
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()
        this.removeArrow()

        this.searchBarGlass()
    }

    handleIngredientsChange = (option, category) => {
        let optionToString = option
            ? option.map(ingredientsOption => ingredientsOption.value)
            : []
        this.setState({
            ['ingredients' + category]: optionToString
        })
    }

    getAllIngredients = () => {
        let allIngredients = [
            ...this.state.ingredientsMeat,
            ...this.state.ingredientsFish,
            ...this.state.ingredientsVegetables,
            ...this.state.ingredientsFruits,
            ...this.state.ingredientsDairy,
            ...this.state.ingredientsGrains,
            ...this.state.ingredientsHerbs,
            ...this.state.ingredientsSauces,
        ]
        this.setState({
            finalIngredients: stock.push(allIngredients)
        })
    }


    render() {
        return (
            this.state.showIngredients &&
            <div className="ingredients">
                <div className="ingredients-header">
                    <img className="pikachu-ingredients" src={pikachuIngredients} alt="pikachu" />
                    <div className="bubble-ingredients">
                        <PokeBubbleText
                            stopCounter={140}
                            textData={["Pika-pi! It's time to raid your fridge!", "Select the ingredients in the categories below!"]}
                        />
                    </div>
                </div>
                <section className="ingredients-section">
                    {
                        fridge.list.map(fridgeChoice => (
                            <>
                                <p className="categoryCss">{fridgeChoice.category}</p>
                                <img className="ingredients-image" src={fridgeChoice.image} alt={fridgeChoice.category} />
                                <div className="basic-multi-select">
                                    <SearchBar
                                        list={fridgeChoice.ingredients}
                                        handleIngredientsChange={this.handleIngredientsChange}
                                        category={fridgeChoice.category}
                                    />
                                </div>
                            </>
                        ))
                    }
                </section>
                <div className="container-home">
                    <button className="ingredients-button" onClick={this.props.toLoading}>
                        <button className="cheat" onClick={this.getAllIngredients}>
                            <Sound2 />
                        </button>
                    </button>
                </div>
            </div>
        )
    }
}


export default Ingredients;