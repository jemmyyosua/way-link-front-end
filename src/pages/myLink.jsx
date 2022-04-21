import { Container, Button, Row, Col, Stack, Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import DeleteData from '../component/modalDeleteLink'
import Sidebar from '../component/sidebar'

import { useState, useEffect } from 'react'
import { API } from '../api/api'
import { useQuery, useMutation } from 'react-query'

export default function MyLink(){

    let api = API()
    document.title = "My Link"

    let { data : links, refetch } = useQuery("linksCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        const response = await api.get("/links", config)
        return response.data
    })

      const [idDelete, setIdDelete] = useState(null)
      const [confirmDelete, setConfirmDelete] = useState(null)
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const handleDelete = (id) => {
        setIdDelete(id)
        handleShow()
      }
      const deleteLink = useMutation(async (id) => {
        try {
          const config = {
            method: "DELETE",
            headers: {
              Authorization: "Basic " + localStorage.token,
            },
          };
          refetch()
          await api.delete(`/delete-link/${id}`, config)
        } catch (error) {
          console.log(error);
        }
      })


      const handleUpdate = useMutation(async (id) => {
        try {
          // Configuration
          const config = {
            method: "PATCH",
            headers: {
              Authorization: "Basic " + localStorage.token,
            },
          }
    
          // Insert product data
         const response = await api.patch("/update-visit/" + id, config)
         console.log(response);
    
        } catch (error) {
          console.log(error)
        }
      })

      const [idUpdate, setIdUpdate] = useState(null)

      useEffect(() => {
        if (confirmDelete) {
          handleClose();
          deleteLink.mutate(idDelete);
          setConfirmDelete(null);
        }

        handleUpdate.mutate(idUpdate)
      }, [confirmDelete])

    return(
        <>
        <div className="s-layout">
            <Sidebar 
            style1="s-sidebar__nav-link active2 text-decoration-none mt-5 fw-bold ms-5"
            style2="s-sidebar__nav-link active2 text-decoration-none fw-bold ms-5"
            style3="s-sidebar__nav-link active text-decoration-none fw-bold ms-5"
            style4="s-sidebar__nav-link mt-5 active2 text-decoration-none fw-bold ms-5"
            />

            <main className="s-layout__content">
            <Badge bg="white" className="d-flex flex-column py-4 px-5" style={{color : "black", borderRadius : "unset", textAlign : "left", fontSize : "17pt"}} >My Links</Badge>
            <div className="mt-5 ms-5 pb-5">
                    <Container>
                        <Row>
                            <Col lg="2">
                                <h3 className="ms-4 text">All Links</h3>
                            </Col>
                            <Col lg="7">
                                <Row>
                                <form className="nosubmit">
                                <input className="nosubmit" type="search" placeholder="Search..."/>
                                </form>
                                </Row>
                            </Col>
                            <Col lg="3">
                            <Button size="md" variant="warning" className="ms-3 px-4" style={{borderRadius : 10, color : "white"}}> <Link to="/" className="text-decoration-none text-reset fw-bold" >Search</Link> </Button>
                            </Col>
                        </Row>

                        {links?.map((item,index) => (  
                        <Stack className="mt-5" direction="horizontal" gap={3}>                              
                        <div className=""><img className="ms-3" width={100} src={item?.image}/></div>
                        <div className="mt-4">
                            <Link to={"/link/" + item.title} className="text-decoration-none text-reset" onClick={() => handleUpdate.mutate(item.id)}><h4>{item.title}</h4></Link>
                            <p ><Link className="text-muted text-decoration-none" to={"/link/" + item.title} onClick={() => handleUpdate.mutate(item.id)}>localhost:3000/{item.title}</Link></p>
                        </div>
                        
                        <div className="mt-2 me-5 ms-auto">
                            <div className="me-5">
                                <div className="me-5">
                                    <h5 className="text">{item.visit}</h5>
                                    <p className="text-muted text">Visit</p>
                                </div>
                            </div>
                        </div>
                        <div className="me-5">
                            <div className="me-5">
                                <div className="me-5">
                                    <Link to={"/link/" + item.title} onClick={() => handleUpdate.mutate(item.id)} key={index} ><Icon className="px-1 me-4" style={{border : "2px solid #bfbfbf", color : "gray", borderRadius : 7}} icon="clarity:eye-show-line" width="40" height="40" /></Link>
                                    <Link to={"/update-link/" + item.id } key={index}><Icon className="px-1 me-4" style={{border : "2px solid #bfbfbf", color : "gray", borderRadius : 7}} icon="clarity:note-edit-line" width="40" height="40" /></Link>
                                    <Link to="" onClick={ () => handleDelete(item.id) }><Icon className="px-1 me-2" style={{border : "2px solid #bfbfbf", color : "gray", borderRadius : 7}} icon="clarity:trash-line" width="40" height="40" /></Link>
                                    <DeleteData setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
                                </div>
                            </div>
                        </div> 
                        </Stack>
                        ))}
                    </Container>
                </div>
            </main>
            </div>  
        </>
    )
}