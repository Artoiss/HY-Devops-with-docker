import './App.css';
import { useState } from 'react'
import Button from './components/Button.js';

function App() {
  const[selected, setSelected] = useState(0)
  const handle = (props) => {
    setSelected(props + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Start timer by pressing the button below.
        </p>
        <Button onClick={() => handle(selected)} title={"GO"}></Button>
        {selected}
      </header>
    </div>
  );
}

export default App;
