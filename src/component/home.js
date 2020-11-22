import React, { Component } from 'react';
import "./home.css"
import chefpika from '../images/chefpikachu.png'
import PokeBubbleText from './PokebubbleText'

class Home extends Component {

    state = {
      showHome: true,
      chefpikachu: chefpika
    }
  
    /*showModal = () => {
      this.setState({
        showIngredients: true
      })
    }*/
  
    render() {
        return (
            this.state.showHome &&
            <div className="home" >
         <div>
            <h1 className="title">PICK-a-CHEW</h1>
        </div>
        <div className="container-home">
          <img className="pikachu-home" alt="pikachu" src="https://cdnb.artstation.com/p/assets/images/images/023/566/647/original/andy-pelaez-pikachu-animated.gif?1579627222"/>

          <img className="homePikachuDesktop" alt="Chef Pikachu." src={this.state.chefpikachu}/>
        
          {/* <img className="poke-bubble" alt="text-area" src="https://www.pngkit.com/png/full/584-5843757_pokemon-dialog-box-pokemon-text-box-png.png"/> */}

          <PokeBubbleText 
            heading={'Pikachu: '}
            textData={["Pika-pi! Welcome to Pika-Chew!", "The quick-stop app for all your recipe needs!", "To get started, click on the button below!"]}
          />
          
          <button className="home-button" onClick={this.props.toIngredients}>I'm hungry</button>
        </div>
      </div>
        )
    }
}

export default Home;




