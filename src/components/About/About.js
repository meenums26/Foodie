import React,{Component} from 'react'
import { Container } from 'react-bootstrap'
import './About.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import chickenPlate from '../../images/chickenPlate.png'
class About extends Component{
    render(){
        return(
            <>
            <section id="about">
                <Container>
                   <Row>
                       <Col md={6} sm={12} lg={6}>
                            <Image src={chickenPlate} alt="" fluid></Image>
                       </Col>
                       <Col md={6} sm={12} lg={6}>
                       <span className="pb-5">About</span><b/>
                           <h2><b>Foodies is One Of The Most Hygienic & Trusted Food Service</b></h2>
                           <p>
                           Lorem Ipsum is simply dummy text of the 
                           printing and typesetting industry. 
                           Lorem Ipsum has been the industry's
                           standard dummy text ever since the 1500s, 
                           when an unknown printer took a galley of
                           type and scrambled it to make a type specimen book.
                           </p>
                           <p>
                           Lorem Ipsum is simply dummy text of the
                           printing and typesetting industry. 
                           Lorem Ipsum has been the industry's 
                           standard dummy text ever since the 1500s, 
                           when an unknown printer took a galley of 
                           type and scrambled it to make a type specimen book.
                           </p>
                           <Button variant="warning" id="callBtn" className="P-5">Know more</Button>
                       </Col>
                   </Row>
                </Container>
            </section>
            </>
        )
    }
}
export default About