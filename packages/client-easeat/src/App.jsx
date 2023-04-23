import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavBar from './Components/MainNavBar/MainNavBar.jsx'
import BodyTest from './Components/BodyTest/BodyTest.jsx'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import Footer from './Components/Footer/Footer.jsx'

function App() {
    return (
        <>
            <div className="App">
                <MainNavBar />
                <Container fluid className='fill-height'>
                    <Row className='test fill-height'>
                        <Col>
                            <Sidebar>
                                <Menu>
                                    <MenuItem> Accueil</MenuItem>
                                    <MenuItem> Calendar</MenuItem>
                                    <MenuItem> Test </MenuItem>
                                </Menu>
                            </Sidebar>
                        </Col>
                        <Col className='bg-info'>
                            <h1> BodyTest </h1>
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </div>
        </>
    )
}

export default App
