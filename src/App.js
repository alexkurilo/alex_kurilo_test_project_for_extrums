import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import ListComponent from "./Components/ListComponent";
import UserComponent from "./Components/UserComponent";

import "./App.css";

//const UrlApi = "http://reqres.in/api/users/2";
const UrlApi = "https://jsonplaceholder.typicode.com/users";

class App extends Component {
    componentWillMount ( ) {
        if (this.props.usersList.length === 0){
            fetch(`${UrlApi}`)
                .then((response) => response.json())
                .then((response) => this.props.onSaveUsersList(response))
                .catch( alert )
        }
    };

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path = '/' component = {ListComponent}/>
                    <Route path = '/user/:user' component = {UserComponent} />
                </Switch>
            </div>
        );
    }
}

export default connect(
    state => ({
        usersList: state.usersList
    }),
    dispatch => ({
        onSaveUsersList: (data) => {
            const payload = data;
            dispatch({type: "SAVE_USERS_LIST", payload})
        }
    })
)(App);
