function signup() {
    const username = $('#username').val();
    const password = $('#password').val();
    const name = $('#name').val();
    const address = $('#address').val();
    const sdt = $('#sdt').val();
    const mail = $('#mail').val();
    const type = 0;
    const last_time = Date.now();
    const data = { username: username, password: password, name: name, address: address, sdt: sdt, mail: mail, type: type, last_time: last_time };
    console.log(data);
    postData('user/index.php', data, null, false, (e) => {
        console.log(e);

        if (e && e.message == "success") {
            localStorage.setItem('USER', JSON.stringify(data));
            redirectPage('../../trangchu/Trangchu.html');
        } else {
            alert("Username này đã tồn tại !");
        }
    }, (req) => {
        // alert(req.responseJSON.message);
        alert("Username này đã tồn tại !");
    });
}