import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';
import AdminLayout from "layouts/Admin.js";
import {LoginPage} from "./login/LoginPage";
import {RegisterPage} from "./Register/register";

import { PrivateRoute } from './components/PrivateRoute';




class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
         <div>
              {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                       <Router history={history}>
                          <Switch>
                            <Route path="/login" component={LoginPage} />
                            {/* <PrivateRoute path="/admin" render={(props) => <AdminLayout {...props} />} /> */}
                            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                            <Route path="/register" component={RegisterPage} />     
                            <Redirect from="/" to="/admin/dashboard" />
                          </Switch>
                      </Router>
         </div>

        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };