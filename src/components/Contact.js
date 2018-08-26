import React, {Component} from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            isChecked : false
        }
    }

    onClick = (isChecked) => {
        this.setState({
            isChecked : isChecked
        });
    }

    render() {
        var {isChecked} = this.state;
        return (

            <div>
                Đây là liên hệ
                <button type="button" className="btn btn-large btn-block btn-info" onClick={()=>this.onClick(false)}>Cho Phep</button> <br />
                <button type="button" className="btn btn-large btn-block btn-danger" onClick={()=>this.onClick(true)}>Khong cho phep</button>
                <Prompt
                    when = {isChecked}
                    message = { location => (`Ban chac chan di den ${location.pathname}`) }
                />
            </div>
    );
    }
}

export default Contact;
