import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import imageList1 from "../../assets/images/geriatro-robert.png";
import imageList2 from "../../assets/images/zippy-tennis-cambis.png";
import imageList3 from "../../assets/images/Yolo.png";
import imageList4 from "../../assets/images/cux travel.png";
import imageList5 from "../../assets/images/stay8.png";
import imageList6 from "../../assets/images/dock.png";
import "./ImageList.css";

function ImageList() {
  const cardData = [
    {
      alt: "img1",
      className: "imageListCardsStyling1",
      imgSrc: imageList1,
    },
    {
      alt: "img2",
      className: "imageListCardsStyling2",
      imgSrc: imageList2,
    },
    {
      alt: "img3",
      className: "imageListCardsStyling3",
      imgSrc: imageList3,
    },
    {
      alt: "img4",
      className: "imageListCardsStyling4",
      imgSrc: imageList4,
    },
    {
      alt: "img5",
      className: "imageListCardsStyling5",
      imgSrc: imageList5,
    },
    {
      alt: "img6",
      className: "imageListCardsStyling6",
      imgSrc: imageList6,
    },
  ];
  return (
    <section className="imageListContainer">
      <div className="container customImageListContainer">
        <div className="imageListParentWrapper">
          <div className="imageListWrapper">
            <p className="imageListText text-center">
              Counted on by numerous companies and marketers globally.
            </p>
          </div>
        </div>
        <div className="imageListCardsWrapper">
          <Row className="g-0 imageListCardsRow">
            {cardData.map((card, idx) => (
              <Col key={idx} xs={4} xxl={2} className="imageListCardsCol g-0">
                <Card className="imageListCard">
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    alt={card.alt}
                    className={`${card.className} imageListCardImg`}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}

export default ImageList;
