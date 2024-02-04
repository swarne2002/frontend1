import { startTransition } from "react"
import { Link, useNavigate } from "react-router-dom"
export function ButtomWarning({lebel,buttontext,to}){
    const navigate = useNavigate();
    return <div>
        <div>{lebel}</div>
        <div className="underline cursor-pointer" onClick={()=>{startTransition(()=>navigate(to))}}>{buttontext}</div>
    </div>
}