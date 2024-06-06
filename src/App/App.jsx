import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Navbar from '../components/Navbar/Navbar.jsx'
import Home from '../pages/Home/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
