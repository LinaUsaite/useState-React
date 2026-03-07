import { useState } from "react";

export default function MultipleCounters() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
  return (
    <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4">
        <h1>Multiple Counters (task6 MultipleCounters.jsx)</h1>
      <div>
        <div className="shadow w-60 h-10 text-center p-2">{count1}</div>
        <div className="flex gap-4 ">
          <button 
          onClick={() => setCount1(count1 + 1)}
          className="border rounded p-2 shadow m-2">Increment</button>
          <button 
          onClick={() => setCount1(count1 -1)}
          className="border rounded p-2 shadow m-2">Decrement</button>
        </div>
      </div>
      <div>
        <div className="shadow w-60 h-10 text-center p-2">{count2}</div>
        <div className="flex gap-4 ">
          <button 
          onClick={() => setCount2(count2 + 1)}
          className="border rounded p-2 shadow m-2">Increment</button>
          <button 
          onClick={() => setCount2(count2 - 1)}
          className="border rounded p-2 shadow m-2">Decrement</button>
        </div>
        <button
        onClick={() => {setCount1(0); setCount2(0)}}
        className="border rounded p-2 shadow m-2 bg-teal-500 ml-18 mt-5">
            Reset All
        </button>
        
      </div>
    </div>
  );
}
