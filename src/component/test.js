import React, {Component} from 'react';

/* const unirest = require('unirest'); */

/* const REACT_APP_SPOONACULAR_API_KEY = "71b0a410e528408b9c88a08d281b4d6f";
const INGREDIENT_LIST = ['chicken', 'mushrooms', 'broccoli', 'onions'];

let requestString = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${REACT_APP_SPOONACULAR_API_KEY}&ingredients=`;

const ingredientsString = INGREDIENT_LIST.map(ingredient =>
    ingredient + '%2C'
);

requestString = requestString + ingredientsString;
console.log(requestString) */

/* unirest.get(requestString)
.header("X-RapidAPI-Key",  REACT_APP_SPOONACULAR_API_KEY)
.end(function (result) {
   if (result.status === 200){
       getRecipeData(result.body);
   };
});
 */
/* const SpoonacularTester = (props) => {
    return (
        <div>
            <p>
                {requestString}
            </p>
        </div>
    );
}


export default SpoonacularTester;
 */

/* import React, {Component} from 'react';*/
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
  }  render() {
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
              Name : {item.title}
            </li>
          ))}
        </ul>
    </div>
  );
}
}
}
export default Test; 