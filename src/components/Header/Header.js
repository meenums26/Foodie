import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import './Header.css'
class Header extends Component{
    render(){
        return(
            <>
        <Navbar bg="white" expand="lg" className="pl-5 pr-5 pt-3 sticky-top">
        <Navbar.Brand href="#home"><b>Foodies</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About me</Nav.Link>
        <Nav.Link href="#menu">Menu</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Button variant="warning" id="callBtn"><span role="img" aria-label="bell">&#x1f514;</span> Call the waiter</Button>
        </Navbar.Collapse>
        </Navbar>
</>
        )
    }
}
export default Header