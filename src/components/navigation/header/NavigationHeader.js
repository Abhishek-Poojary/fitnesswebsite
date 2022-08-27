import React from 'react';
import { Navbar,  Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const NavigationHeader = (props) => {
    const location=useLocation();
    console.log(props)
    return (
        <Navbar expand="sm" variant={props.textStyle}  collapseOnSelect className='pt-5' id="page-content">
            <Container>
                <Navbar.Brand className='custom-brand-style' >PlayFit</Navbar.Brand>
                <Navbar.Toggle aria-controls='collpase-nav-id' />
                <Navbar.Collapse id="collapse-nav-id" className="justify-content-end flex-grow-1 pe-3">
                    <Nav activeKey={location.pathname} >
                        <Nav.Link className="custom-nav-link-styles" href='/'>Home</Nav.Link>
                        <Nav.Link className="custom-nav-link-styles" href='/classes'>Classes</Nav.Link>
                        <Nav.Link className="custom-nav-link-styles" href='/about'>About and Gallery</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationHeader;