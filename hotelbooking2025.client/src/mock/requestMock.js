import hotelsMock from './hotelsMock';
//import authMock from './authMock';

const mocksUrls = {
//    "api/auth": authMock,
    "api/hotels": hotelsMock
};

function requestMock(url, params) {
    let { method, payload } = params;
    let usedUrl = url;
    if (method == "GET") {
        payload = getPayloadFromUrl(url);
        usedUrl = cutUrl(usedUrl);
    }
    return new Promise((resolve, reject) => {
        const result = mocksUrls[usedUrl][method](payload);
        //setTimeout(() => resolve(result), 2000);
        resolve(result);
    });
}

function cutUrl(url) {
    return url.slice(0, url.indexOf("?"));
}

function getPayloadFromUrl(url) {
    const array = url.slice(url.indexOf("?") + 1).split("&");
    let result = {};
    array.forEach(e => {
        const name = e.slice(0, e.indexOf("="));
        const value = e.slice(e.indexOf("=") + 1);
        result[name] = value;
    });
    return result;
}

export default requestMock;