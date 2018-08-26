import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtUsername : '',
            txtPassword : ''
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        });
    }

    onLogin = (event) => {
        event.preventDefault();
        var { txtPassword, txtUsername } = this.state;
        if ( txtUsername === 'admin' && txtPassword === 'admin' ) {
            localStorage.setItem('user', JSON.stringify({
                username : txtUsername,
                password : txtPassword
            }));
        }
        console.log(this.state.txtUsername);
        console.log(this.state.txtPassword);
    }

    render() {
        var { txtPassword, txtUsername } = this.state;
        var loggedInUser = localStorage.getItem('user');
        if (loggedInUser !== null){
            var { location } = this.props;
            // console.log(location);
            return <Redirect to={
                {
                    pathname : '/products',
                    state : {
                        from : location
                    }
                }
            } />
        }



        return (
            <div className="row">
                     <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <form onSubmit = {this.onLogin}>
                                 <legend>Login</legend>

                                 <div className="form-group">
                                    <label >username</label>
                                    <input
                                        type="text"
                                        name="txtUsername"
                                        className="form-control"
                                        value = {txtUsername}
                                        placeholder="Input field" onChange={this.onChange}/>
                                 </div>

                                 <div className="form-group">
                                    <label >password</label>
                                    <input
                                        type="password"
                                        name="txtPassword"
                                        className="form-control"
                                        value = {txtPassword}
                                        placeholder="Input field" onChange={this.onChange}/>
                                 </div>


                                 <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                     </div>
            </div>
    );
    }
}

export default Login;
