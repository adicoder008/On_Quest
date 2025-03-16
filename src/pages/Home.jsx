import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Mid from '../components/Mid'
import HowItWorks from '../components/HowItWorks'
import Signup from '../components/Signup'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <>    

        <Navbar/>
        <Hero/>
        <Mid/>
        <HowItWorks/>
        <FAQ/>
        <Signup/>
        <Footer/>
        
    </>
  )
}

export default Home

