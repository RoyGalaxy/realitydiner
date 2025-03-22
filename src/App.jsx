import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories'
import CategoryProducts from './pages/CategoryProducts'
import NavBar from './components/NavBar'
import Product from './pages/Product'
import AR from './pages/AR'
import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Checkout from './pages/Checkout'

const App = () => {
  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<p>HOME PAGE</p>} />
        <Route path='/login' element={<Login />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:category' element={<CategoryProducts />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/product/ar/:id' element={<AR />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<>Hello</>} />
      </Routes>
    </div>
  )
}

export default App