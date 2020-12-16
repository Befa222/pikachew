import React, { Component } from 'react'
import './result.css'
import RecipeList from './RecipeList'
import pikachuIngredients from '../images/pikachuIngredients.png'
import PokeBubbleText from './PokeBubbleTextIngredients'

class Result extends Component {

    render() {
        
        return (
            
            <div className="results">
                <div className="results-header">
                    <img className="pikachu-results" src={pikachuIngredients} alt="pikachu" />
                    <div className="bubble-results">
                        <PokeBubbleText
                        stopCounter={190}
                        textData={["Pika-pi! And here we are...", "Swipe the pictures to choose a recipe !", "Tap on the name to display the method !"]}
                        />
                    </div>
                </div>
                <>
                <RecipeList
                />
                </>
                <div className="container-home">
                    <button className="result-button" onClick={this.props.toIngre}>I forgot some ingredients</button>
                </div>
            </div>
        )
    }
}

export default Result;