import {Button, Form, CloseButton ,Modal, Row, Col, Alert } from 'react-bootstrap'
import {React, useState, useContext} from 'react'
import { Link, useNavigate } from "react-router-dom"
import SignUp from './signUp';

import { UserContext } from '../context/context'
import { useMutation } from "react-query";
import { API } from "../api/api";


export default function SignIn ({show, handleClose}) {
  const [signUp, setSignUp] = useState(false)

  const handleSignUpClose = () => setSignUp(false)
  const handleSignUpShow = () => setSignUp(true)


  document.title = "Sign Up"
  let api = API();
  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      // Configuration
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      // Insert data for login process
      const response = await api.post("/login", config);

      console.log(response);

      // Checking process
      if (response.status === "success") {
        navigate("/home")
        // Send data to useContext
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data,
        });

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      } else {
        setForm({
          email: "",
          password: "",
        })
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed Login Check Your Email or Password
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  })
    
    return (
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="my-3">
          <Row className="justify-content-end">
            <CloseButton onClick={handleClose} className="mb-4 me-3"/>
          </Row>
    
          <Row className="mb-3 justify-content-center">
            <Col lg="10">
              <h1>Sign In</h1>
              <Form onSubmit={(e) => handleSubmit.mutate(e)}>
              {message && message}
                <Form.Group className="mt-4 mb-4" >
                  <Form.Control className="py-2" id="email" onChange={handleChange} value={email} name="email" type="email" placeholder="Email" required/>
                  </Form.Group>

                  <Form.Group className="mb-4" >
                  <Form.Control className="py-2" id="password" onChange={handleChange} value={password} name="password" type="password" placeholder="Password" required/>
                  </Form.Group>
                  <div className="d-grid mt-4 mb-3">
                    <Button type="submit" className="mt-2 btnModal" size="lg">
                      Sign In
                    </Button>
                  </div>
                <center>
                <p className="mb-4">Don't have an account ? Klik 
                <Link to="/" className="text-reset text-decoration-none fw-bold ms-1" onClick={handleSignUpShow}>
                    Here
                </Link>
                <SignUp show={signUp} handleClose={handleSignUpClose}/></p>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
  )
}

