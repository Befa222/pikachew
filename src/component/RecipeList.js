import React, { Component } from 'react';
import { stock } from './stockIngredients';
import './RecipeList.css';



class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoaded: false
    }
  }

  
  /*https://api.spoonacular.com/recipes/complexSearch?apiKey=71b0a410e528408b9c88a08d281b4d6f&query=Beef&number=3&sortDirection=desc*/
  

  componentDidMount() {
    let stock2 = stock.join()
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_SPOONACULAR_KEY}&ingredients=${stock2}&number=10`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Almost there...</div>;
    }
    else {
      return (
        <div className="recipeListContainer">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <h1>{item.title}</h1>
                <img src={item.image} alt="images"/>
              </li>
            ))
            }
          </ul>
        </div>
      );
    }
  }
}

export default RecipeList;
