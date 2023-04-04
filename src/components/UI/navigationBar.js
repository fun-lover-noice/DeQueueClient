import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getCities } from "../../axios";
import config from "../../config";
import capitilizeCityName from "../../utils";

export const NavigationBar = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    getCities()
      .then((res) => {
        setCities(res.data.cities);
      })
      .catch();
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="primary"
      variant="dark"
      className="mb-3 shadow"
      sticky="top"
    >
      <Container>
        <Navbar.Brand to="/" as={Link}>
          <img alt="" src="/logo.png" width="68" height="50" />
          {config.appName}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Select City" id="basic-nav-dropdown">
              <NavDropdown.Item to={"/"} as={Link}>
                All Cities
              </NavDropdown.Item>
              {cities.map((city, index) => {
                return (
                  <NavDropdown.Item key={index} to={`/?city=${city}`} as={Link}>
                    {capitilizeCityName(city)}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
            <Nav.Link as={Link} to="/locate-me" className="text-white">
              Locate me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
