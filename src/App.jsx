// Importazione delle dipendenze necessarie
import { useState } from 'react'  // Hook per gestire lo state (non utilizzato)
import { BrowserRouter, Routes, Route } from "react-router-dom"  // Componenti per il routing
import Homepage from './pages/Homepage'  // Componente pagina Homepage
import About from './pages/About'        // Componente pagina About
import Actress from './pages/Actress'    // Componente pagina Actress

// Componente principale dell'applicazione
function App() {
  return (
    <>
      {/* BrowserRouter - Wrapper principale per il routing */}
      <BrowserRouter>
        {/* Routes - Container per le definizioni delle route */}
        <Routes>
          {/* Route per la Homepage - path: / */}
          <Route path='/' Component={Homepage}></Route>

          {/* Route per la pagina About - path: /about */}
          <Route path='/about' Component={About}></Route>

          {/* Route per la pagina Actress - path: /actress */}
          <Route path='/actress' Component={Actress}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


