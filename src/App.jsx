import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'
import HomePage from './pages/HomePage'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Videos from './pages/Videos'
import Photos from './pages/Photos'

function App() {
 
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element ={< HomePage />} />
        <Route path="/photos" element ={< Photos />} />
        <Route path="/videos" element ={< Videos />} />
        <Route path="/aboutMe" element ={< AboutMe />} />
        <Route path="/contact" element ={< Contact />} />
      </Routes>
      < Footer />
    </>
  )
}

export default App
