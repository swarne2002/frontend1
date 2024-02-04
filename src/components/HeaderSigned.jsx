import { startTransition, useEffect, useState } from "react";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function HeaderSigned({user}){
    const [toggle, setToggle] = useState(true);
    const [toggle1,setToggle1] = useState(true);
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
                <div className="cursor-pointer" onClick={()=>{
                    startTransition(()=>{
                        navigate("/")
                    })
                }}>
                    Home
                </div>
            </li>
            <li>
                <div className="pointer cursor-pointer" onClick={()=>{
                    localStorage.removeItem('key');
                    startTransition(()=>{
                        navigate("/");
                    })
                }}>
                    Log Out
                </div>
            </li>
            <li>
                <div className="cursor-pointer" onClick={()=>{
                    startTransition(()=>{
                        navigate("/users")
                    })
                }}>
                    Send Money
                </div>
            </li>
            <li>
                Balance
            </li>
            <li className="cursor-pointer" onClick={()=>setToggle1(!toggle1)}>
                Edit Profile
            </li>
            <li>
            <div className="bg-stone-400 h-7 w-7 rounded-full text-white font-semibold text-center text-lg">{
            user.firstName[0]}</div>
            </li>
         </ul>
         {/* //smaller divice */}
         <ul className={`duration-500 md:hidden bg-black fixed text-white top-[109px] ${toggle?'left-[-100%]':'left-[0]'} left-0 w-1/2 h-screen`}>
            <li className="p-5 flex justify-between">
                <div className="bg-stone-400 h-7 w-7 rounded-full text-white font-semibold text-center text-lg">{user.firstName[0]}</div>
                <div>
                <AiOutlineClose onClick={()=> setToggle(!toggle)} className="text-white text-2xl md:hidden"/>
                </div>
            </li>
            <li className="ml-5 my-4">
                <div className="cursor-pointer" onClick={()=>{
                    startTransition(()=>{
                        navigate("/")
                    })
                }}>
                    Home
                </div>
            </li>
            <li className="p-5">
                <div className="pointer cursor-pointer" onClick={()=>{
                    localStorage.removeItem('key');
                    startTransition(()=>{
                        navigate("/");
                    })
                }}>
                    Log Out
                </div>
            </li>
            <li className="p-5">
                <div className="cursor-pointer" onClick={()=>{
                    startTransition(()=>{
                        navigate("/users")
                    })
                }}>
                    Send Money
                </div>
            </li>
            <li className="p-5">
                Balance
            </li>
            <li className="cursor-pointer" onClick={()=>setToggle1(!toggle1)}>
                Edit Profile
            </li>
         </ul>
    </div>
    <Edit toggle1={toggle1} user={user}/>
    </div>
}

function Edit({ toggle1, user }) {
    // const [initialValues, setInitialValues] = useState({
    //     password: user.password,
    //     firstName: user.firstName,
    //     lastName: user.lastName
    // });
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (user) {
            setPassword(user.password);
            setFirstname(user.firstName);
            setLastname(user.lastName);
        }
    }, [user]);

    if (!user) {
        return <div>Loading...</div>; // Render a loading indicator while user data is being fetched
    }
    // useEffect(() => {
    //     setPassword(initialValues.password);
    //     setFirstname(initialValues.firstName);
    //     setLastname(initialValues.lastName);
    // }, []);

    return (
        <div className={`h-1/2 w-1/3 mt-2 duration-500 fixed ${toggle1 ? 'top-[-100%]' : 'top-[0]'} left-[500px] bg-yellow-200`}>
            <div className="p-1">
                <div className="p-2 text-left font-bold">Password </div>
                <input onChange={(e) => setPassword(e.target.value)} value={password} className="border rounded w-full border-stone-300 p-1" type="text" />
            </div>
            <div className="p-1">
                <div className="p-2 text-left font-bold">First Name </div>
                <input onChange={(e) => setFirstname(e.target.value)} value={firstname} className="border rounded w-full border-stone-300 p-1" type="text" />
            </div>
            <div className="p-1">
                <div className="p-2 text-left font-bold">Last Name </div>
                <input onChange={(e) => setLastname(e.target.value)} value={lastname} className="border rounded w-full border-stone-300 p-1" type="text" />
            </div>
            <div className="flex justify-end p-1">
                <button onClick={async () => {
                    try {
                        const response = await axios.put("https://paymentapp-zgce.onrender.com/user", {
                            password: password,
                            firstName: firstname,
                            lastName: lastname
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('key')}`
                            }
                        });
                        if (response.status === 200) {
                            setMessage("Updated Successfully");
                        }
                    } catch (error) {
                        setMessage("Error updating user");
                        console.error('Error:', error);
                    }
                }} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-1/3">Update User</button>
            </div>
            <div>
                {message}
            </div>
        </div>
    );
}