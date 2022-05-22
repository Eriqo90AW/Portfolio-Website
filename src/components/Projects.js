import React, { useState } from "react";
import "./bootstrap.min.css";
import { Button, Modal, Carousel } from "react-bootstrap";
import foto_1 from "./images/carousel_1.png";
// import foto_1B from "./images/carousel_1b.png";
import foto_2 from "./images/carousel_2.png";
import foto_3 from "./images/carousel_3.png";

export const Projects = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Projects">
      <section id="projects">
        <h2 className="text-center pb-5">Projects</h2>
        <Carousel variant="dark" className="pb-5">
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={foto_1} alt="First slide" />
            <Carousel.Caption>
              <h3>Travel Lokal</h3>
              <p>
                Merupakan program untuk melihat jadwal penerbangan dan memesan
                tiket pesawat.
              </p>
            </Carousel.Caption>
            <Button
              className="col-md-12 text-center"
              variant="primary"
              onClick={handleShow}
            >
              Show More
            </Button>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={foto_2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Snake Game</h3>
              <p>
                Merupakan minigame berupa permainan snake game yang dibuat
                menggunakan p5.js.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={foto_3} alt="Third slide" />
            <Carousel.Caption>
              <h3>QuizIt!</h3>
              <p>
                Merupakan program untuk mengerjakan berbagai macam kuis kemudian
                menghitung dan menampilkan nilainya.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Travel Lokal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Travel Lokal merupakan program untuk melihat jadwal penerbangan dan
            memesan tiket pesawat.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ecf4f9"
            fill-opacity="1"
            d="M0,256L205.7,160L411.4,224L617.1,96L822.9,128L1028.6,32L1234.3,160L1440,32L1440,320L1234.3,320L1028.6,320L822.9,320L617.1,320L411.4,320L205.7,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};
