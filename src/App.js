import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    {/* Menu */}
                    <nav className="navbar">

                             <ul className="nav navbar-nav">

                                    <MenuLink label="Trang chủ" to="/" activeOnlyWhenExact={true}/>


                                   <MenuLink label="about" to="/about" activeOnlyWhenExact={false}/>


                                   <MenuLink label="Contact" to="/contact" activeOnlyWhenExact={false}/>

                             </ul>
                    </nav>
                    {/* Nội dung */}
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path = "/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default App;
