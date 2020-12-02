import React, { Component } from 'react'
import './result.css'
import Test from './test'
import pikachuIngredients from '../images/pikachuIngredients.png'
import PokeBubbleText from './PokebubbleText'


class Result extends Component {

    state = {
        showResult: true,
        
      }
     
    render() {
        return (
            this.state.showResult &&
            <div className="results">
                <div className="results-header">
                    <img className="pikachu-results" src={pikachuIngredients} alt="pikachu" />
                    <div className="bubble-results">
                        <PokeBubbleText
                            stopCounter={150}
                            textData={["Pika-pi! Here we are!", "Now choose what you want to cook in the list below!"]}
                        />
                    </div>
                </div>
                <Test />
                <div className="container-home">
                    <button className="home-button" onClick={this.props.toIngredients}>I forgot some ingredients</button>
                </div>
            </div>
        )
    }
}

export default Result;