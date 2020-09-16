import React,{Component} from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import fishGrill from '../../images/fishGrill.png'
import mustTry2 from '../../images/mustTry2.png'
import mustTry3 from '../../images/mustTry3.jpg'
import mustTry4 from '../../images/mustTry4.jpg'
import './Home.css'
class Musttry extends Component{
    render(){
        return(
            <>
                <section id="mustTry" className="mt-5 p-5">
                    <Container>
                            <Row>
                                <Col md={12}>
                            <span><h2><b>Must Try</b></h2></span>
                                </Col>
                            </Row>
                            <Row>
                            <Col md={6} sm={6} lg={3} className="p-3">
                                <div className="menu-box">
                                    <Image className="roundImg" src={fishGrill} alt=""/>
                                    <div class="menu-text-box">
                                    <h3>Fish Grill</h3>
                                    <p>Non-Veg</p>
                                    </div> 
                                </div>
                            </Col>
                            <Col md={6} sm={6} lg={3} className="p-3">
                                <div className="menu-box">
                                    <Image className="roundImg" src={mustTry2} alt=""/>
                                    <div class="menu-text-box">
                                    <h3>Stake</h3>
                                    <p>Non-Veg</p>
                                    </div> 
                                </div>
                            </Col>
                            <Col md={6} sm={6} lg={3} className="p-3">
                                <div className="menu-box">
                                    <Image className="roundImg" src={mustTry3} alt=""/>
                                    <div class="menu-text-box">
                                    <h3>Salad</h3>
                                    <p>Veg</p>
                                    </div> 
                                </div>
                            </Col>
                            <Col md={6} sm={6} lg={3} className="p-3">
                                <div className="menu-box">
                                    <Image className="roundImg" src={mustTry4} alt=""/>
                                    <div class="menu-text-box">
                                    <h3>Pastha</h3>
                                    <p>Veg</p>
                                    </div> 
                                </div>
                            </Col>
                            </Row>
                    </Container>
                </section>
            </>
        )
    }
}
export default Musttry