import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import "./Global.css";


function Layout({ children }) {
  return (
    <main>
        <Header />
        <Banner />
    </main>
  );
}

export default Layout;
