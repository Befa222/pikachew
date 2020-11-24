import React, { Component } from 'react';
import "./home.css"
import chefpika from '../images/chefpikachu.png'
import pikachuHome from '../images/pikachuHome.png'
import PokeBubbleText from './PokebubbleText'

class Home extends Component {

    state = {
      showHome: true,
      chefpikachu: chefpika
    }
    
    render() {
        return (
            this.state.showHome &&
            <div className="home" >
              <div>
                <h1 className="homeTitle">Pick a Chew</h1>
              </div>
                <div className="container-home">
                  <img className="pikachu-home" alt="pikachu" src="../images/"/>

                  <img className="homePikachuDesktop" alt="Chef Pikachu." src={this.state.chefpikachu}/>
            
                  <div className="typerDiv">
                  <PokeBubbleText 
                  
                  textData={["Pika-pi! Welcome to Pika-Chew!", "The quick-stop app for all your recipe needs!", "To get started, click on the button below!"]}
                  />
                  </div>
                  <button className="home-button" onClick={this.props.toIngredients}>What can I cook ?</button>
              </div>
          </div>
        )
    }
}

export default Home;




