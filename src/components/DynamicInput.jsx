import { useState } from "react";

export default function DynamicInput() {
  const [name, setName] = useState("");
  return (
    <div className="ml-30 mt-20 w-100 h-50 shadow rounded flex flex-col items-center gap-6 pt-4">
      <h1>Dynamic Input field (task3 DynamicInput.jsx)</h1>
      <input 
      type="text" 
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-60 h-10 border rounded pl-2"
      />
      <h2>Hello {name}!</h2>
    </div>
  );
}
