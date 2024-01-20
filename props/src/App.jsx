import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 

  return (
   <>
   <h1 className='bg-orange-950 p-5 rounded-xl text-blue-50 mb-6'>Tailwind Test</h1>
   <Card username = "Umar"  btnText = "Visit Now"/>
   <Card username = "Arshad" btnText = "Buy Now"/>
   </>
  )
}

export default App
