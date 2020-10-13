import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import {LinkContainer} from "react-router-bootstrap"
import {withRouter} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import {logout} from "../actions/userActions"

const Header = ({history}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state =>state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler = e => {
       dispatch(logout())
       history.push("/login")
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/">
                <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
              `<Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ml-auto">
                <LinkContainer to="/cart">
                <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                </LinkContainer>
                {userInfo ? (
                    <NavDropdown title={userInfo.name}>
                       <LinkContainer to="/profile">
                           <NavDropdown.Item>
                               Profile
                           </NavDropdown.Item>
                       </LinkContainer> 
                       <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                ) : <LinkContainer to="/login">
                <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
            </LinkContainer> }
                </Nav>
                 </Navbar.Collapse>
                </Container>
             </Navbar>
        </header>
    )
}

export default withRouter(Header)
