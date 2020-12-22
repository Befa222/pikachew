import React from 'react'
import useSound from 'use-sound'
import char from '../audio/charmander.mp3'

function Sound3() {
    const [play] = useSound(char)
    return (
        <div>
            <span onClick={play}>Let's start</span>
        </div>
    )
}

export default Sound3;
