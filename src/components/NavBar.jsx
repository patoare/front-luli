import "../App.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {

    const location = useLocation();

    let navBarStyle;
    if(location.pathname === '/') {
        navBarStyle = 'home-nav'
    } else {
        navBarStyle = 'other-nav'
    }


    return (
        <>
        <div className={`NavBar ${navBarStyle}`}>
            <Link to='/' className="txtLogo"><h2>Luli Frenkel </h2></Link>
            <ul className="txtMenu">
                <li><Link to="/"> Home </Link> </li>
               

                <li className="dropDown">
                    <Link className="dropdown-btn"> Portfolio </Link>
                <ul className="dropDown-content"> 
                    <li> <Link to="/photos">  Photos </Link> </li>
                    <li> <Link to="/videos"> Videos </Link></li>
                 </ul>
                </li>
                
                <li><Link to="/contact"> Contact me </Link> </li>
                </ul>
        </div>
        </>
    )
}

export default NavBar;