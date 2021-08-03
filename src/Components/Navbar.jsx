import React from "react";
import { NavLink } from "react-router-dom";
// import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                SK Tutorials
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" exact className="nav-link" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="menu-active" className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">SK Tutorials</Navbar.Brand>
          <Nav classNameName="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default NavBar;
