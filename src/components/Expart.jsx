import React from "react";
import { startTransition } from "react";
import payment from "../assets/payment.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Expart() {
    const navigate = useNavigate()
    return (
        <div className="mx-4 md:mx-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center md:justify-start">
                    <img className="w-full md:w-[80%] max-w-[500px]" src={payment} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start md:pl-8">
                    <div className="text-green-400 font-bold text-xl text-center md:text-left">
                        Explore the world of Transacto
                    </div>
                    <div className="text-center md:text-left">
                    Your all-in-one payment solution. Seamlessly send, receive, and manage transactions with ease. Enjoy secure transactions, customizable plans, and expert support for your business needs. Join Transacto today!
                    </div>
                    <button onClick={async()=>{
                        const token = localStorage.getItem('key');
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
                    }} type="button" className="w-full md:w-1/4 focus:outline-none text-white font-medium rounded-lg text-sm mt-4 px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700">Get Started</button>
                </div>
            </div>
        </div>
    );
}
