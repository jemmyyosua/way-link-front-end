import {Navbar, Container, Image, Button, Row, Col} from 'react-bootstrap'
import logo from '../assets/logo.png'
import pc from '../assets/pc.svg'
import template1 from '../assets/template1.svg'
import { Link } from 'react-router-dom'

import SignIn from '../component/signIn'
import SignUp from '../component/signUp'

import {useState} from 'react'

export default function Landing(){

  document.title = "Way-Link"

  const [signUp, setSignUp] = useState(false)
  const handleSignUpClose = () => setSignUp(false)
  const handleSignUpShow = () => setSignUp(true)

  const [signIn, setSignIn] = useState(false)
  const handleSignInClose = () => setSignIn(false)
  const handleSignInShow = () => setSignIn(true)

    return(
        <div>
        <Navbar>
          <Container>
            <Navbar.Brand><Image src={logo} /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="me-4">
                 <Link to="" onClick={handleSignInShow} className="text-decoration-none fw-bold" >Login</Link> 
                 <SignIn show={signIn} handleClose={handleSignInClose} />
              </Navbar.Text>
              <Button onClick={handleSignUpShow} className="px-4 fw-bold btnModal" style={{borderRadius : 7, color : "white"}}>Register</Button>
              <SignUp show={signUp} handleClose={handleSignUpClose} />
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="bubbles mt-5">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          </div>

          <div className="mt-5" style={{color: "White"}}> 
            <Container>
                <Row>
                    <Col> 
                        <h1 className="fw-bolder text" style={{fontSize : 80, fontFamily : "Avenir"}}>The Only Link <br/> You'll Ever Need</h1>
                        <br/>
                        <p className="fw-lighter text" style={{fontSize : 30, fontFamily : "Avenir"}}>Add a link for your Social Bio and optimize your <br/> social media traffic. <br/><br/>safe, fast and easy to use</p>
                        <Button variant="dark" className="px-3 py-2 mt-2" style={{borderRadius : 7, color : "white"}}> <Link to="/" className="text-decoration-none text-reset fw-bold" >Get Started For Free</Link> </Button>
                    </Col>
                    <Col>
                        <span className="ms-4"><Image className="ms-5" src={pc} /></span>
                        <Image className="ms-5" src={template1} style={{position : "absolute", bottom : 80, right : 550}} />
                    </Col>
                </Row>
            </Container>
        </div>
      </div>

    )
}