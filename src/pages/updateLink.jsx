import {Navbar, Container, Button, Card, Row, Col, Badge} from 'react-bootstrap'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import template1 from '../assets/template1.svg'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

import { useNavigate, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from "../context/context"
import { API } from '../api/api'
import { useQuery, useMutation } from 'react-query'

export default function UpdateLink(){

  const {id} = useParams()
  let api = API()
  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  const logout = () => {
    console.log(state)
    dispatch({
    type: "LOGOUT",
    })
    navigate("/", { replace: true })
}


  // const [categories, setCategories] = useState([]) //Store all category data
  //For image preview
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
  }) 

  let { data :link, refetch } = useQuery("linkCache", async () => {
    const config = {
    method: "GET",
    headers: {
        Authorization: "Basic " + localStorage.token,
    },
    }
    const response = await api.get(`/linkID/${id}`, config)
    setForm({
        image: response.data.image,
        title: response.data.title,
        description: response.data.description,
    })
    return response.data
})

const [preview, setPreview] = useState(null)

document.title = "Update Link - " + link?.title

  //Store product data
  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    })

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

//   const handleUpdate = useMutation(async () => {
//     try {

//       // Store data with FormData as object
//       const formData = new FormData()
//       if (preview) {
//         formData.set("image", preview[0], preview[0]?.name);
//       }
//       formData.set("title", form.title)
//       formData.set("description", form.description)

//       // Configuration
//       const config = {
//         method: "PATCH",
//         headers: {
//           Authorization: "Basic " + localStorage.token,
//         },
//         body: formData,
//       }

//       // Insert product data
//      const response = await api.patch("/update-link/" + id, config)
//      console.log(response);
//       navigate("/my-link", { replace: true })
//     } catch (error) {
//       console.log(error)
//     }
//   })

    return(
        <>
        <div className="s-layout">
            <div className="s-layout__sidebar">
            <a className="s-sidebar__trigger">
               <Icon className="ms-3" icon="fa:bars" width="40" height="60" color="gray" />
            </a>

            <nav className="s-sidebar__nav">
               <ul>
                  <li>
                     <a className="s-sidebar__nav-brand">
                           <Link to="/home"><img src={logo} className="ms-5 mt-2" /></Link> 
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link active">
                           <Link className="text-decoration-none text-reset fw-bold ms-4" to="/home"><Icon className="me-1" icon="la:cubes" width="35" height="35" />Template</Link>
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link active2">
                           <Link className="text-decoration-none text-reset fw-bold ms-4" to="/profile"><Icon className="me-2" icon="iconoir:profile-circled" width="35" height="35" />Profile</Link>
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link active2">
                           <Link className="text-decoration-none text-reset fw-bold ms-4" to="/my-link"><Icon className="me-2" icon="akar-icons:link-chain" width="33" height="33" />My Link</Link>
                     </a>
                  </li>
                  <li className="mt-5">
                     <a className="s-sidebar__nav-link mt-5 active2">
                           <Link className="text-decoration-none text-reset fw-bold ms-4" to="" onClick={logout}><Icon className="me-2" icon="simple-line-icons:logout" width="28" height="28" />Logout</Link>
                     </a>
                  </li>
               </ul>
            </nav>
            </div>

            <main className="s-layout__content">
            <Badge bg="white" className="d-flex flex-column py-4 px-5" style={{color : "black", borderRadius : "unset", textAlign : "left", fontSize : "17pt"}} >Template</Badge>
            <Container>
                <form >
                    <Row>
                        <Col sm="10">
                            <h2 className="ms-5 mt-5 text">Update Link</h2>
                        </Col>
                        <Col sm="2">
                            <Button type="submit" className="mt-5 fw-bold" variant="warning" style={{borderRadius : 10, color : "white"}}>
                               Update Link
                            </Button>
                        </Col>
                    </Row>
                    <Row className="ms-3">       
                        <Col lg="8">
                            <Card className="mt-4 mb-4 px-3 py-4" style={{ width: '100%', backgroundColor : 'white' }}>
                                <Card.Body>
                                    <div className="mb-5">
                                        {!preview ? (
                                            <img src={form.image} style={{maxWidth : "20%", minHeight : "20%"}} alt="preview"/>
                                            ) : (
                                            <img src={URL.createObjectURL(preview[0])} style={{maxWidth : "20%", minHeight : "20%"}} alt="preview"/>
                                        )}
                                        <label for="upload-photo"><Badge bg="warning" text="white" className="ms-4 px-3"><h6>Upload</h6></Badge></label>
                                        <input type="file" onChange={handleChange} name="image" id="upload-photo"/>
                                    </div>

                                    <div className="mb-5">
                                    <Card.Subtitle className="mb-2 text-muted"><h5>Title</h5></Card.Subtitle>
                                    <Card.Title><h5><input className="input fw-bold" value={form.title} name="title" onChange={handleChange} placeholder="ex. Your Title" type="text" required/></h5></Card.Title>
                                    <hr className="border"/>
                                    <Card.Subtitle className="mb-2 mt-5 text-muted"><h5>Description</h5></Card.Subtitle>
                                    <Card.Title><h5><input className="input fw-bold" value={form.description} name="description" onChange={handleChange} placeholder="ex. Description Here" type="text" required/></h5></Card.Title>
                                    <hr className="border"/>
                                    </div>

                                    <div>
                                    <Card className="mt-3" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <img src={facebook} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Facebook</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input name="facebook" onChange={handleChange} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://web.facebook.com" type="text" required/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <img src={instagram} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Instagram</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input name="instagram" onChange={handleChange} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://www.instagram.com" type="text" required/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <img src={twitter} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Twitter</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input name="twitter" onChange={handleChange} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://twitter.com" type="text" required/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <img src={youtube} width="100%"/>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <Card.Title><h4>Youtube</h4></Card.Title>
                                                <hr className="border"/>
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                                                <Card.Title><h5><input name="youtube" onChange={handleChange} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://www.youtube.com" type="text" required/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <img className="ms-5 mt-5" src={template1} />
                        </Col>
                    </Row>   
                    </form> 
                </Container>
            </main>
         </div>
        </>
    )
}