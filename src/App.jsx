import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import About from './pages/About'
import Actress from './pages/Actress'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/actress' Component={Actress}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


