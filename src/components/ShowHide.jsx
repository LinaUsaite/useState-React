import { useState } from "react";

export default function ShowHide(){
    const [isVisible, setIsVisible] = useState(true)
return(
    <div className="ml-30 mt-20 w-100 h-50 shadow rounded flex flex-col items-center gap-6 pt-4">
        <h1>Show/Hide content(task 4 ShowHide.jsx)</h1>
    <button
    onClick={() => setIsVisible(!isVisible)}
    className="border rounded py-2 px-6"
    >Show/Hide</button>
   {isVisible 
   ? <p>This is the content</p>
   : <p>Content is hidden</p>}
    </div>
)
}