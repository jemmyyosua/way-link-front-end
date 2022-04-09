import {Navbar, Container, Image, Button, Row, Col, Stack} from 'react-bootstrap'
import logo from '../assets/logo.png'
import list from '../assets/list.png'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


export default function MyLink(){
    return(
        <>
        <div class="sidebar">
           <Container>
                <center>
                <div>
                <Link to="/home"><Image src={logo} className="mt-4 mb-5" /></Link> 
                </div>
                <div className="mt-5 active2">
                <Link style={{fontSize : 20}} className="text-decoration-none text-reset fw-bold" to="/home"><Icon className="me-2" icon="la:cubes" width="40" height="40" />Template</Link>
                </div>
                <div className="mt-5 active2">
                <Link style={{fontSize : 20}} className="text-decoration-none text-reset fw-bold me-4" to="/profile"><Icon className="me-2" icon="iconoir:profile-circled" width="35" height="35" />Profile</Link>
                </div>
                <div className="mt-5 active">
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
                <Navbar.Brand className="fw-bold ms-5 py-2 text"><h3>My Links</h3></Navbar.Brand>
                </Container>
            </Navbar>
            <div className="mt-5 ms-5 pb-5">
                <div className="pb-5">
                    <div className="pb-5">
                        <div className="pb-5">
                            <div className="pb-5">
                                <div className="pb-5">
                                    <div className="pb-5">
                                        <div className="pb-5">
                                            <div className="pb-5">
                                                <div className="pb-5">
                                                    <div className="pb-4">
                                                        <Container>
                                                            <Row>
                                                                <Col sm="2">
                                                                    <h3 className="ms-4 text">All Links</h3>
                                                                </Col>
                                                                <Col sm="7">
                                                                    <Row>
                                                                    <form className="nosubmit">
                                                                    <input className="nosubmit" type="search" placeholder="Search..."/>
                                                                    </form>
                                                                    </Row>
                                                                </Col>
                                                                <Col sm="3">
                                                                <Button size="md" variant="warning" className="ms-3 px-4" style={{borderRadius : 10, color : "white"}}> <Link to="/" className="text-decoration-none text-reset fw-bold" >Search</Link> </Button>
                                                                </Col>
                                                            </Row>
                                                        
                                                            <Stack className="mt-5" direction="horizontal" gap={3}>
                                                            <div className="bg-light border"><Image className="ms-3" src={list} /></div>
                                                            <div className="bg-light border mt-4">
                                                                <Link to="/link"><h4 className="text">WaysFood</h4></Link>
                                                                <p className="text-muted text">localhost:3000/waysfood</p>
                                                            </div>
                                                            
                                                            <div className="bg-light border mt-2 me-5 ms-auto">
                                                                <div className="me-5">
                                                                    <div className="me-5">
                                                                        <h5 className="text">10</h5>
                                                                        <p className="text-muted text">Visit</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-light border mt-4 me-5">
                                                                <div className="me-5">
                                                                    <div className="me-5">
                                                                        <Link to="#"><Icon className="px-1 me-4" style={{border : "2px solid #bfbfbf", color : "gray", borderRadius : 7}} icon="clarity:eye-show-line" width="40" height="40" /></Link>
                                                                        <Link to="#"><Icon className="px-1 me-4" style={{border : "2px solid #bfbfbf", color : "gray", borderRadius : 7}} icon="clarity:note-edit-line" width="40" height="40" /></Link>
                                                                        <Link to="#"><Icon className="px-1 me-2" style={{border : "2px solid #bfbfbf", color : "gray", borderRadius : 7}} icon="clarity:trash-line" width="40" height="40" /></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </Stack>
                                                        </Container>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}