import React from 'react'
import './myStyles.css'
function Styling(props) {
    let className = props.primary ?  'primary' : ''
  return (
    <div>
      <h1 className ={`${className} font-xl, font-style`}>Usama Khalid</h1>
    </div>
  )
}

export default Styling
