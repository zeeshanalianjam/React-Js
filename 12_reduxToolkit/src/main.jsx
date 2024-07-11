import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from '../src/app/store.js'
import AddTodo from './components/AddTodo.jsx'
import RemoveTodo from './components/RemoveTodo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
    <AddTodo/>
    <RemoveTodo/>
  </Provider>,
)
