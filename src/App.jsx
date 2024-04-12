import { useState } from 'react'
import './App.scss'
import profilePic from '../public/profilePic.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img className="profile-pic" src={profilePic}></img>
      <h1>Sébastien RUET</h1>
      <p>
        🚧 Site en construction 🚧
      </p>
    </>
  )
}

export default App
