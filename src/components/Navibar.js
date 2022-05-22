import React from "react";
import "./bootstrap.min.css";
import logo from "./logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navibar = () => {
  return (
    <div className="Navibar" id="home">
      <Navbar
        className="fixed-top"
        bg="primary"
        variant="dark"
        expand="sm"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" width="40px" height="40px" />
            My Portofolio
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link to="/" className="navStyle mx-2">
                <Navbar.Text>Home</Navbar.Text>
              </Link>
              <Link to="/about" className="navStyle mx-2">
                <Navbar.Text>About</Navbar.Text>
              </Link>
              <Link to="/skills" className="navStyle mx-2">
                <Navbar.Text>Skills</Navbar.Text>
              </Link>
              <Link to="/projects" className="navStyle mx-2">
                <Navbar.Text>Projects</Navbar.Text>
              </Link>
              <Link to="/contacts" className="navStyle mx-2">
                <Navbar.Text>Contacts</Navbar.Text>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
