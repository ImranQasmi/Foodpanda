import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Userlogin from './Userlogin'
import Usersignup from './Usersignup'
import Restaurant from './Restaurant'
import Restaurantdashboard from './Restuarantdashb'
import Switchcomponent from './Switchcomponent'
import userdashboard from './userdashboard'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Switch>
                    <Route exact path="/" component={Userlogin} />
                    <Route path="/usersignup" component={Usersignup} />
                    {/* <Route path="/userlogin" component={Userlogin} /> */}
                    <Route path="/resturantsignup" component={Restaurant} />
                    <Route path="/resturantdashboard" component={Restaurantdashboard} />
                    <Route path="/userdashboard" component={userdashboard}></Route>
                    <Route path="/userswitch" component={Switchcomponent} />
                </Switch>
            </Switch>
        </Router>
    )
}

export default Routes;