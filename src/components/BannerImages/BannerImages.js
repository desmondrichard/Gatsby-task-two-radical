import React from "react";
import CountriesImage from "../../assets/images/countries.png";
import CustomersImage from "../../assets/images/customers.png";
import ExperienceImage from "../../assets/images/experience.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./BannerImages.css";

function BannerImages() {
  const cardData = [
    {
      imgSrc: ExperienceImage,
      alt: "years_of_experience",
    },
    {
      imgSrc: CustomersImage,
      alt: "customers",
    },
    {
      imgSrc: CountriesImage,
      alt: "countries",
    },
  ];
  return (
    <section
      className="bannerImageWrapper"
    >
      <div className="container customContainer">
        <Row className="g-0 bannerImageWrapperRow">
          {cardData.map((card, idx) => (
            <Col
              key={idx}
              xs={4}
              className="bannerImageColumn"
              
            >
              <Card className="bannerImagecards">
                <Card.Img
                  src={card.imgSrc}
                  alt={card.alt}
                  className="bannerCardImage"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default BannerImages;
