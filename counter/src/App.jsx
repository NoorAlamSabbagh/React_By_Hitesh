import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    if(counter<20){
      setcounter(counter + 1);

    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
