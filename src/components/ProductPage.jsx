import HeaderSection from "./headerSection";
import {Footer} from "./Footer";

export default function ProductPage(){
    return(
        <main id="main">
            <HeaderSection></HeaderSection>
            <div className="main-section mx-auto">
                {/* Device Section */}
                <div className="devices-wrapper mt-5">
                    <div className="devices flex">
                        <div className="devices-content flex flex-col justify-center items-center gap-2 p-1">
                            <div className="devices-content__img flex justify-center w-15">
                                <img src="image/mobile4.png" alt=""/>
                            </div>
                            <p className="devices-content__text font-light text-base">Mobile</p>
                        </div>
                        <div className="devices-content  flex flex-col justify-center items-center gap-2 p-1">
                            <div className="devices-content__img flex justify-center w-15">
                                <img src="image/monitor.png" alt=""/>
                            </div>
                            <p className="devices-content__text font-light text-base">Laptop</p>
                        </div>
                        <div className="devices-content  flex flex-col justify-center items-center gap-2 p-1">
                            <div className="devices-content__img flex justify-center w-15">
                                <img src="image/Tablet.png" alt=""/>
                            </div>
                            <p className="devices-content__text font-light text-base">Tablet</p>
                        </div>
                        <div className="devices-content flex flex-col justify-center items-center gap-2 p-1">
                            <div className="devices-content__img flex justify-center w-10">
                                <img src="image/audios.png" alt=""/>
                            </div>
                            <p className="devices-content__text font-light text-base">Audio</p>
                        </div>
                    </div>
                </div>
                {/* Filter Section */}
                <div className="filter-wrapper mt-4">
                    <div className="filter flex">
                        <div className="filter-content flex rounded-lg border-1 justify-center items-center ">
                            <p className="filter-content__text text-[12px]">Silver</p>
                            <i className="fa fa-close ml-2"></i>
                        </div>
                        <div className="filter-content flex mx-2 rounded-lg border-1 justify-center items-center px-1 py-2 ">
                            <p className="filter-content__text text-[12px]">12 GB</p>
                            <i className="fa fa-close ml-2"></i>
                        </div>
                        <div className="filter-content flex rounded-lg border-1 justify-center items-center px-1 py-2 ">
                            <p className="filter-content__text text-[12px]">Apple</p>
                            <i className="fa fa-close ml-2"></i>
                        </div>
                        <div className="filter-content flex ml-2 rounded-lg border-1 justify-center items-center px-1 py-2 ">
                            <p className="filter-content__text text-[12px]">Intel core i9</p>
                            <i className="fa fa-close ml-2"></i>
                        </div>
                    </div>
                </div>
            {/*   Products-card Section */}
                <div className="apple-products-wrapper mt-4">
                    <div className="apple-products p-1 flex justify-around flex-wrap">
                        <div className="apple-products-card shadow-md p-1">
                            <div className="apple-products-card__img p-1">
                                <img src="image/apple-img-1.png" alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 2,689.00</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                        <div className="apple-products-card shadow-md p-1 ">
                            <div className="apple-products-card__img p-1">
                                <img src="image/apple-img-2.png" alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 3,152.62</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                        <div className="apple-products-card flex flex-col justify-center shadow-md p-1">
                            <div className="apple-products-card__img  mb-2 p-1">
                                <img src="image/apple-img-3.png"  alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 2,689.00</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                        <div className="apple-products-card shadow-md p-1 ">
                            <div className="apple-products-card__img p-1">
                                <img src="image/apple-img-4.png" alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 2,689.00</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                        <div className="apple-products-card shadow-md flex flex-col justify-center p-1">
                            <div className="apple-products-card__img p-1">
                                <img src="image/apple-img-5.png" alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 2,689.00</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                        <div className="apple-products-card shadow-md p-1">
                            <div className="apple-products-card__img p-1">
                                <img src="image/apple-img-6.png" alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 2,689.00</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                        <div className="apple-products-card shadow-md flex flex-col justify-center p-1">
                            <div className="apple-products-card__img p-1">
                                <img src="image/apple-img-7.png" alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 2,689.00</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                        <div className="apple-products-card shadow-md p-1">
                            <div className="apple-products-card__img p-1">
                                <img src="image/apple-img-8.png" alt=""/>
                            </div>
                            <p className="apple-products-card__title nowrap text-[12px]">MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
                            <div className="apple-products-card__footer flex justify-between mt-2 items-center">
                                <p className="text-[12px]">$ 2,689.00</p>
                                <p className="text-[14px] text-[#063A88]"><i className="fa fa-star text-[12px]"></i>4.9</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}