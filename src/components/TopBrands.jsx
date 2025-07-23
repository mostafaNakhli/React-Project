import React from "react";

export default function TopBrands(){
    return(
        <div className="section mt-10">
            <div className="top-brand">
                <div className="top-brand-header border-b-1 pb-4 lg:pb-6">
                    <div className="flex justify-between">
                        <p className="top-header-title lg:text-[20px]">Top Brands</p>
                        <button className="top-header-btn lg:text-[20px]">View all <i className="fa fa-chevron-right"></i></button>
                    </div>
                </div>
                <div className="top-brands mt-7">
                    <div className="flex justify-around items-center">
                        <div className="top-brands-img w-7 lg:w-10">
                            <img src="../image/apple.png" alt=""/>
                        </div>
                        <div className="top-brands-img w-15 lg:w-25 flex items-center">
                            <img src="../image/sony.png" alt=""/>
                        </div>
                        <div className="top-brands-img w-15 lg:w-25 flex items-center">
                            <img src="../image/sumsung.png" alt=""/>
                        </div>
                        <div className="top-brands-img w-15 lg:w-25 flex items-center ">
                            <img src="../image/g3.png" alt=""/>
                        </div>
                        <div className="top-brands-img hidden lg:block lg:w-15 flex items-center ">
                            <img src="../image/huawei.png" alt=""/>
                        </div>
                        <div className="top-brands-img hidden lg:block lg:w-25 flex items-center ">
                            <img src="../image/lenovo.png" alt=""/>
                        </div>
                    </div>
                    <div className="top-brand-banner hidden lg:block lg:mt-10">
                        <div className="w-full bg-[#223949] top-brand-banner-wrapper rounded">
                            <div className="top-banner__circle bg-[#FF6951]"></div>
                            <div className="top-brand-banner-content-wrapper h-full w-full flex justify-center items-center absolute">
                                <div className="top-banner-content flex justify-evenly items-center w-full">
                                    <div className="top-banner-content-box text-center">
                                        <h2 className="top-banner__title text-white text-[40px]">SMART WATCH</h2>
                                        <p className="top-banner__text text-white my-1 text-[16px] font-light">Various designs and brands</p>
                                        <button className="bg-[#FF6951] px-4 py-1 rounded-md mt-2">view</button>
                                    </div>
                                    <div className="top-banner-pic">
                                        <div className="top-banner__img w-70">
                                            <img src="../image/top-banner.png"  alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:w-full lg:justify-around px-7 lg:px-0 mt-10">
                        <div className="top-brands-group flex items-center ">
                            <img src="../image/tech.png" className="w-6 md:w-8 lg:w-6" alt=""/><p className="text-[14px] md:text-[18px] lg:text-[16px] text-[#0C0C0C] ml-2">Latest and Greatest Tech</p>
                        </div>
                        <div className="top-brands-group flex my-3 md:my-5 lg:my-0 items-center">
                            <img src="../image/guard.png" className="w-6 md:w-8 lg:w-6" alt=""/><p className="text-[14px] text-[#0C0C0C] md:text-[18px] ml-2">Guarantee</p>
                        </div>
                        <div className="top-brands-group flex mb-3 md:mb-5 lg:mb-0 items-center">
                            <img src="../image/freeshop.png" className="w-9 md:w-11 lg:w-9" alt=""/><p className="text-[14px] text-[#0C0C0C] md:text-[18px] ml-2">Free Shipping over 1000$</p>
                        </div>
                        <div className="top-brands-group flex items-center">
                            <img src="../image/time.png" className="w-6 md:w-8 lg:w-6" alt=""/><p className="text-[14px] md:text-[18px] text-[#0C0C0C] ml-2">24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}