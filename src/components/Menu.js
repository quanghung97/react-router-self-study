import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

const menus = [
    {
        name : 'Trang chủ',
        to : '/',
        exact : true
    },
    {
        name : 'Gioi thieu',
        to : '/about',
        exact : false
    },
    {
        name : 'Lien he',
        to : '/contact',
        exact : false
    },
    {
        name : 'San Pham',
        to : '/products',
        exact : false
    }
];

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
                            {this.showMenus(menus)}
                     </ul>
            </nav>
    );
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return(
                    <MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/>
                )
            });
        }
        return result
    }
}

export default Menu;
