function thayDoiSoLuong(num) {
    console.log(num)
    const sl = +($('#input-quantity').val()) || 0;
    if (sl <= 1 && num == -1) {
        return;
    }
    $('#input-quantity').val(num + sl);
}


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

function addToCart() {
    const productId = getParamsFromURL("product-id") || 1;
    const sl = +($('#input-quantity').val()) || 0;
    let username = getUser('username');
    if (!username) {
        setUser({ username: `Guest${Date.now()}` });
        username = getUser('username');
    }
    const body = {
        "product_id": +productId,
        "username": username,
        "quantity": sl
    }
    postData(`cart/index.php`, body, null, true, (e) => {
        if (e && e.message == 'success') {
            saveCartStorage(body);
            redirectPage('../giohang/giohang.html');
        }
    }, (req) => {
        alert('ERROR!');
    });
}

getProduct();