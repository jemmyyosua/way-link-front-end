import "bootstrap/dist/css/bootstrap.min.css"
import './css/index.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'

import Landing from "./pages/landing"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Template from "./pages/template"
import MyLink from "./pages/myLink"
import Link from "./component/link"
import UpdateLink from "./pages/updateLink"

import { UserContext } from "./context/context"
import { API } from "./api/api"
import { useContext, useEffect } from "react"

function App() {
    let api = API()
    const navigate = useNavigate()
    const [state, dispatch] = useContext(UserContext)
  
    useEffect(() => {
      // Redirect Auth
      if (!state.isLogin) {
        navigate("/")
      } else {
          navigate("/home")
        }
    }, [state])
  
    const checkUser = async () => {
      try {
        const config = {
          method: "GET",
          headers: {
            Authorization: "Basic " + localStorage.token,
          },
        }
        const response = await api.get("/check-auth", config)
  
        // If the token incorrect
        if (response.status === "failed") {
          return dispatch({
            type: "AUTH_ERROR",
          })
        }
  
        // // Get user data
        let payload = response.data.user
        // // Get token from local storage
        payload.token = localStorage.token

        // // Send data to useContext
        dispatch({
          type: "USER_SUCCESS",
          payload,
        })
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      checkUser()
    }, [])

  return (
     <Routes>
       <Route path="/" element={<Landing/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="/template" element={<Template/>} />
       <Route path="/my-link" element={<MyLink/>} />
       <Route path="/link/:title" exact element={<Link/>} />
       <Route path="/update-link/:id" element={<UpdateLink/>} />
     </Routes>
  );
}

export default App;
