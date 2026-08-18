import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io("http://localhost:8000")

function App() {

const [inputValue, setInputValue] = useState('') 

const handleSubmit = () => {
  socket.emit("task", inputValue)
  setInputValue('')
}

useEffect(()=>{
  socket.on("taskClient",(value)=>{
    console.log(value)
  })
},[])


  return (
    <div>
      <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type='text' placeholder='Enter you Task' />
      <button onClick={handleSubmit} >Submit</button>
      <div>
        <ul>
          <li></li>
        </ul>
      
      </div>
    </div>
  )
}

export default App