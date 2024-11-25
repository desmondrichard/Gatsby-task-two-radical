import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import "./Global.css";
// import BannerImages from "./BannerImages/BannerImages";
// import ImageList from "./ImageList/ImageList";

function Layout({ children }) {
  return (
    <main>
      <Header />
      <Banner />
      {/* <BannerImages /> */}
      {/* <ImageList /> */}
    </main>
  );
}

export default Layout;
