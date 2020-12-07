import React, { Component } from 'react';
import Result from './result'
import './loading.css'

class Loading extends Component {

  constructor() {
    super()
    this.state = {
      showLoading: true,
    }
    this.timerId = null
  }

  hidingTimer() {
    this.timerId = setTimeout(() => {
      this.setState({ showLoading: false })
    }, 2000)
  }

  componentDidMount() {
    this.hidingTimer()
  }

  render() {
    if (this.state.showLoading) {
      return (
        this.state.showLoading &&
        <div className="loading">
          <h1 className="title">Loading...</h1>
          <div>{this.state.shouldHide}</div>
        </div>
      )
    }
    else {
      return (
        <div>
          <Result
            toIngre={this.props.toIngredients}
          />
        </div>


      )}
  }
}
export default Loading