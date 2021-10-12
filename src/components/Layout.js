import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

import Navigation from "./Navbar";
import Footer from "./Footer";

const DefaultLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Navigation />
    {children}
    <Navigation />
  </Container>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
