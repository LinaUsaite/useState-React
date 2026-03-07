import { useState } from "react";

export default function TabNavigation() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4">
        <h1>Tab Navigation (task 9 TabNavigation.jsx)</h1>
  <div className="flex gap-4">
<button onClick={()=> setActiveTab("home")}
    className={activeTab === "home"
        ? "bg-blue-500 text-white px-4 py-2 rounded"
        : "bg-gray-200 px-4 py-2 rounded"
    }>Home</button>
<button onClick={()=> setActiveTab("about")}
    className={activeTab === "about"
        ? "bg-blue-500 text-white px-4 py-2 rounded"
        : "bg-gray-200 px-4 py-2 rounded"
    }>About</button>
<button onClick={()=> setActiveTab("contact")}
    className={activeTab === "contact"
        ? "bg-blue-500 text-white px-4 py-2 rounded"
        : "bg-gray-200 px-4 py-2 rounded"
    }>Contact</button>
  </div>
  <div className="mt-6">
    {activeTab === "home" && <p>This is the Home content.</p>}
    {activeTab === "about" && <p>This is About content</p>}
    {activeTab === "contact" && <p>This is Contact content</p>}
  </div>
  </div>
  );
}
