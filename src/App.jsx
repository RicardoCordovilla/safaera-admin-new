import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Configs from './pages/admin/Configs'
import Home from './pages/home/Home'
import Pdf from './pages/home/Pdf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/config' element={<Configs />} />
          <Route path='/pdf' element={<Pdf />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
