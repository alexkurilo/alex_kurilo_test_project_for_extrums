import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

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
        response.data.forEach(item => {
            item.openModal = false;
        });
        const users = response.data;

        yield put({ type: "API_CALL_SUCCESS", users });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}