<template>
    <div class="contact-page-wapper">

        <div class="link-to-thispage mt-4">
            <router-link to="/">Trang chủ</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" height="0.8em"
                viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
            <span>Liên hệ</span>
        </div>
        <h3 class="contact-page-title">Thông tin liên hệ</h3>
        <div class="intro-address">
            <div class="list-card-address">
                <div class="card-address">
                    <h5>Trụ sở chính</h5>
                    <p class="card-text">Phường Phúc Thắng, thành phố Phúc Yên, tỉnh Vĩnh Phúc</p>
                    <p class="card-text">
                        Tel: (84) 211-3868888<br>
                        Fax: (84) 211-3868910
                    </p>
                </div>
                <div class="card-address">
                    <h5>CHI NHÁNH TẠI TP HỒ CHÍ MINH</h5>
                    <p class="card-text">Tầng 8, Zen Plaza, 54-56 đường Nguyễn Trãi, quận 1, thành phố Hồ Chí Minh</p>
                    <p class="card-text">
                        Tel: (84) 28-39256949<br>
                        Fax: (84) 28-39256948
                    </p>
                </div>
                <div class="card-address">
                    <h5>VĂN PHÒNG ĐẠI DIỆN TẠI HÀ NỘI</h5>
                    <p class="card-text">Số 1. đường Thái Hà, quận Đống Đa, thành phố Hà Nội</p>
                    <p class="card-text">
                        Tel: (84) 24-62567567<br>
                        Fax: (84) 24-38360001
                    </p>
                </div>
                <div class="card-address">
                    <h5>CHI NHÁNH TẠI HÀ NAM</h5>
                    <p class="card-text">Khu công nghiệp Đồng Văn II, huyện Duy Tiên, tỉnh Hà Nam</p>
                    <p class="card-text">
                        Tel: (84) 226-39666666<br>
                        Fax: (84) 226-3572666
                    </p>
                </div>
            </div>
        </div>
        <div class="contact-form">
            <div class="contact-notify">
                <p><strong>Điền vào mẫu bên dưới để chúng tôi giải đáp thắc mắc của Quý khách sớm nhất</strong></p>
                <p><strong>Bằng việc cung cấp thông tin cho Chúng tôi, Quý khách đồng ý với Chính Sách Quyền Riêng Tư
                        của Chúng tôi, theo đó cho phép chúng tôi và các bên liên quan xử lý
                        dữ liệu cá nhân của Quý khách cho các mục đích như: giải đáp thắc mắc, thực hiện khảo sát. Nếu Quý
                        khách không đồng ý hoặc có ý kiến nào khác, vui lòng thông tin lại với chúng tôi.</strong></p>
            </div>
            <div class="row w-100 mt-5" style="height: auto;">
                <div class="col-6">
                    <img src="../../assets/img/background-contact.png" alt="">
                </div>
                <form class="col-6" action="">
                    <div class="d-flex">
                        <input class="form-control change-form-control" type="text" placeholder="Họ tên">
                        <select class="form-control change-form-control" name="" id="">a
                            <option value="" selected>Giới tính</option>
                            <option value="">Nam</option>
                            <option value="">Nữ</option>
                        </select>
                        
                    </div>
                    <div class="d-flex mt-3">
                        <input class="form-control change-form-control" type="number" placeholder="Số điện thoại">
                        <input class="form-control change-form-control" type="email" placeholder="Email">
                    </div>
                    <div class="d-flex mt-3">
                        <input class="form-control change-form-control" type="text" placeholder="Địa chỉ">
                        <select class="form-control change-form-control" name="" id="">a
                            <option value="" selected>Danh mục</option>
                            <option value="">Xe tay ga</option>
                            <option value="">Xe số</option>
                        </select>
                    </div>
                    <div class="form-contact-content mt-3">
                        <textarea name="" id="" cols="56" rows="5" placeholder="Nập nội dung"></textarea>
                    </div>
                    <div class="submit-form-contact">
                        <button type="submit" class="btn btn-danger" id="submitQuestion">Gửi câu hỏi</button>
                    </div>
                </form>
            </div>
    </div>
</div></template>
<style scoped>@import url(../../assets/client/contact.css);</style>