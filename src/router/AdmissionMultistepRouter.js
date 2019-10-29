import React, { Component } from 'react';
import { HashRouter as RouteIt, Switch, Route } from 'react-router-dom';
import ParentForm from '../screens/student/admission/admissionsteps/ParentForm';
import StudentForm from '../screens/student/admission/admissionsteps/StudentForm';




class AdmissionMultistepRouter extends Component {
    render() {
        return (

            <RouteIt>
                <Switch>
                    {/* routing for mutistep form start*/}
                    <Route exact path="/student/admission/new/" component={ParentForm} />
                    <Route exact path="/student/admission/new/step1" component={ParentForm} />
                    <Route exact path="/student/admission/new/step2" component={StudentForm} />
                </Switch>
            </RouteIt>


        )
    }
}

export default AdmissionMultistepRouter;
