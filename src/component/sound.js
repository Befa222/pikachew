import React from 'react'
import useSound from 'use-sound';
import pokeSound from '../audio/healing.mp3';





function Healing() {
  const [play] = useSound(pokeSound)
  return (
    <div>
      <button onClick={play}></button>
    </div>
  )
}





 
export default Healing;