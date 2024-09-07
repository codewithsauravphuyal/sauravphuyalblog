import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/product/Product.jsx'
import Create from './pages/create/Create.jsx'
import Edit from './pages/edit/Edit.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
