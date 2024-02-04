import { startTransition } from "react";
import { useNavigate } from "react-router-dom";

export function Plans() {
    const navigate = useNavigate();
    return (
        <div className="m-4 lg:m-[120px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <div className="h-auto lg:h-[480px] shadow-2xl hover:scale-110 duration-500 flex flex-col gap-2 text-center">
                    <div className="font-bold text-2xl m-4 md:m-[30px]">
                        Basic Plan
                    </div>
                    <div className="font-bold text-xl mb-4 md:mb-[30px]">
                        $149/year
                    </div>
                    <ul className="mx-4 md:mx-[30px]">
                        <li>
                            Standard transaction fees
                        </li>
                        <li>
                            Basic customer support
                        </li>
                        <li>
                            Access to essential features like sending and receiving payments, account management, and transaction
                        </li>
                    </ul>
                    <div>
                        <button onClick={()=>{
                            startTransition(()=>{
                                navigate("/");
                            })
                        }} type="button" className="mt-4 md:mt-8 w-full md:w-1/2 lg:w-auto focus:outline-none text-black font-medium rounded-lg text-sm px-5 py-2.5 md:px-8 md:py-3 me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700">Start Trial</button>
                    </div>
                </div>
                {/* Repeat the above block for other plans */}
                {/* Example: */}
                <div className="h-auto lg:h-[480px] shadow-2xl hover:scale-110 duration-500 flex flex-col gap-2 text-center">
                    <div className="font-bold text-2xl m-4 md:m-[30px]">
                        Pro Plan
                    </div>
                    <div className="font-bold text-xl mb-4 md:mb-[30px]">
                        $249/year
                    </div>
                    <ul className="mx-4 md:mx-[30px]">
                        <li>
                        Lower transaction fee Priority customer support Advanced analytics and reporting tools Customizable payment options. Access to API for integration with third-party platforms
                        </li>
                    </ul>
                    <div>
                        <button onClick={()=>{
                            startTransition(()=>{
                                navigate("/");
                            })
                        }} type="button" className="mt-4 md:mt-8 w-full md:w-1/2 lg:w-auto focus:outline-none text-black font-medium rounded-lg text-sm px-5 py-2.5 md:px-8 md:py-3 me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700">Start Trial</button>
                    </div>
                </div>
                <div className="h-auto lg:h-[480px] shadow-2xl hover:scale-110 duration-500 flex flex-col gap-2 text-center">
                    <div className="font-bold text-2xl m-4 md:m-[30px]">
                        Premium Plan
                    </div>
                    <div className="font-bold text-xl mb-4 md:mb-[30px]">
                        $349/year
                    </div>
                    <ul className="mx-4 md:mx-[30px]">
                        <li>
                        Customized transaction fees based on 24/7 premium support Advanced security features White-labeling and branding options Custom integrations and features development
                        </li>
                    </ul>
                    <div>
                        <button onClick={()=>{
                            startTransition(()=>{
                                navigate("/");
                            })
                        }} type="button" className="mt-4 md:mt-8 w-full md:w-1/2 lg:w-auto focus:outline-none text-black font-medium rounded-lg text-sm px-5 py-2.5 md:px-8 md:py-3 me-2 mb-2 dark:bg-green-400 dark:hover:bg-green-700">Start Trial</button>
                    </div>
                </div>
                {/* Repeat the above block for other plans */}
            </div>
        </div>
    );
}
