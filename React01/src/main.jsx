import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'


//what react accepts the value is like
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  "Google.com"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // App(),
  reactElement
)
