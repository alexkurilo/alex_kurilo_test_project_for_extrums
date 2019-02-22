import {combineReducers} from 'redux';

import changedData from "./ChangedDataReducer";
import usersReducer from "./SaveUsersReducer";
import saveIndex from "./SaveIndexReducer";
import localDataReducer from "./LocalDataReducer";
import appDataReducer from "./AppDataReducer";

export default combineReducers({
    changedData,
    usersReducer,
    saveIndex,
    localDataReducer,
    appDataReducer
})