import {Navbar, Container, Image, Button, Stack, Card, Row, Col, Badge} from 'react-bootstrap'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import template1 from '../assets/template1.png'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


export default function Template(){
    return(
        <>
        <div class="sidebar">
           <Container>
                <center>
                <div>
               <Link to="/home"><Image src={logo} className="mt-4 mb-5" /></Link> 
                </div>
                <div className="mt-5 active">
                <Link style={{fontSize : 20}} className="text-decoration-none text-reset fw-bold" to="/home"><Icon className="me-2" icon="la:cubes" width="40" height="40" />Template</Link>
                </div>
                <div className="mt-5 active2">
                <Link style={{fontSize : 20}} className="text-decoration-none text-reset fw-bold me-4" to="/profile"><Icon className="me-2" icon="iconoir:profile-circled" width="35" height="35" />Profile</Link>
                </div>
                <div className="mt-5 active2">
                <Link style={{fontSize : 20}} className="text-decoration-none text-reset fw-bold me-3" to="/my-link"><Icon className="me-2" icon="akar-icons:link-chain" width="35" height="35" />My Link</Link>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <div className="mt-5 active2">
                <Link style={{fontSize : 20}} className="text-decoration-none text-reset fw-bold me-3" to="/"><Icon className="me-2" icon="simple-line-icons:logout" width="30" height="30" />Logout</Link>
                </div>
                </center>
           </Container>
        </div>

        <div className="bg">
            <Navbar bg="white">
                <Container>
                <Navbar.Brand className="fw-bold ms-5 py-2 text"><h3>Template</h3></Navbar.Brand>
                </Container>
            </Navbar>
            <div className="mt-5 ms-5">
                <Container>
                    <Row>
                        <Col sm="10">
                            <h2 className=" text">Create Link</h2>
                        </Col>
                        <Col sm="2">
                            <Button className="mb-3 fw-bold" variant="warning" style={{borderRadius : 10, color : "white"}}>
                               Publish Link
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="7">
                            <Card className="mt-4 mb-4 px-3 py-4" style={{ width: '100%', backgroundColor : 'white' }}>
                                <Card.Body>
                                    <div className="mb-5">
                                        <Image src={profile} />
                                        <label for="upload-photo"><Badge bg="warning" text="white" className="ms-4 px-3"><h6>Upload</h6></Badge></label>
                                        <input type="file" name="photo" id="upload-photo" />
                                    </div>

                                    <div className="mb-5">
                                    <Card.Subtitle className="mb-2 text-muted"><h5>Title</h5></Card.Subtitle>
                                    <Card.Title><h5><input className="input fw-bold" placeholder="ex. Your Title" type="text"/></h5></Card.Title>
                                    <hr className="border"/>
                                    <Card.Subtitle className="mb-2 mt-5 text-muted"><h5>Description</h5></Card.Subtitle>
                                    <Card.Title><h5><input className="input fw-bold" placeholder="ex. Description Here" type="text"/></h5></Card.Title>
                                    <hr className="border"/>
                                    </div>

                                    <div>
                                    <Card className="mt-3" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <Image src={facebook} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Facebook</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://web.facebook.com" type="text"/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <Image src={instagram} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Instagram</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://www.instagram.com" type="text"/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <Image src={twitter} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Twitter</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://twitter.com" type="text"/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <Image src={youtube} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Youtube</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://www.youtube.com" type="text"/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Container>
                                <Row>
                                    <Button className="mb-3" variant="warning" style={{borderRadius : 10, color : "white"}}>
                                        Add New Link
                                    </Button> 
                                </Row>   
                            </Container>  
                        </Col>

                        <Col sm="5">
                            <Image className="ms-5 mt-5" src={template1} />
                        </Col>
                    </Row>    
                </Container>
            </div>
        </div>
        </>
    )
}