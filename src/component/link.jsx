import { Container, Col, Row, Card, Image } from "react-bootstrap";
import card from "../assets/card.jpg"
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

export default function Link(){
    return (
        <>
            <Container>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="mt-5" src={card} style={{minHeight : 100 , minWidth : 100, maxWidth : 100 ,borderRadius : 200}} />
                <h3 className="mt-3">Your Brand Name</h3>
                <h6 className="text-center text-muted mt-1">Add multiple links for your Instagram Bio and optimising <br/> your Instagram traffic by using InstaBio</h6>
                <div>
                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <Image src={facebook} width="25%" style={{marginTop : "-8px"}}/>
                            </Col>
                            <Col sm={8}> 
                                <p className="ms-4" style={{color : "#ececec"}}>Facebook</p>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <Image src={instagram} width="32%" style={{marginTop : "-10px", marginLeft: "-4px"}}/>
                            </Col>
                            <Col sm={8}> 
                                <p className="ms-4" style={{color : "#ececec"}}>Instagram</p>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <Image src={twitter} width="25%" style={{marginTop : "-8px"}}/>
                            </Col>
                            <Col sm={8}> 
                                <div >
                                    <p style={{color : "#ececec", marginLeft : "34px"}}>Twitter</p>
                                </div>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <Image src={youtube} width="25%" style={{marginTop : "-8px"}}/>
                            </Col>
                            <Col sm={8}> 
                                <div className="ms-2">
                                <p className="ms-4" style={{color : "#ececec"}}>Youtube</p>
                                </div>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </div>
                </div>
            </Container>
        </>
    )
}