import React, { Component } from 'react';
import { HashRouter as RouteIt, Switch, Route } from 'react-router-dom';
import Step1 from '../screens/student/admission/admissionsteps/Step1';
import Step2 from '../screens/student/admission/admissionsteps/Step2';
import Step3 from '../screens/student/admission/admissionsteps/Step3';


class AdmissionMultistepRouter extends Component {
    render() {
        return (

            <RouteIt>
                <Switch>
                    {/* routing for mutistep form start*/}
                    <Route exact path="/student/admission/new/" component={Step1} />
                    <Route exact path="/student/admission/new/step1" component={Step1} />
                    <Route exact path="/student/admission/new/step2" component={Step2} />
                    <Route exact="/student/admission/new/step2" component={Step3} />
                </Switch>
            </RouteIt>


        )
    }
}

export default AdmissionMultistepRouter;
