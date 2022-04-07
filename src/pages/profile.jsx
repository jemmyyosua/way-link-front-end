import {Navbar, Container, Image, Button, Stack, Card} from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


export default function Profile(){
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
                <div className="mt-5 active">
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
                <Navbar.Brand className="fw-bold text ms-5 py-2"><h3>Profile</h3></Navbar.Brand>
                </Container>
            </Navbar>
            <div className="mt-5 ms-5 pb-5">
                <div className="pb-5">
                    <div className="pb-5">
                        <div className="pb-5">
                            <Container>
                                <h2 className=" text">My Information</h2>
                                <Card className="mt-4 px-3 py-4" style={{ width: '96%', backgroundColor : 'white' }}>
                                    <Card.Body>
                                        <Card.Subtitle className="mb-2 text-muted text"><h5>Name</h5></Card.Subtitle>
                                        <Card.Title><h4><input className="input fw-bold" placeholder="Jemmy Yosua Alie" type="text"/></h4></Card.Title>
                                        <hr style={{ height : 2 }}/>
                                        <Card.Subtitle className="mb-2 mt-5 text-muted text"><h5>Email</h5></Card.Subtitle>
                                        <Card.Title><h4><input className="input fw-bold" placeholder="jemmyalie9@gmail.com" type="email"/></h4></Card.Title>
                                        <hr style={{ height : 2 }} />
                                    </Card.Body>
                                </Card>

                                <Stack className="mt-4" direction="horizontal" gap={2}>
                                    <div className="ms-auto me-3"> <Button size="md" variant="warning" className="px-4 py-2" style={{borderRadius : 10, color : "white"}}> <Link to="/" className="text-decoration-none text-reset fw-bold" >Save Account</Link> </Button></div>
                                    <div className="me-5"><Button variant="danger" className="px-4 py-2" style={{borderRadius : 10, color : "white"}}> <Link to="/" className="text-decoration-none text-reset fw-bold" >Delete Account</Link> </Button></div>
                                </Stack>    
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}