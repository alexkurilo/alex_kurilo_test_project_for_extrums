import {combineReducers} from 'redux';

import usersList from "./SaveUsersLisrReducer";
import changedData from "./ChangedDataReducer";

export default combineReducers({
    usersList,
    changedData
})