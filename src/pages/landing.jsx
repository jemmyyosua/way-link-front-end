import {Navbar, Container, Button, Row, Col} from 'react-bootstrap'
import logo from '../assets/logo.png'
import pc from '../assets/pc.svg'
import phone from '../assets/Phone.png'
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
        <Navbar bg="white">
          <Container>
            <Navbar.Brand><img src={logo} /></Navbar.Brand>
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
                    <Col> 
                        <h1 className="fw-bolder text text1" style={{fontSize : 80, fontFamily : "Avenir"}}>The Only Link <br/> You'll Ever Need</h1>
                        <br/>
                        <p className="fw-lighter text text2" style={{fontSize : 30, fontFamily : "Avenir"}}>Add a link for your Social Bio and optimize your <br/> social media traffic. <br/><br/>safe, fast and easy to use</p>
                        <Button variant="dark" className="px-3 py-2 mt-2 btnL" style={{borderRadius : 7, color : "white"}}> <Link to="/" className="text-decoration-none text-reset fw-bold" >Get Started For Free</Link> </Button>
                    </Col>
                    <Col>
                        <img className="imgL1" src={pc} style={{position : "absolute", bottom : 175, right : 140}} />
                        <img className="imgL2" src={phone} style={{position : "absolute", bottom : 80, right : 550}} />
                    </Col>
            </Container>
        </div>
      </div>

    )
}