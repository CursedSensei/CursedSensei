import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Hero from './components/sections/Hero'
import NavBar from './components/sections/Navbar'
import Profile from './components/sections/Profile'
import Projects from './components/sections/Projects'
import { ParticlesProvider } from './contexts/ParticlesContext'
import './css/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParticlesProvider>
      <NavBar />
      <Hero />
      <Profile />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </ParticlesProvider>
  </StrictMode>,
)
