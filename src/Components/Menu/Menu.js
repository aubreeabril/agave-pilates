import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import logo from '../Menu/png_large_textAsset 5xhdpi.png'
import '../../App.css'



const Menu = (props) => (
    <React.Fragment>
        <Container className='d-md-none'>
            <Row>
                <Col md={12} className='collapsed-menu'>
                    <Image src={logo} alt='Illustration of an agave plant' style={{ maxWidth: '30%', paddingBottom: '10px'}} />
                </Col>
            </Row>
            <Row>
                <Col md={12} className='collapsed-menu'>
                    <h4>About Jenny</h4>  
                </Col>           
            </Row>
            <Row>
                <Col md={12} className='collapsed-menu'>
                    <h4>Scheduling</h4>
                </Col>
            </Row>
        </Container>
        <Container className='d-none d-md-block' style={{ paddingBottom: '5%'}}>
            <Row>
                <Col>
                    <h2 className='uncollapsed-menu-text'>About Jenny</h2>
                </Col>
                <Col>
                    <Image src={logo} alt='Illustration of an agave plant' style={{ maxWidth: '55%', paddingTop: '10%'}} />
                </Col>
                <Col>
                    <h2 className='uncollapsed-menu-text'>Scheduling</h2>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
)

export default Menu