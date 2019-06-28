import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userRegistration } from '../redux/actions/authAction';
import Navbar from './Navbar';


class Usersignup extends Component {
    constructor()
    {
        super();
        this.state={
            fullName: "",
            email:"",
            age:"",
            gender:"Male",
            country:"",
            city:"",
            password:"",
            confrimpassword:""

        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.userData)
        {
            this.props.history.push("/userdashboard");
        }
    }

    changeHandle = name => event =>{
        this.setState({[name]: event.target.value})
    }

    handleSubmit = () =>{
        const {fullName,email,restaurant,age,gender,country,city,password,confrimpassword} = this.state;
        // console.log({fullName,email,age,gender,restaurant,country,city,password,confrimpassword})
        this.props.userRegistration({fullName,email,age,gender,country,city,password,confrimpassword})
    }
    render() {
        return (

            <spa>

                <Navbar/>
            <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form id="login-form" className="form" action="" method="post">
                                <h3 className="text-center text-info">USER-SIGNUP</h3>
                                <div className="form-group">
                                    <label for="username" className="text-info">Username:</label><br></br>
                                    <input type="text" name="fullName" onChange={this.changeHandle("fullName")} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Email:</label><br></br>
                                    <input type="text" name="email" onChange={this.changeHandle("email")}  className="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label for="password" className="text-info">Gender:</label><br></br>
                                    <select class="form-control" name="gender" onChange={this.changeHandle("gender")}>
                                        <option value= "Male">Male</option>
                                        <option value= "Female">Female</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Age:</label><br></br>
                                    <input type="Number" name="age" onChange={this.changeHandle("age")}  className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">Country:</label><br></br>
                                    <input type="text" name="country" onChange={this.changeHandle("country")} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">City:</label><br></br>
                                    <input type="text" name="city" onChange={this.changeHandle("city")}  className="form-control"/>
                                </div> 
                                <div class="form-group">
                                    <label for="password" className="text-info">Password:</label><br></br>
                                    <input type="password" name="password" onChange={this.changeHandle("password")} className="form-control"/>
                                </div> 
                                <div class="form-group">
                                    <label for="password" className="text-info">ConfrimPassword:</label><br></br>
                                    <input type="password" name="confrimpassword" onChange={this.changeHandle("confrimpassword")} className="form-control"/>
                                </div>                                                                                              
                                <div class="form-group">
                                    <label for="remember-me" className="text-info"><span>Remember me</span> 
                                    <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br></br>
                                    <input  name="submit" className="btn btn-info btn-md" value="submit" onClick={this.handleSubmit}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </spa>
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
        userRegistration: (data) => dispatch(userRegistration(data))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)( Usersignup );