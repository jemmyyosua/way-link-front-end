import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import logo from '../assets/logo.png'

import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from '../context/context'

export default function Sidebar({style1,style2,style3,style4}){

  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)

  const logout = () => {
        console.log(state)
        dispatch({
        type: "LOGOUT",
        })
        navigate("/", { replace: true })
    }

    return (
        <div className="s-layout__sidebar">
        <a className="s-sidebar__trigger">
           <Icon className="ms-3" icon="fa:bars" width="40" height="60" color="gray" />
        </a>

        <nav className="s-sidebar__nav">
        <ul>
              <li>
                 <Link to="/home"><img src={logo} className="s-sidebar__nav-brand ms-5 mt-2" /></Link> 
              </li>
              <li>
                 <Link className={style1} to="/home"><Icon className="me-1" icon="la:cubes" width="35" height="35" />Template</Link>
              </li>
              <li>
                 <Link className={style2} to="/profile"><Icon className="me-2" icon="iconoir:profile-circled" width="35" height="35" />Profile</Link>
              </li>
              <li>
                 <Link className={style3} to="/my-link"><Icon className="me-2" icon="akar-icons:link-chain" width="33" height="33" />My Link</Link>
              </li>
              <li className="mt-5">
                 <Link className={style4} to="" onClick={logout}><Icon className="me-2" icon="simple-line-icons:logout" width="28" height="28" />Logout</Link>
              </li>
           </ul>
        </nav>
        </div>
    )
}