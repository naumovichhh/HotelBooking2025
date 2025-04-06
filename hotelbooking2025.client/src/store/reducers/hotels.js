import { GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS, GET_HOTELS_FAILURE } from '../actions/hotels';

function hotels(state = { fulfilled: false }, action) {
    switch (action.type) {
        case GET_HOTELS_REQUEST:
            return { ...state, inProcess: true, fulfilled: false };
        case GET_HOTELS_SUCCESS:
            return { ...state, inProcess: false, fulfilled: true, list: action.hotels, failed: false };
        case GET_HOTELS_FAILURE:
            return { ...state, inProcess: false, failed: true };
        default:
            return state;
    }
}

export { hotels };