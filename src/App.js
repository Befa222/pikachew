import React, { Component } from 'react';
import './App.css'
import Home from './component/home'
import Ingredients from './component/ingredients'
import Result from './component/result'


class App extends Component {
    state ={
        showHome : true,
        showIngredients: false,
        showResult: false,

    }

    showHomeSection = () => {
        this.setState({
          showHome: true,
          showIngredients: false,
          showResult: false
        })
      }

      showIngredientsSection = () => {
        this.setState({
          showHome: false,
          showIngredients: true,
          showResult: false
        })
      }
    
      showResultSection = () => {
        this.setState({
          showHome: false,
          showIngredients: false,
          showResult: true
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
          />
        </div>
        }
        {
          this.state.showIngredients &&
          <div className="ingredients">
            <Ingredients
            toResults={this.showResultSection}
              />
            </div>
        }
        {
          this.state.showResult &&
          <div className="ingredients">
            <Result
            toIngredients={this.showIngredientsSection}
              />
            </div>
        }
      </div>
    );
  }
}





    export default App;