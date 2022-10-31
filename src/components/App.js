import React from 'react'
import Navbar from './Navbar'
import "./components-styles/app.css"
import Main from './Main'
import Footer from './Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
