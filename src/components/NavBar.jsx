import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GenresModal from './Genres/GenresModal';
import '../styles/navbar.css'
import 'boxicons'
import '../../node_modules/boxicons/css/boxicons.css'

const NavBar = () => {

    const [showGenres, setShowGenres] = useState(false);

    return (
        <>
            <Navbar className="navbar" expand="md" fixed='top'>
                <Container className="navbar__container">
                    <Navbar.Brand className='navbar__brand' as={Link} to="/">Movies App <i className='bx bx-movie-play'></i></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="navbar__link" as={Link} to="/">Movies</Nav.Link>
                            <Nav.Link className="navbar__link" as={Link} to="/actors">Actors</Nav.Link>
                            <Nav.Link className="navbar__link" as={Link} to="/directors">Directors</Nav.Link>
                            <Nav.Link className="navbar__link" onClick={() => setShowGenres(true)}>Genres</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <GenresModal 
                show={showGenres} 
                handleClose={() => setShowGenres(false)} 
            />
        </>
    );
};


export default NavBar;