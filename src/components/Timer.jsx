import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRuning] = useState(false);

  useEffect(() => {
  if(!isRunning) return;
  const interval = setInterval(() => {
setTime((prev) => prev + 1);
  }, 1000);
  return () => clearInterval(interval);
}, [isRunning]);

  return (
    <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4 pb-4">
      <h1>Timer (task 12)</h1>
      <div className="shadow w-80 h-10 text-center pt-2">{time}</div>
      <div className="flex gap-4">
        <button
          onClick={() => setIsRuning(true)}
          className="border rounded p-2"
        >
          Start
        </button>
        <button
          onClick={() => setIsRuning(false)}
          className="border rounded p-2"
        >
          Stop
        </button>
        <button onClick={() => setTime(0)} className="border rounded p-2">
          Reset
        </button>
      </div>
    </div>
  );
}
