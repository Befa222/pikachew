import React, { Component } from 'react'
import PokeBubbleText from './PokebubbleText'
import "./ingredients.css"
import pikachuIngredients from '../images/pikachuIngredients.png'
import meat from '../images/meatIcon.png'
import fish from '../images/fishIcon.png'
import vege from '../images/vegetablesIcon.png'
import fruit from '../images/fruitsIcon.png'
import dairy from '../images/dairyIcon.png'
import grain from '../images/grainIcon.png'
import herb  from '../images/herb&spiceIcon.png'
import sauce  from '../images/sauceIcons.png'


class Ingredients extends Component {

    state = {
        showIngredients: true
      }

    render() {
        return (
            this.state.showIngredients &&
            <div className="ingredients">
                <div className="ingredients-header">
                    <img className="pikachu-ingredients" src={pikachuIngredients} alt="pikachu"/>
                        <div className="bubble-ingredients">
                            <PokeBubbleText 
                            textData={["Pika-pi! It's time to check what food you have at home", "Select the ingredients in the lists below!"]}
                            />
                        </div>
                </div>

                <section className="ingredients-section">
                    <p>MEAT</p>
                    <img className="ingredients-image" src={meat} alt="meat"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>FISH</p>
                    <img className="ingredients-image" src={fish} alt="fish"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>VEGETABLES</p>
                    <img className="ingredients-image" src={vege} alt="carot"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>FRUITS</p>
                    <img className="ingredients-image" src={fruit} alt="fruit"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>DAIRY</p>
                    <img className="ingredients-image" src={dairy} alt="cheese"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>GRAINS && BAKING</p>
                    <img className="ingredients-image" src={grain} alt="pot"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>HERBS & SPICES</p>
                    <img className="ingredients-image" src={herb} alt="pot"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>SAUCES</p>
                    <img className="ingredients-image" src={sauce} alt="sauce"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <div className="container-home">
                <button className="home-button" onClick={this.props.toResults}>What can I cook ?</button>
                </div>
            </div>
        )
    }
}

export default Ingredients;