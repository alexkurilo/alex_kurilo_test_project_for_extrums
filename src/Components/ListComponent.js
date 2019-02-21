import React from 'react';
import {connect} from 'react-redux';
import SimpleModal from "../UI-Components/SimpleModals";

import "./ListComponent.css";

const ListComponent = ({usersList, onOpenModal}) => {
    const onclickfunc = (item, index) => {
        onOpenModal([true, index]);
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
            {ShowList(usersList)}
        </div>
    );
};

export default connect(
    state => ({
        usersList: state.usersList
    }),
    dispatch => ({
        onOpenModal: (data) => {
            const payload = data;
            dispatch({type: "OPEN_MODAL", payload})
        }
    })
)(ListComponent);