import React from 'react'
import Home from './pages/Home'
import {ToastContainer} from "react-toastify"
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
        <Home/>
        <ToastContainer/>
        <Footer/>
    </div>
  )
}

export default App
