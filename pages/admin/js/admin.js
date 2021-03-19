function getBill(from, to) {
    const params = {};
    if (from && to) {
        params.from = from;
        params.to = to;
    }
    getData(`bill/index.php`, params, true, (e) => {

        if (e && e.message == 'success') {
            let ls = ''
            console.log(e);
            for (let i = 0; i < e.data.length; i++) {

                const item = e.data[i];
                ls += `
                
                <tr role="row" class="odd">
                <td class="sorting_1">
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">${item.name}</font>
                    </font>
                </td>
                <td>
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">${item.sdt}</font>
                    </font>
                </td>
                <td>
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">${item.Tongtien}</font>
                    </font>
                </td>
                <td>
                    <font style="vertical-align: inherit;">
                        <font style="vertical-align: inherit;">${item.Ngay}</font>
                    </font>
                </td>

            </tr>

                `;
            }

            // $('#tam-tinh-tien').html(numberWithCommas(tamTinh) + 'đ');
            // $('#tong-tien').html(numberWithCommas(tamTinh) + 'đ');

            $('#bill-list').html(ls);
        }
    }, (req) => {
        alert("ERROR!");
    });
}


function changeQuantityCart(input, num, productId) {
    updatedUIChangeQuantity(input, num);
    let username = getUser('username');

    let body = {
        "product_id": +productId,
        "username": username,
        "Ngay": new Date().toISOString().slice(0, 10).replace('T', ' ')
    }
    setTimeout(function() {
        getData('cart/index.php', body, true, e => {
            const quantity = +($(input).val()) || 0;
            if (e && e.data && e.data.length > 0) { // edit
                body.id = e.data[0].id;
                body.quantity = quantity;
                putData(`cart/index.php`, body, { id: body.id }, true, (e) => {
                    if (e && e.message == 'success') {
                        getCartByUserName();
                    }
                }, (req) => {
                    alert("ERROR!");
                });
            }
        }, (req) => {
            alert("ERROR!");
        });
    }, 500);
}
getBill();