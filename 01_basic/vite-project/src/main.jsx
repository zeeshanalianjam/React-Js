import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <a href ="https://www.linkden.com" >visit to Linkedin</a>
  )
}


// let reactObj = {
//   type : 'a',
//   props : {
//       href : 'https://www.google.com',
//       target : '_blank'
//   },
//   children : 'Google'
// }

const myVar = "Zeeshan Ali"

const otherWay = React.createElement(
  'a' , {'href' : 'https://www.google.com' , 'target' : '_blank'},
  'Google',
  React.createElement('br'),
  myVar

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
    <App />
    {otherWay}
  </React.StrictMode>,
)
