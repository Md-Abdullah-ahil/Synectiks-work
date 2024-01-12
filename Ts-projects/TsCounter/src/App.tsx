import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h5>{count}</h5>
      <button onClick={()=>setCount(count + 1)}>Increament</button>
      <button onClick={()=>setCount(0)}>Reset</button>
      <button onClick={()=>setCount(count - 1)}>Decreament</button>
    </>
  )
}

export default App
