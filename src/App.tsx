import React from 'react'
import './App.sass'
import { Route, Routes } from 'react-router-dom'
import Layout from './routers/Layout'
import Home from './pages/Home/Home'
import SingleCategory from './pages/SingleCategory/SingleCategory'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:name' element={<SingleCategory/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
