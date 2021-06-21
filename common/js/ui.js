setTimeout(() => {
    addMenuTop();
    addBanner();
    addFooterBanner();
    addFooter();
}, 500);

function addMenuTop() {
    getProductCategory((productCategory) => {
        let category = '';
        for (let i = 0; i < productCategory.length; i++) {
            const element = productCategory[i];
            category += `<li><a class="dropdown-item" href="${BASE_URL_PAGES}product-category/index.html?productCategory=${element.id}&name=${element.name}">${element.name}</a></li>`;
        }

        $('#product-category').html(category);
    });
    const BASE_URL_PAGES = window.location.origin + '/pages/';

    $('#menutop').html(`
    <nav class="navbar navbar-expand-lg navbar-dark" style="padding-left: 370px;">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
                <li class="nav-item active"> <a class="nav-link" href="${BASE_URL_PAGES}index.html">TRANG CHỦ </a> </li>
                <li class="nav-item"><a class="nav-link" href="${BASE_URL_PAGES}about"> GIỚI THIỆU </a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  SẢN PHẨM  </a>
                    <ul class="dropdown-menu fade-up" id="product-category"></ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="${BASE_URL_PAGES}contact"> LIÊN HỆ </a></li>
                <li class="nav-item"><a class="nav-link" href="${BASE_URL_PAGES}blog"> BLOG </a></li>
            </ul>

        </div>

    </nav>
    <div class="input-group">
        <input type="text" value="" placeholder="Tìm kiếm..." name="q">
        <input type="hidden" value="product" name="type">
        <span class="input-group-btn">
            <button type="submit" class="btn"><i class="fa fa-search" aria-hidden="true"></i></button>
        </span>
    </div>
    <div class="dang-nhap">
        <a href="${BASE_URL_PAGES}login" target="_parent"><img src="https://cdn.onlinewebfonts.com/svg/img_568657.png"></a>
    </div>
    <div class="giohang">
        <a href="${BASE_URL_PAGES}cart" target="_parent"><img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg" alt="Giỏ hàng"></a>
    </div>
    <div class="username" id="usernameLabel"></div>
`);
}

function addBanner() {
    $('#banner').html(`
        <div id="demo" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <!-- The slideshow -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://theme.hstatic.net/1000341603/1000435197/14/main_slider_4.png?v=602" alt="">
            </div>
            <div class="carousel-item">
                <img src="../../Images/hinh-nen-noi-that-dep-full-hd-so-10-0-1.jpg" alt="">
            </div>
            <div class="carousel-item">
                <img src="https://theme.hstatic.net/1000341603/1000435197/14/main_slider_2.png?v=602" alt="">
            </div>
        </div>

        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
    `);
}

function addFooterBanner() {
    $('#footer-baner').html(`
        <div class="content-top">
                <div class="content-item">
                    <div class="combo1">
                        <div class="img"><img src="https://theme.hstatic.net/1000341603/1000435197/14/policy_icon_1.png?v=542" height="50px" width="50px"></div>
                        <div class="wrap-content">
                            <div class="content1">
                                <p> CHẤT LƯỢNG ĐẢM BẢO</p>
                                <div class="content2">
                                    <p> Top thương hiệu uy tín</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="combo1">
                        <div class="img"><img src="https://theme.hstatic.net/1000341603/1000435197/14/policy_icon_2.png?v=600" height="50px" width="50px"></div>
                        <div class="wrap-content">
                            <div class="content1">
                                <p> CHẤT LƯỢNG ĐẢM BẢO</p>
                                <div class="content2">
                                    <p> Top thương hiệu uy tín</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="combo1">
                        <div class="img"><img src="https://theme.hstatic.net/1000341603/1000435197/14/policy_icon_3.png?v=600" height="50px" width="50px"></div>
                        <div class="wrap-content">
                            <div class="content1">
                                <p> CHẤT LƯỢNG ĐẢM BẢO</p>
                                <div class="content2">
                                    <p> Top thương hiệu uy tín</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    `);

}

function addFooter() {
    $('#footer').html(`
    <div class="footer-wrap">
    <div class="footer-item">
        <div> THÔNG TIN LIÊN HỆ</div>
        <div class="is-divider small"></div>
        <div>Địa chỉ : 235 Hoàng Quốc Việt , Cổ Nhuế 1 , Bắc Từ Liêm , Hà Nội</div>
        <div>Hotline : 0336571245</div>
        <div>Email : decor1409@gmail.com</div>
    </div>

    <div class="footer-item">
        <div>THÔNG TIN</div>
        <div class="is-divider small"></div>
        <div>Tìm kiếm</div>
        <div>Giới thiệu</div>
        <div>Chính sách thanh toán</div>
        <div>Chính sách vận chuyển</div>
        <div>Chính sách bảo hành</div>
    </div>

    <div class="footer-item">
        <div>LIÊN KẾT</div>
        <div class="is-divider small"></div>
        <div>Sản phẩm khuyến mãi</div>
        <div>Sản phẩm nổi bật</div>
        <div>Tất cả sản phẩm</div>

    </div>

    <div class="footer-item">
        <div>KẾT NỐI VỚI CHÚNG TÔI</div>
        <div class="is-divider small"></div>
    </div>
</div>
    `);

    $('#design').html(`<div> Copyright 2020 © DECOR . Design by Huong </div>`);
}