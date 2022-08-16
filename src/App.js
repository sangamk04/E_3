import { useState } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { Pagination } from "./Components/Pagination";
import { useCounter } from "./hooks/useCounter";
import "./Components/Button.css"

function App() {
  const [page, setPage] = useState(1)
  /* 
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Button.jsx and Pagination.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */
  const { count, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });

  const handlePage = (value) => {
    setPage(prev => prev+value)
  }


  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {count}</h3>
      <button data-testid="inc" onClick={() => incCount()}>Increment</button>
      <button data-testid="inc3" onClick={() => incCount(3)}>Increment 3</button>
      <button data-testid="dec" onClick={() => decCount(2)}>Decrement 2</button>
      <button data-testid="dec4" onClick={() => decCount(4)}>Decrement 4</button>

      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Button colorScheme={"green"}  variant="ghost" size={"xl"} label={"TEST"}  />
      <br />
      <Pagination total={10} selected={page} onPageChange={handlePage} />
    </div>
  );
}

export default App;
