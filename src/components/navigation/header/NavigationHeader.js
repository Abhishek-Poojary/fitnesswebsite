import React, { useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../actions/UserAction.js';
import { getUserDetails } from '../../../actions/UserAction.js';
const NavigationHeader = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error, loading, isAuthenticated, user } = useSelector(state => state.login);
    const { loading: loadingRoleDetails, userRole } = useSelector((state) => state.user);

    const logout = () => {
        dispatch(logoutUser());
        navigate('/');
    }

    useEffect(() => {
        dispatch(getUserDetails(user))
    }, [])


    return (
        <Navbar expand="sm" variant={props.textStyle} collapseOnSelect className='pt-5' id="page-content">
            <Container>
                <Navbar.Brand className='custom-brand-style' >PlayFit</Navbar.Brand>
                <Navbar.Toggle aria-controls='collpase-nav-id' />
                <Navbar.Collapse id="collapse-nav-id" className="justify-content-end flex-grow-1 pe-3">
                    <Nav activeKey={location.pathname} >
                        <Nav.Link className="custom-nav-link-styles" href='/'>Home</Nav.Link>
                        <Nav.Link className="custom-nav-link-styles" href='/classes'>Classes</Nav.Link>
                        <Nav.Link className="custom-nav-link-styles" href='/about'>About and Gallery</Nav.Link>
                        {isAuthenticated ? (<Nav >

                            <NavDropdown title={user} >

                                {(!loadingRoleDetails && userRole === "admin") && (
                                    <NavDropdown.Item href='/dashboard'>Admin DashBoard</NavDropdown.Item>
                                )}
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>

                        ) : (<Nav >
                            <Nav.Link href="/login">Login</Nav.Link>

                        </Nav>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationHeader;