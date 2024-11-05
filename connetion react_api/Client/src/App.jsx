// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from "./Signup"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Login'
import Home from './Home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/Register' element={<Signup></Signup>}></Route>
      <Route path='/Login' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
