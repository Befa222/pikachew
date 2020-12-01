import React, { Component } from 'react'
import './result.css'
import Test from './test'






class Result extends Component {

    state = {
        showResult: true,
        
      }
     
    





    render() {
        return (
            this.state.showResult &&
            <div className="results">
                <h1>I'am the results page</h1>
                <Test />
                <button className="home-button" onClick={this.props.toIngredients}>I forgot some ingredients</button>
            </div>
        )
    }
}

export default Result;