import "bootstrap/dist/css/bootstrap.min.css"
import './css/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Landing from "./pages/landing"
import Home from "./pages/home"
import Profile from "./pages/profile"
import Template from "./pages/template"
import MyLink from "./pages/myLink"
import Link from "./component/link"

function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Landing/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/profile" element={<Profile/>} />
       <Route path="/template" element={<Template/>} />
       <Route path="/my-link" element={<MyLink/>} />
       <Route path="/link" element={<Link/>} />
     </Routes>
     </Router>
  );
}

export default App;
