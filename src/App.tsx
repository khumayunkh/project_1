import React from 'react'
import './App.sass'
import { Route, Routes } from 'react-router-dom'
import Layout from './routers/Layout'
import Home from './pages/Home/Home'
import SingleCategory from './pages/SingleCategory/SingleCategory'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:name' element={<SingleCategory/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
