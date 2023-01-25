import React from 'react'
import './App.sass'
import { Route, Routes } from 'react-router-dom'
import Layout from './routers/Layout'
import Home from './pages/Home/Home'
import SingleCategory from './pages/SingleCategory/SingleCategory'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import AllProducts from './pages/AllProducts/AllProducts'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:name' element={<SingleCategory/>}/>
          <Route path='allProducts' element={<AllProducts/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
