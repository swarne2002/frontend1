import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { startTransition } from "react";
import axios from "axios";

export function Banner(){
    const navigate = useNavigate();
    return <div className="bg-[#2699fb] flex flex-col items-center p-6 font-bold h-3/4">
        <div className="text-2xl p-4">
           Transact Smarter
        </div>
        <div className="text-white text-5xl pb-6">
            Grow with us.
        </div>
        <div className="text-white text-3xl">
            <ReactTyped strings={[
        "Send Money",
        "Mobile Recharge",
        "Pay Bills",
      ]}
      typeSpeed={100}
      backSpeed={100}
      loop={true}
      />
        </div>
        <button onClick={async()=>{
            const token = localStorage.getItem('key');
            // console.log(token)
            try{
                const response = await axios.get("https://paymentapp-zgce.onrender.com/user/verify", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status===200) {
                startTransition(()=>{
                    navigate("/");
                })
            }
            } catch(error){
                startTransition(()=>{
                    navigate("/signin");
                })
            }
            
        }} type="button" className="mt-8 w-1/7 focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700">Get Started</button>
    </div>
}