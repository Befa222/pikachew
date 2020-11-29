import React from 'react'
import useSound from 'use-sound'
import Healing from '../audio/healingCut2.mp3'




function Sound() {
    const [play] = useSound(Healing)
    return (
        <div>
            <span className="home-button" onClick=
          {play}>Let's start!
</span>
        </div>
    )
}

  export default Sound;