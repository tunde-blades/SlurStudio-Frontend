import React from 'react'
import Header from '../../components/head/Header'
import Footer from './footer section/Footer'
import Section1 from './section1/Section1'
import Section2 from './offers section/Section2'
import Section3 from './equipment section/Section3'
import Section4 from './testimonial section/Section4'
import Section5 from './contact-us section/Section5'
import Gallery from './gallery section/Gallery'

function Landingpage() {
  return (
    <div >
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Gallery/>
        <Section4/>
        <Section5/>
        <Footer/>
    </div>
  )
}

export default Landingpage