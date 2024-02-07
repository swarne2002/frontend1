import { useNavigate } from "react-router-dom"
import { Buttons } from "../components/Buttons";
import { startTransition } from "react";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Expart } from "../components/Expart";
import { Newsletter } from "../components/Newsletter";
import { Plans } from "../components/Plans";
import Footer from "../components/Footer";
export default function LandingPage(){
    // const navigate = useNavigate();
    // return <div style={backgroundImageStyle}>
    //     <Buttons onClick={()=>{startTransition(()=>navigate("/signup"))}} lebel={"Sign Up"}/>
    //     <Buttons onClick={()=>{startTransition(()=>navigate("/signin"))}} lebel={"Sign In"}/>
    // </div>
    return <div>
        <Header/>
        <Banner/>
        <Expart/>
        <Newsletter/>
        <Plans/>
        <Footer/>
    </div>
}
