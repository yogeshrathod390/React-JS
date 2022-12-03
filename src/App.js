
import { useState } from 'react';
import './App.css';


function Button(props) {
 
  const handleClick = () => {
    {props.onCounterButtonClick(props.increment)}
  }

  return (
    
      <button onClick={handleClick}>+{props.increment}</button>
  
  )
}

function Display(props) {
  return (
    <div>
    {props.message}
    </div>
  )
}

// call the Button <Button/>
function App() {
  const [counter, setCounter] = useState(0);
    const incrementCounter = (incrementValue) => {setCounter(counter + incrementValue)}
  return (
    <div>
      <Button onCounterButtonClick={incrementCounter} increment={1}></Button>
      <Button onCounterButtonClick={incrementCounter} increment={5}></Button>
      <Button onCounterButtonClick={incrementCounter} increment={10}></Button>
      <Button onCounterButtonClick={incrementCounter} increment={100}></Button>
      <Display message={counter}></Display>
    </div>
  );
}

export default App;
