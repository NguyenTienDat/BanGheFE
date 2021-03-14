function getProduct() {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const productId = url.searchParams.get("product-id") || 1;

    getData(`product`, { id: productId }, true, (e) => {
        const product = e.data;
        $('#label-name').html(`${product.name}`);
        $('#label-name-des').html(`${product.name}`);

        $('#label-gia').html(`${product.price}`);

        $('#label-des').html(`${product.description}`);
        $('#label-size').html(`>  Kích thước: ${product.size}`);
        $('#label-color').html(`> Màu sắc: ${product.color}`);
        $('#label-weight').html(`> Nặng: ${product.weight}`);
        $('#img-src').attr('src', `${product.image}`);
    }, (req) => {
        alert(req.responseJSON.message);
    });
}

function addToCart(isBuyNow) {
    const productId = getParamsFromURL("product-id") || 1;
    let username = getUser('username');

    const quantity = +($('#input-quantity').val()) || 0;

    let body = {
        "product_id": +productId,
        "username": username,
        "quantity": quantity,
        "Ngay": new Date().toISOString().slice(0, 10).replace('T', ' ')
    }
    getData('cart/index.php', body, true, e => {
        if (e && e.data && e.data.length > 0) { // edit
            body = e.data[0];

            body.quantity = +(e.data[0].quantity) + quantity;
            putData(`cart/index.php`, body, { id: body.id }, true, (e) => {
                if (e && e.message == 'success') {
                    redirectPage(isBuyNow ? '../thanhtoan/Thanhtoan.html' : '../giohang/giohang.html');
                }
            }, (req) => {
                if (failCallBack) { failCallBack(); }
            });
        } else { // add
            postData(`cart/index.php`, body, null, true, (e) => {
                if (e && e.message == 'success') {
                    redirectPage(isBuyNow ? '../thanhtoan/Thanhtoan.html' : '../giohang/giohang.html');
                }
            }, (req) => {
                if (failCallBack) { failCallBack(); }
            });
        }
    }, (req) => {
        alert("ERROR!");
    });
}

getProduct();