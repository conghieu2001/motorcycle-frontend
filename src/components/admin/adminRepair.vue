<template>
    <div class="order-page-wrapper">
        <div class="order-page-title">
            <h4>Danh sách hóa đơn sửa chữa</h4>
        </div>
        <div class="d-flex justify-content-between">
            <div class="d-flex choose-order ms-2">
                <router-link to="/admin/adminorder">
                    <div class="pt-1">Bán hàng</div>
                </router-link>
                <router-link to="/admin/adminorderrepair" class="ms-2 active-order-page">
                    <div class="pt-1">Sửa chữa</div>
                </router-link>
            </div>
            <div class="d-flex justify-content-end me-3">
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" @click="exportPdf">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                    </svg>
                    PDF
                </div>
                <div class="exportFileExcel" style="width: 70px" @click="exportExcel">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                    </svg>
                    Excel
                </div>
            </div>
        </div>
        <div class="user-page-table">
            <div class="row user-page-table-header">
                <div class="col-1">STT</div>
                <div class="col-2">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Tên khách hàng
                    </div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2 sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="sortedCustomerName(1)">Từ A - Z</li>
                        <li class="p-2 sortName" @click="sortedCustomerName(2)">Từ Z - A</li>
                        <li class="mb-2 mt-1">
                            <input type="text" v-model="searchCustomerName" @input="filteredCustomername"
                                placeholder="Tìm kiếm" />
                        </li>
                    </ul>
                </div>
                <div class="col-1">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        SĐT
                    </div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2 sortName" @click="defaultSearch">Mặc định</li>
                        <li class="mb-2 mt-1">
                            <input type="text" v-model="searchCustomerPhone" @input="filteredCustomerPhone"
                                placeholder="Tìm kiếm" />
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Người tạo
                    </div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2 sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="sortedUserName(1)">Từ A - Z</li>
                        <li class="p-2 sortName" @click="sortedUserName(2)">Từ Z - A</li>
                        <li class="mb-2 mt-1">
                            <input type="text" v-model="searchUsername" @input="filteredUserName" placeholder="Tìm kiếm" />
                        </li>
                    </ul>
                </div>
                <div class="col-1">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Thanh toán
                    </div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2 sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="filteredMethodPay('paycash')">PayCash</li>
                        <li class="p-2 sortName" @click="filteredMethodPay('vnpay')">VN Pay</li>
                        <li class="p-2 sortName" @click="filteredMethodPay('momo')">MoMo</li>
                    </ul>
                </div>
                <div class="col-1 text-center">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Tổng hóa đơn
                    </div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2 sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="sortedTotalBill(1)">Từ nhỏ - lớn</li>
                        <li class="p-2 sortName" @click="sortedTotalBill(2)">Từ lớn - nhỏ</li>
                        <li class="mb-2 mt-1 searchTotalBill-form">
                            <form action="" @submit.prevent="findByTotalBill">
                                <div class="d-flex">
                                    <input type="number" min="0" v-model="fromTotalBill" maxlength="13" placeholder="₫ TỪ"
                                        required />
                                    <div></div>
                                    <input type="number" min="0" v-model="toTotalBill" maxlength="13" placeholder="₫ ĐẾN"
                                        required />
                                </div>
                                <button type="submit">Áp dụng</button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div class="col-2 text-center">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Trạng thái
                    </div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2 sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="filteredStatus('Hoàn thành')">
                            Hoàn thành
                        </li>
                        <li class="p-2 sortName" @click="filteredStatus('Chờ thanh toán')">
                            Chờ thanh toán
                        </li>
                        <li class="p-2 sortName" @click="filteredStatus('Đã hủy')">Đã hủy</li>
                    </ul>
                </div>
                <div class="col-2 text-center">Options</div>
            </div>
            <div class="row user-page-table-body" v-for="(repair, index) in repairs" :key="index">
                <div class="col-1 table-body-index">
                    {{ index + 1 }}
                </div>
                <div class="col-2">
                    {{ repair.customerId.name }}
                </div>
                <div class="col-1">
                    {{ repair.customerId.phoneNumber }}
                </div>
                <div class="col-2">
                    {{ repair.userId.fullName }}
                </div>
                <div class="col-1">
                    {{ repair.methodPay }}
                </div>
                <div class="col-1 text-center">
                    {{ formatCurrency(repair.totalBill) }}
                </div>
                <div class="col-2 text-center">
                    {{ repair.status }}
                </div>
                <div class="col-2 text-center d-flex justify-content-center">
                    <div class="up-staff" @click="gotoDetailOrder(repair._id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
                        </svg>
                    </div>
                    <button style="border: none; background-color: aliceblue"
                        :disabled="!(repair.status === 'Chờ thanh toán')"
                        :class="{ 'editorder-disable': !(repair.status === 'Chờ thanh toán') }"
                        class="clock-user ms-2 text-center" @click="gotoEditOrder(repair._id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                        </svg>
                    </button>
                    <button style="border: none; background-color: aliceblue"
                        :disabled="!(repair.status === 'Chờ thanh toán')"
                        :class="{ 'editorder-disable': !(repair.status === 'Chờ thanh toán') }"
                        class="clock-user ms-2 text-center" @click="cancelOrder(repair._id)">
                        <svg style="fill: red" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" />
                        </svg>
                    </button>
                    <div class="add-role ms-2" @click="exportHTML(repair._id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path
                                d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="pos-nagination">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(1)">&laquo;</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item" v-for="index in lengthPage" :key="index">
                        <span class="page-link" :class="{ active_page: activePage === index }" @click="handlePage(index)">{{
                            index }}</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(lengthPage)">&raquo;</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="overlay" v-if="isScreen">
            <div class="screen-detail-order">
                <div class="d-flex justify-content-between screen-detaiorder-title">
                    <h5>Chi tiết hóa đơn</h5>
                    <div class="d-flex me-3">
                        <div class="exportFilePDF" @click="exportPdfDetail">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path
                                    d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                            </svg>
                            PDF
                        </div>
                        <svg @click="isScreen = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                            viewBox="0 0 512 512">
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                </div>
                <div class="addorder-page-content scroll-infor-order mt-2">
                    <div class="addorder-content-title d-flex justify-content-between">
                        <h6>
                            Trạng thái đơn hàng: <span>{{ repairById.status }}</span>
                        </h6>
                        <h6 class="me-4">
                            Hình thức thanh toán: <span>{{ repairById.methodPay }}</span>
                        </h6>
                    </div>
                    <form action="">
                        <div class="addorder-form-infor-customer">
                            <div class="form-infor-customer-title">Thông tin khách hàng</div>
                            <div class="row mt-2">
                                <div class="col-5">
                                    <div class="form-infor-customer-input">
                                        <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                        <input type="text" v-model="repairById.customerId.name" disabled />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                        <input type="text" v-model="repairById.customerId.phoneNumber" disabled />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Email</label>
                                        <input type="email" v-model="repairById.customerId.email" disabled />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Địa chỉ</label>
                                        <input type="text" v-model="repairById.customerId.address" disabled />
                                    </div>
                                </div>
                                <div class="col form-customer-note">
                                    <label for="">Ghi chú:</label>
                                    <textarea cols="80" v-model="repairById.notes" disabled></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="addorder-form-screen">
                            <div class="form-screen-title">Thông tin người tạo</div>
                            <div class="row mt-2 form-screen-content">
                                <div class="col-5">
                                    <label for="">Họ & Tên</label>
                                    <input type="text" v-model="repairById.userId.fullName" disabled />
                                </div>
                                <div class="col-1"></div>
                                <div class="col-5">
                                    <label for="">Email</label>
                                    <input type="text" v-model="repairById.userId.email" disabled />
                                </div>
                            </div>
                        </div>
                        <div class="addorder-form-screen">
                            <div class="form-screen-title">Nhân viên phụ trách</div>
                            <div class="row mt-2 form-screen-content">
                                <div class="col-4">
                                    <label for="">Họ & Tên</label>
                                    <input class="w-75" type="text" v-model="repairById.staffInfor.fullName" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">SĐT</label>
                                    <input class="w-75" type="text" v-model="repairById.staffInfor.phoneNumber" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">Chức vụ</label>
                                    <input class="w-75" type="text" v-model="repairById.staffId.position" disabled />
                                </div>
                            </div>
                        </div>
                        <div class="screen-detail-order-products">
                            <div class="row screen-detail-order-products-row">
                                <div class="col-1">STT</div>
                                <div class="col-3">Tên sản phẩm</div>
                                <div class="col-3">Giá</div>
                                <div class="col-3">Số lượng</div>
                                <div class="col-2">Thành tiền</div>
                            </div>
                            <div class="row screen-detail-order-products-content-row"
                                v-for="(product, index) in repairById.products" :key="index">
                                <div class="col-1">
                                    {{ index + 1 }}
                                </div>
                                <div class="col-3">
                                    {{ product.productId.name }}
                                </div>
                                <div class="col-3">
                                    {{ formatCurrency(product.salePrice) }}
                                </div>
                                <div class="col-3">
                                    {{ product.saleQuantity }}
                                </div>
                                <div class="col-2">
                                    {{ formatCurrency(product.salePrice * product.saleQuantity) }}
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end m-1" style="margin-right: 150px !important">
                            <div>Tiền công:</div>
                            <span class="ms-3" style="color: red; font-weight: 600">{{
                                formatCurrency(repairById.wage)
                            }}</span>
                        </div>
                        <div class="d-flex justify-content-end m-4 mt-1" style="margin-right: 150px !important">
                            <div>Tổng hóa đơn:</div>
                            <span class="ms-3" style="color: red; font-weight: 600">{{
                                formatCurrency(repairById.totalBill)
                            }}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isEditOrder">
            <div class="screen-detail-order">
                <form action="" @submit.prevent="updateOrder">
                    <div class="d-flex justify-content-between screen-detaiorder-title">
                        <h5>Chi tiết hóa đơn</h5>
                        <div class="d-flex me-3">
                            <div class="submit-form-edit-post">
                                <button type="submit">Thanh toán</button>
                            </div>
                            <svg @click="isEditOrder = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 512 512">
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="addorder-page-content scroll-infor-order mt-2">
                        <div class="addorder-content-title">
                            <h6>
                                Trạng thái đơn hàng: <span>{{ orderByIdUpdate.status }}</span>
                            </h6>
                        </div>
                        <div class="addorder-form-infor-customer">
                            <div class="form-infor-customer-title">Thông tin khách hàng</div>
                            <div class="row mt-2">
                                <div class="col-5">
                                    <div class="form-infor-customer-input">
                                        <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                        <input type="text" v-model="orderByIdUpdate.customerId.name" required />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                        <input type="text" v-model="orderByIdUpdate.customerId.phoneNumber" required />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Email</label>
                                        <input type="email" v-model="orderByIdUpdate.customerId.email" />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Địa chỉ</label>
                                        <input type="text" v-model="orderByIdUpdate.customerId.address" />
                                    </div>
                                </div>
                                <div class="col form-customer-note">
                                    <label for="">Ghi chú:</label>
                                    <textarea cols="80" v-model="orderByIdUpdate.notes"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="ms-3 add-remove-button-addorder">
                            <div class="row addorder-form-products">
                                <div class="col-4 d-grid">
                                    <label for="">Nhân viên phụ trách</label>
                                    <select 
                                        disabled>
                                        <option value="">{{ orderByIdUpdate.staffInfor.fullName }}</option>
                                    </select>
                                </div>
                                <div class="col-3 d-grid">
                                    <label for="">Tiền công</label>
                                    <input type="number"  :placeholder=" formatCurrency(orderByIdUpdate.wage)" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="addorder-form-screen">
                            <div class="form-screen-title">Thông tin người tạo</div>
                            <div class="row mt-2 form-screen-content">
                                <div class="col-5">
                                    <label for="">Họ & Tên</label>
                                    <input type="text" v-model="orderByIdUpdate.userId.fullName" disabled />
                                </div>
                                <div class="col-1"></div>
                                <div class="col-5">
                                    <label for="">Email</label>
                                    <input type="text" v-model="orderByIdUpdate.userId.email" disabled />
                                </div>
                            </div>
                        </div>
                        <div class="m-3" v-for="(div, index) in orderByIdUpdate.products" :key="index">
                            <div class="addorder-form-products row">
                                <div class="col-4 d-grid">
                                    <label for="">Tên sản phẩm</label>
                                    <select disabled>
                                        <option value="" selected>{{ div.productId.name }}</option>
                                    </select>
                                </div>
                                <div class="col-3 d-grid">
                                    <label for="">Giá bán</label>
                                    <input type="text" v-model="div.salePrice" disabled placeholder="VND" />
                                </div>
                                <div class="col-2 d-grid">
                                    <label for="">Số lượng</label>
                                    <input type="number" v-model="div.saleQuantity"
                                        @input="checkSaleQuantity(index, div.saleQuantity)" placeholder="0" disabled />
                                </div>
                                <div class="col-1"></div>
                                <div class="col-2 d-grid">
                                    <label for="">Thành tiền</label>
                                    <span style="font-weight: 600;">{{ formatCurrency(div.salePrice * div.saleQuantity) }}</span>
                                </div>                               
                            </div>
                        </div>
                        <div class="add-remove-button-addorder">
                            <!-- <svg @click="addDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 448 512">
                                <path
                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                            <svg @click="removeDiv" class="p-1 ms-4" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 448 512">
                                <path
                                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg> -->
                        </div>
                        <div class="m-3 form-paymethods">
                            <label for="">Phương thức thanh toán</label>
                            <div class="metods-pay">
                                <div class="pay-cash">
                                    <input type="radio" name="paymethod" value="paycash" v-model="orderByIdUpdate.methodPay"
                                        required />
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 640 512">
                                        <path
                                            d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96z" />
                                    </svg>
                                    <label for="">Thanh toán bằng tiền mặt</label>
                                </div>
                                <div class="pay-vnpay">
                                    <input type="radio" name="paymethod" value="vnpay" v-model="orderByIdUpdate.methodPay"
                                        required />
                                    <img src="https://vnpayqr.vn/wp-content/uploads/2021/10/Logo-VNPAY-QR.png" alt="" />
                                    <label for="">Thanh toán bằng ví VN Pay</label>
                                </div>
                                <div class="pay-momo">
                                    <input type="radio" name="paymethod" value="momo" v-model="orderByIdUpdate.methodPay"
                                        required />
                                    <svg width="40" height="40" viewBox="0 0 72 72" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="jsx-ddfb0b416b0db288 mx-auto block h-10 w-10">
                                        <path
                                            d="M0 8C0 3.58172 3.58172 0 8 0H64C68.4183 0 72 3.58172 72 8V64C72 68.4183 68.4183 72 64 72H8C3.58172 72 0 68.4183 0 64V8Z"
                                            fill="#A50064" class="jsx-ddfb0b416b0db288"></path>
                                        <path
                                            d="M51.859 10C45.6394 10 40.5057 15.0349 40.5057 21.3533C40.5057 27.5729 45.5407 32.7065 51.859 32.7065C58.0786 32.7065 63.2123 27.6716 63.2123 21.3533C63.2123 15.1337 58.1774 10 51.859 10ZM51.859 26.1908C49.1935 26.1908 47.0215 24.0188 47.0215 21.3533C47.0215 18.6877 49.1935 16.5158 51.859 16.5158C54.5246 16.5158 56.6965 18.6877 56.6965 21.3533C56.6965 24.0188 54.5246 26.1908 51.859 26.1908Z"
                                            fill="white" class="jsx-ddfb0b416b0db288"></path>
                                        <path
                                            d="M28.7576 10C26.8818 10 25.1048 10.5923 23.6239 11.6783C22.2418 10.5923 20.4648 10 18.4903 10C13.7515 10 10 13.8502 10 18.4903V32.7065H16.5158V18.4903C16.5158 17.4043 17.4043 16.6145 18.3915 16.6145C19.4775 16.6145 20.2673 17.503 20.2673 18.4903V32.7065H26.7831V18.4903C26.7831 17.4043 27.6716 16.6145 28.6589 16.6145C29.7448 16.6145 30.5346 17.503 30.5346 18.4903V32.7065H37.0504V18.589C37.2479 13.8502 33.4963 10 28.7576 10Z"
                                            fill="white" class="jsx-ddfb0b416b0db288"></path>
                                        <path
                                            d="M51.859 37.6427C45.6394 37.6427 40.5057 42.6776 40.5057 48.996C40.5057 55.2156 45.5407 60.3492 51.859 60.3492C58.0786 60.3492 63.2123 55.3143 63.2123 48.996C63.2123 42.6776 58.1774 37.6427 51.859 37.6427ZM51.859 53.7347C49.1935 53.7347 47.0215 51.5628 47.0215 48.8972C47.0215 46.2317 49.1935 44.0598 51.859 44.0598C54.5246 44.0598 56.6965 46.2317 56.6965 48.8972C56.6965 51.6615 54.5246 53.7347 51.859 53.7347Z"
                                            fill="white" class="jsx-ddfb0b416b0db288"></path>
                                        <path
                                            d="M28.7576 37.6427C26.8818 37.6427 25.1048 38.235 23.6239 39.321C22.2418 38.235 20.4648 37.6427 18.4903 37.6427C13.7515 37.6427 10 41.4929 10 46.133V60.3492H16.5158V46.0342C16.5158 44.9483 17.4043 44.1585 18.3915 44.1585C19.4775 44.1585 20.2673 45.047 20.2673 46.0342V60.2505H26.7831V46.0342C26.7831 44.9483 27.6716 44.1585 28.6589 44.1585C29.7448 44.1585 30.5346 45.047 30.5346 46.0342V60.2505H37.0504V46.133C37.2479 41.3942 33.4963 37.6427 28.7576 37.6427Z"
                                            fill="white" class="jsx-ddfb0b416b0db288"></path>
                                    </svg>
                                    <label for="">Thanh toán bằng ví VN Pay</label>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end m-4" style="margin-right: 150px !important">
                            <div>Tổng hóa đơn:</div>
                            <span class="ms-3" style="color: red; font-weight: 600">{{
                                formatCurrency(orderByIdUpdate.totalBill)
                            }}</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import orderrepairService from "../../services/orderRepair.service";
