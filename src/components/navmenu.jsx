import {NavLink} from "react-router-dom"
import Logo from "../assets/img/Logo.jpg" 
import "../styles/navmenu.css"

const NavMenu = () => {
    return (
    <>
      <nav className="menu">
        <ul>
          <li className="li_menu"> <NavLink to="/" > <img src={Logo} alt="Logotipo" className="logo"/> </NavLink> </li>
          <li className="li_menu"> <NavLink to="/Projects" className="item" activeClassName="active"> Projects </NavLink> </li>
          <li className="li_menu"> <NavLink to="/About" className="item" activeClassName="active"> About </NavLink> </li>
          <li className="li_menu"> <NavLink to="/Contact"className="item" activeClassName="active"> Contact </NavLink> </li>
        </ul>
      </nav>
    </>
    )
}

export default NavMenu