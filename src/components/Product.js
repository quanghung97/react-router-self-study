import React, {Component} from 'react';

class Product extends Component {
    render() {
        var { match } = this.props;

        var name = match.params.slug;
        console.log(name);
        return (
            <div>
                Đây là chi tiet san pham {name}
            </div>
    );
    }
}

export default Product;
