import { Container, Col, Row, Card } from "react-bootstrap";
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'

import { useParams } from 'react-router-dom'
import { API } from '../api/api'
import { useQuery } from 'react-query'

export default function Link(){

    const {title} = useParams()
    let api = API()

    let { data :link, refetch } = useQuery("linkCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        refetch()
        const response = await api.get(`/linkTitle/${title}`, config)
        return response.data
    })
    console.log(link)

    document.title = "Link - " + link?.title
    return (
        <>
            <Container>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <img className="mt-5" src={link?.image} style={{minHeight : 100 , minWidth : 100, maxWidth : 100 ,borderRadius : 200}} />
                <h3 className="mt-3">{link?.title}</h3>
                <h6 className="text-center text-muted mt-1" style={{width: "500px"}}>{link?.description}</h6>
                <div>
                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                            <a target="_blank"><img alt="Facebook" src={Facebook} width="25%" style={{marginTop : "-8px"}}/></a>
                            </Col>
                            <Col sm={8}> 
                                <p style={{color : "#ececec"}}><a className="ms-4 text-reset text-decoration-none" target="_blank">Facebook</a></p>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <a  target="_blank"><img alt="Instagram" src={Instagram} width="32%" style={{marginTop : "-10px", marginLeft: "-4px"}}/></a>
                            </Col>
                            <Col sm={8}> 
                                <p style={{color : "#ececec"}}><a className="ms-4 text-reset text-decoration-none"  target="_blank">Instagram</a></p>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                                <a  target="_blank"><img alt="Twitter" src={Twitter} width="25%" style={{marginTop : "-8px"}}/></a>
                            </Col>
                            <Col sm={8}> 
                                <div >
                                    <p style={{color : "#ececec", marginLeft : "34px"}}><a className="text-reset text-decoration-none"  target="_blank">Twitter</a></p>
                                </div>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ width: '30rem', height:"3.5rem", backgroundColor : 'black'}}>
                        <Card.Body>
                        <Row>
                            <Col sm={4}>
                            <a  target="_blank"><img alt="Youtube" src={Youtube} width="25%" style={{marginTop : "-8px"}}/></a>
                            </Col>
                            <Col sm={8}> 
                                <div className="ms-2">
                                <p className="ms-4" style={{color : "#ececec"}}><a  className="text-reset text-decoration-none"  target="_blank">Youtube</a></p>
                                </div>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </div>
                </div>
            </Container>
        </>
    )
}