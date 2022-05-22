import React from "react";
import "./bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";

export const About = () => {
  return (
    <div className="About">
      <section className="bagian-about">
        <Container>
          <Row className="text-center">
            <Col>
              <h2>About Me</h2>
            </Col>
          </Row>
          <Row className="text-center pt-2">
            <Col>
              <p>
                Saya adalah mahasiswa yang selalu ingin meningkatkan kemampuan
                saya di bidang teknologi. Saya memiliki ketertarikan ke bidang
                software development karena software development menyatukan
                kreatifitas dengan logika pemrograman. Saya mempunyai kemampuan
                problem solving yang baik, kreatifitas yang tinggi, dapat
                memanage waktu dengan baik, bertanggung jawab dan merupakan fast
                learner.
              </p>
            </Col>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L205.7,160L411.4,224L617.1,96L822.9,128L1028.6,32L1234.3,160L1440,32L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};
