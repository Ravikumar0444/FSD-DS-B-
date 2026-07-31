import React from 'react'

const Book = () => {
  return (
    <div style={{border:'2px solid red' , height:'800px' , width:'300px' , backgroundColor:'pink'}}>
        <h3 style={{color:'red'}}>Book Shop</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaR14PmY-4m7-e20uAs40ca_RvJFKI7i_8RB-kYG0YQ&s=10" alt="" height={'100px'} width={'100px'} />
        <h3 style={{color:'blue'}}>Book Name : Rough</h3>
        <h3>600</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRQczdyhmf-5LlrACIFOSqZTHhINfuICWJkY-kXXdww&s=10" alt="" height={'100px'} width={'100px'}/>
        <h3 style={{color:'red'}}>Book Name : Physics</h3>
        <h3>100</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCmepy1OQJYkO6754lP3v7UtH6bI0aTpJRlXmx3NPofQ&s=10" alt="" height={'100px'} width={'100px'}/>
        <h3 style={{color:'red'}}>Book Name : Math</h3>
        <h3>100</h3>
    </div>
  )
}

export default Book
