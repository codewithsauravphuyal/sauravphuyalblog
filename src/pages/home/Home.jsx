import { useState } from "react"
import styles from './Home.module.css'
import Navbar from "../../components/navbar/Navbar"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import Index from "../../pages/index/Index"

function Home() {
  return(
   <>
   <Navbar />
   <Banner />
   <Index />
   <Footer />
   </>
    )
}

export default Home