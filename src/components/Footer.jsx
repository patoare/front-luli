import "../App.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {

    const location = useLocation();

    let footerStyle;
    if(location.pathname === '/') {
        footerStyle = 'home-footer'
    } else {
        footerStyle = 'other-footer'
    }


    return (
        <>
        <div className={`Footer ${footerStyle}`}>
            <Link to='/' className="txtLogo"><h2>Luli Frenkel </h2></Link>
            <Link className="txtFooter2" to="https://www.instagram.com/lulifrenkel/" target="_blank" rel="noopener noreferrer">
               <h3>Instagram</h3>
               </Link>
               <div  className="txtFooter3"><h3>luli@gmail.com</h3></div>
               
        </div>
        </>
    )
}


export default Footer;