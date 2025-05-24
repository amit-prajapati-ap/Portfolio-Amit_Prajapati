import React from 'react'
import {About, Contact, Education, Footer, NavBar, Projects, Skills, BlurBlob} from './components/index'

const App = () => {
  return (
    <div className='bg-[#050414]'>

      <BlurBlob position={{top: "35%", left: "20%"}} size={{width: "30%", height: "40%"}}></BlurBlob>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(79,79,79,0.1)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(79,79,79,0.1)_1px,_transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_20%,_black_60%,_transparent_100%)]"></div>


      <div className='relative pt-20'>
        <NavBar/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
