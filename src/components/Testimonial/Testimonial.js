import React,{Component} from 'react'
import { Container } from 'react-bootstrap'
import './Testimonial.css'
import StarRatings from 'react-star-ratings';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import dummy from '../../images/dummy.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form'
class Testimonial extends Component{
    render(){
        return(
            <>
            <section id="testimonial" className="text-center">
                <Container className="p-5">
                   <Row>
                       <Col md= {{ span: 8, offset: 2}}>
                       <span className="pb-5 testmnlHead">Testimonial</span><b/>
                           <h2 className="mt-5"><b>What people say about us</b></h2>
                           <span id="testPrg">
                           Lorem Ipsum is simply dummy text of the printing and 
                           typesetting industry. Lorem Ipsum has been the industry's text.
                           </span>
                        </Col> 
                    </Row>
                    <Row>              
                           <Col md= {{ span: 8, offset: 2}} id="dummyTestimonial" className="mt-5">
                            <Carousel className="p-2">
                            <Carousel.Item interval={1000} className="justify-content-center">
                            <img
                            className="d-block"
                            src={dummy} id="dummyImg"
                            alt=""
                            />
                            <p className="dumSpan">
                            Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices.
                            </p>
                            <StarRatings
                            rating={5}
                            starRatedColor="yellow"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            className="p-5 star"/><br/>
                            <span><b>John Doe</b></span>
                            </Carousel.Item>
                            <Carousel.Item interval={1000} className="justify-content-center">
                            <img
                            className="d-block"
                            src={dummy} id="dummyImg"
                            alt=""
                            />
                            <p className="dumSpan">
                            Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices.
                            </p>
                            <StarRatings
                            rating={5}
                            starRatedColor="yellow"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            className="p-5 star"/><br/>
                            <span><b>John Doe</b></span>
                            </Carousel.Item>
                            <Carousel.Item interval={1000} className="justify-content-center">
                            <img
                            className="d-block"
                            src={dummy} id="dummyImg"
                            alt=""
                            />
                            <p className="dumSpan">
                            Restaurants range from inexpensive and informal lunching or dining places catering to people working nearby, with modest food served in simple settings at low prices.
                            </p>
                            <StarRatings
                            rating={5}
                            starRatedColor="yellow"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            className="p-5 star"/><br/>
                            <span><b>John Doe</b></span>
                            </Carousel.Item>
                            </Carousel>                        
                            </Col>
                            <Row className="justify-content-center">
                            <Col md={6} sm={12} lg={6} className="mt-5">
                                <h2><b>Subscribe News Letter for Get Update</b></h2>
                            </Col>
                            <Col md={8} sm={12} lg={8} className="mt-5">
                            <Form className="news-letter">    
                            <input type="text"></input>
                            <Button type="submit" variant="warning" id="subscribeBtn">Subscribe</Button>
                            </Form>
                            </Col>
                            </Row>
                    </Row>
                </Container>
            </section>
            </>
        )}}
export default Testimonial     
