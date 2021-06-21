// const BASEURL = 'http://localhost/BAN_GHE/BanGheBE/api/';
const BASEURL = `${window.location.protocol}/${window.location.hostname}/BAN_GHE/BanGheBE/api/`;
const BASE_URL_PAGES = window.location.origin + '/pages/';
var TOKEN = '';

const postData = (url, body, params = null, isAuth = true, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }

    const headerAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'TOKEN': TOKEN,
        'Access-Control-Allow-Origin': '*',
        withCredentials: false

    };
    const headerNoAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    console.log('body', JSON.stringify(body));
    $.ajax({
        url: url,
        method: 'POST',
        data: JSON.stringify(body),
        headers: isAuth ? headerAuth : headerAuth,
        dataType: 'json',
        crossDomain: false,

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
}


const putData = (url, body, params = null, isAuth = true, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }

    const headerAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'TOKEN': TOKEN,
        'Access-Control-Allow-Origin': '*',
        xhrFields: {
            withCredentials: false
        },
    };
    const headerNoAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };
    $.ajax({
        url: url,
        crossDomain: false,
        method: 'PUT',
        data: JSON.stringify(body),
        headers: isAuth ? headerAuth : headerAuth,
        dataType: 'json',
        crossDomain: false,

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
}


const getData = (url, params, isAuth = true, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) { Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) }

    const headerAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'TOKEN': TOKEN,
        'Access-Control-Allow-Origin': '*',
        xhrFields: {
            withCredentials: false
        },
    };
    const headerNoAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    $.ajax({
        url: url,
        crossDomain: false,
        method: 'GET',
        headers: isAuth ? headerAuth : headerAuth,
        dataType: 'json',

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
}


const delteData = (url, params, isAuth = true, successCallback, failCallback) => {
    url = new URL(BASEURL + url);
    if (params) { Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) }

    const headerAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'TOKEN': TOKEN,
        'Access-Control-Allow-Origin': '*',
        xhrFields: {
            withCredentials: false
        },
    };
    const headerNoAuth = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    $.ajax({
        url: url,
        crossDomain: false,
        method: 'DELETE',
        headers: isAuth ? headerAuth : headerAuth,
        dataType: 'json',

        xhrFields: {
            withCredentials: false
        },
        success: successCallback,
        error: failCallback
    });
}