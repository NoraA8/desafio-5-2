import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import FavoritosContextProvider from './context/FavoritosContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoritosContextProvider>
        <App />
      </FavoritosContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
