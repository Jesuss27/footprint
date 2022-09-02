import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from "../components/Hero.js"
import Philosophy from "../components/Philosophy"
import About from "../components/About"
import Contact from "../components/Contact"
import Pricing from "../components/Pricing"
import Feedback from "../components/Feedback"
import Features from "../components/Features"
import Download from "../components/Download"

export default function Home() {
  return (
    <div >
      
     <Hero />
     <Philosophy />
     <About />
     <Contact />
     <Pricing />
     <Feedback />
     <Features />
    </div>
  )
}
