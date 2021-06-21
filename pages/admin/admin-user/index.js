let bodyTable = '';
getUserOnAdmin();

function getUserOnAdmin() {

    let list = '';
    getData('user', null, true, (e) => {
        const mang = e.data.sort((a, b) => b.type > a.type ? 1 : -1);
        for (let i = 0; i < mang.length; i++) {
            const nguoidung = mang[i];
            list += `
            <tr id="User-id_ref${nguoidung.username}">
                <td class="pt-3-half User-username " contenteditable="true">${nguoidung.username }</td>
                <td class="pt-3-half User-password " contenteditable="true">${nguoidung.password }</td>
                <td class="pt-3-half User-name" contenteditable="true">${nguoidung.name}</td>
                <td class="pt-3-half User-sdt" contenteditable="true">${nguoidung.sdt}</td>
                <td class="pt-3-half User-mail" contenteditable="true">${nguoidung.mail}</td>
                <td class="pt-3-half User-address" contenteditable="true">${nguoidung.address}</td>
                <td class="pt-3-half User-type" contenteditable="true">${nguoidung.type==1?'Admin':'Khách Hàng'}</td>
                
                <td>
                    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteUser('${nguoidung.username}')">Remove</button></span>
                </td>
                <td>
                    <span class="table-remove"><button type="button" class="btn btn-info btn-rounded btn-sm my-0" onclick="updateUser('${nguoidung.username}')">Update</button></span>
                </td>
            </tr>
            `
        }

        $('#body-table').html(list);
    }, (req) => {
        alert(req.responseJSON.message);
    });
}

function deleteUser(username) {
    const confirmDe = confirm('Bạn có thực sự muốn xóa người dùng này?');
    if (confirmDe) {
        delteData('User', { username: username }, true, (e) => {
            console.log(e);
            getUserOnAdmin();
            alert('Xóa thành công!');
        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    }
}

function updateUser(username, isAddNew = false) {
    const Userusername = $(`#User-id_ref${username}`).find('.User-username').text().trim();
    const Userpassword = $(`#User-id_ref${username}`).find('.User-password').text().trim();  
    const Username = $(`#User-id_ref${username}`).find('.User-name').text();
    const Usersdt = $(`#User-id_ref${username}`).find('.User-sdt').text();
    const Usermail = $(`#User-id_ref${username}`).find('.User-mail').text();
    const Useraddress = $(`#User-id_ref${username}`).find('.User-address').text();
    const Usertype = $(`#User-id_ref${username}`).find('.User-type').text();


    const body = {
        username: Userusername,
        name: Username,
        sdt: Usersdt,
        mail: Usermail,
        address: Useraddress,
        type: Usertype == 0 ? 0 : 1,
        last_time: Date.now() / 1000,
        password: Userpassword
    };

    if (isAddNew) {
        console.log(body)
        postData('User/index.php', body, null, true, (e) => {
            console.log(e);
            getUserOnAdmin();
            alert('Thêm thành công!');
        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    } else {
        putData('User/index.php', body, { id_ref: username }, true, (e) => {
            console.log(e);
            getUserOnAdmin();
            alert('Update thành công!');
        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    }

}

function addNew() {
    const id_refNew = Date.now();
    $('#body-table').append(`
        <tr id="User-id_ref${id_refNew}">
            <td class="pt-3-half User-username " contenteditable="true"></td>
            <td class="pt-3-half User-password " contenteditable="true"></td>
            <td class="pt-3-half User-name" contenteditable="true"></td>
            <td class="pt-3-half User-sdt" contenteditable="true"></td>
            <td class="pt-3-half User-mail" contenteditable="true"></td>
            <td class="pt-3-half User-address" contenteditable="true"></td>
            <td class="pt-3-half User-type" contenteditable="true"></td>
            
            <td>
                <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteUser(${id_refNew})">Remove</button></span>
            </td>
            <td>
                <span class="table-remove"><button type="button" class="btn btn-info btn-rounded btn-sm my-0" onclick="updateUser(${id_refNew}, true)">Update</button></span>
            </td>
        </tr>
    `);
}