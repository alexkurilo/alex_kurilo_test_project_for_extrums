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

        case "OPEN_MODAL":
            state.users[action.payload[1]].openModal = action.payload[0];
            return state;

        case "CLOSE_MODAL":
            state.users[action.payload[1]].openModal = action.payload[0];
            return state;

        case "CHANGE_DATA":
            if(action.payload[0].username !== undefined)state.users[action.payload[1]].username = action.payload[0].username;
            if(action.payload[0].name !== undefined)state.users[action.payload[1]].name = action.payload[0].name;
            if(action.payload[0].phone !== undefined)state.users[action.payload[1]].phone = action.payload[0].phone;
            if(action.payload[0].email !== undefined)state.users[action.payload[1]].email = action.payload[0].email;
            if(action.payload[0].website !== undefined)state.users[action.payload[1]].website = action.payload[0].website;
            if(action.payload[0].city !== undefined)state.users[action.payload[1]].address.city = action.payload[0].city;
            if(action.payload[0].street !== undefined)state.users[action.payload[1]].address.street = action.payload[0].street;
            if(action.payload[0].suite !== undefined)state.users[action.payload[1]].address.suite = action.payload[0].suite;
            if(action.payload[0].zipcode !== undefined)state.users[action.payload[1]].address.zipcode = action.payload[0].zipcode;
            if(action.payload[0].companyname !== undefined)state.users[action.payload[1]].company.name = action.payload[0].companyname;
            if(action.payload[0].catchPhrase !== undefined)state.users[action.payload[1]].company.catchPhrase = action.payload[0].catchPhrase;
            if(action.payload[0].bs !== undefined)state.users[action.payload[1]].company.bs = action.payload[0].bs;
            return state;
        default:
            return state;
    }
}