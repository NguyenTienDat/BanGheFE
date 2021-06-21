let bodyTable = '';
getProduct();

function getProduct() {

    let list = '';
    getData('product', null, true, (e) => {
        const mang = e.data;
        for (let i = 0; i < mang.length; i++) {
            const sanpham = mang[i];
            list += `
            <tr id="product-id${sanpham.id}">
                <td class="pt-3-half product-image" contenteditable="true"><image width="50" src="${sanpham.image}" /> ${sanpham.image}</td>
                <td class="pt-3-half product-name" contenteditable="true">${sanpham.name}</td>
                <td class="pt-3-half product-price" contenteditable="true">${sanpham.price}₫</td>
                <td class="pt-3-half product-size" contenteditable="true">${sanpham.size}</td>
                <td class="pt-3-half product-weight" contenteditable="true">${sanpham.weight}</td>
                <td class="pt-3-half product-color" contenteditable="true">${sanpham.color}</td>
                <td class="pt-3-half product-description" contenteditable="true">${sanpham.description}</td>
                <td>
                    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteProduct(${sanpham.id})">Remove</button></span>
                </td>
                <td>
                    <span class="table-remove"><button type="button" class="btn btn-info btn-rounded btn-sm my-0" onclick="updateProduct(${sanpham.id})">Update</button></span>
                </td>
            </tr>
            `
        }

        $('#body-table').html(list);
    }, (req) => {
        alert(req.responseJSON.message);
    });
}

function deleteProduct(id) {
    const confirmDe = confirm('Bạn có thực sự muốn xóa sản phẩm này?');
    if (confirmDe) {
        delteData('product', { id: id }, true, (e) => {
            console.log(e);
            getProduct();


        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    }
}

function updateProduct(id, isAddNew = false) {
    const productimage = $(`#product-id${id}`).find('.product-image').text();
    const productname = $(`#product-id${id}`).find('.product-name').text();
    const productprice = $(`#product-id${id}`).find('.product-price').text();
    const productsize = $(`#product-id${id}`).find('.product-size').text();
    const productweight = $(`#product-id${id}`).find('.product-weight').text();
    const productcolor = $(`#product-id${id}`).find('.product-color').text();
    const productdescription = $(`#product-id${id}`).find('.product-description').text();



    const body = {
        name: productname,
        price: productprice,
        size: productsize,
        weight: productweight,
        color: productcolor,
        description: productdescription,
        image: productimage,
    };

    if (isAddNew) {
        console.log(body)
        postData('product/index.php', body, null, true, (e) => {
            console.log(e);
            getProduct();

        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    } else {
        putData('product/index.php', body, { id: id }, true, (e) => {
            console.log(e);
            getProduct();

        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    }

}

function addNew() {
    const idNew = Date.now();
    $('#body-table').append(`
        <tr id="product-id${idNew}">
            <td class="pt-3-half product-image" contenteditable="true"></td>
            <td class="pt-3-half product-name" contenteditable="true"></td>
            <td class="pt-3-half product-price" contenteditable="true"></td>
            <td class="pt-3-half product-size" contenteditable="true"></td>
            <td class="pt-3-half product-weight" contenteditable="true"></td>
            <td class="pt-3-half product-color" contenteditable="true"></td>
            <td class="pt-3-half product-description" contenteditable="true"></td>
            <td>
                <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteProduct(${idNew})">Remove</button></span>
            </td>
            <td>
                <span class="table-remove"><button type="button" class="btn btn-info btn-rounded btn-sm my-0" onclick="updateProduct(${idNew}, true)">Update</button></span>
            </td>
        </tr>
    `);
}