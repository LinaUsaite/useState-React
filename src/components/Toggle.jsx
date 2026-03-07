import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="ml-30 mt-20 w-100 h-50 shadow rounded flex flex-col items-center gap-6 pt-4">
      <h1>Toggle.jsx (task2)</h1>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button
        onClick={() => setIsOn(!isOn)}
        className={
          isOn
            ? "bg-green-500 text-white px-6 py-2 rounded"
            : "bg-red-500 text-white px-6 py-2 rounded"
        }
      >
        Toggle
      </button>
    </div>
  );
}
