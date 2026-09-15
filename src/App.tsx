import './App.css'
import HelloWorld from './components/HelloWorld'
import UserList from './pages/UserList'
import Header from './components/Header'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState<number>(0);
  let isValid: boolean = false;

  
  function incrementButton() {
    setCount(count + 1)
  }
  function decrementButton() {
    setCount(count - 1)
  }


  return (
    <>
      <section id="center">
        <div>
          <button onClick={incrementButton}>+</button>
          <button onClick={decrementButton}>-</button>



          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {
            count > 3 ?
              <div>Important things</div>
              :
              <div>Sile things</div>
          }




        </div>
      </section >
    </>
  )
}

export default App