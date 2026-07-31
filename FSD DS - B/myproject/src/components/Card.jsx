import React from 'react'
import logo from './cartoon.jpg'
const Card = () => {
  return (
    <div style={{border:'2px solid red',height:'400px',width:'300px',backgroundColor:'yellow'}}>
      <h5 style={{color:'red'}}>ABES STUDENT CARD</h5>
      <img style={{height:'100px'}} src={logo} alt="" />
      <h4>Name : RAVI RANJAN KUMAR</h4>
      <h4>Class : B.tech DS-B</h4>
      <h4>Year : 3rd Year</h4>
      
    </div>
  )
}

export default Card
