import React,{Component} from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Home.css'
import slider1 from '../../images/slider1.png'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
class Home extends Component{
    render(){
        return(
            <>
            <section className="mt-5" id="home">
            <Container>
                <Row>
                    <Col md={12} sm={6} lg={6} justify-content-center>
                        <h1><b>we deliver best Organic food.</b></h1><br/>
                        <p style={{'color':'#a5a4a9'}}>
                            Lorem Ipsum is simply dummy text of the 
                            printing and type setting industry. 
                            Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it
                            to make a type specimen book.
                        </p>
                        <Button variant="warning" id="orderBtn">Order now <b>&#8594;</b></Button>
                    </Col>
                    <Col md={12} sm={12} lg={6}>
                        <Image src={slider1} alt="" fluid/>
                    </Col>
                </Row>
            </Container>
            </section>
            </>
        )
    }
}
export default Home