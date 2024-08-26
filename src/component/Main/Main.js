import React from 'react';
import logo from "../../image/aersense.gif"

const Main = () => {
    return (
        <div className="flex justify-between items-center bg-black text-white h-screen p-4 sm:mt-[-5%]">
            <div className="flex-1">
                <img
                    src={logo}
                    alt="rabbit r1"
                    className=" mx-auto"
                />
            </div>

            <div className="flex-1 text-right mt-3">
                <div className="text-container text-justify">
                    <h1 className="text-6xl font-light mb-4 font-serif text-white max-w-[60%]">
                        MATAER 1
                    </h1>
                    <p className="text-2xl font-serif	 mb-4 text-gray-400 max-w-[55%] leading-relaxed">
                        your smart home companion, Powered by <span className="text-white">AERSENSE <span className="text-red-600 ">™</span></span>
                    </p>
                    <p className="text-sm font-semibold text-gray-400 mb-8 mt-8 max-w-[28%]">
                        ships in November 2024
                    </p>
                    <p className="text-3xl mb-2 flex justify-start items-center">
                        <svg className='inline text-[#ff4d06]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-indian-rupee"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg><p className='text-[#ff4d06]'>899</p> <span className="text-sm ml-2">INR</span>
                    </p>
                    <p className="text-sm text-gray-400 mb-8">
                        No Subscription
                    </p>
                    <button className="bg-orange-500 text-white py-2 px-6 rounded-full flex items-center justify-center">
                        add to bag
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Main;
