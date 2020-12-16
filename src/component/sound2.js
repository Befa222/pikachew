import React from 'react'
import useSound from 'use-sound'
import Healing from '../audio/healingCut2.mp3'

function Sound2() {
    const [play] = useSound(Healing)
    return (
        <div>
            <span onClick={play}>What can I cook?</span>
        </div>
    )
}

export default Sound2;
