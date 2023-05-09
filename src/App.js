import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import AddBlog from './pages/AddBlog'
import BlogDetails from './pages/BlogDetails'
import EditBlog from './pages/EditBlog'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/:id' element={<Home />} />
        <Route path='/addBlog' element={<AddBlog />} />
        <Route path='/blogDetails/:id' element={<BlogDetails />} />
        <Route path='/editBlog/:id' element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  )
}
