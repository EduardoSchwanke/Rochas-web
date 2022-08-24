import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './index.css'
import { UserContextProvider } from "./contexts/UserContext";
import { NavContextProvider } from "./contexts/NavContext";

ReactDOM.createRoot(document.getElementById('root')).render(

      <App />

)
