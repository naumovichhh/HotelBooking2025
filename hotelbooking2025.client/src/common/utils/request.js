import requestMock from '@/mock/requestMock';

//function request(url, params) {
//    return requestMock(url, params);
//}

function realRequest(url, options) {
    //options.headers["Accept"] = "application/json";

    //if (store.getState().auth.authorized)
    //    options.headers.Authorization = "Bearer " + store.getState().auth.token;

    return fetch(url, options);
}

export default realRequest;