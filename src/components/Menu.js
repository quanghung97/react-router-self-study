import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
//customer link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to} exact={activeOnlyWhenExact} children={( { match } ) => {
                var active = match ? 'active abc' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link to={to} className="my-link">{label}</Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <nav className="navbar">

                     <ul className="nav navbar-nav">

                            <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true}/>


                           <MenuLink label="about" to="/about" activeOnlyWhenExact={false}/>


                           <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false}/>

                     </ul>
            </nav>
    );
    }
}

export default Menu;
