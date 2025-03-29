import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Categories from './pages/Categories'
import CategoryProducts from './pages/CategoryProducts'

import Product from './pages/Product'
import AR from './pages/AR'
import ScrollToTop from './components/ScrollToTop'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Orders from './client/pages/Orders'
import Products from './client/pages/Products'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/category/:category' element={<CategoryProducts />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/product/ar/:id' element={<AR />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<>Hello</>} />
        <Route path='/admin/orders' element={<Orders />} />
        <Route path='/admin/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App