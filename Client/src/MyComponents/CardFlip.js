import React from 'react'
import './CardFlip.css'
import logo from './Assets/logo.png';
function CardFlip() {
  return (

	<div className="wrapper">

    <div className="container" id="c0">
      <div className="image" id="i0">

        <div className="city">
        

         <img src={logo}/>

        </div>
      </div>
      <div className="story" id="s0">
        <div className="info">
          <h3>Pyramids</h3>
          <p> Built during a time when Egypt was one of the richest and most powerful civilizations in the world. Their massive scale reflects the unique role that the pharaoh played in ancient Egyptian society.</p>
        </div>
      </div>
    </div>
    <div className="container" id="c1">
      <div className="image" id="i1">
        <div className="city">
         
    
		<img src={logo}/>

        </div>
      </div>
      <div className="story" id="s1">
        <div className="info">
          <h3>Stonehenge</h3>
          <p> Stonehenge is a prehistoric monument in Wiltshire, England. It was constructed in several stages between 3000 and 1500 B.C., spanninng to the Bronze Age.</p>
        </div>
      </div>
    </div>
    <div className="container" id="c2">
      <div className="image" id="i2">
        <div className="city">
   

         <img src={logo}/>

        </div>
      </div>
      <div className="story" id="s2">
        <div className="info">
          <h3>Tower of Pisa</h3>
          <p> The Leaning Tower of Pisa or simply the Tower of Pisa is the campanile, or freestanding bell tower, of the cathedral of the Italian city of Pisa, known worldwide for its unintended tilt</p>

        </div>
      </div>
    </div>

 

  </div>



  )
}

export default CardFlip