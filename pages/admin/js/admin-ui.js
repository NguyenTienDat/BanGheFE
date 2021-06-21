const BASE_URL_ADMIN_PAGES = window.location.origin + '/pages/admin/';

setTimeout(() => {
    addAdminAccordionSidebar();
    addAdminTopNav();
    addAdminFooter();
    addLogoutModal();
}, 500);



function addAdminFooter() {
    $('#admin-footer').html(`
    <div class="container my-auto">
        <div class="copyright text-center my-auto">
            <span>Copyright &copy; Ngdhg 2020 </span>
        </div>
    </div>
    `);
}

function addAdminTopNav() {
    
    $('#admin-top-nav').html(`
    
    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
        <div class="topbar-divider d-none d-sm-block"></div>
        <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small" id="admin-name"></span>
                <img class="img-profile rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg">
            </a>
            <!-- Dropdown - User Information -->
            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a class="dropdown-item" href="#">
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i><span id="usernameLabel"></span> 
                </a>
                <a class="dropdown-item" href="${BASE_URL_PAGES}index.html">
                    <i class="fas fa-home fa-sm fa-fw mr-2 text-gray-400"></i> Trang chủ
                </a>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Đăng xuất
                </a>
            </div>
        </li>
    </ul>
    `);

    const adminName = getUser('name');
    $('#admin-name').html(adminName);
}
function addAdminAccordionSidebar() {
    $('#accordionSidebar').html(`
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="${BASE_URL_ADMIN_PAGES}index.html">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Admin</div>
    </a>

    <hr class="sidebar-divider my-0">

    <li class="nav-item active">
        <a class="nav-link" href="${BASE_URL_ADMIN_PAGES}index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>THÔNG TIN</span></a>
    </li>

    <hr class="sidebar-divider">


    <li class="nav-item">
        <a class="nav-link collapsed" href="${BASE_URL_ADMIN_PAGES}admin-user">
            <i class="fas fa-fw fa-user"></i>
            <span>NGƯỜI DÙNG</span>
        </a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar"></div>
    </li>


    <li class="nav-item">
        <a class="nav-link" href="${BASE_URL_ADMIN_PAGES}admin-product">
            <i class="fas fa-fw fa-table"></i>
            <span>SẢN PHẨM</span></a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar"></div>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="${BASE_URL_ADMIN_PAGES}admin-product-category">
            <i class="fas fa-fw fa-layer-group"></i>
            <span>LOẠI SẢN PHẨM</span></a>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar"></div>
    </li>
    <hr class="sidebar-divider d-none d-md-block">

    <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>`);
}

function addLogoutModal() {
    $('#logoutModal').html(`
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
                </div>
                <div class="modal-body">Bạn có chắc chắn muốn đăng xuất ?</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="${BASE_URL_PAGES}login">Logout</a>
                </div>
            </div>
        </div>
    `);
}