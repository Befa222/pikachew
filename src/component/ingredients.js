import React, { Component } from 'react'
import PokeBubbleText from './PokebubbleText'
import "./ingredients.css"
import pikachuIngredients from '../images/pikachuIngredients.png'
import SearchBar from './searchBar'
import {fridge} from './fridge'



let magGlassTarget, i;

class Ingredients extends Component {

    state = {
        showIngredients: true,
        toDo: '',
    listOfToDos: []
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
    

    render() {
        

        return (
            this.state.showIngredients &&
            <div className="ingredients">
                <div className="ingredients-header">
                    <img className="pikachu-ingredients" src={pikachuIngredients} alt="pikachu" />
                    <div className="bubble-ingredients">
                        <PokeBubbleText
                            stopCounter={140}
                            textData={["Pika-pi! It's time to raid your fridge!", "Select each ingredient in the categories below!"]}
                        />
                    </div>
                </div>

            <form>

                <section className="ingredients-section">
                        {
                            fridge.list.map(fridgeChoice=>(
                                <>
                                    <p>{fridgeChoice.category}</p>
                                    <img className="ingredients-image" src={fridgeChoice.image} alt={fridgeChoice.category} />
                                    <div className="basic-multi-select">
                                    <SearchBar 
                                    list={fridgeChoice.ingredients}
                                    
                                    />
                                    </div>
                                </>
                            ))
                        }

                </section>
                    <div className="container-home">
                        <button type="submit" className="home-button" onClick={this.props.toResults}>What can I cook ?</button>
                    </div>
            </form>
            </div>
        )
    }
}
               

export default Ingredients;