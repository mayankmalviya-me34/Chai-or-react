import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


let [counter, setCounter] = useState(0)
const addValue = () => {
  console.log("Value", counter);
  counter = counter + 1
  setCounter(counter)
}
const removeValue = () => {
  console.log("Value", counter);
if(counter>0){
  counter = counter - 1
  setCounter(counter)}
  else{(0)}

}

  return (
    <>
      <h1>Value Counter</h1>
      <h2>{counter}</h2>
      <br />
      <button
      onClick={addValue}>ADD VALUE</button>
      

      <br />
      <button
      onClick={removeValue}>
        REMOVE VALUE
      </button>
    </>
  )
}

export default App
