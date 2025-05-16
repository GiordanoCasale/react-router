// Importazione delle dipendenze necessarie
import { useState } from 'react'  // Hook per gestire lo state (non utilizzato)
import { BrowserRouter, Routes, Route } from "react-router-dom"  // Componenti per il routing

// Importazione dei componenti delle pagine
import Homepage from './pages/Homepage'  // Componente pagina Homepage
import About from './pages/About'        // Componente pagina About
import Actress from './pages/actress/Actress'    // Componente pagina lista attrici
import Detailactress from './pages/actress/Detailactress'  // Componente pagina dettaglio attrice

// Componente principale dell'applicazione che gestisce il routing
function App() {
  return (
    // BrowserRouter: Componente wrapper per abilitare il routing
    <BrowserRouter>
      {/* Routes: Container per definire le route dell'applicazione */}
      <Routes>
        {/* Route per la Homepage - path base '/' */}
        <Route path='/' element={<Homepage />} />

        {/* Route per la pagina About - path '/about' */}
        <Route path='/about' element={<About />} />

        {/* Route per la lista attrici - path '/actress' */}
        <Route path='/actress' element={<Actress />} />

        {/* Route per il dettaglio attrice con parametro dinamico :id */}
        <Route path='/actress/:id' element={<Detailactress />} />
      </Routes>
    </BrowserRouter>
  )
}

// Esportazione del componente App per l'utilizzo in altri file
export default App

