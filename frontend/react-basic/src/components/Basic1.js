import React, { useState } from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log("Button Clicked");
    }

    // practice useState
    const [count, setCount] = useState(0);

  return (
    <>
        <button onClick={() => {
            setCount(prevCount=>prevCount+1);
            setCount(prevCount=>prevCount+1);
            }    
        }>Count {count}</button>
        <h1>from Basic1</h1>
        <p>this component is called from Basic1.js</p>
        <p>props.name: {props.name}</p>
        {/* <button onClick={clickHandler}>Click Me</button> */}
    </>

  )
}

export default Basic1