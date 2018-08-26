import React, {Component} from 'react';
import { BrowserRouter as NavLink } from "react-router-dom";

class Products extends Component {
    render() {
        var products = [
            {
                id : 1,
                name : 'iphone X',
                price : 3500000
            },
            {
                id : 2,
                name : 'Samsung galaxy s7',
                price : 121212
            },
            {
                id : 3,
                name : 'xiaomi redmi note 7',
                price : 1212213212
            }
        ];

        var { match } = this.props;
        console.log(match);

        var result = products.map((product, index)=>{
            return (
                <NavLink to="" key={index}>
                    <li className="list-group-item">
                        {product.id} = {product.name} - {product.price}
                    </li>
                </NavLink>
            )
        });

        return (
            <div className="container">
                <div className="row">
                         <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <ul className="list-group-item">
                                {result}
                            </ul>
                         </div>
                </div>
            </div>
    );
    }
}

export default Products;
