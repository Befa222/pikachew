import React, { Component } from 'react'



class Ingredients extends Component {

    state = {
        showIngredients: true
      }

    render() {
        return (
            this.state.showIngredients &&
            <div className="ingredients">
                <h1>I'am the ingredients page</h1>
                <button className="home-button" onClick={this.props.toResults}>I'am hungry</button>
            </div>
        )
    }
}

export default Ingredients;