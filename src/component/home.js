import React from "react";
import "./home.css"

function Home () {
    return (
      <div className="home">
        <div>
            <h1 className="title">PICK-a-CHEW</h1>
        </div>
        <div className="container-home">
          <img className="pikachu-home" alt="pikachu" src="https://cdnb.artstation.com/p/assets/images/images/023/566/647/original/andy-pelaez-pikachu-animated.gif?1579627222"/>
        
          <img className="poke-bubble" alt="text-area" src="https://www.pngkit.com/png/full/584-5843757_pokemon-dialog-box-pokemon-text-box-png.png"/>
          
          <button className="home-button">I am hungry</button>
        </div>
      </div>
    )
}





export default Home;