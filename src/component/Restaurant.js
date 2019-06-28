import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restaurantRegistration } from '../redux/actions/authAction';
import Navbar from './Navbar';


class Restaurant extends Component {
    constructor()
    {
        super();
        this.state={
            fullName: "",
            email:"",
            certificate:"",
            restaurant:"",
            country:"",
            city:"",
            password:"",
            confrimpassword:""

        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.userData)
        {
            this.props.history.push("/resturantdashboard");
        }
    }


    imagehandle = (event)=>{
        this.setState({certificate: event.target.files[0]})
    }

    changeHandle = name => event =>{
        this.setState({[name]: event.target.value})
    }

    handleSubmit = () =>{
        const {fullName,email,certificate,restaurant,country,city,password,confrimpassword} = this.state;
        // console.log({fullName,email,certificate,restaurant,country,city,password,confrimpassword})
        this.props.restaurantRegistration({fullName,email,certificate,restaurant,country,city,password,confrimpassword})
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
                                    <h3 className="text-center text-info">RESTAURANT-SIGNUP</h3>
                                    <div className="form-group">
                                        <label for="username" className="text-info">Username:</label><br></br>
                                        <input type="text" name="fullname" onChange={this.changeHandle("fullName")}  className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Email:</label><br></br>
                                        <input type="text" name="email" onChange={this.changeHandle("email")}  className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Restaurant:</label><br></br>
                                        <input type="text" name="restaurant"  onChange={this.changeHandle("restaurant")} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">Country:</label><br></br>
                                        <input type="text" name="country" onChange={this.changeHandle("country")} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="text-info">City:</label><br></br>
                                        <input type="text" name="city" onChange={this.changeHandle("city")}  className="form-control" />
                                    </div>
                                    <div className="form-group">
                                    <label  className="text-info">Certificate:</label><br></br>
                                    <div class="md-form">
                                        <div class="file-field">
                                            <div class="btn btn-primary btn-sm float-left">
                                                <span>Choose file</span>
                                                <input type="file" name="certificate" onChange={this.imagehandle} />
                                            </div>
                                        </div>
                                    </div>
                                    </div><br></br>
                                    <div class="form-group"><br></br>
                                        <label for="password" className="text-info">Password:</label><br></br>
                                        <input type="password" name="password" onChange={this.changeHandle("password")} className="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="password" className="text-info">ConfrimPassword:</label><br></br>
                                        <input type="password" name="confrimpassword" onChange={this.changeHandle("confrimpassword")} className="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="remember-me" className="text-info"><span>Remember me</span>
                                            <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br></br>
                                        <input type="button" name="submit" value="submit" className="btn btn-info btn-md" onClick={this.handleSubmit} />
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
        restaurantRegistration: (data) => dispatch(restaurantRegistration(data))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)( Restaurant );