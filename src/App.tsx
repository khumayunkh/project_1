import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.sass'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Layout from './routers/Layout'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
        
        </Route>
      </Routes>
    </div>
  )
}

export default App
