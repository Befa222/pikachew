import React, {Component} from 'react';


const INGREDIENT_LIST = ['chicken', 'mushrooms','beef'];


class Test extends Component {

constructor(props){
  super(props);
  this.state = {
    items:{},
    isLoaded: false
  }
}


/*https://api.spoonacular.com/food/ingredients/search?apiKey=71b0a410e528408b9c88a08d281b4d6f&query=Beef&number=3&sortDirection=desc*/

/*https://api.spoonacular.com/recipes/complexSearch?apiKey=71b0a410e528408b9c88a08d281b4d6f&query=Beef&number=3&sortDirection=desc*/

/*https://api.spoonacular.com/recipes/findByIngredients?apiKey=71b0a410e528408b9c88a08d281b4d6f&ingredients=apples,+flour,+sugar&number=2*/



componentDidMount() {
    fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=71b0a410e528408b9c88a08d281b4d6f&ingredients=${INGREDIENT_LIST}`)                       
    .then(res => res.json())
    .then(json => {
      this.setState({
            isLoaded: true,
            items: json

      })

    })
  }

render() {

    let {isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div>Loading.......</div>;
    }
    
      else {

  return (
    <div className="App">
        <ul>
          {items.map(item =>(
            <li key={item.id}>
               {item.title}
            </li>
          ))}
        </ul>
    </div>
  );
}
}
}
export default Test;