import accessoryService from "../../services/acesstory.service";
import * as XLSX from "xlsx";
import staffService from '../../services/staff.service'
export default {
    data() {
        return {
            lengthPage: 1,
            activePage: 1,
            repairs: {},
            isScreen: false,
            repairById: {},
            exportHTMLById: {},
            searchCustomerName: "",
            searchCustomerPhone: "",
            searchUsername: "",
            fromTotalBill: null,
            toTotalBill: null,
            dataCreateOrder: {
                totalBill: 0,
                transportFee: 0,
                notes: "",
                ListProducts: [
                    {
                        productType: "",
                        productId: "",
                        salePrice: null,
                        saleQuantity: null,
                        quantityInStock: 0,
                        mesMaxQuantity: "",
                    },
                ],
            },
            orderByIdUpdate: {},
            isEditOrder: false,
            products: {},
            accessories: {},
            staffs: {}
        };
    },
    methods: {
        async getAllRepairs(pageNumber = 1) {
            try {
                const length = await orderrepairService.getAll();
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10);
                // console.log(this.lengthPage)
                const response = await orderrepairService.getAll(pageNumber, 10);
                this.repairs = response.data;
                // console.log(this.repairs)
            } catch (error) {
                console.log(error);
            }
        },
        handlePage(index) {
            this.activePage = index;
            this.getAllRepairs(index);
        },
        async gotoDetailOrder(id) {
            const response = await orderrepairService.findById({ id });
            if (response.data.status) {
                this.repairById = response.data.result;
                const id = this.repairById.staffId
                const test = await staffService.findById({id})
                this.repairById.staffInfor = test.data.result.userId
                this.isScreen = true;
                // console.log(this.repairById)
            } else {
                alert(response.data.mes);
            }
            // console.log(this.orderById)
        },
        formatCurrency(price) {
            return new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(price);
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat("default", { dateStyle: "medium" }).format(date);
        },
        exportExcel() {
            const filename = "orderrepairList";
            const response = this.repairs;
            // console.log(response)
            let data = [];
            response.forEach((e) => {
                data.push([
                    e.customerId.name,
                    e.customerId.email,
                    e.customerId.phoneNumber,
                    e.userId.fullName,
                    e.userId.email,
                    e.methodPay,
                    this.formatCurrency(e.wage),
                    this.formatCurrency(e.totalBill),
                    e.status,
                    this.formatDateNoTime(e.createdAt),
                ]);
            });

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws["!cols"] = [
                { width: 25 },
                { width: 25 },
                { width: 15 },
                { width: 20 },
                { width: 25 },
                { width: 15 },
                { width: 15 },
                { width: 15 },
                { width: 15 },
                { width: 15 },
            ];
            ws["A1"] = { v: "Tên khách hàng" };
            ws["B1"] = { v: "Email khách hàng" };
            ws["C1"] = { v: "SĐT khách hàng" };
            ws["D1"] = { v: "Người tạo" };
            ws["E1"] = { v: "Email người tạo" };
            ws["F1"] = { v: "Thanh toán" };
            ws["G1"] = { v: "Tiền công" };
            ws["H1"] = { v: "Tổng hóa đơn" };
            ws["I1"] = { v: "Trạng thái" };
            ws["J1"] = { v: "Ngày tạo" };
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "buffer" });
            const blob = new Blob([excelBuffer], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);
        },
        async exportPdfDetail() {
            let forTable = "";
            let index = 1;
            this.repairById.products.forEach((e) => {
                forTable += `
                    <tr>
                        <td>${index}</td>
                        <td>${e.productId.name}</td>
                        <td>${this.formatCurrency(e.salePrice)}</td>
                        <td>${e.saleQuantity}</td>
                        <td>${this.formatCurrency(e.salePrice * e.saleQuantity)}</td>
                    </tr>
                `;
                index++;
            });
            const template = `
                    <div style="font-family: Arial, Helvetica, sans-serif; width: 210mm">
                <h4 style="text-align: center; padding-top: 30px; font-size: 18px;">Chi tiết hóa đơn</h4>
                <p style="margin-left: 20px;">Trạng thái đơn hàng: ${this.repairById.status
                }</p>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 270px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Thông tin khách hàng
                </div>
                <div style="display: flex">
                    <div style="width: 390px">
                    <div style="margin: 15px">
                        <label style="font-weight: 500; color: #000"
                        >Họ & tên<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.customerId.name}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000"
                        >Số điện thoại<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.customerId.phoneNumber}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000"
                        >Email<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px; 
                        "
                        type="text" value="${this.repairById.customerId.email}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000">Địa chỉ</label>
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.customerId.address}"
                        />
                    </div>
                    </div>
                    <div style="width: 360px; margin-top: 18px">
                    <label for="">Ghi chú</label>
                    <textarea
                        style="
                        width: 100%;
                        border: 1px solid #ced4da;
                        border-radius: 0.2rem;
                        padding: 7px 14px;
                        margin-top: 15px;
                        "
                        rows="8" placeholder="${this.repairById.notes}"
                    ></textarea>
                    </div>
                </div>
                </div>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 120px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Thông tin người lập
                </div>
                <div style="display: flex; margin: 20px;">
                    <div style="width: 380px;">
                    <label style="font-weight: 500; color: #000">Họ & Tên</label>
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.userId.fullName}"
                        />
                    </div>
                    <div style="width: 380px;">
                    <label style="font-weight: 500; color: #000">Email</label>
                        <input
                        style="
                            width: 300px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.userId.email}"
                        />
                    </div>
                </div>
                </div>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 120px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Nhân viên phụ trách
                </div>
                <div style="display: flex; margin: 20px;">
                    <div style="width: 330px;">
                    <label style="font-weight: 500; color: #000">Họ & Tên</label>
                        <input
                        style="
                            width: 200px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.staffInfor.fullName}"
                        />
                    </div>
                    <div style="width: 300px;">
                    <label style="font-weight: 500; color: #000">SĐT</label>
                        <input
                        style="
                            width: 200px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.staffInfor.phoneNumber}"
                        />
                    </div>
                    <div style="width: 300px;">
                    <label style="font-weight: 500; color: #000">Chức vụ</label>
                        <input
                        style="
                            width: 200px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.repairById.staffId.position}"
                        />
                    </div>
                </div>
                </div>
                <div style="margin: 20px 100px;">
                <table style="width: 600px;" border="1">
                    <thead style="text-align: left; height: 40px; background-color: #e2e3e5;">
                    <tr >
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                    </thead>
                    <tbody style="height: 40px;">
                    ${forTable}
                    </tbody>
                </table>
                </div>
                <div style="text-align: end; margin-right: 70px;">
                <div>Tiền công: <span style="color: red; font-weight: 600;">${this.formatCurrency(
                    this.repairById.wage
                )}</span></div>
                </div>
                <div style="text-align: end; margin-right: 70px;">
                <div>Tổng hóa đơn: <span style="color: red; font-weight: 600;">${this.formatCurrency(
                    this.repairById.totalBill
                )}</span></div>
                </div>
            </div>
            `;

            const response = await orderrepairService.exportPdf({ data: template });
            const blob = new Blob([response.data], {
                type: "application/pdf",
            });
            // console.log(blob)
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            // console.log(link)
            link.href = url;
            link.setAttribute("download", "listproduct.pdf");
            document.body.appendChild(link);
            link.click();
        },
        async exportHTML(id) {
            const response = await orderrepairService.findById({ id });
            this.exportHTMLById = response.data.result;
            const staffid = this.exportHTMLById.staffId
            const test = await staffService.findById({id: staffid})
            this.exportHTMLById.staffInfor = test.data.result.userId
            // console.log(this.exportHTMLById)
            let forTable = "";
            let index = 1;
            this.exportHTMLById.products.forEach((e) => {
                forTable += `
                    <tr>
                        <td>${index}</td>
                        <td>${e.productId.name}</td>
                        <td>${this.formatCurrency(e.salePrice)}</td>
                        <td>${e.saleQuantity}</td>
                        <td>${this.formatCurrency(e.salePrice * e.saleQuantity)}</td>
                    </tr>
                `;
                index++;
            });
            const template = `
                    <div style="font-family: Arial, Helvetica, sans-serif; width: 210mm">
                <h4 style="text-align: center; padding-top: 30px; font-size: 18px;">Chi tiết hóa đơn</h4>
                <p style="margin-left: 20px;">Trạng thái đơn hàng: ${this.exportHTMLById.status
                }</p>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 270px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Thông tin khách hàng
                </div>
                <div style="display: flex">
                    <div style="width: 390px">
                    <div style="margin: 15px">
                        <label style="font-weight: 500; color: #000"
                        >Họ & tên<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.customerId.name}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000"
                        >Số điện thoại<span style="color: red">*</span></label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.customerId.phoneNumber}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000"
                        >Email</label
                        >
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px; 
                        "
                        type="text" value="${this.exportHTMLById.customerId.email}"
                        />
                    </div>
                    <div style="margin: 15px; margin-top: 30px">
                        <label style="font-weight: 500; color: #000">Địa chỉ</label>
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.customerId.address}"
                        />
                    </div>
                    </div>
                    <div style="width: 360px; margin-top: 18px">
                    <label for="">Ghi chú</label>
                    <textarea
                        style="
                        width: 100%;
                        border: 1px solid #ced4da;
                        border-radius: 0.2rem;
                        padding: 7px 14px;
                        margin-top: 15px;
                        "
                        rows="8" placeholder="${this.exportHTMLById.notes}"
                    ></textarea>
                    </div>
                </div>
                </div>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 120px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Thông tin người lập
                </div>
                <div style="display: flex; margin: 20px;">
                    <div style="width: 380px;">
                    <label style="font-weight: 500; color: #000">Họ & Tên</label>
                        <input
                        style="
                            width: 250px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.userId.fullName}"
                        />
                    </div>
                    <div style="width: 380px;">
                    <label style="font-weight: 500; color: #000">Email</label>
                        <input
                        style="
                            width: 300px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.userId.email}"
                        />
                    </div>
                </div>
                </div>
                <div
                style="
                    margin: 15px;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    height: 120px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                    Nhân viên phụ trách
                </div>
                <div style="display: flex; margin: 20px;">
                    <div style="width: 330px;">
                    <label style="font-weight: 500; color: #000">Họ & Tên</label>
                        <input
                        style="
                            width: 200px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.staffInfor.fullName}"
                        />
                    </div>
                    <div style="width: 300px;">
                    <label style="font-weight: 500; color: #000">SĐT</label>
                        <input
                        style="
                            width: 200px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.staffInfor.phoneNumber}"
                        />
                    </div>
                    <div style="width: 300px;">
                    <label style="font-weight: 500; color: #000">Chức vụ</label>
                        <input
                        style="
                            width: 200px;
                            height: 30px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                        "
                        type="text" value="${this.exportHTMLById.staffId.position}"
                        />
                    </div>
                </div>
                </div>
                <div style="margin: 20px 100px;">
                <table style="width: 600px;" border="1">
                    <thead style="text-align: left; height: 40px; background-color: #e2e3e5;">
                    <tr >
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                    </thead>
                    <tbody style="height: 40px;">
                    ${forTable}
                    </tbody>
                </table>
                </div>
                <div style="text-align: end; margin-right: 70px;">
                <div>Tiền công: <span style="color: red; font-weight: 600;">${this.formatCurrency(
                    this.exportHTMLById.wage
                )}</span></div>
                </div>
                <div style="text-align: end; margin-right: 70px;">
                <div>Tổng hóa đơn: <span style="color: red; font-weight: 600;">${this.formatCurrency(
                    this.exportHTMLById.totalBill
                )}</span></div>
                </div>
            </div>
            `;

            let mywindow = window.open("", "PRINT", "height=1123,width=900,top=100,left=150");

            mywindow.document.write(
                `<html><head><title>Hoa-Don-${this.formatDateNoTime(
                    this.exportHTMLById.createdAt
                )}</title>`
            );
            mywindow.document.write("</head><body >");
            mywindow.document.write(`${template}`);
            mywindow.document.write("</body></html>");

            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print();
            // mywindow.close();
        },
        async exportPdf() {
            // const response = this.inputproductById.products
            // console.log(response)
            let table = "";
            // console.log(this.inputProducts)
            this.repairs.forEach(async (repair, index) => {
                let forTable = "";
                repair.products.forEach((e) => {
                    forTable += `
                    <tr>
                        <td style="border: 1px solid black; padding: 5px">${e.productId.name
                        }</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${e.saleQuantity
                        }</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(
                            e.salePrice
                        )}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(
                            e.saleQuantity * e.salePrice
                        )}</td>
                    </tr>
                    `;
                });
                table += `
                            <div style="height: 100%; box-sizing: border-box">
                            <div style="font-family: Arial, Helvetica, sans-serif; width: 100%;">
                            <h5 style="padding-left: 20px; padding-top: 20px;">Trang ${index + 1
                    }</h5>
                            <div style=" float: right;">....., ngày..., tháng..., năm 20..</div>
                        <h3 style="font-size: 24px; text-align: center; padding: 20px; margin: 0 20px; border-bottom: 1px solid grey;">Danh sách hóa đơn sửa chữa</h3>
                        <div style="display: flex; justify-content: space-between; margin-top: 30px;">
                <div style="margin-left: 50px;">
                    <p>Tên khách hàng: ${repair.customerId.name}</p>
                    <p>SĐT: ${repair.customerId.phoneNumber} Email: ${repair.customerId.email
                    }</p>
                    <p>Địa chỉ: ${repair.customerId.address}</p>
                    <p>Trạng thái đơn hàng: ${repair.status}</p>
                </div>
                <div style="margin-right: 50px;">
                    <p>Người tạo: ${repair.userId.fullName}</p>
                    <p>Email người tạo: ${repair.userId.email}</p>
                    <p>Ngày tạo: ${this.formatDateNoTime(repair.createdAt)}</p>
                </div>
                </div>
                <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid black; padding: 5px">Tên</th>
                            <th style="border: 1px solid black; padding: 5px">Số lượng</th>
                            <th style="border: 1px solid black; padding: 5px">Giá bán</th>
                            <th style="border: 1px solid black; padding: 5px">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                                ${forTable}
                        </tbody>
                    </table>
                    </div>   </div> 
                            `;
            });

            const response = await orderrepairService.exportPdf({ data: table });
            const blob = new Blob([response.data], {
                type: "application/pdf",
            });
            // console.log(blob)
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            // console.log(link)
            link.href = url;
            link.setAttribute("download", "listproduct.pdf");
            document.body.appendChild(link);
            link.click();
        },
        async filteredCustomername() {
            if (!this.searchCustomerName) return this.getAllRepairs(1);
            else {
                const regex = new RegExp(this.searchCustomerName.trim(), "i");
                await this.getAllRepairs(1);
                this.repairs = this.repairs.filter((repair) =>
                    regex.test(repair.customerId.name)
                );
            }
        },
        sortedCustomerName(is) {
            if (is == 1) {
                return this.repairs.sort((a, b) =>
                    a.customerId.name.localeCompare(b.customerId.name)
                );
            } else {
                return this.repairs.sort((a, b) =>
                    b.customerId.name.localeCompare(a.customerId.name)
                );
            }
        },
        async filteredCustomerPhone() {
            if (!this.searchCustomerPhone) return this.getAllRepairs(1);
            else {
                const regex = new RegExp(this.searchCustomerPhone.trim(), "i");
                await this.getAllRepairs(1);
                this.repairs = this.repairs.filter((repair) =>
                    regex.test(repair.customerId.phoneNumber)
                );
            }
        },
        async filteredUserName() {
            if (!this.searchUsername) return this.getAllRepairs(1);
            else {
                const regex = new RegExp(this.searchUsername.trim(), "i");
                await this.getAllRepairs(1);
                this.repairs = this.repairs.filter((repair) =>
                    regex.test(repair.userId.fullName)
                );
            }
        },
        sortedUserName(is) {
            if (is == 1) {
                return this.repairs.sort((a, b) =>
                    a.userId.fullName.localeCompare(b.userId.fullName)
                );
            } else {
                return this.repairs.sort((a, b) =>
                    b.userId.fullName.localeCompare(a.userId.fullName)
                );
            }
        },
        async filteredMethodPay(methodpay) {
            await this.getAllRepairs(1);
            this.repairs = this.repairs.filter((order) => order.methodPay == methodpay);
        },
        sortedTotalBill(is) {
            if (is == 1) {
                return this.repairs.sort((a, b) => a.totalBill - b.totalBill);
            } else {
                return this.repairs.sort((a, b) => b.totalBill - a.totalBill);
            }
        },
        async filteredStatus(status) {
            await this.getAllRepairs(1);
            this.repairs = this.repairs.filter((repair) => repair.status == status);
        },
        async findByTotalBill() {
            const data = {
                fromNumber: this.fromTotalBill,
                toNumber: this.toTotalBill,
            };
            const response = await orderrepairService.findByTotalBill(data);
            if (response.data.status) {
                this.repairs = response.data.result;
            } else {
                alert(response.data.mes);
                this.defaultSearch();
            }
        },
        defaultSearch() {
            this.searchCustomerName = "";
            this.searchCustomerPhone = "";
            this.searchUsername = "";
            this.fromTotalBill = null;
            this.toTotalBill = null;
            this.getAllRepairs(1);
        },
        async getAllStaff() {
            const response = await staffService.getAll()
            this.staffs = response.data
            // console.log(response)
        },
        async gotoEditOrder(id) {
            const response = await orderrepairService.findById({ id });
            if (response.data.status) {
                this.orderByIdUpdate = response.data.result;
                // console.log(this.orderByIdUpdate)
                const staffid = this.orderByIdUpdate.staffId._id
                const test = await staffService.findById({id: staffid})
                this.orderByIdUpdate.staffInfor = test.data.result.userId
                this.isEditOrder = true;
                // console.log(this.orderByIdUpdate.staffInfor.fullName)
            } else {
                alert(response.data.mes);
            }
            // console.log(this.orderById)
        },
        async getAllAccessory() {
            const response = await accessoryService.getByQuantity();
            this.accessories = response;
            // console.log(this.accessories)
        },
        async updateOrder() {
            // console.log(this.orderByIdUpdate)
            if(this.orderByIdUpdate.totalBill == 'momo' && (this.orderByIdUpdate.totalBill <= 1000 || this.orderByIdUpdate.totalBill > 50000000)) {
                alert('Tổng hóa đơn hiện vượt quá hạn mức. Quý khách hàng vui lòng thanh toán bằng phương thức khác. Xin cảm ơn!')
            } else {
                const response = await orderrepairService.update(this.orderByIdUpdate);
                if (this.orderByIdUpdate.methodPay == "paycash") {
                    alert(response.data.mes);
                    this.isEditOrder = false;
                    this.getAllRepairs(1)
                } else if (this.orderByIdUpdate.methodPay == "vnpay") {
                    const link = document.createElement("a");
                    // console.log(link)
                    link.href = response.data;
                    // link.setAttribute('download', 'listproduct.pdf')
                    document.body.appendChild(link);
                    link.click();
                } else {
                    const link = document.createElement("a");
                    // console.log(link)
                    link.href = response.data.payUrl;
                    // link.setAttribute('download', 'listproduct.pdf')
                    document.body.appendChild(link);
                    link.click();
                }
            }
        },
        async checkPay() {
            const params = new URLSearchParams(window.location.search);
            if (params.get("isPay") == "true") {
                // alert('Đơn')
                const isExport = await confirm(
                    `Thanh toán hóa đơn thành công! Mã hóa đơn ${params.get(
                        "id"
                    )}. Bạn có muốn xuất hóa đơn cho đơn hàng này?`
                );
                if (isExport) {
                    const id = params.get("id");
                    // console.log(response)
                    // window.open('https://example.com/cancel-order');
                    this.exportHTML(id);
                    // console.log(this.exportHTMLById)
                }
                // console.log(params.get('isPay'))
                // console.log(params.get('id'))
            } else if (params.get("isPay") == "false") {
                alert(
                    `Đơn hàng đã hủy và chuyển về trạng thái chờ thanh toán. Bạn có thể tiếp tục thanh toán với mã đơn hàng ${params.get(
                        "id"
                    )}.`
                );
            }
        },
        async cancelOrder(id) {
            const deleteCofirm = confirm('Bạn chắc chán muốn hủy đơn này?')
            if(deleteCofirm) {
                const response = await orderrepairService.cancel({ id });
                // console.log(response)
                if (response.data.status) {
                    alert(response.data.mes);
                    this.getAllRepairs(1);
                } else {
                    alert(response.data.mes);
                }
            }
        },
    },
    mounted() {
        this.getAllRepairs();
        this.getAllAccessory();
        this.checkPay();
        this.getAllStaff()
    },
};
</script>
<style>
@import url(../../assets/adminOrder.css);

.editorder-disable {
    background-color: #bbb !important;
}

.editorder-disable>svg {
    fill: #fff !important;
}
</style>
