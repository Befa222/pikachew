import React, { Component } from 'react';
import Home from './component/home'
import Ingredients from './component/ingredients'
import Loading from './component/loading'
import Pokedex from './component/Pokedex'


class App extends Component {
    state={
        showHome : true,
        showIngredients: false,
        showLoading : false,
        showPokedex: false
    }

      showHomeSection = () => {
        this.setState({
          showHome: true,
          showIngredients: false,
          showLoading : false
        })
      }

      showIngredientsSection = () => {
        this.setState({
          showHome: false,
          showIngredients: true,
          showLoading : false
        })
      }
    
       showLoadingSection = () => {
         this.setState({
          showHome: false,
           showIngredients: false,
           showLoading: true
         })
       }

       showPokedexSection = () => {
        this.setState({
         showHome: false,
          showIngredients: false,
          showLoading: false,
          showPokedex: true
        })
      }

      render() {
        return (
         <div>
        {
        this.state.showHome &&
          <div className="home">
            <Home
            toIngredients={this.showIngredientsSection}
            toPokedex={this.showPokedexSection}
            />
          </div>
        }
        {
          this.state.showIngredients &&
            <div className="ingredients">
              <Ingredients
              toLoading={this.showLoadingSection}
              />
            </div>
        }
        {
          this.state.showLoading &&
            <div className="Loading">
              <Loading
              toIngredients={this.showIngredientsSection}
              />
            </div>
        } 

        {
          this.state.showPokedex &&
            <div className="Pokedex">
              <Pokedex
              toHome={this.showHomeSection}
              />
            </div>
        } 



      </div>
    );
  }
}
    export default App;