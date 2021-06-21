$(function() {
    const type = getQueryParamsURL('productCategory');
    const name = getQueryParamsURL('name');
    $('#product-category-title').html(name);
    getData('product', null, true, e => {
        if (e && e.data && e.data.length > 0) {
            let ls = '';
            const listItem = e.data.filter(function(item) { return item.category == type });
            for (let index = 0; index < listItem.length; index++) {
                const item = listItem[index];
                if (index == 0 || index % 4 == 0) {
                    ls += `<div class="ds-san-pham">`;
                }
                ls += `
                    <div class="san-pham">
                        <a href="../../pages/product/index.html?product-id=${item.id}"><img src="${item.image}" alt=""></a>
                        <a href="../../pages/product/index.html?product-id=${item.id}"><span class="san-pham-name">${item.name}</span></a>
                        <span class="san-pham-gia">${numberWithCommas(item.price)}₫</span>
                    </div>
                `
                if (index == 3 || index % 4 == 3) {
                    ls += `</div>
                    `
                }
            }
            $('#dsGheNgoi').html(ls);
        }
    }, (req) => {
        alert("ERROR!");
    });
});