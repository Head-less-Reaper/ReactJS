import React from 'react';
import Udemy from './Udemy';

const App = () => {
  const user = "Ayush";
  return (
    <>
      <h1>Hello {2+2}</h1>
      <h2>How are you {user}</h2>
      //but you cannt pass the logic in conditonal statement
      <Udemy/>
    </>
  )
}

export default App

