import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to} exact={activeOnlyWhenExact} children={() => {

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
                                <li>
                                    <NavLink activeStyle={{
                                        fontWeight: 'bold',
                                        color: 'red'
                                       }} exact to="/" className="my-link">Trang chủ</NavLink>
                                </li>
                                <li>
                                   <NavLink activeStyle={{
                                       fontWeight: 'bold',
                                       color: 'red'
                                      }} to="/about" className="my-link">about</NavLink>
                                </li>
                                <li>
                                   <NavLink activeStyle={{
                                       fontWeight: 'bold',
                                       color: 'red'
                                      }} to="/contact" className="my-link">Contact</NavLink>
                                </li>
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
