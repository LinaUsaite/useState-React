import { useState } from "react";

export default function DynamicBg(){
    const [color, setColor] = useState("white");
    return(
        <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4"
        style={{backgroundColor: color}}>
            <h1>Dynamic Background Color (task 10)</h1>
            <h2>Select colors</h2>
            <select
            onChange={(e) => setColor(e.target.value)}
            className="border p-2 mb-4 bg-white"
            >
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>

            </select>
        </div>
    );
}
