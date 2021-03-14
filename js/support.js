setTimeout(() => {
    getUser();
}, 1000);

function redirectPage(page, target = '_self') {
    window.open(page, target);
}

function getUser(field) {
    const user = JSON.parse(localStorage.getItem('USER'));

    if (!user) {
        setUser({ username: `Guest${Date.now()}` });
        username = getUser('username');
    }

    if (user) {
        $('#usernameLabel').text(user.username)
    } else {
        $('#usernameLabel').text('')
    }
    if (field) {
        return user && user[field];
    }
    return user;
}

function setUser(user) {
    localStorage.setItem('USER', JSON.stringify(user));
}

function getParamsFromURL(param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updatedUIChangeQuantity(input, num) {
    const sl = +($(input).val()) || 0;
    if (sl <= 1 && num == -1) {
        return;
    }
    let quantity = num + sl;
    $(input).val(quantity);
}

function logout(page) {
    localStorage.clear();
    redirectPage(page);
}