import React from 'react';
import {connect} from 'react-redux';

import TextFieldsStandart from "../UI-Components/TextFieldStandart";
import MyButton from "../UI-Components/MyButton";

import "./UserComponent.css";

class UserComponent extends React.Component {
    componentWillMount ( ) {
        this.props.appDataReducer.forEach((item, index)=> {
            if (item.username === this.props.match.params.user) this.index = index;
        })
    }

    index;

    ReadUsername = (event) => {
        this.props.onChangeData({username: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadName = (event) => {
        this.props.onChangeData({name: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadPhone = (event) => {
        this.props.onChangeData({phone: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadEmail = (event) => {
        this.props.onChangeData({email: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadWebsite = (event) => {
        this.props.onChangeData({website: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadCity = (event) => {
        this.props.onChangeData({city: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadStreet = (event) => {
        this.props.onChangeData({street: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadSuite = (event) => {
        this.props.onChangeData({suite: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadZipcode = (event) => {
        this.props.onChangeData({zipcode: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadCompanyName = (event) => {
        this.props.onChangeData({companyname: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadCatchPhrase = (event) => {
        this.props.onChangeData({catchPhrase: event, id : this.props.appDataReducer[this.index].id});
    };

    ReadBS = (event) => {
        this.props.onChangeData({bs: event, id : this.props.appDataReducer[this.index].id});
    };

    render(){
        return (
            <form className={"sectionWindow"}
            >
                <center><h1>{this.props.appDataReducer[this.index].username}</h1></center>
                <div className={"usernameString"}>
                    <section className={"headline"}>User : </section>
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].username}
                                        placeholder = "username"
                                        readfield={this.ReadUsername}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].name}
                                        placeholder = "name"
                                        readfield={this.ReadName}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].phone}
                                        placeholder = "phone"
                                        readfield={this.ReadPhone}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].email}
                                        placeholder = "email"
                                        readfield={this.ReadEmail}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].website}
                                        placeholder = "website"
                                        readfield={this.ReadWebsite}
                    />
                </div>

                <div className={"addressString"}>
                    <section className={"headline"}>Address : </section>
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].address.city}
                                        placeholder = "city"
                                        readfield={this.ReadCity}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].address.street}
                                        placeholder = "street"
                                        readfield={this.ReadStreet}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].address.suite}
                                        placeholder = "suite"
                                        readfield={this.ReadSuite}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].address.zipcode}
                                        placeholder = "zipcode"
                                        readfield={this.ReadZipcode}
                    />
                </div>
                <div className={"companyString"}>
                    <section  className={"headline"}>Company : </section>
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].company.name}
                                        placeholder = "name"
                                        readfield={this.ReadCompanyName}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].company.catchPhrase}
                                        placeholder = "catchPhrase"
                                        readfield={this.ReadCatchPhrase}
                    />
                    <TextFieldsStandart value = {this.props.appDataReducer[this.index].company.bs}
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
        appDataReducer: state.appDataReducer
    }),
    dispatch => ({
        onChangeData: (data) => {
            const payload = data;
            dispatch({type: "ADD_DATA", payload})
        }
    })
)(UserComponent);