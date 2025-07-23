import React from "react";

export default function SloganSection(){
    return(
        <div className="header-slogan">
            <div className="flex justify-between">
                <div className="header-slogan-content flex flex-col justify-between  ">
                    <div className="header-slogan-content__text ">
                        <h2 className="text-2xl font-bold text-[#042352] header-slogan__title">Tech Heim</h2>
                        <p className="text-xs mt-2 lg:my-6 header-slogan__exp "><span className="text-[#042352]">"Join the</span> <span className="text-[#F45E0C]">digital revolution</span> <span className="text-[#042352]">"</span></p>
                    </div>
                    <div className="header-slogan-content__btn">
                        <button className="border bg-[#F45E0C] text-white rounded-md p-2 text-xs hover:opacity-60 lg:px-20">Explore More</button>
                    </div>

                </div>
                <div className="header-slogan-image w-35">
                    <img src="../image/slogan.png" alt=""/>
                </div>
            </div>
        </div>
    )
}