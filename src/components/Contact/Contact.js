import React,{Component} from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import fb from '../../images/fb.png'
import twitter from '../../images/twitter.png'
import insta from '../../images/insta.png'
import youtube from '../../images/youtube.png'
import In from '../../images/In.png'
class Contact extends Component{
    render(){
        return(
            <>
            <section id="contact" className="mt-5">
                <Container>
                   <Row>
                       <Col md={12} sm={12}>
                       <span className="pb-5"><b>Foodies</b></span><br/>
                       <span>183 Gore Creek Drive, Suite 5 Vail CO 81657</span><br/>
                       <span>970.700.6777 | 970.700.6888</span><br/>
                       <span>info@foodies.com</span><br/>
                       <Image src={fb} alt="" className="m-2 ml-0"></Image>
                       <Image src={twitter} alt="" className="m-2"></Image>
                       <Image src={insta} alt="" className="m-2"></Image>
                       <Image src={youtube} alt="" className="m-2"></Image>
                       <Image src={In} alt="" className="m-2"></Image><br/>
                       <span>© 2020 - Foodies - All Rights Reserved.</span>
                       </Col>
                    </Row>
                </Container>
            </section>
            </>
        )}}

export default Contact

