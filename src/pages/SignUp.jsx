import { ButtomWarning } from "../components/ButtomWarning";
import React, { useState } from "react";
import { Buttons } from "../components/Buttons";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
// import background from "../assets/blurybackground.jpeg"
import axios from "axios";

export default function SignUp(){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return <div className="bg-gradient-to-t from-yellow-400 to-lime-200 h-screen relative">
           <div className="absolute mt-[20px] w-1/3 text-center px-[20px] ml-[540px] backdrop-brightness-125 shadow-2xl">
        <Heading lebel={"Sign Up"}/>
        <SubHeading lebel={"Enter your information for create an account"}/>
        <InputBox onChange={(e)=>{
            setUserName(e.target.value);
        }} lebel={"Username"} placeholder={"swarnendu@gmail.com"}/>
        <InputBox onChange={e => {
            setPassword(e.target.value);
        }} lebel={"Password"} placeholder={"Ihsohgd@848"}/>
        <InputBox onChange={e => {
            setFirstName(e.target.value);
        }} lebel={"First Name"} placeholder={"Swarnendu"}/>
        <InputBox onChange={e =>{
            setLastName(e.target.value);
        }} lebel={"Last Name"} placeholder={"Mondal"}/>
        <Buttons onClick={async()=>{
            // console.log(username);
            const response = await axios.post("https://paymentapp-zgce.onrender.com/user/signup",{
                username,
                password,
                firstName,
                lastName
            })
        }} lebel={"Sign Up"}/>
        <ButtomWarning lebel={"Already have an account?"} buttontext={"Sign In"} to={"/signin"}/>
    </div>
    </div>
    
}