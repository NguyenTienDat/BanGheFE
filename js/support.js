setTimeout(() => {
    getUser();
}, 1000);

function redirectPage(page, target = '_self') {
    window.open(page, target);
}

function getUser() {
    const user = JSON.parse(localStorage.getItem('USER'));
    if (user) {
        $('#usernameLabel').text(user.username)
    } else {
        $('#usernameLabel').text('')
    }
}