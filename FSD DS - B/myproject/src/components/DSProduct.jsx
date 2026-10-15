import React, { useState } from 'react'
import cat from '../images/cat.png'

const DSProduct = () => {

    const[catHeight , setCatHeight] = useState(100)
    const[catWidth , setCatWidth] = useState(100)
    const[red , setRed] = useState(0);
    const[green , setGreen] = useState(0);
    const[blue , setBlue] = useState(0);
    const [rotation, setRotation] = useState(0);

    function setHeight(){
        setCatHeight(catHeight+20);
    }
    function setWidth(){
        setCatWidth(catWidth+20);
    }
    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
    function rotateRight(){
         setRotation(rotation + 20);
    }
  return (
    <div>
      <h2 style={{color:'brown',backgroundColor:'white'}}>Image Manipulation</h2>
      <div style={{backgroundColor:`rgb(${red},${green},${blue})` ,border:'4px solid red' , height:'400px',width:'400px', marginLeft:'300px'}}>
        <img src={cat} height={catHeight} width={catWidth} style={{transform: `rotate(${rotation}deg) scale(1.2)`,}}/>
        <div>
            <h3>Cat Height:{catHeight}</h3>
            <h3>Cat Width:{catWidth}</h3>
            <h2>Red:{red}</h2>
            <h2>Green:{green}</h2>
            <h2>Blue:{blue}</h2>
            <h2>Angle:{rotation}</h2>
        </div>
      </div>
      <div>
        <button onClick={setHeight}>enhanceHeight</button>
        <button onClick={setWidth}>enhancewidht</button>
        <button onClick={changeBGColor}>ChangeBGColor</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>

    </div>
  )
}

export default DSProduct
