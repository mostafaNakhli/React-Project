import React from "react";

export default function NewProducts(){
    return(
        <div className="section mt-10 ">
            <div className="new-product">
                <div className="new-product-header border-b-1 pb-3 lg:pb-6">
                    <div className="flex justify-between items-baseline">
                        <p className="new-product-header__title text-lg text-[#0C0C0C]">New Products</p>
                        <button className="text-base text-[#0C0C0C]">View all <i className="fa fa-chevron-right ml-2"></i></button>
                    </div>
                </div>
                <div className="new-product-content mt-4">
                    <div className="new-products py-2">
                        <div className="flex justify-evenly flex-wrap lg:flex-nowrap">
                            <div className="new-products-card w-35 md:w-65 shadow-lg px-3 py-0.5">
                                <div className="new-products-card__img p-1 ">
                                    <img src="image/new-product-1.png" alt=""/>
                                </div>
                                <p className="new-products-text nowrap text-[#0C0C0C] text-[12px] ">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                                <div className="new-products-footer mt-1 flex justify-between items-baseline">
                                    <p className="products__price text-[12px]">$ 2,490.87</p>
                                    <div className="products-rate">
                                        <i className="fa fa-star text-[#063A88] text-[14px]"></i><span className="inline-block text-[#063A88] text-[14px]">4.8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="new-products-card ml-2 lg:ml-3  w-35 md:w-65 bg-white shadow-lg px-3 py-0.5 ">
                                <div className="new-products-card__img p-1 ">
                                    <img src="image/new-product-2.png" alt=""/>
                                </div>
                                <p className="new-products-text nowrap text-[#0C0C0C] text-[12px]">Iphone 14 promax 256 gig</p>
                                <div className="new-products-footer mt-1 flex justify-between items-baseline">
                                    <p className="products__price text-[12px]">$ 2,490.87</p>
                                    <div className="products-rate">
                                        <i className="fa fa-star text-[#063A88] text-[14px]"></i><span className="inline-block text-[#063A88] text-[14px]">4.5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="new-products-card mt-[1rem] w-35 md:w-65 bg-white shadow-lg px-3 py-0.5 lg:ml-3 ">
                                <div className="new-products-card__img p-1 mb-5 relative top-2 ">
                                    <img src="image/new-product-3.png" alt=""/>
                                </div>
                                <p className="new-products-text nowrap text-[#0C0C0C] text-[12px]">SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB</p>
                                <div className="new-products-footer mt-1 flex justify-between items-baseline">
                                    <p className="products__price text-[12px]">$1,018.00</p>
                                    <div className="products-rate">
                                        <i className="fa fa-star text-[#063A88] text-[14px]"></i><span className="inline-block text-[#063A88] text-[14px]">4.7</span>
                                    </div>
                                </div>
                            </div>
                            <div className="new-products-card mt-[1rem] ml-2 w-35 md:w-65 bg-white shadow-lg px-3 py-0.5 lg:ml-3">
                                <div className="new-products-card__img p-5">
                                    <img src="image/new-product-4.png" alt=""/>
                                </div>
                                <p className="new-products-text nowrap text-[#0C0C0C] text-[12px]">VR VisionTech X1</p>
                                <div className="new-products-footer mt-1 flex justify-between items-baseline">
                                    <p className="products__price text-[12px]">$1,399.00</p>
                                    <div className="products-rate">
                                        <i className="fa fa-star text-[#063A88] text-[14px]"></i><span className="inline-block text-[#063A88] text-[14px]">3.9</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}