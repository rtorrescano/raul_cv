import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Menu extends Component{
    
    render(){
        
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Raul Torrescano</Navbar.Brand>
                <Navbar.Toggle aria-controls="nav nav-pills flex-column flex-sm-row" />            
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-sm-fill text-sm-center nav-lin"></Nav>    
                    <Nav>
                        <Nav.Link><NavLink to="/raul_cv">Inicio</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/raul_cv/about" >Acerca de mi</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/raul_cv/experience" >Experiencia</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/raul_cv/contact" >Contacto</NavLink></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;