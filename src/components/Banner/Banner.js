import React from "react";
import "./Banner.css";
import Image from "react-bootstrap/Image";
import bannerImage from "../../assets/images/BannerImage.png";
import Button from "react-bootstrap/Button";
// import listImage from "../../assets/images/listStyleType.png";

function Banner() {
  const items = [
    "Apps with natively built interfaces",
    "In-depth understanding of Flutter architecture and language",
    "100% customization",
    "Continued tech support after the launch",
  ];
  return (
    <section className="bannerContainer">
      <div className="bannerWrapper container">
        <div className="bannerContentLeft pt-5">
          <h1>
            <span>Flutter</span> Mobile App Development Company
          </h1>
          <p className="bannerParagraph">
            We are a renowned web and mobile app development company, dedicated
            to delivering exceptional app development services by using the
            power of Google's revolutionary framework, Flutter.
          </p>

          <ul>
            {items.map((item, index) => (
              <li key={index} className="listItem">
                {item}
              </li>
            ))}
          </ul>

          <Button variant="primary" className="mt-3 mb-2 consultationButton">
            Book a free consultation
          </Button>
        </div>
        <div className="bannerContentRight pt-5 px-1 pb-1">
          <Image
            src={bannerImage}
            alt="banner_image"
            fluid
            className="bannerImage"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;