// import logo from '../assets/transactoLogo.png'
// import profile from '../assets/profile.jpg'
// export default function Appbar(){
//     return <div className="grid grid-cols-12 w-full h-20 shadow hover:shadow-lg">
//         <div className='col-span-7'>
//         <img className='object-cover h-20 w-50 ...' src={logo} alt="" />
//         </div>
//         <div className='relative col-start-10 col-span-2'>
//                <div className='absolute right-0 pt-6 font-bold text-violet-900'>
//                 <button>
//                 Hello Swarnendu
//                 </button>
//                </div>
//         </div>
//         <div className='col-start-12 col-span-1 p-4'>
//             <button>
//             <img className='h-10 w-10 rounded-full' src={profile} alt="" />
//             </button>
//         </div>
//     </div>
// }
import { useNavigate } from "react-router-dom"
import { Buttons } from "../components/Buttons";
import { startTransition, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Expart } from "../components/Expart";
import { Newsletter } from "../components/Newsletter";
import { Plans } from "../components/Plans";
import Footer from "../components/Footer";
import { HeaderSigned } from "../components/HeaderSigned";
import  axios  from "axios";
export default function Appbar(){
    // const navigate = useNavigate();
    // return <div style={backgroundImageStyle}>
    //     <Buttons onClick={()=>{startTransition(()=>navigate("/signup"))}} lebel={"Sign Up"}/>
    //     <Buttons onClick={()=>{startTransition(()=>navigate("/signin"))}} lebel={"Sign In"}/>
    // </div>
    const token = localStorage.getItem('key');
    const navigate = useNavigate();
    const [user, setUser] = useState({
        _id: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        __v: 0
      });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://paymentapp-zgce.onrender.com/user/verify", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    setUser(response.data.user);
                }
            } catch (error) {
                // Handle error
                startTransition(()=>{
                    navigate("/signin");
                })
                console.error('Error:', error);
            }
        }
        fetchData();
    }, []);

    return <div>
        <HeaderSigned user={user}/>
        {/* <Header/> */}
        <Banner/>
        <Expart/>
        <Newsletter/>
        <Plans/>
        <Footer/>
    </div>
}