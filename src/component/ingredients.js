import React, { Component } from 'react'
import PokeBubbleText from './PokebubbleText'
import "./ingredients.css"



class Ingredients extends Component {

    state = {
        showIngredients: true
      }

    render() {
        return (
            this.state.showIngredients &&
            <div className="ingredients">
                <div className="ingredients-header">
                    <img className="pikachu-ingredients" src="https://www.vhv.rs/dpng/d/46-461746_pokemon-clipart-hd-png-download.png" alt="pikachu"/>
                        <div className="bubble-ingredients">
                        <PokeBubbleText 
                        textData={["Pika-pi! It's time to check what food you have at home", "Select the ingredients in the lists below!"]}
                        />
                    </div>
                </div>

                <section className="ingredients-section">
                    <p>MEAT</p>
                    <img className="ingredients-image" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.emojiterra.com%2Fgoogle%2Fandroid-pie%2F512px%2F1f356.png" alt="meat"/>
                    <input type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>VEGETABLE</p>
                    <img className="ingredients-image" src="https://cdn2.iconfinder.com/data/icons/veggies-2/500/vegetable-plant-food-ingredients-22-512.png" alt="carot"/>
                    <input type="text"></input>
                </section>

                <button className="home-button" onClick={this.props.toResults}>What can I cook ?</button>
            </div>
        )
    }
}

export default Ingredients;