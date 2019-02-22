const initialState = {
    fetching: false,
    users: [],
    error: null
};

export default function usersReducer (state = initialState, action) {
    switch (action.type) {
        case "API_CALL_REQUEST":
            return { ...state, fetching: true, error: null };

        case "API_CALL_SUCCESS":
            return { ...state, fetching: false, users: action.users };

        case "API_CALL_FAILURE":
            return { ...state, fetching: false, users: [], error: action.error };

        default:
            return state;
    }
}