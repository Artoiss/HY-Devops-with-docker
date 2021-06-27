import './App.css';
import { useState, useRef } from 'react'
import Button from './components/Button.js';

// Reference to timer logic https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b
function App() {
  const[timer, setTimer] = useState(0)
  const[active, setActive] = useState(0)
  const handle = (props) => {
    setActive(timeFormats())
    clearInterval(countRef.current)
    setTimer(0)
    countRef.current = setInterval(() => {
    setTimer((timer) => timer + 1)
    }, 1000)
  }
  const countRef = useRef(null)

  const timeFormats = () => {

    const seconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    return `${minutes} : ${seconds}`
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Start timer by pressing the button below.
        </p>
        <Button onClick={() => handle(timer)} title={"Start/Stop"}></Button>
        <p>
        Time elapsed:
        </p>
        {timeFormats()}
        <p>
        Last time:
        </p>
        {active}
      </header>
    </div>
  );
}

export default App;
