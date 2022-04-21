import { Container, Button, Card, Row, Col, Badge } from 'react-bootstrap'
import profile from '../assets/profile.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

import CardTwitter from '../component/twitter'
import CardYoutube from '../component/youtube'
import Sidebar from '../component/sidebar'

import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { API } from '../api/api'
import { useMutation, useQuery } from 'react-query'

export default function Template(){

  document.title = "Add Link" 
  let api = API()
  const {id} = useParams()
  const navigate = useNavigate()
  
  const [preview, setPreview] = useState(null)
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    facebook : "",
    instagram : "",
    twitter : "",
    youtube : "",
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

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Store data with FormData as object
      const formData = new FormData()
      formData.set("title", form.title)
      formData.set("description", form.description)
      formData.set("facebook", form.facebook)
      formData.set("instagram", form.instagram)
      formData.set("twitter", form.twitter)
      formData.set("youtube", form.youtube)
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
     console.log(response);
     navigate("/home", { replace: true })
    } catch (error) {
      console.log(error)
    }
  })

  const [show, setShow] = useState(false)
  const [list, setList] = useState([])

  function handleAdd() {
    if(list.length === 1){
        const newList = list.concat({name : <CardYoutube/>, id : uuidv4()});
        setList(newList)
        setShow(true)
    } else if(list.length === 0 ){
        const newList = list.concat({name : <CardTwitter name="twitter" onChange={handleChange} />, id : uuidv4()});
        setList(newList)
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
            <Sidebar 
            style1="s-sidebar__nav-link active text-decoration-none mt-5 fw-bold ms-5"
            style2="s-sidebar__nav-link active2 text-decoration-none text-reset fw-bold ms-5"
            style3="s-sidebar__nav-link active2 text-decoration-none text-reset fw-bold ms-5"
            style4="s-sidebar__nav-link mt-5 active2 text-decoration-none text-reset fw-bold ms-5"
            />

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
                                        <label htmlFor="upload-photo"><Badge bg="warning" text="white" className="ms-4 px-3"><h6>Upload</h6></Badge></label>
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
                                                    <img className="ms-2" width="70%" src={facebook} alt="Profile" />
                                                </div>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <hr className="border"/>
                                                <Card.Title><h4>Facebook</h4></Card.Title>
                                                <Card.Title><h5><input name="facebook" onChange={handleChange} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://web.facebook.com" type="text"/></h5></Card.Title>
                                                <hr className="border"/>
                                            </Col>
                                        </Row>
                                        </Card.Body>
                                    </Card>

                                    <Card className="mt-3" style={{ width: '100%', backgroundColor : '#ececec'}}>
                                        <Card.Body>
                                        <Row>
                                            <Col sm={4}>
                                                <div className="mb-5 d-flex flex-column">             
                                                    <img className="ms-2" width="70%" src={instagram} alt="Profile" />
                                                </div>
                                            </Col>
                                            <Col sm={8}> 
                                                <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                                                <hr className="border"/>
                                                <Card.Title><h4>Instagram</h4></Card.Title>
                                                <Card.Title><h5><input name="instagram" onChange={handleChange} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://web.facebook.com" type="text"/></h5></Card.Title>
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
                                    <Button hidden={show} onClick={handleAdd} className="mb-3" variant="warning" style={{borderRadius : 10, color : "white"}}>
                                        Add New Link
                                    </Button> 
                                </Row>   
                            </Container> 
                        </Col>
                        <Col sm="5">
                            <img src={template?.image} alt={template?.title} className="ms-5 mt-5"  />
                        </Col>
                    </Row>   
                    </form> 
                </Container>
            </main>
         </div>

        </>
    )
}