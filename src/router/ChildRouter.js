import React, { Component } from 'react';
import { HashRouter as RouteIt, Switch, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
// import Home from '../screens/Home';
import Layout from '../layout/Layout';
import PrincipalDashboard from '../screens/student/PrincipalDashboard';
import ViewProfile from '../screens/student/profile/ViewProfile';
import EditProfile from '../screens/student/profile/EditProfile';
import NewAdmission from '../screens/student/admission/NewAdmission';
import AddClass from '../screens/student/classconfig/AddClass';
import ManageAdmission from '../screens/student/admission/ManageAdmission';

class ChildRouter extends Component {
    render() {
        return (

            <RouteIt>
                <Switch>
                    <Route path="/student/dashboard" component={PrincipalDashboard} />
                    <Route path="/student/profile/view" component={ViewProfile} />
                    <Route path="/student/profile/edit" component={EditProfile} />
                    <Route path="/student/admission/new" component={NewAdmission} />
                    <Route path="/student/promotion" component={AddClass} />
                    <Route path="/student/admission/manage" component={ManageAdmission} />
                    {/* <Route path="/student/promotion" component={} /> */}

                </Switch>
            </RouteIt>


        )
    }
}

export default ChildRouter;
