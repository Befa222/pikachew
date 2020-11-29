import React, { Component } from 'react';
import Select from 'react-select'


/*const meatList = 
    [
    {value: 'beef', label: 'Beef'},
    {value: 'chicken', label: 'Chicken'},
    {value: 'lamb', label: 'Lamb'},
    {value: 'pork', label: 'Pork'},
    {value: 'duck', label: 'Duck'},
    {value: 'turkey', label: 'Turkey'}
]*/


const apiUrl = 'https://api.spoonacular.com/food/ingredients/search?apiKey=71b0a410e528408b9c88a08d281b4d6f&query=meat&number=2&sort=calories&sortDirection=desc';
class SearchBar extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        fetch(apiUrl)
            .then(response => (response.json()))
            .then(dataFromApi => (
                this.setState({
                    data: dataFromApi
                })
            ))
    }
    render() {
        return (
            <Select
                isMulti
                options={this.state.data.results}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        )
    }
}

export default SearchBar;