import React, { Component } from 'react'
import PokeBubbleText from './PokeBubbleTextIngredients'
import PokeBubbleTextDesktop from './PokeBubbleDesktop'
import "./ingredients.css"
import pikachuIngredients from '../images/pikachuIngredients.png'
import SearchBar from './searchBar'
import { fridge } from './fridge'
import { fridgeDesktop } from './fridgeDesktop'
import { stock } from './stockIngredients'
import { stockDesktop } from './stockIngredientsDesktop'
import Sound2 from './sound2'
let magGlassTarget, i;
class Ingredients extends Component {
  state = {
    showIngredients: true,
    ingredientsIngredients: [],
    ingredientsMeat: [],
    ingredientsFish: [],
    ingredientsVegetables: [],
    ingredientsFruits: [],
    ingredientsDairy: [],
    ingredientsGrains: [],
    ingredientsHerbs: [],
    ingredientsSauces: [],
    finalIngredients: [],
    finalIngredients2: []
  }
  searchBarGlass = () => {
    magGlassTarget = document.querySelectorAll(".select__dropdown-indicator");
    for (i = 0; i < magGlassTarget.length; i++) {
      magGlassTarget[i].firstChild.remove()
      magGlassTarget[i].style.padding = "15px"
      magGlassTarget[i].style.backgroundImage = "url('https://friconix.com/png/fi-xnsuhm-search.png')"
      magGlassTarget[i].style.backgroundSize = "contain"
    }
  }
  componentDidMount() {
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
  // Desktop version below
  getAllIngredients2 = () => {
    let allIngredients2 = [
      ...this.state.ingredientsIngredients
    ]
    this.setState({
      finalIngredients2: stockDesktop.push(allIngredients2)
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
        {/* Desktop version starts here */}
        <section className="ingredients-desktop">
          {
            fridgeDesktop.list.map(fridgeChoice2 => (
              <>
                <p className="categoryDesktop">{fridgeChoice2.category}</p>
                <div className="basic-multi-select2">
                  <SearchBar
                    list={fridgeChoice2.ingredients}
                    handleIngredientsChange={this.handleIngredientsChange}
                    category={fridgeChoice2.category}
                  />
                </div>
                <div className="bubbleTextDesktop">
                  <PokeBubbleTextDesktop
                    stopCounter={152}
                    textData={["Chaarr! It's time to raid your fridge!", "Type the ingredients in the search bar and click the button below !"]}
                  />
                </div>
              </>
            ))
          }
          <div className="container-homeDesktop">
            <button className="ingredients-button2" onClick={this.props.toLoading}>
              <span className="cheat2" onClick={this.getAllIngredients2}><Sound2 /></span>
            </button>
          </div>
        </section>
        {/* Desktop version stops here */}
        <div className="container-home">
          <button className="ingredients-button" onClick={this.props.toLoading}>
            <span className="cheat" onClick={this.getAllIngredients}>
              <Sound2 />
            </span>
          </button>
        </div>
      </div>
    )
  }
}
export default Ingredients;