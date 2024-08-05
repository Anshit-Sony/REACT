import { useState } from 'react'

function App() {
  const [background, setbackground] = useState("green")
  return (
      <div className='w-screen h-screen ' style={{backgroundColor:background}}>
          <div className='flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2'> 
            <div className='flex flex-wrap bg-white rounded-xl px-3 py-2 gap-2'>
              <button className='bg-red-500 rounded-xl border-transparent shadow-md p-2' onClick={()=>setbackground("red")}>red</button>
              <button className='bg-green-500 rounded-xl border-transparent shadow-md p-2' onClick={()=>setbackground("green")}>green</button>
              <button className='bg-blue-500 rounded-xl border-transparent shadow-md p-2' onClick={()=>setbackground("blue")}>blue</button>
              <button className='bg-purple-500 rounded-xl border-transparent shadow-md p-2' onClick={()=>setbackground("purple")}>purple</button>
              <button className='bg-pink-500 rounded-xl border-transparent shadow-md p-2' onClick={()=>setbackground("pink")}>pink</button>
              <button className='bg-white rounded-xl border-transparent shadow-md p-2' onClick={()=>setbackground("white")}>white</button>
              <button className='bg-yellow-500 rounded-xl border-transparent shadow-md p-2' onClick={()=>setbackground("yellow")}>yellow</button>
            </div>
          </div>
      </div>
  )
}

export default App
