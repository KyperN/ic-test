import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        Your Brand
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setIsOpen(!isOpen)} />
      <Navbar.Collapse isOpen={isOpen}>
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link as={Link} to={`${isAuth ? '/premium' : '/login'}`}>
              Premium
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </NavItem>
          {isAuth && (
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
