import {combineReducers} from 'redux';

import changedData from "./ChangedDataReducer";
import usersReducer from "./SaveUsersReducer";
import saveIndex from "./SaveIndexReducer";

export default combineReducers({
    changedData,
    usersReducer,
    saveIndex
})