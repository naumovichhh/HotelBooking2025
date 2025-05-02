import request from '@/common/utils/request';

const GET_HOTELS_REQUEST = "GET_HOTELS_REQUEST";
const GET_HOTELS_SUCCESS = "GET_HOTELS_SUCCESS";
const GET_HOTELS_FAILURE = "GET_HOTELS_FAILURE";

export { GET_HOTELS_REQUEST, GET_HOTELS_SUCCESS, GET_HOTELS_FAILURE };

function requesting() {
    return {
        type: GET_HOTELS_REQUEST
    };
}

function success(hotels) {
    return {
        type: GET_HOTELS_SUCCESS,
        hotels
    };
}

function failure() {
    return {
        type: GET_HOTELS_FAILURE
    };
}

async function fetchHotelsSearch(dispatch, params) {
    dispatch(requesting());
    try {
        let response = await request("/api/hotels/search" + "?" + paramsToQuery(params), {
            method: "GET"
        });
        if (response.ok) dispatch(success(await response.json()));
        else throw new Error(response.statusText);
    }
    catch {
        dispatch(failure());
    }
}

async function fetchHotels(dispatch) {
    dispatch(requesting());
    try {
        let response = await request("/api/hotels", {
            method: "GET"
        });
        if (response.ok) dispatch(success(await response.json()));
        else throw new Error(response.statusText);
    }
    catch {
        dispatch(failure());
    }
}

function paramsToQuery(params) {
    return `country=${params.country}&locality=${params.locality}&fromDate=${params.fromDate}
&to=${params.toDate}&adult=${params.adultNum}&childNum=${params.childNum}`;
}

export { fetchHotels, fetchHotelsSearch };