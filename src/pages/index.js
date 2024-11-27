import * as React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Banner/Banner";
import BannerImages from "../components/BannerImages/BannerImages";
import ImageList from "../components/ImageList/ImageList";
import HorizontalCards from "../components/HorizontalCards/HorizontalCards";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <BannerImages />
      <ImageList />
      <HorizontalCards />
    </Layout>
  );
}
