import { useState } from "react"

export default function FormState() {

    const[name, setName]= useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return(
        <div className="ml-30 mt-20 w-100  shadow rounded flex flex-col items-center gap-6 pt-4">
            <h1>Form State Management (task5)</h1>
        <form action=""
        className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-60 py-2 border rounded pl-2"/>
            <label htmlFor="email">Email</label>
            <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-60 py-2 border rounded pl-2" />
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-60 py-2 border rounded pl-2" />
        </form>
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
        </div>
        

    )
}