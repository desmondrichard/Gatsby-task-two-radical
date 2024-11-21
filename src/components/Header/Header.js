import React, { useState } from "react";
import "./Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import headerLogo from "../../assets/images/Logo.png";
import toggleIcon from "../../assets/images/collapseIcon.png";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  //modal:
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <header className="headerContainer">
        <div className="container customHeaderContainer">
          <Navbar className="headerWrapper">
            <Navbar.Brand className="headerContentLeft">
              <Image src={headerLogo} alt="Logo" className="headerLogo" />
            </Navbar.Brand>

            <Nav className="ms-auto headerContentRight">
              <Nav.Link href="#solutions" className="headerLink">
                <span style={{ color: "white" }}>Solutions</span>
              </Nav.Link>
              <Nav.Link href="#blog" className="headerLink">
                <span style={{ color: "white" }}>Blog</span>
              </Nav.Link>
              <div className="buttonGroup">
                <Button variant="outline-primary" className="bookCallButton">
                  Book a call
                </Button>
                <Button variant="primary" className="contactUsButton">
                  Contact Us
                </Button>
              </div>
            </Nav>
            {/* icon: */}
            <div className="iconContainer">
              <Button
                variant="link"
                className="toggleButton"
                onClick={handleShow}
              >
                <Image src={toggleIcon} className="toggleIcon" />
              </Button>
            </div>
          </Navbar>
        </div>
      </header>
      {/* Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="offcanvas custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src={headerLogo} alt="Logo" className="offcanvasLogo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#action/3.1">Solutions</Nav.Link>
            <Nav.Link href="#action/3.2">Blog</Nav.Link>
            <Nav.Link href="#action/3.3">Book a call</Nav.Link>
            <Nav.Link href="#action/3.3">Contact Us</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
