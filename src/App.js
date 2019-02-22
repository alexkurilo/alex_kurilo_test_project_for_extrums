import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ListComponent from "./Components/ListComponent";
import UserComponent from "./Components/UserComponent";

import "./App.css";

class App extends Component {
    componentWillMount ( ) {
        if (this.props.users.length === 0) {
            this.props.onRequestUsers();
        }
    };

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact={true} path = '/:user' component = {UserComponent} />
                        <Route path = '/' component = {ListComponent}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    state => ({
        localDataReducer: state.localDataReducer,
        appDataReducer: state.appDataReducer,
        users: state.usersReducer.users
    }),
    dispatch => ({
        onRequestUsers: () =>
            dispatch({ type: "API_CALL_REQUEST" })
    })
)(App);
