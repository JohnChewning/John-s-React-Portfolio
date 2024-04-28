import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/navbar';
import Intro from './components/Navbar/Intro/intro';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
    </div>
  )
}

export default App
