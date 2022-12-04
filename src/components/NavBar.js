import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>REACTIONS</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-right">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house-chimney nav-icon"></i>Home
            </NavLink>
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/post/create"
            >
              <i className="fa-solid fa-plus"></i>
              Post
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/sign-in"
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              Sign-In
            </NavLink>
            <NavLink
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/register"
            >
              <i className="fa-solid fa-user-plus"></i>Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
