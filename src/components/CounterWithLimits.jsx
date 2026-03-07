import { useState}  from "react";

export default function CounterWithLimit() {

    const [count, setCount] = useState(0)
    return(

        <div className="ml-30 mt-20 w-100 h-50 shadow rounded flex flex-col items-center gap-6 pt-4">
    <h1>Counter with Limits(task 11 CounterWithLimit.jsx)</h1>
    <div
    className="shadow w-60 h-10 text-center p-2">{count}</div>
    <div className="flex gap-4 ">
    <button
    onClick={() => setCount(count + 1)}
    disabled={count >= 10}
    className="border rounded p-2 shadow m-2"
    >Increment</button>
    <button
    onClick={() => setCount(count - 1)}
    disabled={count <= 0}
    className="border rounded p-2 shadow m-2"
    >Decrement</button>
    </div>
    
</div>
    )
}