import {Badge, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Sidebar from '../component/sidebar'

import { API } from '../api/api'
import { useQuery } from 'react-query'

export default function Home(){

    let api = API()
    document.title = "Home"

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
            <Sidebar 
            style1="s-sidebar__nav-link active text-decoration-none mt-5 fw-bold ms-5"
            style2="s-sidebar__nav-link active2 text-decoration-none fw-bold ms-5"
            style3="s-sidebar__nav-link active2 text-decoration-none fw-bold ms-5"
            style4="s-sidebar__nav-link mt-5 active2 text-decoration-none fw-bold ms-5"
            />

            <main className="s-layout__content">
               <Badge bg="white" className="d-flex flex-column py-4 px-5" style={{color : "black", borderRadius : "unset", textAlign : "left", fontSize : "17pt"}} >Template</Badge>
               {templates?.length !== 0 ?(
                  <div className="s-layout_main mt-5">
                     {templates?.map((item, index) => ( 
                     <Link to={`/template/${item.id}`} key={index}>
                     <Card style={{ width: '18rem', backgroundColor : "inherit", border : "unset" }}>
                     <Card.Body>
                       <img src={item.image} alt={item.title}/>
                     </Card.Body>
                     </Card>
                     </Link>
                        ))}
                  </div>
                ) : ( 
                    <div className="s-layout_main mt-5">
                        <h3>Coming Soon New Template .......</h3>
                    </div>
                  )}
            </main>
         </div>
        </>
    )
}