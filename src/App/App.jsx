import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Navbar from '../components/Navbar/Navbar.jsx'
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
