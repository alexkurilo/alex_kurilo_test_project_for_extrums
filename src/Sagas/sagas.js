import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import {localStorageKey, FetchDataFromLocalStorage} from "../LocalStorage/LocalStorage";

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchUsers() {
    return axios({
        method: "get",
        url: "https://jsonplaceholder.typicode.com/users"
    });
}

function* workerSaga() {
    try {
        const response = yield call(fetchUsers);
        const users = Object.assign([], response.data);
        yield put({ type: "API_CALL_SUCCESS", users });
        const localData = (localStorage[localStorageKey]) ? Object.assign({}, JSON.parse(localStorage[localStorageKey])) : {};
        if (Object.keys(localData).length !== 0){
            yield put({ type: "ADD_LOCAL_DATA", localData });
        }
        const appData = [];
        users.forEach((item)=> appData.push({...item}));
        FetchDataFromLocalStorage(appData, localData);
        yield put({ type: "ADD_APP_DATA", appData });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}