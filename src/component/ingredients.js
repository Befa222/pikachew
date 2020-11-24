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
                    <img className="pikachu-ingredients" src="https://o.remove.bg/downloads/ddcb56f0-c763-4606-9e75-41febff81703/unnamed-removebg-preview.png" alt="pikachu"/>
                        <div className="bubble-ingredients">
                            <PokeBubbleText 
                            textData={["Pika-pi! It's time to check what food you have at home", "Select the ingredients in the lists below!"]}
                            />
                        </div>
                </div>

                <section className="ingredients-section">
                    <p>MEAT</p>
                    <img className="ingredients-image" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.emojiterra.com%2Fgoogle%2Fandroid-pie%2F512px%2F1f356.png" alt="meat"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>FISH</p>
                    <img className="ingredients-image" src="https://img.icons8.com/emoji/452/fish-emoji.png" alt="fish"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>VEGETABLES</p>
                    <img className="ingredients-image" src="https://o.remove.bg/downloads/5905a98c-caeb-44b5-9a5d-77d613232795/kissclipart-pencil-icon-transparent-background-clipart-compute-614f2c7724a54e80-removebg-preview.png" alt="carot"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>FRUITS</p>
                    <img className="ingredients-image" src="https://o.remove.bg/downloads/551f699a-4495-4d2c-95b2-b8f5fa18974d/pear-11546983887dzmmfl7rtx-removebg-preview.png" alt="fruit"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>DAIRY</p>
                    <img className="ingredients-image" src="https://cdn0.iconfinder.com/data/icons/food-247/500/food-24-512.png" alt="cheese"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>GRAINS && BAKING</p>
                    <img className="ingredients-image" src="https://o.remove.bg/downloads/5afac355-ba14-453c-aef3-9968164c90b4/canvas-bag-with-white-flour-scoop-ears_23965-525-removebg-preview.png" alt="pot"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>HERBS & SPICES</p>
                    <img className="ingredients-image" src="https://o.remove.bg/downloads/00697ba0-4230-471d-8e41-b5c24f53b556/kisspng-spice-mix-herb-clip-art-jamon-5ab4dc2917b7c1.9525107015218022810972-removebg-preview.png" alt="pot"/>
                    <input className="searchBar" type="text"></input>
                </section>

                <section className="ingredients-section">
                    <p>SAUCES</p>
                    <img className="ingredients-image" src="https://o.remove.bg/downloads/800fcd8e-1937-46bc-bdd5-fc9b2280ff3b/360_F_367430111_rD1gZmxJbk6yBThk4f96QAW7X2WPIQV0-removebg-preview.png" alt="sauce"/>
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