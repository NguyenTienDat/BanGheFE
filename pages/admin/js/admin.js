let LIST = [];
let LIST_DISPLAY = [];
const PAGE_SIZE = 2;
let TOTAL_PAGE = 1;
let CURRENT_PAGE = 1;

function getBill(from, to) {
    const params = {};
    if (from && to) {
        params.from = from;
        params.to = to;
    }
    getData(`bill/index.php`, params, true, (e) => {
        if (e && e.message == 'success') {
            $('#count-bill').html(e.data.length);
            console.log(e);
            LIST = JSON.parse(JSON.stringify(e.data));
            renderList(e.data);
        }
    }, (req) => {
        alert("ERROR!");
    });
}

function renderList(list) {
    let ls = ''
    let doanhThu = 0;
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        doanhThu += +item.Tongtien || 0;
        ls += `
        
        <tr id="bill-id${item.id}" role="row" class="odd">
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
                    <font style="vertical-align: inherit;">${item.Ngay}</font>
                </font>
            </td>
            <td>
                <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">${numberWithCommas(item.Tongtien)}</font>
                </font>
            </td>
            <td style="text-align:center">
                <span class="table-remove"><button type="button" class="btn btn-danger btn-rounded btn-sm my-0" onclick="deleteBill(${item.id})">Remove</button></span>
            </td>
        </tr>

        `;
    }

    // $('#tam-tinh-tien').html(numberWithCommas(tamTinh) + 'đ');
    // $('#tong-tien').html(numberWithCommas(tamTinh) + 'đ');

    $('#bill-list').html(ls);
    $('#doanhthu-id').html(numberWithCommas(doanhThu));

    // addPagination(list);
}


function deleteBill(id) {
    const confirmDe = confirm('Bạn có thực sự muốn xóa hóa đơn này?');
    if (confirmDe) {
        delteData('bill', { id: id }, true, (e) => {
            console.log(e);
            getBill();
            alert('Xóa thành công!');
        }, (req) => {
            console.log(req);
            // alert(req.responseJSON.message);
        });
    }
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

function getCount() {
    getData(`user/index.php`, null, true, (e) => {
        if (e && e.message == 'success') {
            $('#count-user').html(e.data.length);
        }
    });

    getData(`product/index.php`, null, true, (e) => {
        if (e && e.message == 'success') {
            $('#count-product').html(e.data.length);
        }
    });
}


function filter() {
    const fromDate = $('#from-date').val();
    const toDate = $('#to-date').val();

    LIST_DISPLAY = JSON.parse(JSON.stringify(LIST));
    const search = $('#search-input').val().trim().toLowerCase();
    LIST_DISPLAY = LIST_DISPLAY.filter(item => item.name.toLowerCase().includes(search) || item.sdt.includes(search));

    if (new Date(fromDate).getTime() > new Date(toDate).getTime()) {
        alert('Vui lòng nhập ngày đến lớn hơn ngày bắt đầu!');
        return;
    }
    if (fromDate) {
        console.log('Filter from date', fromDate);
        LIST_DISPLAY = LIST_DISPLAY.filter(item => new Date(item.Ngay).getTime() >= new Date(fromDate).getTime());
    }
    if (toDate) {
        console.log('Filter to date', toDate);
        LIST_DISPLAY = LIST_DISPLAY.filter(item => new Date(item.Ngay).getTime() <= new Date(toDate).getTime());
    }
    renderList(LIST_DISPLAY);
}

function addPagination(list) {
    TOTAL_PAGE = Math.ceil(list.length / PAGE_SIZE);
    let lsPage = ``;
    for (let index = 1; index <= TOTAL_PAGE; index++) {
        lsPage += `
        <li class="paginate_button page-item ${index == CURRENT_PAGE ? 'active' : ''}" onclick="changeSize(${index})">
            <a aria-controls="dataTable" data-dt-idx="1" tabindex="0" class="page-link">
            ${index}
            </a>
        </li>
        `
    }
    const html = `
    <li class="paginate_button page-item previous disabled" id="dataTable_previous">
        <a aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">
            Trước
        </a>
    </li>
    ${lsPage}
    <li class="paginate_button page-item next" id="dataTable_next">
        <a aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">
            Kế tiếp
        </a>
    </li>`;

    $('#pagination-ul').html(html);
}

function resetDate() {
    $('#from-date').val('');
    $('#to-date').val('');
    $('#search-input').val('');
    filter();
}

function changeSize(pageIndex) {
    CURRENT_PAGE = pageIndex;
    console.log(pageIndex);

}
getCount();
getBill();