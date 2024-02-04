import React, { startTransition } from "react";
import { useState } from "react";
import { ButtomWarning } from "../components/ButtomWarning";
import { Buttons } from "../components/Buttons";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    return <div className="bg-gradient-to-t from-yellow-400 to-lime-200 h-screen relative">
        <div className="absolute mt-[20px] w-1/4 text-center p-2 px-[20px] ml-[590px] backdrop-brightness-125 shadow-2xl">
        <Heading lebel={"Sign In"}/>
        <SubHeading lebel={"Enter your information for create an account"}/>
        <InputBox onChange={e =>{
            setUserName(e.target.value);
        }} lebel={"Username"} placeholder={"swarnendu@gmail.com"}/>
        <InputBox onChange={e =>{
            setPassword(e.target.value);
        }} lebel={"Password"} placeholder={"Ihsohgd@848"}/>
        <Buttons onClick={async()=>{
            const response = await axios.post("https://paymentapp-zgce.onrender.com/user/signin",{
                username,
                password
            })
            {
                if(response.status==411){
                    console.log("Incorrect Inputs");
                }
                if(response.status==404){
                    console.log("User does not exists");
                }
                if(response.status==200){
                    console.log("login successfull");
                    localStorage.setItem('key',response.data.token);
                    startTransition(()=>navigate("/"));
                }
            }
        }} lebel={"Sign In"}/>
        <ButtomWarning lebel={"Do not have an account?"} buttontext={"Sign Up"} to={"/signup"}/>
    </div>
    </div>
}