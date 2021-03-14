function getCartByUserName() {
    const username = getUser('username');
    getData(`cart/index.php`, { username: username }, true, (e) => {
        if (e && e.message == 'success') {
            let ls = '';
            let tamTinh = 0;
            console.log(e);
            for (let i = 0; i < e.data.length; i++) {
                const item = e.data[i];
                ls += `
                <div class="sp">
                    <div class="giohang-img"><img src="${item.image}" width="100px" height="100px"></div>
                    <p class="text5"><i>${item.name}</i></p>

                    <div class="muahang-wrap">
                        <div class="soluong-btn">
                            <button type="button" class="giamsl" onclick="changeQuantityCart('#quan${item.id}', -1, ${item.product_id})">-</button>
                            <input type="text" id="quan${item.id}" value="${item.quantity}" min="1" data-id="Quantity" aria-label="quantity" pattern="[0-9]*" name="quantity" id="Quantity">
                            <button type="button" class="tangsl" onclick="changeQuantityCart('#quan${item.id}', 1, ${item.product_id})">+</button>
                        </div>
                    </div>
                    <div class="text">${item.price}</div>
                </div>
                `;

                tamTinh += (+item.price || 1) * (+item.quantity || 1);
            }

            $('#tam-tinh-tien').html(numberWithCommas(tamTinh) + 'đ');
            $('#tong-tien').html(numberWithCommas(tamTinh) + 'đ');

            $('#cart-list').html(ls);
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
getCartByUserName();