import {NavLink, Link} from "react-router-dom"
import { useState } from "react"
import Menu from "../assets/icons/menu.svg"
import Logo from "../assets/img/Logo.jpg" 
import "../styles/navmenu.css"

const NavMenu = () => {
    const [show,setShow]=useState(false)
    const handleShow = () =>{
      setShow(!show)
    } 
    console.log(show);
    return(
      <header>
      <nav className={show?"menu deployed_menu":"menu"}>
        <ul className="ul_menu">
          <li className="li_menu"> <Link to="/" > <img src={Logo} alt="Logotipo" className="logo"/> </Link> </li>
          <li className="li_menu"> <NavLink to="/Projects" className="item" activeClassName="active" > Proyectos </NavLink> </li>
          <li className="li_menu"> <NavLink to="/About" className="item" activeClassName="active" > Conoceme </NavLink> </li>
          {/* <li className="li_menu"> <NavLink to="/Contact"className="item" activeClassName="active" > Contact </NavLink> </li> */}
        </ul>
        <img className="icon_menu" src={Menu} alt="menu" onClick={handleShow}/>
      </nav>
      </header>
    )
} 

export default NavMenu