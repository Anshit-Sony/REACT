import { useCallback, useState ,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [NumbersAllowed,setNumbersAllowed]=useState(false)
  const [CharAllowed,setCharAllowed]=useState(false)
  const [Password,setPassword]=useState("")

  const passwordRef=useRef(null)

  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const GeneratePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(NumbersAllowed) str+="0123456789"
    if(CharAllowed) str+="~`!@#$%^&*(){}[]\|?/"

    for(let i=1;i<=length;i++){
      let char=(Math.floor)(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,NumbersAllowed,CharAllowed,setPassword])

  useEffect(()=>{
    GeneratePassword()
  },[length,NumbersAllowed,CharAllowed,GeneratePassword])

  return (
    <>
      <div className='w-full h-screen bg-black
      flex justify-center items-center'>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500 '>
        <h3 className='text-white text-center my-3'>Password Generator</h3>
        <div className='flex shadow rounded-lg mb-4 overflow-hidden '>
          <input type="text" 
            value={Password}
            className='outline-none w-full px-3 py-1 '
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer '
          onClick={copyToClipboard}
          >Copy</button>
        </div>
        <div className="flex item-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={6}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numberInput"
            defaultValue={NumbersAllowed}
            onChange={()=>{setNumbersAllowed(prev=>!prev)}}
            />
          <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="charInput"
            defaultValue={CharAllowed}
            onChange={()=>{setCharAllowed(prev=>!prev)}}
            />
          <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
