import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Mynav = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://demo.proteusthemes.com/medicpress/wp-content/uploads/sites/48/2017/02/logo.png"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
              <Link style={{ textDecoration: "none", color: "#000" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/servicess"
              >
                Servicess
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/apointed"
              >
                Apointment
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/our_doctors"
              >
                Our Doctors
              </Link>
            </Nav.Link>
            {!user.email ? (
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/login"
                >
                  Login
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link>
                <button onClick={logOut}>Logout</button>
              </Nav.Link>
            )}
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/contact"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Mynav;
