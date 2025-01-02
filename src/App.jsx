import { useState } from 'react'
import reactLogo from './assets/react.svg'
import RikneshLogo from './assets/Riknesh.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://riknesh05.github.io/portfolio05" target="_blank">
          <img src={RikneshLogo} className="logo riknesh" alt="Portfolio of Riknesh logo" />
        </a>
      </div>
      <h1>Vite + React + Riknesh</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </>
  )
}

export default App

