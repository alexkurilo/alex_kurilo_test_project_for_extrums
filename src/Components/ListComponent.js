import React from 'react';
import {connect} from 'react-redux';
import SimpleModal from "../UI-Components/SimpleModals";

import "./ListComponent.css";

const ListComponent = ({appDataReducer, onOpenModal, onSaveIndex}) => {
    const onclickfunc = (item, index) => {
        onOpenModal([true, index]);
        onSaveIndex(index);
    };

    const ShowList = (data) => {
        if (data.length !== 0){
            return (
                <div className="listWindow">
                    {data.map((item, index) =>
                        <div className="listSection"
                             key={index}
                             onClick={()=> onclickfunc(item, index)}
                        >
                            <SimpleModal    item = {item}
                                            index = {index}
                                            openModal = {item.openModal}
                            />
                            <section className="names">
                                {item.username}
                            </section>
                        </div>
                    )}
                </div>
            );
        }
    };

    return (
        <div className={"sectionWindow"}>
            {ShowList(appDataReducer)}
        </div>
    );
};

export default connect(
    state => ({
        appDataReducer: state.appDataReducer
    }),
    dispatch => ({
        onOpenModal: (data) => {
            const payload = data;
            dispatch({type: "OPEN_MODAL", payload})
        },
        onSaveIndex: (data) => {
            const payload = data;
            dispatch({type: "SAVE_INDEX", payload})
        }
    })
)(ListComponent);