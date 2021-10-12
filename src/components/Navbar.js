import { React } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Master Wizr Data Visualizations</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
