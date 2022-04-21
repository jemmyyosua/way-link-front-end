import {Card, Row, Col} from 'react-bootstrap'
import twitter from '../assets/twitter.png'

export default function CardTwitter({name, onChange}){
    return (
        <>
            <Card className="mt-5" style={{ width: '100%', backgroundColor : '#ececec'}}>
                <Card.Body>
                <Row>
                    <Col sm={4}>
                        <div className="mb-5 d-flex flex-column">                
                            <img className="ms-2" width="70%" src={twitter} alt="twitter" />
                        </div>
                    </Col>
                    <Col sm={8}> 
                        <Card.Subtitle className="mb-2 text-muted"><h5>Title Link</h5></Card.Subtitle>
                        <Card.Title><h4>Twitter</h4></Card.Title>
                        <hr className="border"/>
                        <Card.Subtitle className="mb-2 text-muted"><h5>Link</h5></Card.Subtitle>
                        <Card.Title><h5><input name={name} onChange={onChange} style={{backgroundColor : '#ececec'}} className="input fw-bold" placeholder="https://twitter.com/" type="text" required/></h5></Card.Title>
                        <hr className="border"/>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </>
    )
}