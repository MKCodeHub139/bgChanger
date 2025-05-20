import {useState } from 'react'

import './App.css'

function App() {
  const [color,setColor]=useState()
  const handleSetColor=(e)=>{
      setColor(e.target.value)}
  return (
    <div className='w-full h-[100vh] relative bg-gray-900 flex justify-center' style={{backgroundColor:color}}>
      <div className="btns flex flex-wrap bottom absolute bottom-0 bg-white  px-5 py-2 rounded-full gap-4 ">
        <button className='bg-green-400 px-5 py-2 rounded-full cursor-pointer'value='green'  onClick={handleSetColor}>Green</button>
        <button className='bg-blue-400 px-5 py-2 rounded-full cursor-pointer'value='blue'  onClick={handleSetColor}>Blue</button>
        <button className='bg-yellow-400 px-5 py-2 rounded-full cursor-pointer'value='yellow' onClick={handleSetColor}>Yellow</button>
        <button className='bg-purple-400 px-5 py-2 rounded-full cursor-pointer'value='purple'  onClick={handleSetColor}>Purple</button>
        <button className='bg-lime-400 px-5 py-2 rounded-full cursor-pointer'value='lime'  onClick={handleSetColor}>Lime</button>
        <button className='bg-teal-400 px-5 py-2 rounded-full cursor-pointer'value='teal'  onClick={handleSetColor}>Teal</button>
        <button className='bg-indigo-400 px-5 py-2 rounded-full cursor-pointer'value='indigo'  onClick={handleSetColor}>Indigo</button>
        <button className='bg-fuchsia-400 px-5 py-2 rounded-full cursor-pointer'value='fuchsia'  onClick={handleSetColor}>Fuchsia</button>
      </div>
    </div>
  )
}

export default App
