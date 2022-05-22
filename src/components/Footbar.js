import React from "react";
import "./bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

export const Footbar = () => {
  const size1 = 3;
  const size2 = 6;
  const footerStyle = {
    color: "white",
  };
  return (
    <div className="Footbar">
      <footer className="bg-myColor text white pt-3 pb-5">
        {/* <p>
          Created by <span className="fw-bold">Eriqo Arief</span>
        </p> */}
        <Container>
          <Row className="justify-content-center ms-5 ps-5">
            <Col md={size1} sm={size2} xs={size2} className="pb-3">
              <h5 className="fw-bold">Home</h5>
              <ul className="list-unstyled">
                <li>Eriqo Arief W.</li>
                <li>Student</li>
              </ul>
            </Col>
            <Col md={size1} sm={size2} xs={size2} className="pb-3">
              <h5 className="fw-bold">About</h5>
              <ul className="list-unstyled">
                <li>About me</li>
              </ul>
            </Col>
            <Col md={size1} sm={size2} xs={size2} className="pb-3">
              <h5 className="fw-bold">Skills</h5>
              <ul className="list-unstyled">
                <li>Web dev</li>
                <li>C Programming</li>
                <li>Python</li>
              </ul>
            </Col>
            <Col md={size1} sm={size2} xs={size2} className="pb-3">
              <h5 className="fw-bold">Contacts</h5>
              <ul className="list-unstyled">
                <li style={footerStyle}>
                  <a href="https://www.instagram.com">Instagram</a>
                </li>
                <li style={footerStyle}>
                  <a href="https://www.linkedin.com">LinkedIn</a>
                </li>
                <li style={footerStyle}>
                  <a href="https://www.line.me">Line</a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="text-xs-center ms-5 ps-5 pt-3">
            <p>
              Created by <span className="fw-bold">Eriqo Arief </span>
              &copy;{new Date().getFullYear()}
            </p>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
