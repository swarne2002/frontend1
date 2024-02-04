import { useState } from "react";
import { Buttons } from "../components/Buttons";
import { InputBox } from "../components/InputBox";

export function Contact(){
    const [message1,setMessage1] = useState("");
    const [message2,setMessage2] = useState("");
    return <div>
        <div className="p-1">
        <div className="p-2 text-left font-bold">Email</div>
        <input value={message1} onChange={(e)=>{
            setMessage1(e.target.value);
        }} className="border rounded w-full border-stone-300 p-1" type="text" placeholder={"Enter Email"}/>
    </div>
    <div className="p-1">
        <div className="p-2 text-left font-bold">Query</div>
        <input value={message2} onChange={(e)=>{
            setMessage2(e.target.value);
        }} className="border rounded w-full border-stone-300 p-1" type="text" placeholder={"What is your query?"}/>
    </div>
        <Buttons onClick={()=>{
            setMessage1("");
            setMessage2("");
        }} lebel={"Submit"}/>
    </div>
}