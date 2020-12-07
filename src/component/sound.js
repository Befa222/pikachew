import React from 'react'
import useSound from 'use-sound'
import Pika from '../audio/pika.mp3'




function Sound() {
    const [play] = useSound(Pika)
    return (
        <div>
            <span className="home-button" onClick={play}>Let's start!</span>
        </div>
    )
}

  export default Sound;
