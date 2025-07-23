import React from "react";
import "../App.css"
import HeaderSection from "./headerSection";
import SloganSection from "./SloganSection";
import CategorySection from "./CategorySection";
import SaleSection from "./SaleSection";
import NewProducts from "./NewProducts";
import AdSection from "./AdSection";
import TopBrands from "./TopBrands";
import {Footer} from "./Footer";
export function MainPage(){
    return(
        <main id="main">
            {/* Header Section */}
            <HeaderSection></HeaderSection>
            <div className="main-section mx-auto">
                {/* Slogan Section */}
                <SloganSection></SloganSection>
            {/*  Category Section */}
                <CategorySection></CategorySection>
            {/*  Sale Section  */}
                <SaleSection></SaleSection>
            {/*  NewProducts Section  */}
                <NewProducts></NewProducts>
            {/*  AD Section  */}
                <AdSection></AdSection>
            {/*  Top Brand Section  */}
                <TopBrands></TopBrands>
            </div>
        {/*   Footer Section */}
            <Footer></Footer>
        </main>
    )
}