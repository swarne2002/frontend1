
import React, { startTransition, useState } from "react";
import { InputBox } from "../components/InputBox";
import { Buttons } from "../components/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Users(){
    const [users, setUsers] = useState([]);
    return <div className="bg-gradient-to-t from-yellow-400 to-lime-200 h-screen">
        <InputBox onChange={async(e)=>{
            const response = await axios.get("https://paymentapp-zgce.onrender.com/user/bulk?filter="+ e.target.value);
            setUsers(response.data.users);
        }} lebel={"Users"} placeholder={"Search Users..."}/>
        <div className="m-2">
            {users.map((user)=>{
                return <User user={user}/>
            })}
        </div>
    </div>
}

function User({user}){
    
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="bg-stone-400 h-7 w-7 rounded-full text-white font-semibold text-center text-lg">{user.firstName[0]}</div>
            <div className="pl-2 text-lg">{user.firstName} {user.lastName} </div>
        </div>
        <div>
        <button onClick={()=>{
            startTransition(()=>{
                navigate("/sendmoney?id="+user._id+"&name="+ user.firstName);
            })
        }} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full">Send Money</button>
        </div>
    </div>
}