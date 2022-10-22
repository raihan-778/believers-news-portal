import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {
        console.log("user Signout Clicked");
      })
      .then((error) => console.error(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Believers-News-Portal</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/termsAndConditions">Terms & Conditions</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {user?.uid ? (
              <>
                {<span>{user?.email}</span>}

                {/* <Image fluid roundedCircle thumbnail>
                  {user.photoURL}
                </Image> */}
                <Button onClick={handleUserSignOut}>Log Out</Button>
              </>
            ) : (
              <>
                {" "}
                <Nav.Link>
                  <Link to="/login">Log in</Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  <Link to="/register">Register</Link>
                  {/* <FaUser></FaUser> */}
                </Nav.Link>
              </>
            )}
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
