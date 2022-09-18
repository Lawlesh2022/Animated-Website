import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App=()=> {
  return (
    <>     
      <BrowserRouter> 
      <Navbar/>            
        <Routes>          
          <Route exact path = '/' element= {<Home/>}/>
          <Route exact path = '/service' element= {<Service/>}/>
          <Route exact path = '/about' element= {<About/>}/>
          <Route exact path = '/contact' element= {<Contact/>}/>
        </Routes>  
        {/* <Footer/>        */}
      </BrowserRouter>         
    </>
  );
}

export default App;
