// Importazione delle dipendenze necessarie
import { useState } from 'react'  // Hook per gestire lo state (non utilizzato)
import { BrowserRouter, Routes, Route } from "react-router-dom"  // Componenti per il routing
import Homepage from './pages/Homepage'  // Componente pagina Homepage
import About from './pages/About'        // Componente pagina About
import Actress from './pages/actress/Actress'    // Componente pagina Actress
import Detailactress from './pages/actress/Detailactress'

// Componente principale dell'applicazione
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/actress' element={<Actress />} />
        <Route path='/actress/:id' element={<Detailactress />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


