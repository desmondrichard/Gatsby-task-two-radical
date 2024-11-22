import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import "./Global.css";
import BannerImages from "./BannerImages/BannerImages";



function Layout({ children }) {
  return (
    <main>
        <Header />
        <Banner />
        <BannerImages />
    </main>
  );
}

export default Layout;
