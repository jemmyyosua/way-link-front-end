import {Button, Form, CloseButton ,Modal, Row, Col, Alert } from 'react-bootstrap';
import {React, useState, useContext} from 'react'
import { Link } from "react-router-dom"
import SignIn from './signIn';

// import {UserContext} from '../context/userContext'
// import { useMutation } from "react-query";
// import { API } from "../api/api";

function SignUp({show, handleClose}) {
  const [signIn, setSignIn] = useState(false)

  const handleSignInClose = () => setSignIn(false)
  const handleSignInShow = () => setSignIn(true)

  document.title = "Sign In"
//   let api = API();

//   const [state, dispatch] = useContext(UserContext);

//   const [message, setMessage] = useState(null);
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { fullName, email, password } = form;

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = useMutation(async (e) => {
//     try {
//       e.preventDefault();

//       // Data body
//       const body = JSON.stringify(form);

//       // Configuration Content-type
//       const config = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: body,
//       };

//       // Insert data user to database
//       const response = await api.post("/register", config);

//       console.log(response);

//       // Notification
//       if (response.status === "success") {
//         const alert = (
//           <Alert variant="success" className="">
//             Success
//           </Alert>
//         );
//         setMessage(alert);
//         setForm({
//           fullName: "",
//           email: "",
//           password: "",
//         })
//       } else {
//         const alert = (
//           <Alert variant="danger" className="">
//             Failed
//           </Alert>
//         );
//         setMessage(alert);
//       }
//     } catch (error) {
//       const alert = (
//         <Alert variant="danger" className="">
//           Failed
//         </Alert>
//       );
//       setMessage(alert);
//       console.log(error);
//     }
//   })


    return (
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="my-2">
          <Row className="justify-content-end">
            <CloseButton onClick={handleClose} className="mb-2 me-3"/>
          </Row>
    
          <Row className="justify-content-center">
            <Col lg="10">
              <h1>Sign Up</h1>
              <Form >
                {/* {message && message} */}
                <Form.Group className="mt-4 mb-4" controlId="formBasicEmail">
                  <Form.Control onChange="" className="py-2" name="email" value="" type="email" placeholder="Email" required/>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Control onChange="" className="py-2" name="password" value="" type="password" placeholder="Password" required/>
                  </Form.Group>

                  <Form.Group className="mt-4 mb-4" controlId="formBasicEmail">
                  <Form.Control onChange="" className="py-2" name="fullName" value="" type="text" placeholder="Full Name" required/>
                  </Form.Group>
                  <div className="d-grid mt-4 mb-3">
                  <Button type="submit" className="mt-2 btnModal" size="lg">
                     Sign Up
                    </Button>
                  </div>
                <center>
                <p className="mb-4">Already have an account ? Klik 
                <Link to="/" className="text-reset text-decoration-none fw-bold ms-1" onClick={handleSignInShow}>
                    Here
                </Link>
                <SignIn show={signIn} handleClose={handleSignInClose}/></p>
                </center>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
  )
}

 export default SignUp