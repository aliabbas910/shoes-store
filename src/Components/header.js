import { Link, NavLink } from "react-router-dom";
import "../App.css";
import logo from "./nike_logo.png"

const Header = () => {
    return <>
    <div className="row">
        <div className="col-md-1">
            <Link className='nav-item nav-link' to="/">
                <img src={logo} alt="" className="logo" />
            </Link>
        </div>
        <div className="col-md-10">
        <ul className="nav justify-content-center sticky-top" style={{background:"white"}}>
            <NavLink className='nav-item nav-link text-dark' to="/">Home</NavLink>
            <NavLink className='nav-item nav-link text-dark' to="/Launch">Launch</NavLink>
        </ul>

        </div>
    </div>

    </>
}

export default Header;