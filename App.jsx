import React from 'react'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from '../src/Components/Header'


const App = () => {
  return (
    
    <BrowserRouter>
      <Header/>
        <Routes>
            <Route path='/create' element={<Create/>}/>
            <Route path='/read' element={<Read/>}/>
            <Route path='/update' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App

