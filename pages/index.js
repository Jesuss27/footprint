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
import Footer from "../components/Footer"
import {motion} from "framer-motion"
import Marketing from '../components/Marketing'
import Practice from '../components/Practice'
export default function Home() {
  var componentArray = [
    
     <Philosophy key={"124"} />,
     <About  key={"134"}/>,
     <Contact key={"113"} />,
     <Pricing key={"163"} />,
     <Feedback key={"523"} />,
     <Features  key={"173"}/>,
     <Download key={"193"} />,
     <Footer key={"129"} />,     
  ]

  const variants = {
    visible: {
      opacity:1,
      y:0,
      transition:{
        when:"beforeChildren",
        duration:1,
      }
    },
    hidden:{
      opacity:0,
      y:50,
    }
  }


  return (
    <div>
      <Hero key={"123"} />
      <motion.div initial={"hidden"} animate={"visible"} variants={variants}>
      
     {componentArray.map((component) => (
      <motion.div whileInView={"visible"} initial={"hidden"} variants={variants} key={component.key}>{component}</motion.div>
     ))}
    </motion.div>
    {/* <Practice /> */}
    </div>
    
  )
}
