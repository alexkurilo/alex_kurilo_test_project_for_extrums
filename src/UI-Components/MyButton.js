import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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
        props.onClearData();
        props.history.push("/");
    };

    return (
        <Button className={classNames(props.classes.root, props.className)}
                style = {{backgroundColor: "#8B8682"}}
                onClick = {(event) => {HandleClick(event) }}
        >
            Save change information
        </Button>
    );
}

MyButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withRouter(connect(
    (state) => ({
        changedData: state.changedData
    }),

    dispatch => ({
        onChangeUserData: (data) => {
            const payload = data;
            dispatch({type: "CHANGE_DATA", payload})
        },
        onClearData: () => {
            dispatch({type: "CLEAR_DATA"})
        }
    })
)(withStyles(styles)(MyButton)));