import { useState , useEffect} from "react";
import ProductPage from "./ProductPage.jsx";
import {MainPage} from "./MainPage";
import {useNavigate} from "react-router-dom";

export default function HeaderSection(){
    const [showClass , setShowClass] = useState(false);
    const [showNav , setShowNav] = useState(true);
    const [showSubNav , setShowSubNav] = useState(false)
    let navigate = useNavigate();
    function handleClick(){
        setShowClass(!showClass);
    }
    function handleMouseEnter(){
        setShowSubNav(true)
    }
    function handleMouseleave(){
        setShowSubNav(false)
    }
    return(
        <header id="header">
            <div className={`navbar-slide w-24 h-24 absolute h-[600px] w-[80%] bg-white z-20 ${showNav ? `hidden` : `block`}`}>
                <div className="navbar-slide-header p-4 flex items-center justify-between">
                    <div className="nav-bar-logo w-11">
                        <img src="image/logo.png" alt=""/>
                    </div>
                    <div className="close-icon">
                        <i className="fa fa-close" onClick={()=>{setShowNav(!showNav)}}></i>
                    </div>
                </div>
                <div className="navbar-nav px-4 mt-4">
                    <ul className="navbar-nav-ul">
                        <li className={`p-1 flex justify-between relative ${showClass ? `text-[#0C68F4]` : `text-[#444444]` }`} onClick={handleClick}><a href="" className="hover:opacity-70">Products</a> <i className={`fa fa-chevron-down text-xs hover:opacity-70 `}></i></li>
                        <li className={`dropdown-item px-4 ${ showClass ? `show-dropdown` : `hidden`}`}>
                            <ul className="dropdown-navbar flex flex-col justify-center">
                                <li className="p-1 "><img src="image/mobile4.png" className="w-4" alt=""/><a href="" >Mobile Phones</a></li>
                                <li className="p-1"><img src="image/monitor.png" className="w-4"  alt=""/><a href=""  >Laptops & Computers </a></li>
                                <li className="p-1"><img src="image/Tablet.png" className="w-4"  alt=""/><a href="" >Tablets & E-reader</a></li>
                                <li className="p-1"><img src="image/watch.png" className="w-4" alt=""/><a href="" >Wearables</a></li>
                                <li className="p-1"><img src="image/headphone.png" className="w-4" alt=""/><a href="" >Audio</a></li>
                                <li className="p-1 "><img src="image/camera3.png" className="w-4" alt=""/><a href="" >Cameras</a></li>
                                <li className="p-1"><img src="image/game.png" className="w-4" alt=""/><a href="" >Gaming</a></li>
                                <li className="p-1"><img src="image/data.png" className="w-4" alt=""/><a href="" >Networking</a></li>
                                <li className="p-1"><img src="image/devices.png" className="w-4" alt=""/><a href="" >Accessories</a></li>
                            </ul>
                        </li>
                        <li className="p-1 my-2 "><a href="" className="text-[#444444] hover:opacity-70">Blog</a></li>
                        <li className="p-1 mb-2"><a href="" className="text-[#444444] hover:opacity-70">FAQ</a></li>
                        <li className="p-1"><a href="" className="text-[#444444] hover:opacity-70">Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div className=" flex justify-between p-2 lg:p-4 lg:px-20 lg:items-center lg:border-b-1 lg:border-[#0C68F4B2] header-content-parent">
                <div className="col-4 icon-parent hover:opacity-60 transition duration-400 lg:hidden" style={{width:"20px" , height:"20px"}} onClick={()=>{setShowNav(!showNav)}}>
                    <img src="image/menu.png" alt="" className=""/>
                </div>
                <div className="col-4 logo">
                    <p className="text-blue-600 lg:hidden">Tech Heim</p>
                    <div className="logo-pic w-12 hidden lg:block">
                        <img src="../../image/logo.png"  alt=""/>
                    </div>
                </div>
                <div className="navbar-section hidden lg:block w-[50%]">
                    <ul className="flex items-center justify-between navbar-ul">
                        <li className="p-3  "><a href="" className="text-[18px] text-[#0C0C0C]" onClick={()=>{navigate("/")}}>Home</a></li>
                        <li className="p-3 hover:text-[#0C68F4] transition duration-400 mega-menu-parent"><a href="" className="text-[18px] text-[#0C0C0C]" onClick={()=>{navigate("/product")}}>Products</a><i className="fa fa-chevron-down text-xs ml-2 mega-menu-icon" ></i>
                            <div className={`mega-menu-inner-parent ${showSubNav && `move-left`}`}>
                                <div className="mega-menu-wrapper p-1">
                                    <ul className="mega-menu px-1">
                                        <li className="p-1"><img src="image/mobile4.png" className="w-5" alt=""/><a href="" >Mobile Phones</a>
                                            <div className="mega-submenu p-1">
                                                <ul className="mega-submenu-ul">
                                                    <li className="p-1"><img src="image/Subproducts.png" className="w-5 mr-2" alt=""/>Smart Phone</li>
                                                    <li className=" p-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave} ><img src="image/devices2.png" className="w-6 mr-2 product-submenu" alt=""/>Accessories
                                                        <div className={`mega-submenu-product-wrapper  px-2 ${showSubNav ? `visible` : `invisible`}`} >
                                                            <div className={`mega-submenu-product flex  p-1 `}>
                                                                <div className="mega-submenu-product-card w-40 p-2 shadow-md rounded flex flex-col justify-center items-center gap-2">
                                                                    <div className="mega-submenu-product-card__img w-30">
                                                                        <img src="image/submenu-pic-1.png" alt=""/>
                                                                    </div>
                                                                    <p className="text-base">Watch & Earpods</p>
                                                                </div>
                                                                <div className="mega-submenu-product-card shadow-md mx-2 w-40 rounded flex flex-col justify-center items-center gap-2">
                                                                    <div className="mega-submenu-product-card__img w-30">
                                                                        <img src="image/submenu-pic-2.png" alt=""/>
                                                                    </div>
                                                                    <p className="text-base">Holder</p>
                                                                </div>
                                                                <div className="mega-submenu-product-card w-40 shadow-md rounded flex flex-col justify-center items-center gap-2">
                                                                    <div className="mega-submenu-product-card__img w-30">
                                                                        <img src="image/submenu-pic-3.png" alt=""/>
                                                                    </div>
                                                                    <p className="text-base">Power cables</p>
                                                                </div>
                                                                <div className="mega-submenu-product-card w-40 shadow-md rounded ml-2 flex flex-col justify-center items-center gap-2">
                                                                    <div className="mega-submenu-product-card__img w-30">
                                                                        <img src="image/submenu-pic-4.png" alt=""/>
                                                                    </div>
                                                                    <p className="text-base">Cases & Protection</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="p-1">
                                                        <button className="text-base p-1 mega-submenu__btn text-[#0C68F4]">View all</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="p-1 my-1"><img src="image/monitor.png" className="w-5" alt=""/><a href="">Laptops & Computers </a></li>
                                        <li className="p-1 "><img src="image/Tablet.png" className="w-5" alt=""/><a href="">Tablets & E-reader</a></li>
                                        <li className="p-1 my-1"><img src="image/watch.png" className="w-5" alt=""/><a href="">Wearables</a></li>
                                        <li className="p-1"><img src="image/headphone.png" className="w-5" alt=""/><a href="">Audio</a></li>
                                        <li className="p-1 my-1"><img src="image/camera3.png" className="w-5" alt=""/><a href="">Cameras</a></li>
                                        <li className="p-1 my-1 "><img src="image/game.png" className="w-5" alt=""/><a href="">Gaming</a></li>
                                        <li className="p-1 mb-1"><img src="image/data.png" className="w-5" alt=""/><a href="">Networking</a></li>
                                        <li className="p-1"><img src="image/devices.png" className="w-5" alt=""/><a href="">Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="p-3 "><a href="" className="text-[18px] text-[#0C0C0C]">Blog</a></li>
                        <li className="p-3 "><a href="" className="text-[18px] text-[#0C0C0C]">FAQ</a></li>
                        <li className="p-3 "><a href="" className="text-[18px] text-[#0C0C0C]">Contact Us</a></li>
                    </ul>      
                </div>
                <div className="col-4 icons flex align-center">
                    <div style={{width:"20px" , height:"20px"}} className="mr-1 hover:opacity-60 icon-parent transition duration-400" >
                        <img src="image/bag.png" alt=""/>
                    </div>
                    <div style={{width:"20px" , height:"20px"}} className="icon-parent hover:opacity-60 transition duration-400">
                        <img src="image/user.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="header-search my-3">
                <div className="flex justify-center items-center mx-auto ">
                    <input type="text" className="min-w-70 rounded bg-[#EDEDED] p-2 search-input lg:hidden " placeholder="What can we help you to find ?"/>
                    <i className="fa fa-search search-icon relative text-[#8c8c8c]"></i>
                </div>
            </div>
        </header>
    )
}