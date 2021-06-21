let bodyTable = '';
getProductCategory();

function getProductCategory() {

    let list = '';
    getData('product-category', null, true, (e) => {
        const mang = e.data;
        for (let i = 0; i < mang.length; i++) {
            const sanpham = mang[i];
            list += `
            <tr id="product-id${sanpham.id}">
                <td class="pt-3-half product-category-id" contenteditable="false">${sanpham.id}</td>
                <td class="pt-3-half product-category-image" contenteditable="true"><image width="50" src="${sanpham.image}" /> ${sanpham.image}</td>
                <td class="pt-3-half product-name" contenteditable="true">${sanpham.name}</td>
                <td>
                    <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteProductCategory(${sanpham.id})">Remove</button></span>
                </td>
                <td>
                    <span class="table-remove"><button type="button" class="btn btn-info btn-rounded btn-sm my-0" onclick="updateProductCategory(${sanpham.id})">Update</button></span>
                </td>
            </tr>
            `
        }

        $('#body-table').html(list);
    }, (req) => {
        alert(req.responseJSON.message);
    });
}

function deleteProductCategory(id) {
    const confirmDe = confirm('Bạn có thực sự muốn xóa loại sản phẩm này?');
    if (confirmDe) {
        delteData('product-category', { id: id }, true, (e) => {
            console.log(e);
            getProductCategory();
            alert('Xóa thành công!');
        }, (req) => {
            console.log(req);
            // alert(req.responseJSON.message);
        });
    }
}

function updateProductCategory(id, isAddNew = false) {
    const productimage = $(`#product-id${id}`).find('.product-category-image').text();
    const productname = $(`#product-id${id}`).find('.product-name').text();

    const body = {
        name: productname,
        image: productimage,
    };

    if (isAddNew) {
        console.log(body)
        postData('product-category/index.php', body, null, true, (e) => {
            console.log(e);
            getProductCategory();
            alert('Thêm thành công!');
        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    } else {
        putData('product-category/index.php', body, { id: id }, true, (e) => {
            console.log(e);
            getProductCategory();
            alert('Sửa thành công!');
        }, (req) => {

            console.log(req);
            // alert(req.responseJSON.message);
        });
    }

}

function addNewProductCategory() {
    const idNew = Date.now();
    $('#body-table').append(`
        <tr id="product-id${idNew}">
            <td class="pt-3-half product-category-id" contenteditable="false"></td>
            <td class="pt-3-half product-category-image" contenteditable="true"></td>
            <td class="pt-3-half product-name" contenteditable="true"></td>
            <td>
                <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteProductCategory(${idNew})">Remove</button></span>
            </td>
            <td>
                <span class="table-remove"><button type="button" class="btn btn-info btn-rounded btn-sm my-0" onclick="updateProductCategory(${idNew}, true)">Update</button></span>
            </td>
        </tr>
    `);
}