import React, { Component } from 'react';
import { stock } from './stockIngredients';
import './RecipeList.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_SPOONACULAR_KEY}&ingredients=${stock2}&number=14`)
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
         
         <Carousel >
            {items.map(item => (
               
                 <div key={item.id}> 
                <p className="legend">{item.title}</p>
                <img src={item.image} alt="images"/>
                </div>
                
              
            ))
            }
          </Carousel>
        
        </div>
      );
    }
  }
}

export default RecipeList;
