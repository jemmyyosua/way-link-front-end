import {Navbar, Container, Image, Button, Row, Col} from 'react-bootstrap'
import logo from '../assets/logo.png'
import template1 from '../assets/template1.svg'
import template2 from '../assets/template2.png'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';


export default function Home(){
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
            <div className="mt-5 pb-5">
                <div className="pb-5">
                    <div className="pb-5">
                        <div className="pb-5">
                            <div className="pb-5">
                                <div className="pb-1">
                                    <Container>
                                        <Link to="/template"><Image src={template1} /></Link>
                                        <Link to="/template"><Image src={template2} /></Link>
                                    </Container>
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