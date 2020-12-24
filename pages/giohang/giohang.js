function saveCartStorage(cart) {
    const cartList = JSON.parse(localStorage.getItem("CART_LIST")) || [];
    cartList.push(cart);
    localStorage.setItem("CART_LIST", JSON.stringify(cartList));
}

function getCartByUserName() {
    const username = getUser('username');
    getData(`cart/index.php`, { username: username }, true, (e) => {
        if (e && e.message == 'success') {
            let ls = '';
            console.log(e);
            for (let i = 0; i < e.data.length; i++) {
                const item = e.data[i];
                ls += `
                <div class="sp">
                    <div class="giohang-img"><img src="${item.image}" width="100px" height="100px"></div>
                    <p class="text5"><i>${item.name}</i></p>

                    <div class="muahang-wrap">
                        <div class="soluong-btn">
                            <button type="button" class="giamsl">-</button>
                            <input type="text" value="${item.quantity}" min="1" data-id="Quantity" aria-label="quantity" pattern="[0-9]*" name="quantity" id="Quantity">
                            <button type="button" class="tangsl">+</button>
                        </div>
                    </div>
                    <div class="text">${item.price}</div>
                </div>
                `;

            }
            $('#cart-list').html(ls);
        }
    }, (req) => {
        alert("ERROR!");
    });
}

getCartByUserName();