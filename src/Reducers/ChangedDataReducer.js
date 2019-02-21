const initial = {};

export default function changedData (state = initial, action){
    switch (action.type) {
        case "ADD_DATA":
            Object.assign(state, action.payload);
            return state;

        case "CLEAR_DATA":
            return {};

        default:
            return state;
    }
}