import axios from "axios";
import React, { startTransition, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Choice() {
    const token = localStorage.getItem('key');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            // try {
            //     const response = await axios.get("https://paymentapp-zgce.onrender.com/user/verify", {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${token}`
            //         }
            //     });
            //     if (response.status === 200) {
            //         startTransition(()=>{
            //             navigate("/appbar");
            //         })
            //     }
            // } catch (error) {
            //     // Handle error
            //     startTransition(()=>{
            //         navigate("/landingpage");
            //     })
            //     console.error('Error:', error);
            // }
            if(token){
                startTransition(()=>{
                    navigate("/appbar");
                })
            }
            else{
                startTransition(()=>{
                    navigate("/landingpage")
                })
            }
        }
        fetchData();
    }, []);

    return <div>Loading...</div>; // Return a loading indicator while the request is in progress
}
