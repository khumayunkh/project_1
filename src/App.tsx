import React from 'react'
import './App.sass'
import { Route, Routes } from 'react-router-dom'
import Layout from './routers/Layout'
import Home from './pages/Home/Home'
import Electronics from './pages/Electronics/Electronics'
import Table from './components/Table/Table'
import Invite from './components/Invete/Invite'

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/:name' element={<Electronics/>}/>
        </Route>
      </Routes> */}
      <Table/>
      {/* <Invite/> */}
    </div>
  )
}

export default App
