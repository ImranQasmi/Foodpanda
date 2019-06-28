import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/authAction';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class Userlogin extends Component {

    constructor()
    {
        super();
        this.state={
            email:"", 
            password:""
        }
    }

    submithandle = (event)=>{
        const {email, password} = this.state;
        this.props.signIn({email, password});
    }
    componentWillReceiveProps(nextProps){
     console.log(nextProps.userData)
        if(nextProps.userData)
        {
            if(nextProps.userData.userType == "restaurant")
            {
                this.props.history.push('/resturantdashboard')
            }
            else if(nextProps.userData.userType == "user")
            {
                this.props.history.push('/userdashboard')
            }
        }
    }
    changeHandle = name => event =>{
        this.setState({[name]: event.target.value})
    }    
    render() {
        return (
        <span>    
         <Navbar/>

        <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <div id="login-form" className="form" action="" method="post">
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Email:</label><br></br>
                                    <input type="text" name="email" onChange={this.changeHandle("email")} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Password:</label><br></br>
                                    <input type="password" name="password" onChange={this.changeHandle("password")} className="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label for="remember-me" className="text-info"><span>Remember me</span> 
                                    <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br></br>
                                    <input name="submit" className="btn btn-info btn-md" onClick={this.submithandle} value="submit"/>
                                </div>
                                <div id="register-link" className="text-right">
                                   <Link to="/userswitch"><a className="text-info">Register here</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </span>
        )
    }
}

const mapStateToProps = (state) =>{
    return({
        userData: state.authReducer.userData
    })
}

const mapDispatchToProps = (dispatch) =>{
    return({
        signIn: (data) => dispatch(signIn(data))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)( Userlogin );