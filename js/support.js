setTimeout(() => {
    getUser();
}, 1000);

function redirectPage(page, target = '_self') {
    window.open(page, target);
}

function getUser(field) {
    const user = JSON.parse(localStorage.getItem('USER'));
    if (user) {
        $('#usernameLabel').text(user.username)
    } else {
        $('#usernameLabel').text('')
    }
    if (field) {
        return user && user[field];
    }
}

function setUser(user) {
    localStorage.setItem('USER', JSON.stringify(user));
}

function getParamsFromURL(param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}