import {Route, Routes } from "react-router-dom"
import React from 'react'
import Landingpage from "./components/landing page/Landingpage"
import About from "./components/menu pages/more/about/About"
import Contact from "./components/menu pages/more/contact us/Contact"
import BookSession from "./components/menu pages/more/book session/BookSession"
import Terms from "./components/menu pages/more/terms and condition/Terms"
import Beats from "./components/menu pages/produced/Beats"
import Musics from "./components/menu pages/produced/Musics"
import Others from "./components/menu pages/produced/Others"
import Sluracademy from "./components/menu pages/services/slur academy/Sluracademy"
import StudioProduction from "./components/menu pages/services/studio production/StudioProduction"




const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Landingpage/>}/>

        <Route path='/beats' element ={<Beats/>}/>
        
        <Route path='/musics' element ={<Musics/>}/>

        <Route path='/others' element ={<Others/>}/>


        <Route path='/aboutus' element ={<About/>}/>
        <Route path='/contactus' element ={<Contact/>}/>
        <Route path='/booksession' element ={<BookSession/>}/>
        <Route path='/terms and conditions' element ={<Terms/>}/>
        <Route path='/sluracademy' element ={<Sluracademy/>}/>
        <Route path='/studioproduction' element ={<StudioProduction/>}/>
      </Routes>
      
    </div>
  )
}

export default App