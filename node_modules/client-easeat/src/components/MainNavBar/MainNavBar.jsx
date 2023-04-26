//init new component
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import easeatLogoCropped from '../../assets/easeat_logo_cropped.png';
import './MainNavBar.css';


class MainNavBar extends Component{
    render() {
        return (      
        <Navbar className="navbar" variant="dark" >
        <Container >
          <Navbar.Brand href="#home" className="mx-auto">
            <img
              alt=""
              src={easeatLogoCropped}
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
        );
    }
}

export default MainNavBar;