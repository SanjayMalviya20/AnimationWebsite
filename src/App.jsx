
import Navbar from './components/Navbar'
import LandinPage from './components/LandinPage'
import Marque from './components/marque'
import About from './components/About'
import Eye from './components/Eye'
import { motion } from "framer-motion"
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from "locomotive-scroll";


// https://scroll.locomotive.ca/docs/#/ for scroll
function App() {

  const scroll = new LocomotiveScroll()
  return (
    <>
    
     <div  id='hye' className="  text-white bg-zinc-950  min-h-screen w-full ">
<Navbar/>
<LandinPage/>
<Marque/>
<About/>
<Eye/>
 <Featured/>
<Cards/>
<Footer/>
     </div>

    </>
  )
}

export default App
