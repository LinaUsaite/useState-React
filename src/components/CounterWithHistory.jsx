import { useState } from "react";

export default function CounterWithHistory(){
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([])
     
    return(
        <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4" >
            Counter with History (task 15 CounterWithHistory.jsx)
<div className="flex gap-4">
    <button
  onClick={() => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  }}
  className="border rounded p-2 shadow"
>
  Increment
</button>
    <button
  onClick={() => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, newCount]);
  }}
  className="border rounded p-2 shadow"
>
  Decrement
</button>
<button
  onClick={() => {
    setCount(0);
    setHistory([]);
  }}
  className="border rounded p-2 shadow bg-blue-200"
>
  Reset
</button>
</div>
<div className="mb-10">

  <h2>History:</h2>

  <ul>
    {history.map((value, index) => (
      <li key={index}>{value}</li>
    ))}
  </ul>

</div>

        </div>
    )
    
    
}