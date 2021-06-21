function login() {
    const username = $('#username').val();
    const password = $('#pass').val();
    const data = { username: username, password: password };
    postData('login.php', data, null, false, (e) => {
        console.log(e);
        localStorage.setItem('USER', JSON.stringify(data));

        getData('user', { username: username }, true, res => {
            if (res && res.data) {
                localStorage.setItem('USER', JSON.stringify(res.data));

                if (e.data.type == 1) {
                    redirectPage('../admin/index.html');
                } else {
                    redirectPage('../index.html')
                }
            }
        });

    }, (req) => {
        alert(req.responseJSON.message);
    });
}