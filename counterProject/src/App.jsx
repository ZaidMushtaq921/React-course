import { useState } from "react";
import "./App.css";

function App() {
  // Declare a state variable 'counter' and its setter function 'setCounter' using the 'useState' hook
  let [counter, setCounter] = useState(0);

  // Define a function 'addValue' that increments the 'counter' state variable by 1
  const addValue = () => {
    // Increment the 'counter' state variable by 1
    setCounter(counter + 1);
  };

  // Define a function 'subValue' that decrements the 'counter' state variable by 1
  const subValue = () => {
    // Decrement the 'counter' state variable by 1
    setCounter(counter - 1);
  };

  // Render the JSX elements
  return (
    <>
      {/* Display the current value of 'counter' */}
      <h2>Counter : {counter}</h2>

      {/* Render a button that invokes 'addValue' when clicked */}
      <button onClick={addValue}>Add</button>
      <br />

      {/* Render a horizontal rule */}
      <hr />

      {/* Render a button that invokes 'subValue' when clicked */}
      <button onClick={subValue}>Sub</button>
    </>
  );
}

export default App;
