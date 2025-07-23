import React from "react";

export default function SaleSection(){
    return(
        <div className="section mt-5 ">
            <div className="product-sale  bg-[#063A88] p-4 lg:py-8 rounded-lg ">
                <div className="flex h-full justify-between ">
                    <div className="product-sale-content text-center flex flex-col justify-between h-full">
                        <div className="sale-paragraph">
                            <p className="text-base text-white">Products On Sale</p>
                            <p className="text-sm text-white opacity-75">Shop Now!</p>
                        </div>
                        <div className="sale-btn">
                            <button className="text-white text-sm hover:opacity-60 transition duration-400 ">View <i className="fa fa-chevron-right ml-2"></i></button>
                        </div>
                    </div>
                    <div className="product-sale-card lg:h-full ">
                        <div className="flex product-sale-card-wrapper items-center h-full">
                            <div className="sale-card flex justify-between flex-col w-25 lg:w-30 p-2 rounded-md lg:rounded-[2px] bg-white lg:h-full">
                                <div className="sale-card-img  lg:h-full lg:flex lg:items-center">
                                    <img src="../image/sale-img-1.png" className="lg:object-cover lg:w-60"  alt=""/>
                                </div>
                                <div className="sale-content-parent">
                                    <div className="sale-card-header mt-2" >
                                        <h4 className="nowrap text-[12px]">Logitech G502 Gaming Mouse</h4>
                                    </div>
                                    <div className="sale-card-footer flex mt-2">
                                        <p className="text-[#717171] last-price text-sm">$38.00</p>
                                        <p className="text-sm ml-1">$19.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sale-card custom-hidden lg:w-30 w-25   ml-2 lg:ml-4  bg-white p-2 rounded-sm ">
                                <div className="sale-card-img p-3 lg:h-[65%] lg:flex lg:items-center">
                                    <img src="../image/product-sale-2.jpg" alt=""/>
                                </div>
                                <div className="sale-content-parent">
                                    <div className="sale-card-header mt-2" >
                                        <h4 className="nowrap text-[12px]">NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design</h4>
                                    </div>
                                    <div className="sale-card-footer flex mt-2">
                                        <p className="text-[#717171] last-price text-sm">$49.00</p>
                                        <p className="text-sm ml-1">$34.30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sale-card lg:w-30 lg:rounded-[3px] lg:ml-4 custom-hidden p-2 w-25 ml-2 rounded-md bg-white ">
                                <div className="sale-card-img  p-1 w-12 lg:w-16 relative left-5 lg:left-6 ">
                                    <img src="../image/sale-3.jpg" alt=""/>
                                </div>
                                <div className="sale-content-parent lg:mt-7">
                                    <div className="sale-card-header mt-2" >
                                        <h4 className="nowrap text-[12px]">Apple Watch Series 7 (GPS, 41MM)</h4>
                                    </div>
                                    <div className="sale-card-footer flex mt-2">
                                        <p className="text-[#717171] last-price text-sm">$49.00</p>
                                        <p className="text-sm ml-1">$34.30</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sale-card lg:w-28 lg:rounded-[3px] lg:ml-4 hidden md:block p-2 w-25 ml-2 rounded-md bg-white lg:flex lg:flex-col lg:items-between">
                                <div className="sale-card-img p-1 lg:h-[65%] lg:flex lg:items-center ">
                                    <img src="../image/sale-4.png" alt=""/>
                                </div>
                                <div className="sale-card-header mt-2" >
                                    <h4 className="nowrap text-[12px]">Apple 2022 MacBook Air M2 Chip (8GB RAM, 256GB SSD)</h4>
                                </div>
                                <div className="sale-card-footer flex mt-2 mb-1">
                                    <p className="text-[#717171] last-price text-sm md:text-xs">$950.22</p>
                                    <p className="text-sm md:text-xs ml-1">$712.66</p>
                                </div>
                            </div>
                            <div className="sale-card hidden lg:block p-2 w-25 ml-2 rounded-md bg-white lg:w-27 lg:rounded-[3px] lg:ml-4 lg:flex lg:flex-col ">
                                <div className="sale-card-img p-1 w-16 relative left-4 lg:h-[65%] lg:flex lg:items-center  ">
                                    <img src="../image/orange-watch.png" alt=""/>
                                </div>
                                <div className="sale-card-header mt-2" >
                                    <h4 className="nowrap text-[12px]">samsung Titan smart watch</h4>
                                </div>
                                <div className="sale-card-footer flex mt-2 mb-1">
                                    <p className="text-[#717171] last-price text-sm md:text-xs">$120.00</p>
                                    <p className="text-sm md:text-xs ml-1">$99.60</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}