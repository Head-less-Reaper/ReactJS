import React, { useState } from 'react';
import './App.css';

const App = () => {

  //state
  //here the counter is the value you need to pass and setCounter is the value a method that is responsible to update the value of counter
  const [counter ,setCounter] = useState(0);
 

  // let counter = 0
  const count = ()=>{
    //batching
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    //to avoid batching we simply do a callback in setCounter
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    
  }
  const del = () =>{
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter : {counter} </h2>
      <button
      onClick={count}
      >Add</button>{"  "}
      <button
      onClick={del}
      >Delete</button>
      <footer>Footer : {counter}</footer>
    </>
  )
}

export default App
