const initialState = {};

export default function localDataReducer (state = initialState, action) {
    switch (action.type) {
        case "ADD_LOCAL_DATA":
            return {...action.localData};

        case "CHANGE_LOCAL_DATA":
            return {...action.payload};

        default:
            return state;
    }
}