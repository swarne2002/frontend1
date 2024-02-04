import { startTransition, useState } from "react";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
export function Header(){
    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();
    return <div className="bg-[#2699fb] p-4">
         <div className="max-w-[1400px] flex  justify-between items-center py-[12px]"> 
         <div className="text-3xl font-bold">
            Transacto
         </div>
         {
            toggle?
            <AiOutlineMenu onClick={()=> setToggle(!toggle)} className="text-white  text-2xl md:hidden"/>
            :
            null
         }
         <ul className="hidden md:flex text-white gap-10">
            <li>
                Home
            </li>
            <li>
                <div className="cursor-pointer" onClick={()=>{startTransition(()=>navigate("/signin"))}}>
                    Sign In
                </div>
            </li>
            <li>
                <div className="cursor-pointer" onClick={()=>{startTransition(()=>{navigate("/signin")})}}>
                    Send Money
                </div>
            </li>
            <li>
                <div className="cursor-pointer" onClick={()=>{startTransition(()=>{navigate("/signin")})}}>
                    Balance
                </div>
            </li>
            <li className="cursor-pointer" onClick={()=>{
                startTransition(()=>{
                    navigate("/contact");
                })
            }}>
                Contact
            </li>
         </ul>
         {/* //smaller divice */}
         <ul className={`duration-500 md:hidden bg-black fixed text-white top-[109px] ${toggle?'left-[-100%]':'left-[0]'} left-0 w-1/2 h-screen`}>
            <li className="p-5 flex justify-between">
                <div>Home</div>
                <div>
                <AiOutlineClose onClick={()=> setToggle(!toggle)} className="text-white text-2xl md:hidden"/>
                </div>
            </li>
            <li className="p-5">
                <div className="cursor-pointer" onClick={()=>{startTransition(()=>navigate("/signin"))}}>
                    Sign In
                </div>
            </li>
            <li className="p-5">
                <div className="cursor-pointer" onClick={()=>{startTransition(()=>{navigate("/signin")})}}>
                    Send Money
                </div>
            </li>
            <li className="p-5">
                <div className="cursor-pointer" onClick={()=>{startTransition(()=>{navigate("/signin")})}}>
                    Balance
                </div>
            </li>
            <li onClick={()=>{
                startTransition(()=>{
                    navigate("/contact");
                })
            }} className="p-5 cursor-pointer">
                Contact
            </li>
         </ul>
    </div>
    </div>
}