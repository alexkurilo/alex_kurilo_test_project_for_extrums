const initial = "";

export default function saveIndex (state = initial, action){
    switch (action.type) {
        case "SAVE_INDEX":
            return action.payload;

        case "CLEAR_INDEX":
            return "";

        default:
            return state;
    }
}