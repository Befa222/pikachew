import React, { Component } from 'react';
import Select from 'react-select'


const apiUrl = 'https://api.spoonacular.com/food/ingredients/search?apiKey=71b0a410e528408b9c88a08d281b4d6f&query=Beef&number=3&sortDirection=desc';
class SearchBar extends Component {
    /*state = {
        data: {}
    }
    componentDidMount() {
        fetch(apiUrl)
            .then(response => (response.json()))
            .then(dataFromApi => {
                console.log(dataFromApi)
                let apiOptions= dataFromApi.results.map(ingredients =>({value:ingredients.name, label:ingredients.name}))
                this.setState({
                    data: apiOptions
                })
            })
    }*/
    render() {
        return (
            <Select
                isMulti
                options={this.props.list}
                className="basic-multi-select"
                classNamePrefix="select"
                
            />
        )
    }
}

export default SearchBar;