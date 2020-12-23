function login() {
    const username = $('#username').val();
    const password = $('#pass').val();
    const data = { username: username, password: password };
    postData('login.php', data, null, false, (e) => {
        console.log(e);
        localStorage.setItem('USER', JSON.stringify(data));

        if (e.data.type == 1) {
            redirectPage('../admin/admin.html');
        } else {
            redirectPage('../../trangchu/Trangchu.html')
        }
    }, (req) => {
        alert(req.responseJSON.message);
    });
}