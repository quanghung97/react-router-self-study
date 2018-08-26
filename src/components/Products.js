import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Product from './Product';
class Products extends Component {
    render() {
        var products = [
            {
                id : 1,
                slug : 'iphone',
                name : 'iphone X',
                price : 3500000
            },
            {
                id : 2,
                slug : 'samsung',
                name : 'Samsung galaxy s7',
                price : 121212
            },
            {
                id : 3,
                slug : 'xiaomi',
                name : 'xiaomi redmi note 7',
                price : 1212213212
            }
        ];

        var { match } = this.props;
        var url = match.url;
        // console.log(match);

        var result = products.map((product, index)=>{
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item">
                        {product.id} = {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        });

        var {location} = this.props;
        console.log(location);

        return (
            <div className="container">
                <div className="row">

                            <ul className="list-group-item">
                                {result}
                            </ul>

                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product}/>
                </div>
            </div>
    );
    }
}

export default Products;
