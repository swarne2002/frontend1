import React, { useState } from "react"
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { Buttons } from "./components/Buttons"
import { Heading } from "./components/Heading"
import { InputBox } from "./components/InputBox"
import { Link } from "react-router-dom"
import { RecoilRoot } from "recoil"
import { Contact } from "./pages/Contact"
const Choice = React.lazy(()=>import("./pages/Choice"))
const LandingPage = React.lazy(()=>import("./pages/LandingPage"))
const Appbar = React.lazy(()=>import("./pages/Appbar"))
const SendMoney = React.lazy(()=>import("./pages/SendMoney"))
const SignIn = React.lazy(()=>import("./pages/SignIn"))
const SignUp = React.lazy(()=>import("./pages/SignUp"))
const Users = React.lazy(()=>import("./pages/Users"))
// import { Appbar } from "./pages/Appbar"
// import { SendMoney } from "./pages/SendMoney"
// import { SignIn } from "./pages/SignIn"
// import { SignUp } from "./pages/SignUp"
// import { Users } from "./pages/Users"


function App() {

  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/sendmoney" element={<SendMoney/>}/>
          <Route path="/appbar" element={<Appbar/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/" element={<Choice/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
        </RecoilRoot>
    </div>
  )
}


export default App
