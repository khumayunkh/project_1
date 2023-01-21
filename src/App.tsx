import React from 'react'
import './App.sass'
import { Route, Routes } from 'react-router-dom'
import Layout from './routers/Layout'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
