import React from "react";

export default function CategorySection(){
    return(
        <div className="section">
            <div className="category">
                <div className="category-wrapper flex lg:justify-around py-2">
                    <div className="category-product flex flex-col justify-center text-center shadow-md p-1 rounded-md ">
                        <div className="category-img p-1">
                            <img src="image/accesory.png" className=" object-cover" alt="Accessories"/>
                        </div>
                        <div className="category-des">
                            <p className="text-xs text-[#2D2D2D]">Accessories</p>
                        </div>
                    </div>
                    <div className="category-product flex flex-col justify-around text-center mx-4 shadow-md p-1 rounded-md lg:mx-0">
                        <div className="category-img p-1">
                            <img src="image/camera.png" alt="Camera" className="scale-150 object-cover"/>
                        </div>
                        <div className="category-des">
                            <p className="text-xs text-[#2D2D2D] ">Camera</p>
                        </div>
                    </div>
                    <div className="category-product text-center flex flex-col justify-evenly shadow-md p-1 rounded-md ">
                        <div className="category-img ">
                            <img src="image/laptop.png" alt="Laptop"/>
                        </div>
                        <div className="category-des">
                            <p className="text-xs text-[#2D2D2D]">Laptop</p>
                        </div>
                    </div>
                    <div className="category-product text-center ml-4 lg:ml-0 shadow-md p-1 rounded-md ">
                        <div className="category-img w-full p-2 ">
                            <img src="image/mobile.png" className="object-cover" alt="Smart phone"/>
                        </div>
                        <div className="category-des">
                            <p className="text-[12px] text-[#2D2D2D]">Smart phone</p>
                        </div>
                    </div>
                    <div className="category-product text-center flex flex-col justify-between ml-4 shadow-md p-1 py-3 rounded-md custom-hidden lg:ml-0">
                        <div className="category-img w-full p-2 ">
                            <img src="image/playstation-cate.png"  className="object-cover" alt="Gaming"/>
                        </div>
                        <div className="category-des">
                            <p className="text-xs text-[#2D2D2D]">Gaming</p>
                        </div>
                    </div>
                    <div className="category-product text-center flex flex-col justify-between ml-4 shadow-md p-1 py-3 rounded-md custom-hidden lg:ml-0 ">
                        <div className="category-img w-full p-2 ">
                            <img src="../image/smart-watch.png"  className="object-cover" alt="Gaming"/>
                        </div>
                        <div className="category-des">
                            <p className="text-xs text-[#2D2D2D]">Smart Watch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}