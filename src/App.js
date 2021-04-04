import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './components';
import { Home } from './components/Home/home';
import { LoginPage } from './components/pages/login';
import { RegisterPage } from './components/pages/register';
import { UserPage } from './components/pages/user';
import { PostPage } from './components/pages/post';
import { NewPostPage } from './components/pages/newPost';

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
                                <PrivateRoute exact path="/" component={Home} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />                             
                                <Route path="/user" component={UserPage} />
                                <Route path="/post" component={PostPage} />
                                <Route path="/newPost" component={NewPostPage} />


                                <Redirect from="*" to="/" />
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