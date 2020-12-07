import React, { Component } from 'react';
import "./home.css"
import PokeBubbleText from './PokebubbleText'
import chefpika from '../images/chefpikachu.png'
import pikachuHome from '../images/pikachuHome.gif'
import Sound from './sound'

class Home extends Component {

    state = {
      showHome: true,
    }

    render() {
        return (
          
            this.state.showHome &&
            <div className="home" >
              <div>
                <h1 className="homeTitle">Pick a Chew</h1>
              </div>
                <div className="container-home">
                  <img className="pikachu-home" alt="pikachu" src={pikachuHome}/>

                  <img className="homePikachuDesktop" alt="Chef Pikachu." src={chefpika}/>
            
                  <div className="typerDiv">
                  <PokeBubbleText 
                   stopCounter={221}
                  textData={["Pika-pi! Welcome to Pika-Chew!", "The quick-stop app for all your recipe needs!", "To get started, click on the button below!"]}
                  />
                  </div>
                  <button className="home-button" onClick={this.props.toIngredients}><Sound/></button>
              </div>
          </div>
        )
    }
}

export default Home;




