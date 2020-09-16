import React,{Component} from 'react'
import { Container } from 'react-bootstrap'
import './Menu.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
//import menu1 from '../../images/menu1.jpg'
class Menu extends Component{
    render(){
        return(
            <>
            <section id="menu">
                <Container className="justify-content-center">
                   <Row className="justify-content-md-center mt-5">
                   <Col md={8} sm={12} lg={6} className="text-center">    
                   <span className="pb-5">Menu</span><b/><br/>
                   <h2><b>Explore Our Menu</b></h2>
                   <p style={{ 'color':'#a5a4a9'}}>Lorem Ipsum is simply dummy text 
                    of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's text.
                    </p>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={6} sm={6} lg={4}>
                        <div id="menu1" className="menus content-fluid justify-content-md-center">
                        <div className="price-box">₹ 150</div>
                            <div className="menu-text">
                            <h6><b>Bangers and Mash</b></h6>
                                <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been
                                the ...</p>
                            </div>    
                        </div>
                        </Col>
                        <Col md={6} sm={6} lg={4}>
                        <div id="menu2" className="menus content-fluid justify-content-md-center">
                        <div className="price-box">₹ 150</div>
                            <div className="menu-text">
                            <h6><b>Bangers and Mash</b></h6>
                                <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been
                                the...</p>
                            </div>    
                        </div>
                        </Col>
                        <Col md={6} sm={6} lg={4}>
                        <div id="menu3" className="menus content-fluid justify-content-md-center">
                        <div className="price-box">₹ 150</div>
                            <div className="menu-text">
                            <h6><b>Bangers and Mash</b></h6>
                                <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been
                                the...</p>
                            </div>    
                        </div>
                        </Col>
                        <Col md={6} sm={6} lg={4}>
                        <div id="menu4" className="menus content-fluid justify-content-md-center">
                        <div className="price-box">₹ 150</div>
                            <div className="menu-text">
                            <h6><b>Bangers and Mash</b></h6>
                                <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been
                                the...</p>
                            </div>    
                        </div>
                        </Col>
                        <Col md={6} sm={6} lg={4}>
                        <div id="menu5" className="menus content-fluid justify-content-md-center">
                        <div className="price-box">₹ 150</div>
                            <div className="menu-text">
                            <h6><b>Bangers and Mash</b></h6>
                                <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been
                                the...</p>
                            </div>    
                        </div>
                        </Col>
                        <Col md={6} sm={6} lg={4}>
                        <div id="menu6" className="menus content-fluid justify-content-md-center">
                        <div className="price-box">₹ 150</div>
                            <div className="menu-text">
                            <h6><b>Bangers and Mash</b></h6>
                                <p>Lorem Ipsum is simply dummy 
                                text of the printing and typesetting
                                industry. Lorem Ipsum has been
                                the...</p>
                            </div>    
                        </div>
                        </Col>
                        
                    </Row>
                    <Row className="justify-content-center">
                    <Button variant="warning" id="loadBtn" className="col-md-3 Col-3 col-lg-3 P-5">Load more</Button>
                    </Row>
                </Container>
            </section>
            </>
        )
    }
}
export default Menu          