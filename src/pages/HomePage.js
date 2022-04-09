import React from "react";
import Header from "../components/common/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductShowcase from "../components/ProductShowcase/ProductShowcase";
import FeelSpecial from "../components/FeelSpecial/FeelSpecial";
import BrandsLove from "../components/BrandsLove/BrandLove";
import CredExperience from "../components/CredExperience/CreadExperience";
import MobileScroll from "../components/MobileScroll/MobileScroll";
import WindowPeak from "../components/WindowPeak/WindowPeak";
import CredSecurity from "../components/CredSecurity/CredSecurity";
import CredStory from "../components/CredStory/CredStory";
import AppRating from "../components/AppRating/AppRating";
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
    </>
  );
};

export default HomePage;
