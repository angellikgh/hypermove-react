import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

const Header = () => {

return(
  

<Navbar className="main-menu" expand="lg" fixed="top">


<Container>
<Navbar.Brand href="#home"><Image fluid src='./assets/images/logo.png'></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '60px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Play-to-Earn</Nav.Link>
            <Nav.Link href="#action2">Move-to-Earn</Nav.Link>
            <Nav.Link href="#action2">NFT Marketplace</Nav.Link>
            <Nav.Link href="#action2">METAVERSE</Nav.Link>
            
           
          </Nav>
          <Button variant="dark" className="purple-btn">JOIN COMMUNITY</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}

    export default Header;