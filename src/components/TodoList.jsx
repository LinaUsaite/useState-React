import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="ml-30 mt-20 w-100 shadow rounded flex flex-col items-center gap-6 pt-4">
      <h1>Todo List (task 7)</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
        className="w-60 border rounded p-2"
      />
      <button
        onClick={() => {
            if(task.trim() === "") return;
          setTasks([...tasks, task.trim()]);
          setTask("");
        }}
        className="border rounded px-6 py-2 bg-teal-400 text-white"
      >
        Add Task
      </button>
      <ul className="list-disc">
        {tasks.map((item, index) => (
          <li key={index}
          className="flex gap-4 item-center"
          >{item}
          
          <button
          onClick={()=> {
            setTasks(tasks.filter((_, i) => i !== index));
          }}
           className="border rounded px-2  bg-red-500 ml-2 text-white"
          >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
