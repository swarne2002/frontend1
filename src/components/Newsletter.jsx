// export function Newsletter(){
//     return <div className="bg-[#2699fb] flex justify-between h-[270px]">
//           <div className="text-white mt-[80px] ml-[100px]">
//             <div className="text-2xl font-bold p-1">
//                Want to know about latest offers?
//             </div>
//              <div className="text-xs">
//                 Sign Up to our newsletter to stay updated
//             </div>
//           </div>

import { useState } from "react";

          
//           <div className="mr-[100px] mt-[60px]">
//             <div>
//             <input className="m-2 p-2 rounded border border-black" type="text" name="" id="" placeholder="Email" />
//                   <button type="button" className="mt-8 w-1/7 focus:outline-none text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700">Notify Me</button>
//                   <br />
//                   <div className="p-2">
//                   <div className="text-white text-xs">
//                      We care about protection of your data. Read our
//                   </div>
//                   <div className="text-xs">
//                     <a href="#">Privacy Policy</a>
//                   </div>
//                   </div>
//             </div>
                  
//           </div>
//     </div>
// }
export function Newsletter(){
  const [message, setMessage] = useState("");
  return (
    <div className='bg-[#2699fb] w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
          Want to know about latest offers?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
               onChange={(e)=>{
                setMessage(e.target.value);
               }}
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
              value={message}
            />
            <button onClick={()=>{
              setMessage("");
            }} className='bg-[black] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-black'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};