import React from "react";

export default function AdSection(){
    return(
        <div className="ad-wrapper flex flex-col lg:flex-row lg:justify-between lg:mt-8">
            {/*  Iphone-15 Section  */}
            <div className="section  mt-8 lg:mt-0">
                <div className="apple-phone-wrapper">
                    <div className="apple-phone rounded-lg flex justify-around lg:justify-between">
                        <div className="apple-phone-slogan h-full flex flex-col justify-between">
                            <p className="apple-phone__title text-white p-2 text-[18px] md:text-[20px]"><span className="text-black">Iphone</span> 15 Series</p>
                            <div className="apple-phone-img w-40 md:w-45 lg:w-50 relative top-2 md:top-1">
                                <img src="../image/iphone-img.png" alt=""/>
                            </div>
                        </div>
                        <div className="apple-phone-content flex flex-col justify-evenly pt-2">
                            <div className="apple-phone-timer">
                                <div className="flex justify-evenly">
                                    <div className="apple-phone-timer-icon border rounded flex flex-col justify-center w-6 h-6 md:w-7 md:h-7 items-center">
                                        <p className="text-[#0C0C0C] text-[7px] md:text-[9px] font-bold ">8</p>
                                        <p className="text-[#0C0C0C] text-[7px] md:text-[8px] font-bold ">Days</p>
                                    </div>
                                    <div className="apple-phone-timer-icon border rounded flex flex-col justify-center w-6 h-6 md:w-7 md:h-7 items-center">
                                        <p className="text-[#0C0C0C] text-[7px] md:text-[9px]  font-bold ">8</p>
                                        <p className="text-[#0C0C0C] text-[7px] md:text-[8px] font-bold ">hour</p>
                                    </div>
                                    <div className="apple-phone-timer-icon border rounded flex flex-col justify-center items-center w-6 h-6 md:w-7 md:h-7">
                                        <p className="text-[#0C0C0C] text-[7px] font-bold md:text-[9px] ">8</p>
                                        <p className="text-[#0C0C0C] text-[7px] font-bold md:text-[8px]">minu</p>
                                    </div>
                                    <div className="apple-phone-timer-icon border rounded flex flex-col justify-center items-center w-6 h-6 md:w-7 md:h-7">
                                        <p className="text-[#0C0C0C] text-[7px] font-bold md:text-[9px]   ">8</p>
                                        <p className="text-[#0C0C0C] text-[7px] font-bold md:text-[8px]">sec</p>
                                    </div>
                                </div>
                            </div>
                            <div className="apple-phone-des p-2">
                                <h3 className="text-[#0C0C0C] text-[9px] md:text-[15px] md:font-bold">It feels good to be the first</h3>
                                <p className="text-[#2D2D2D] text-[8px] apple-phone__text mt-1 apple-des__text md:text-[10px]">Get ready for the future of smartphones.Experience innovation like never before. Stay tuned for the big iPhone 15 sale.</p>
                                <div className="apple-phone-btn mt-2">
                                    <button className="text-[14px] text-white p-2 bg-[#0C68F4] rounded-lg hover:opacity-75">Shop Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Playstation  */}
            <div className="section mt-5 lg:mt-0">
                <div className="playstation-wrapper">
                    <div className="playstation bg-[#005690] rounded-lg text-center">
                        <div className="playstation-circle"></div>
                        <p className="playstation__title mt-2 text-base text-[#FCC870]">Play Station 5</p>
                        <div className="playstation-content flex justify-evenly items-center ">
                            <p className="playstation__text text-[#005690] text-[14px]">Digital Edition + 2TB</p>
                            <div className="playstation-img w-30">
                                <img src="../image/ps5.png" alt=""/>
                            </div>
                        </div>
                        <div className="playstation-btn z-20 ">
                            <button className="p-2 bg-[#0C68F4] rounded-lg text-white">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}