import React from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log("Button Clicked");
    }
  return (
    <>
        <h1>from Basic1</h1>
        <p>this component is called from Basic1.js</p>
        <p>props.name: {props.name}</p>
        <button onClick={clickHandler}>Click Me</button>
    </>

  )
}

export default Basic1