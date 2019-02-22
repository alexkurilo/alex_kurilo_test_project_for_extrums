import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandart from "../UI-Components/TextFieldStandart";
import MyButton from "../UI-Components/MyButton";

import "./UserComponent.css";

class UserComponent extends React.Component {
    componentWillMount ( ) {
        this.props.users.forEach((item, index)=> {
            if (item.username === this.props.match.params.user) this.index = index;
        })
    }

    index;

    ReadUsername = (event) => {
        this.props.onChangeData({username: event});
    };

    ReadName = (event) => {
        this.props.onChangeData({name: event});
    };

    ReadPhone = (event) => {
        this.props.onChangeData({phone: event});
    };

    ReadEmail = (event) => {
        this.props.onChangeData({email: event});
    };

    ReadWebsite = (event) => {
        this.props.onChangeData({website: event});
    };

    ReadCity = (event) => {
        this.props.onChangeData({city: event});
    };

    ReadStreet = (event) => {
        this.props.onChangeData({street: event});
    };

    ReadSuite = (event) => {
        this.props.onChangeData({suite: event});
    };

    ReadZipcode = (event) => {
        this.props.onChangeData({zipcode: event});
    };

    ReadCompanyName = (event) => {
        this.props.onChangeData({companyname: event});
    };

    ReadCatchPhrase = (event) => {
        this.props.onChangeData({catchPhrase: event});
    };

    ReadBS = (event) => {
        this.props.onChangeData({bs: event});
    };

    render(){
        return (
            <form className={"sectionWindow"}
            >
                <center><h1>{this.props.users[this.index].username}</h1></center>
                <div className={"usernameString"}>
                    <section className={"headline"}>User : </section>
                    <TextFieldsStandart value = {this.props.users[this.index].username}
                                        placeholder = "username"
                                        readfield={this.ReadUsername}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].name}
                                        placeholder = "name"
                                        readfield={this.ReadName}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].phone}
                                        placeholder = "phone"
                                        readfield={this.ReadPhone}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].email}
                                        placeholder = "email"
                                        readfield={this.ReadEmail}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].website}
                                        placeholder = "website"
                                        readfield={this.ReadWebsite}
                    />
                </div>

                <div className={"addressString"}>
                    <section className={"headline"}>Address : </section>
                    <TextFieldsStandart value = {this.props.users[this.index].address.city}
                                        placeholder = "city"
                                        readfield={this.ReadCity}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].address.street}
                                        placeholder = "street"
                                        readfield={this.ReadStreet}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].address.suite}
                                        placeholder = "suite"
                                        readfield={this.ReadSuite}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].address.zipcode}
                                        placeholder = "zipcode"
                                        readfield={this.ReadZipcode}
                    />
                </div>
                <div className={"companyString"}>
                    <section  className={"headline"}>Company : </section>
                    <TextFieldsStandart value = {this.props.users[this.index].company.name}
                                        placeholder = "name"
                                        readfield={this.ReadCompanyName}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].company.catchPhrase}
                                        placeholder = "catchPhrase"
                                        readfield={this.ReadCatchPhrase}
                    />
                    <TextFieldsStandart value = {this.props.users[this.index].company.bs}
                                        placeholder = "bs"
                                        readfield={this.ReadBS}
                    />
                </div>
                <div className={'button'}>
                    <MyButton index = {this.index}/>
                </div>
            </form>
        );
    }
};

export default connect(
    state => ({
        usersList: state.usersList,
        users: state.usersReducer.users,
    }),
    dispatch => ({
        onChangeData: (data) => {
            const payload = data;
            dispatch({type: "ADD_DATA", payload})
        }
    })
)(UserComponent);