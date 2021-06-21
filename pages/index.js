setTimeout(() => {
    addCateforyTop();
}, 500);

function addCateforyTop() {
    getData(`product`, null, true, (e) => {
        const product = e.data;

        getProductCategory((productCategory) => {
            let category = '';
            let categoryList = '';
            for (let i = 0; i < productCategory.length; i++) {
                const element = productCategory[i];
                // category += `<li><a class="dropdown-item" >${}</a></li>`;
                category += `
                <div class="menu-item">
                    <a href="${BASE_URL_PAGES}product-category/index.html?productCategory=${element.id}&name=${element.name}"><img class="menu-item-img" src="${element.image}" alt=""></a>
                    <span class="menu-item-name">${element.name}</span>
                </div>
                `;
    
                const productByCategory = product.filter((item) => item.category == element.id);

                let productByCategoryTempplate = '';
                if (productByCategory && productByCategory.length) {
                    for (let j = 0; j < 4 && j < productByCategory.length; j++) {
                        const item = productByCategory[j];
    
                        productByCategoryTempplate += `
                            <div class="san-pham">
                                <a href="../../pages/product/index.html?product-id=${item.id}"><img src="${item.image}" alt=""></a>
                                <a href="../../pages/product/index.html?product-id=${item.id}"><span class="san-pham-name">${item.name}</span></a>
                                <span class="san-pham-gia">${numberWithCommas(item.price)}₫</span>
                            </div>
                        `;
                    }
                }
                categoryList += `
                <div class="loai-san-pham-wrap">
                    <div class="title-wrap">
                        <div class="title">${element.name}</div>
                    </div>
                    <div class="btn-see-all-wrap">
                        <button class="btn-see-all"><a href="${BASE_URL_PAGES}product-category/index.html?productCategory=${element.id}&name=${element.name}"> TẤT CẢ </a></button>
                    </div>
                    <div class="ds-san-pham">${productByCategoryTempplate}</div>
                </div>
                `;
            }
    
            $('#home-category-top').html(category);
            $('#product-category-list-wrap').html(categoryList);
            
        });
    }, (req) => {
        alert(req.responseJSON.message);
    });
    
}