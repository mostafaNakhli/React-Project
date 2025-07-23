import React from "react";

export function Footer(){
    return(
        <footer className="footer mt-10 bg-[#021736]">
            <div className="container lg:flex lg:justify-between px-4 py-6 mx-auto">
                <div className="footer-content-box hidden lg:block lg:w-[80%]">
                    <div className="flex justify-around">
                        <div className="footer-info">
                            <h3 className="footer-info__title text-base text-white">Company</h3>
                            <div className="footer-info__text mt-2">
                                <p className="text-[14px] text-[#CBCBCB] font-light">about us</p>
                                <p className="text-[14px] text-[#CBCBCB] my-1 font-light">blog</p>
                                <p className="text-[14px] text-[#CBCBCB] mb-1 font-light">returns</p>
                                <p className="text-[14px] text-[#CBCBCB] font-light">order status</p>
                            </div>
                        </div>
                        <div className="footer-info">
                            <h3 className="footer-info__title text-base text-white">Info</h3>
                            <div className="footer-info__text mt-2">
                                <p className="text-[14px] text-[#CBCBCB] font-light">How it works?</p>
                                <p className="text-[14px] text-[#CBCBCB] my-1 font-light">our promises</p>
                                <p className="text-[14px] text-[#CBCBCB] mb-1 font-light">FAQ</p>
                            </div>
                        </div>
                        <div className="footer-info">
                            <h3 className="footer-info__title text-base text-white">Contact us</h3>
                            <div className="footer-info__text mt-2">
                                <p className="text-[14px] text-[#CBCBCB] font-light"><i className="fa fa-map-marker mr-1"></i>123 Main Street, Anytown,USA</p>
                                <p className="text-[14px] text-[#CBCBCB] my-1 font-light"><i className="fa fa-phone mr-1"></i>+1 (555) 123-4567</p>
                                <p className="text-[14px] text-[#CBCBCB] mb-1 font-light"><i className="fa  fa-envelope mr-1"></i>TechHeimSupport@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-icons-parent lg:flex lg:flex-row-reverse">
                    <div className="footer-icons flex justify-between lg:flex-col lg:items-end px-3 pt-2">
                        <div className="footer-icon__img w-10">
                            <img src="../image/chat.png" alt=""/>
                        </div>
                        <div className="footer-icon__img w-10">
                            <img src="../image/back to up bottun.png" alt=""/>
                        </div>
                    </div>
                    <div className="footer-input mt-5 px-4">
                        <p className="text-base text-white lg:text-[12px]">Sign up for News and updates</p>
                        <div className="form-group mt-3 flex items-center">
                            {/*<img src="../image/user.png"  className="w-5 absolute left-6 lg:hidden" alt=""/>*/}
                            <input type="text" className="footer__input rounded-2xl px-4 py-1 lg:px-1 relative"  placeholder="Email Address"/>
                            <i className="fa fa-chevron-right absolute text-white tooter-icon-right"></i>
                        </div>
                    </div>
                </div>
                <div className="last-part mt-5 px-3 lg:hidden">
                    <div className="flex flex-col">
                        <div className="last-part-content flex justify-between items-center">
                            <p className="text-white">Company</p>
                            <i className="fa fa-chevron-right text-white"></i>
                        </div>
                        <div className="last-part-content my-2 flex justify-between items-center">
                            <p className="text-white">Info</p>
                            <i className="fa fa-chevron-right text-white"></i>
                        </div>
                        <div className="last-part-content flex justify-between items-center">
                            <p className="text-white">Contact us</p>
                            <i className="fa fa-chevron-right text-white"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}