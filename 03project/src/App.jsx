import { useState } from 'react'
import './App.css'



function App() {
  let [count, setCount] = useState(5)

  const addValue=()=>{
    count=count+1;
    setCount(count);
  }

  const decreaseValue=()=>{
    if(count==0){
      setCount(count)
    }else{
      count=count-1;
      setCount(count);
    }
  }
  
  return (
    <>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={addValue}>Increase count</button>
      <button onClick={decreaseValue}>Decrease count</button>
    </>
  )
}

export default App
