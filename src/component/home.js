import React, { Component } from 'react';
import "./home.css"
import PokeBubbleText from './PokebubbleTextHome'
import pikachuHome from '../images/pikachuHome.gif'
import Sound from './sound'
import home from './videos/home2.mp4'


class Home extends Component {

    state = {
      showHome: true,
    }

    render() {
        return (
            this.state.showHome &&
            
            <div className="home">
                <div>
               <video autoPlay muted loop
                    style={{
                    position : "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: "-1"
                  }}>
                    <source src={home} type='video/mp4' />
                  </video>
                  </div>

                <div>
                  <h1 className="homeTitle">Pick a Chew</h1>
                  <h2 className="subTitleDesktop">Charmander Desktop Version</h2>
                </div>
                <div className="container-home">
                  <img className="pikachu-home" alt="pikachu" src={pikachuHome}/>
                    <div className="typerDiv">
                    <PokeBubbleText 
                    stopCounter={221}
                    textData={["Pika-pi! Welcome to Pika-Chew!", "The quick-stop app for all your recipe needs!", "To get started, click on the button below!"]}
                    />
                </div>
                </div>
                  <button className="home-button" onClick={this.props.toIngredients}><Sound /></button>
            
          </div>
        )
    }
}

export default Home;




