import {Navbar, Container, Button, Card, Row, Col, Badge} from 'react-bootstrap'
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import template1 from '../assets/template1.svg'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import CardSocialMedia from '../component/socialMediaCard'

import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from "../context/context"
import { API } from '../api/api'
import { useMutation, useQuery } from 'react-query'

export default function Template(){

  document.title = "Add Link" 
  let api = API()
  const {id} = useParams()
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
  const [preview, setPreview] = useState(null) //For image preview
  const [preview2, setPreview2] = useState(null)

  const [form, setForm] = useState({
    image: "",
    title: "",
    description: ""
  }) 

  //Store product data
  // Handle change data on form
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
    })

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
    }
  }

    const [sosmeds, setSosmeds] = useState([])
    const [sosmed , setSosmed] = useState({
    icon: "",
    titleLink: "",
    url: "",
    })

    const handleChange2 = (e) => {
        setSosmed({
            ...sosmed,
            [e.target.name]:
                e.target.type == "file" ? e.target.files : e.target.value
        })

        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0])
            setPreview2(url)
          }
    }
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Store data with FormData as object
      const formData = new FormData()
      formData.set("title", form.title)
      formData.set("description", form.description)
      formData.set("image", form?.image[0], form?.image[0]?.name)

      // Configuration
      const config = {
        method: "POST",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
        body: formData,
      }

      // Insert product data
     const response = await api.post("/add-link", config)

     const idLink = response.hasil.id
     setSosmeds([...sosmeds, sosmed])
     for (let index = 0; index < sosmeds.length; index++) {
        const formLinks = new FormData();
        formLinks.set("icon", sosmeds[index].icon[0], sosmeds[index].icon[0].name);
        formLinks.set("titleLink", sosmeds[index].titleLink);
        formLinks.set("url", sosmeds[index].url);
        formLinks.set("idLink", idLink);

        const config1 = {
            method: "POST",
            headers: {
              Authorization: "Basic " + localStorage.token,
            },
            body: formLinks,
          }
        
        const response1 = await api.post("/add-sosmed", config1)
        console.log(response1)
    }
    console.log(response);
    navigate("/home", { replace: true })
    } catch (error) {
      console.log(error)
    }
  })

  const [show, setShow] = useState(false)
  const initList = []
  const [list, setList] = useState(initList)

  function handleAdd() {
    const newList = list.concat({name : <CardSocialMedia/>, id : uuidv4()});
    setList(newList)

    if(list.length === 2){
        setShow(true)
    }
  }

  let { data :template } = useQuery("templatesCache", async () => {
    const config = {
    method: "GET",
    headers: {
        Authorization: "Basic " + localStorage.token,
    },
    }
    const response = await api.get("/template/" + id, config)
    return response.data
})
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
                <form onSubmit={(e) => handleSubmit.mutate(e)}>
                    <Row>
                        <Col sm="9">
                            <h2 className="mt-5 ms-5 text">Create Link</h2>
                        </Col>
                        <Col sm="2">
                            <Button type="submit" className="mt-5 fw-bold" variant="warning" style={{borderRadius : 10, color : "white"}}>
                               Publish Link
                            </Button>
                        </Col>
                    </Row>
                    <Row className="ms-4">      
                        <Col lg="7">
                            <Card className="mt-4 mb-4 px-3 py-4" style={{ width: '100%', backgroundColor : 'white' }}>
                                <Card.Body>
                                   <div className="mb-5">
                                        {preview === null ? (                    
                                            <img src={profile} alt="Profile" />
                                        ) : (
                                            <img style={{maxWidth : "20%", minHeight : "20%"}} src={preview} alt={preview} />
                                        )}
                                        <label for="upload-photo"><Badge bg="warning" text="white" className="ms-4 px-3"><h6>Upload</h6></Badge></label>
                                        <input type="file" onChange={handleChange} name="image" id="upload-photo" required/>
                                    </div>

                                    <div className="mb-5">
                                    <Card.Subtitle className="mb-2 text-muted"><h5>Title</h5></Card.Subtitle>
                                    <Card.Title><h5><input className="input fw-bold" name="title" onChange={handleChange} placeholder="ex. Your Title" type="text" required/></h5></Card.Title>
                                    <hr className="border"/>
                                    <Card.Subtitle className="mb-2 mt-5 text-muted"><h5>Description</h5></Card.Subtitle>
                                    <Card.Title><h5><input className="input fw-bold" name="description" onChange={handleChange} placeholder="ex. Description Here" type="text" required/></h5></Card.Title>
                                    <hr className="border"/>
                                    </div>

                                    <div>
                                    <Card className="mt-3" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                            <div className="mb-5 d-flex flex-column">
                                                    {preview2 === null ? (                    
                                                        <img className="ms-2" width="70%" src={profile} alt="Profile" />
                                                    ) : (
                                                        <img style={{maxWidth : "80%", minHeight : "80%"}} src={preview2} alt={preview2} />
                                                    )}
                                                    <label for="social-media"><Badge bg="warning" text="white" className="ms-4 px-4"><h6>Upload</h6></Badge></label>
                                                    <input type="file" name="icon" onChange={handleChange2} id="social-media"/>
                                                </div>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <hr className="border"/>
                                                <Card.Title><h4><input  name="titleLink" onChange={handleChange2} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="Social Media Type" type="text"/></h4></Card.Title>
                                                <Card.Title><h5><input name="url" onChange={handleChange2} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://web.facebook.com" type="text"/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>
        
                                    {list.map((item) => (
                                    <div key={item.id}>{item.name}</div>
                                    ))}
                                    </div>
                                </Card.Body>
                            </Card>

                            <Container>
                                <Row>
                                    <Button onClick={handleAdd} className="mb-3" variant="warning" style={{borderRadius : 10, color : "white"}}>
                                        Add New Link
                                    </Button> 
                                </Row>   
                            </Container> 
                        </Col>
                        <Col sm="5">
                            <img className="ms-5 mt-5"  />
                        </Col>
                    </Row>   
                    </form> 
                </Container>
            </main>
         </div>

        </>
    )
}