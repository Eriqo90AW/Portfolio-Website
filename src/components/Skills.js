import React, { useState } from "react";
import "./bootstrap.min.css";
import {
  Button,
  Modal,
  Card,
  Container,
  Col,
  Image,
  Row,
} from "react-bootstrap";
import foto_web from "./images/foto_1.jpg";
import foto_c from "./images/foto_2.jpg";
import foto_python from "./images/foto_3.png";

export const Skills = () => {
  const size = 4;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Skills">
      <section id="skills">
        <Container>
          <Row className="bagian-skills text-center pb-4">
            <Col>
              <h2>Skills</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={size} md={size} className="mb-5">
              <Card className="text-center">
                <Image
                  src={foto_web}
                  className="card-img-top"
                  alt="nonton bola"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Web Dev</Card.Title>
                  <Card.Text>
                    Front end development menggunakan HTML, CSS, dan Javascript
                    serta library seperti React JS dan Bootstrap.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={size} md={size} className="mb-5">
              <Card className="text-center">
                <Image
                  src={foto_c}
                  className="card-img-top"
                  alt="main game"
                  fluid
                />
                <Card.Body>
                  <Card.Title>C Programming</Card.Title>
                  <Card.Text>
                    C merupakan bahasa tingkat menegah yang membantu saya dalam
                    memahami dasar-dasar teori komputer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={size} md={size} className="mb-5">
              <Card className="text-center">
                <Image
                  src={foto_python}
                  className="card-img-top"
                  alt="main game"
                  fluid
                />
                <Card.Body>
                  <Card.Title>Python</Card.Title>
                  <Card.Text>
                    Memahami dasar-dasar python serta konsep class dan object di
                    python, serta menggunakan library python seperti tkinter dan
                    pygame.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="pb-5 mx-3">
            <Button variant="primary" onClick={handleShow}>
              Show More
            </Button>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Skills</Modal.Title>
          </Modal.Header>
          <Modal.Body>Masih banyak skills yang saya ingin pelajari!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ced7dc"
            fillOpacity="1"
            d="M0,96L288,64L576,128L864,32L1152,128L1440,288L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};
