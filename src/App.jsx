import { useState } from 'react'
import './App.css'
import Slider from './Components/Slider/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='max-w-[1440px] mx-auto'>
        <h2 className='p-2 font-extrabold text-6xl'>Hello world</h2>
        <Slider></Slider>
        </div>
  
  )
}

export default App
