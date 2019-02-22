import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { AddDataFromLocalStorage} from "../LocalStorage/LocalStorage";

const styles = theme => ({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: "2rem",
        width: "20rem",
        padding: '0 1.5rem',
        margin: '1.5rem 0.3rem'
    },
});

function MyButton(props) {
    const HandleClick =  () => {
        props.onChangeUserData([props.changedData, props.index]);
        const data = AddDataFromLocalStorage(props.changedData, props.localDataReducer);
        props.onChangeLocalData(data);
        props.onClearData();
    };

    return (
        <Button className={classNames(props.classes.root, props.className)}
                style = {{backgroundColor: "#8B8682"}}
                onClick = {(event) => {HandleClick(event) }}
        >
            <Link   to={"/"}
                    className={"link"}
            >
                Save change information
            </Link>
        </Button>
    );
}

MyButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default connect(
    (state) => ({
        changedData: state.changedData,
        localDataReducer: state.localDataReducer
    }),

    dispatch => ({
        onChangeUserData: (data) => {
            const payload = data;
            dispatch({type: "CHANGE_DATA", payload})
        },
        onChangeLocalData: (data) => {
            const payload = data;
            dispatch({type: "CHANGE_LOCAL_DATA", payload})
        },
        onClearData: () => {
            dispatch({type: "CLEAR_DATA"})
        }
    })
)(withStyles(styles)(MyButton));