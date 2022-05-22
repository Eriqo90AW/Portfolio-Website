import React from "react";
import "./bootstrap.min.css";
import { Button, Container, Form, Row } from "react-bootstrap";

export const Contacts = () => {
  return (
    <div className="Contacts">
      <section className="bagian-contacts" id="contacts">
        <Container>
          <Row className="text-center">
            <h2>Contact Me</h2>
          </Row>
          <Row className="px-5 pt-5 text-center">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="email" placeholder="Full Name" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c8d9e5"
            fillOpacity="1"
            d="M0,64L288,96L576,224L864,224L1152,256L1440,192L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};
