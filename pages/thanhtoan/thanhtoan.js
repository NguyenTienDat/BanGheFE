function getThanhToanByUserName() {
    const username = getUser('username');
    getData(`cart/index.php`, { username: username }, true, (e) => {
        if (e && e.message == 'success') {
            let ls = '';
            let tongtien = 0;
            console.log(e);
            for (let i = 0; i < e.data.length; i++) {
                const item = e.data[i];
                const tamtinh = (+item.quantity || 1) * (+item.price || 1);
                tongtien += tamtinh;
                ls += `
                <div class="xacnhan">
                    <div class="xn-wrap">
                        <p class="xn"> Tên sản phẩm : </p>
                        <p class="xn"><i> ${item.name} </i></p>
                    </div>
                    <div class="xn-wrap">
                        <p class="xn"> Số lượng : </p>
                        <p class="xn"><i> ${item.quantity} </i></p>
                    </div>
                    <div class="xn-wrap">
                        <p class="xn"> Tạm tính : </p>
                        <p class="xn"><i> ${numberWithCommas(tamtinh)} đ </i></p>
                    </div>
                   
                   
                </div>
                `;
            }

            ls += `
            <div>
                <div class="gach1"></div>
            </div>
            <div class="xn-wrap">
                <p class="xn"> Tổng tiền : </p>
                <p class="xn"><i> ${numberWithCommas(tongtien)} đ</i></p>
            </div>
            `;
            $('#mat-hang').html(ls);
        }
    }, (req) => {
        alert("ERROR!");
    });
}

function thanhToan() {

}

$(function() {
    getThanhToanByUserName();
    const user = getUser();
    let ttdonHang = '';
    if (user && user.last_time) { // login
        ttdonHang = `
        <div>
            <p><input class="text" type="text" disabled placeholder="Họ và Tên" required name="Hoten" value="${user.name}"></p>
            <p><input class="text" type="text" disabled placeholder="Email" required name="Email" value="${user.mail}"></p>
            <p><input class="text" type="text" disabled placeholder="Số Điện Thoại" required name="SDT" value="${user.sdt}"></p>
            <p><input class="text" type="text" disabled placeholder="Địa chỉ" required name="Noidung" value="${user.address}"></p>
            <p><button class="btn-send" onclick="thanhToan()">THANH TOÁN</button></p>
        </div>
    `
        $('#thongtin-don-hang').html(ttdonHang);
    }
})