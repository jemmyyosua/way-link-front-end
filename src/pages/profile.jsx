import {Navbar, Container, Button, Stack, Card, Badge} from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link,useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'

import DeleteData from '../component/modalDeleteUser'

import { UserContext } from "../context/context"
import { useState, useEffect, useContext } from 'react'
import { API } from '../api/api'
import { useQuery, useMutation } from 'react-query'


import formurlencoded from 'form-urlencoded';
export default function Profile(){

    const navigate = useNavigate()
    let api = API()
    document.title = "Profile"

    const [state, dispatch] = useContext(UserContext)

    const logout = () => {
        console.log(state)
        dispatch({
        type: "LOGOUT",
        })
        navigate("/", { replace: true })
    }

    const [form, setForm] = useState({
        email : "",
        fullName : ""
    })
    // Fetching product data from database
    let { userRefetch } = useQuery("userCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        const response = await api.get("/user", config)
        setForm({
          email : response.data.email,
          fullName : response.data.fullName
        })
    })

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }

    const updateUser = useMutation(async (e) => {
        try {
          e.preventDefault();

          const formData = JSON.stringify(form)

          const config = {
            method: "PATCH",
            headers: {
              Authorization: "Basic " + localStorage.token,
              "Content-type": "application/json",
            },
            body : formData,
          };

          const response = await api.patch("/userUpdate", config)
          console.log(response);    
        } catch (error) {
          console.log(error);
        }
      })
   
      const [confirmDelete, setConfirmDelete] = useState(null)
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const deleteUser = useMutation(async () => {
        try {
          const config = {
            method: "DELETE",
            headers: {
              Authorization: "Basic " + localStorage.token,
            },
          };
          await api.delete("/delete-user", config)
          navigate("/")
        } catch (error) {
          console.log(error);
        }
      })

      const handleDelete = () => {
        handleShow();
      }

      useEffect(() => {
        if (confirmDelete) {
          handleClose();
          deleteUser.mutate();
          setConfirmDelete(null);
        }
      }, [confirmDelete])

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
                     <a className="s-sidebar__nav-link active2">
                           <Link className="text-decoration-none text-reset fw-bold ms-4" to="/home"><Icon className="me-1" icon="la:cubes" width="35" height="35" />Template</Link>
                     </a>
                  </li>
                  <li>
                     <a className="s-sidebar__nav-link active">
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
                <form onSubmit={(e) => updateUser.mutate(e)}>
                    <div>
                    <h2 className="mt-5 ms-4 text">My Information</h2>
                    <Card className="mt-4 px-3 py-4" style={{ width: '96%', backgroundColor : 'white' }}>
                        <Card.Body>              
                            <Card.Subtitle className="mb-2 text-muted text"><h5>Name</h5></Card.Subtitle>
                            <h4><input onChange={handleChange} id="name" name="fullName" value={form.fullName} className="input fw-bold" placeholder="Your Name" type="text"/></h4>
                            <hr style={{ height : 2 }}/>
                            <Card.Subtitle className="mb-2 mt-5 text-muted text"><h5>Email</h5></Card.Subtitle>
                            <h4><input onChange={handleChange} id="email" name="email" value={form.email} className="input fw-bold" placeholder="Email Address" type="email"/></h4>
                            <hr style={{ height : 2 }} />
                        </Card.Body>
                    </Card>

                    <Stack className="mt-4" direction="horizontal" gap={2}>
                        <div className="ms-auto me-3"><Button type="submit" size="md" variant="warning" className="px-4 py-2" style={{borderRadius : 10, color : "white"}}> Save Account</Button></div>
                        <div className="me-5"><Button onClick={handleDelete} variant="danger" className="px-4 py-2" style={{borderRadius : 10, color : "white"}}> Delete Account</Button></div>
                        <DeleteData setConfirmDelete={setConfirmDelete} show={show} handleClose={handleClose} />
                    </Stack>  
                    </div> 
                    </form> 
                </Container>
            </main>
         </div>
        </>
    )
}