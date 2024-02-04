import { useRecoilValue } from "recoil";
import { Buttons } from "../components/Buttons";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { useNavigate, useSearchParams } from "react-router-dom";
import { startTransition, useState } from "react";
import axios, { Axios } from "axios";

export default function SendMoney(){
    const [searchparams] = useSearchParams();
    const id = searchparams.get("id");
    const name = searchparams.get("name");
    const [message,setMessage] = useState("");
    const [amount, setAmount] = useState();
    const token = localStorage.getItem("key");
    const navigate = useNavigate();
    return <div className="bg-gradient-to-t from-yellow-400 to-lime-200 h-screen relative">
          <div className="flex justify-center">
         <div className="mt-[20px] backdrop-brightness-125 shadow-2xl box-border h-1/2 w-1/3 p-4">
        <div className="text-center">
        <Heading lebel={"Send Money"}/>
        </div>
        <div className="flex mt-10">
        <div className="bg-stone-400 h-7 w-7 rounded-full text-white font-semibold text-center text-lg">{name[0]}</div>
        <div className="pl-2 text-lg">{name}</div>
        </div>
        <InputBox onChange={(e)=>{
            setAmount(e.target.value);
        }} lebel={"Amount (in Rs)"} placeholder={"Enter Amount"}/>
        <Buttons onClick={async()=>{
            const response = await axios.post("https://paymentapp-zgce.onrender.com/account/transfer",{
                amount,
                to:id
            },{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            if(response.status==404){
                startTransition(()=>{
                    navigate("/signin");
                })
            }
            if(response.status==400){
                setMessage("Insufficient Balance");
            }
            if(response.status==200){
                setMessage("Transfer Successfull")
            }
        }} lebel={"Initiate Transfer"}/>
        <div>
            {message}
        </div>
    </div>
    </div>
    </div>
    
}