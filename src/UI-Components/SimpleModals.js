import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class SimpleModal extends React.Component {
    handleClose = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.onCloseModal([false, this.props.index]);
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.usersList[this.props.index].openModal}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                            {this.props.item.username}
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Would you like to change personal information of {this.props.item.username}.
                        </Typography>
                        <Button onClick={this.handleClose}>
                            <Link   to={"/"+this.props.item.username}
                                    className={"link"}
                                    index = {this.props.index}
                            >
                                Yes, I wish
                            </Link>
                        </Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = connect(
    (state) => ({
        usersList: state.usersList
    }),

    dispatch => ({
        onCloseModal: (data) => {
            const payload = data;
            dispatch({type: "CLOSE_MODAL", payload})
        }
    })
)(withStyles(styles)(SimpleModal));

export default SimpleModalWrapped;