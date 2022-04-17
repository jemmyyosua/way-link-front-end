import {Card, Row, Col, Badge} from 'react-bootstrap'
import profile from '../assets/profile.png'
import { useState, useContext } from 'react'

export default function CardSocialMedia(){

    const [preview, setPreview] = useState(null)
    const [form, setForm] = useState({
        image: "",
        title: "",
        description: "",
        links : ""
      }) 
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        })
    
        console.log(form.rating)
        // Create image url for preview
        if (e.target.type === "file") {
          let url = URL.createObjectURL(e.target.files[0])
          setPreview(url)
        }
      }
    return (
        <>
            <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                <Card.Body>
                <Row>
                    <Col sm={4}>
                        <div className="mb-5 d-flex flex-column">
                            {preview === null ? (                    
                                <img className="ms-2" width="70%" src={profile} alt="Profile" />
                            ) : (
                                <img style={{maxWidth : "80%", minHeight : "80%"}} src={preview} alt={preview} />
                            )}
                            <label for="social-media"><Badge bg="warning" text="white" className="ms-4 px-4"><h6>Upload</h6></Badge></label>
                            <input type="file" onChange={handleChange} name="image" id="social-media" required/>
                        </div>
                    </Col>
                    <Col sm={8}> 
                        <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                        <Card.Title><h4><input name="facebook" style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="Social Media Type" type="text" required/></h4></Card.Title>
                        <hr className="border"/>
                        <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                        <Card.Title><h5><input name="facebook" style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://web.facebook.com" type="text" required/></h5></Card.Title>
                        <hr className="border"/>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </>
    )
}