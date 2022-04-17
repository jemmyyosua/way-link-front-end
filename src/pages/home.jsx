import {Badge, Card,  Row} from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UserContext } from "../context/context"
import { API } from '../api/api'
import { useQuery } from 'react-query'

export default function Home(){

    let api = API()
    document.title = "Home"

    const [state, dispatch] = useContext(UserContext)
    const navigate = useNavigate()

    const logout = () => {
        console.log(state)
        dispatch({
        type: "LOGOUT",
        })
        navigate("/", { replace: true })
    }

    let { data :templates } = useQuery("templatesCache", async () => {
        const config = {
        method: "GET",
        headers: {
            Authorization: "Basic " + localStorage.token,
        },
        }
        const response = await api.get("/templates", config)
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
               {templates?.map((item, index) => ( 
                     <div className="s-layout_main mt-5">
                     <Card style={{ width: '18rem', backgroundColor : "inherit", border : "unset" }}>
                     <Card.Body>
                        <Link to="/template" key={index}><img src={item.image} alt={item.title}/></Link>
                     </Card.Body>
                     </Card>
                     </div>
               ))}
            </main>
         </div>
        </>
    )
}