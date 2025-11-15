import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] =useState("maroon")
  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-amber-50 px-3 py-2 rounded-full'>
            <button 
            //onclick only returns the function not the value passed to it that's why we use callback
            onClick={()=>setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor: "red"}}>Red</button>
            <button 
            //onclick only returns the function not the value passed to it that's why we use callback
            onClick={()=>setColor("blue")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor: "blue"}}>Blue</button>
            <button 
            //onclick only returns the function not the value passed to it that's why we use callback
            onClick={()=>setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-black shadow-lg'style={{backgroundColor: 'green'}}>Green</button>
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
