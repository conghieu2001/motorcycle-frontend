<template>
    <div class="list-product-wapper">
        <div class="list-product-title"><span>Danh sách sản phẩm</span></div>
        <div class="list-product-table">
            <table class="table table-striped">
                <thead class="table-info">
                    <tr>
                        <th scope="col">STT</th>
                        <th class="table-name" scope="col">Tên</th>
                        <th class="table-color" scope="col">Màu</th>
                        <th scope="col">Sl Nhập</th>
                        <th scope="col">Đã bán</th>
                        <th scope="col">Giá nhập</th>
                        <th scope="col">Giá bán</th>
                        <th class="table-options" scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="product._id">
                        <th>{{ index + 1 }}</th>
                        <td class="table-name">{{ product.name }}</td>
                        <td class="table-color">{{ product.color }}</td>
                        <td class="table-center">{{ product.inputQuantity }}</td>
                        <td class="table-center">chưa làm</td>
                        <td>{{ formatCurrency(product.inputPrice) }}</td>
                        <td>{{ formatCurrency(product.salePrice) }}</td>
                        <td class="table-options d-flex justify-content-center">
                            <div class="icon-seen" v-on:click="openFormDetail(product._id)">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                        viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ms-3 icon-edit" v-on:click="openFormEdit(product._id)">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.4em"
                                        viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
            <div class="pos-nagination">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(1)">&laquo;</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item" v-for="index in lengthPage" :key="index">
                        <span class="page-link" :class="{active_page:activePage === index}" @click="handlePage(index)">{{ index }}</span>
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
        <div class="overlay" v-if="isEditForm">
            <div class="form-edit-product">
                <form action="" class="" @submit.prevent.stop="updateProduct">
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Chỉnh sửa</h4>
                        <div class="addbrand-close mb-1" @click="closeEditForm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 352 512">
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                            </svg>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between ps-4 pe-4 pt-4">
                        <div class="d-grid">
                            <label for="">Tên sản phẩm </label>
                            <input class="input-product" required type="text" v-model="getProductById.name">
                        </div>
                        <div class="d-flex">
                            <div class="getProduct-img">
                                <img :src="'http://localhost:3000' + getProductById.image" alt="">
                            </div>
                            <div class="d-grid ms-2">
                                <label for="">Chọn ảnh khác</label>
                                <input type="file" @change="handleFileEditProduct">
                            </div>
                        </div>
                        <div class="d-grid">
                            <label for="">Màu sắc</label>
                            <input class="input-product" required type="text" name="" id="" v-model="getProductById.color">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pt-4 ps-4 pe-4">
                        <div>
                            <div class="d-flex">
                                <label for="">Thương hiệu</label>
                                <div class="add-brand">Thêm thương hiệu</div>
                            </div>
                            <select class="choose-brand mt-1" name="" id="" v-model="getProductById.brandId" required>
                                <!-- <option value="" selected>Chọn thương hiệu</option> -->
                                <option v-for="brand in brands " :key="brand._id" :value="brand._id"> {{ brand.name }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <div class="d-flex">
                                <label for="">Loại xe</label>
                                <div class="add-category">Thêm loại xe</div>
                            </div>
                            <select class="choose-category mt-1" name="" id="" v-model="getProductById.category" required>
                                <!-- <option value="" selected>Chọn loại xe</option> -->
                                <option v-for="category in categories" :key="category._id" :value="category._id">{{
                                    category.name }}</option>
                            </select>
                        </div>
                        <div class="d-grid">
                            <label for="">Giá bán</label>
                            <input class="input-product" type="text" required v-model="getProductById.salePrice">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between p-4">
                        <div class="d-flex">
                            <div class="d-grid">
                                <label for="">Thông số kĩ thuật </label>
                                <div class="custom-btn btn-3 mb-5" @click="isformSpec = true"><span>Thêm</span></div>
                            </div>
                            <div class="d-grid">
                                <label for="">Thời gian bảo hành</label>
                                <select class="select-baohanh" name="" id="" v-model="getProductById.warrantyTime" required>
                                    <option :value="12">12 tháng</option>
                                    <option :value="24">24 tháng</option>
                                    <option :value="36">36 tháng</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-grid description-input">
                            <label for="">Mô tả</label>
                            <textarea class="mb-4" rows="3" cols="86" v-model="getProductById.description"></textarea>
                        </div>
                    </div>
                    <div class="overlay" v-if="isformSpec">
                        <div class="form-addSpec-wapper">
                            <div>
                                <div class="d-flex justify-content-between align-items-center addbrand-title">
                                    <h4>Form thông số kỹ thuật</h4>
                                    <div class="addSpec-close" @click="isformSpec = false">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                            viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Khối lượng bản thân</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].klbt">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Dài x Rộng x Cao</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].drc">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Khoảng cách trục bánh xe</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].kctbx">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Độ cao yên</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].dcy">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Khoảng sáng gầm xe</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].kcgx">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Dung tích bình xăng</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].dtbx">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Kích cỡ lớp trước/ sau</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].kclt">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Phuộc trước</label>
                                            <input type="text" class="set-right-input" v-model="getProductById.specs[0].pt">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Phuộc sau</label>
                                            <input type="text" class="set-left-input" v-model="getProductById.specs[0].ps">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Loại động cơ</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].ldc">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Công suất tối đa</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].cstd">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Dung tích nhớt máy</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].dtnm">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Mức tiêu thụ nhiên liệu</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].mttnl">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Loại truyền động</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].ltd">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Hệ thống khởi động</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].htkd">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Moment cực đại</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].mcd">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Dung tích xy-lanh</label>
                                            <input type="text" class="set-left-input"
                                                v-model="getProductById.specs[0].dtxl">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Tỷ số nén</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].tsn">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-7 style-input-final">
                                            <label for="">Đường kính x Hành trình pít tông</label>
                                            <input type="text" class="ms-3" v-model="getProductById.specs[0].dkhtpt">
                                        </div>
                                        <div class="col-5">
                                            <button class="submit-add-spec" @click="previous">Tiếp tục</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="custom-btn btn-12"><span>Tạo!</span><span>Tiếp tục</span></button>
                </form>
            </div>
        </div>
        <div class="overlay" v-if="isDetailProduct">
            <div class="form-edit-product">
                <div >
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Thông tin chi tiết</h4>
                        <div class="addbrand-close mb-1" @click="isDetailProduct = false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 352 512">
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                            </svg>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between ps-4 pe-4 pt-4">
                        <div class="d-grid">
                            <label for="">Tên sản phẩm: </label>
                            <input class="input-product" type="text" v-model="getProductById.name" disabled>
                        </div>
                        <div class="d-flex align-items-center">
                            <label for="">Ảnh:</label>
                            <div class="getProduct-img ms-3">
                                <img :src="'http://localhost:3000' + getProductById.image" alt="">
                            </div>
                        </div>
                        <div class="d-grid">
                            <label for="">Màu sắc</label>
                            <input class="input-product" disabled type="text" name="" id="" v-model="getProductById.color">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pt-4 ps-4 pe-4">
                        <div>
                            <div class="d-flex">
                                <label for="">Thương hiệu:</label>
                            </div>
                            <select class="choose-brand mt-1" name="" id="" v-model="getProductById.brandId" disabled>
                                <!-- <option value="" selected>Chọn thương hiệu</option> -->
                                <option v-for="brand in brands " :key="brand._id" :value="brand._id"> {{ brand.name }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <div class="d-flex">
                                <label for="">Loại xe:</label>
                            </div>
                            <select class="choose-category mt-1" name="" id="" v-model="getProductById.category" disabled>
                                <!-- <option value="" selected>Chọn loại xe</option> -->
                                <option v-for="category in categories" :key="category._id" :value="category._id">{{
                                    category.name }}</option>
                            </select>
                        </div>
                        <div class="d-grid">
                            <label for="">Giá bán</label>
                            <input class="input-product" type="text" disabled :value="formatCurrency(getProductById.salePrice)">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between p-4">
                        <div class="d-flex">
                            <div class="d-grid">
                                <label for="">Thông số kĩ thuật: </label>
                                <div class="custom-btn btn-3 mb-5" @click="isformSpecSreen = true"><span>Thêm</span></div>
                            </div>
                            <div class="d-grid">
                                <label for="">Thời gian bảo hành</label>
                                <select class="select-baohanh" name="" id="" v-model="getProductById.warrantyTime" disabled>
                                    <option :value="12">12 tháng</option>
                                    <option :value="24">24 tháng</option>
                                    <option :value="36">36 tháng</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-grid description-input">
                            <label for="">Mô tả</label>
                            <textarea class="mb-4" rows="6" cols="86" v-model="getProductById.description" disabled></textarea>
                        </div>
                    </div>
                    <div class="overlay" v-if="isformSpecSreen">
                        <div class="form-addSpec-wapper">
                            <div>
                                <div class="d-flex justify-content-between align-items-center addbrand-title">
                                    <h4>Form thông số kỹ thuật</h4>
                                    <div class="addSpec-close" @click="isformSpecSreen = false">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                            viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Khối lượng bản thân</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].klbt">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Dài x Rộng x Cao</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].drc">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Khoảng cách trục bánh xe</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].kctbx">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Độ cao yên</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].dcy">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Khoảng sáng gầm xe</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].kcgx">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Dung tích bình xăng</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].dtbx">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Kích cỡ lớp trước/ sau</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].kclt">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Phuộc trước</label>
                                            <input type="text" class="set-right-input" v-model="getProductById.specs[0].pt">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Phuộc sau</label>
                                            <input type="text" class="set-left-input" disabled v-model="getProductById.specs[0].ps">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Loại động cơ</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].ldc">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Công suất tối đa</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].cstd">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Dung tích nhớt máy</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].dtnm">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Mức tiêu thụ nhiên liệu</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].mttnl">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Loại truyền động</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].ltd">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Hệ thống khởi động</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].htkd">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Moment cực đại</label>
                                            <input type="text" class="set-right-input"
                                                v-model="getProductById.specs[0].mcd">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-6 style-input">
                                            <label for="">Dung tích xy-lanh</label>
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].dtxl">
                                        </div>
                                        <div class="col-6 style-input">
                                            <label for="">Tỷ số nén</label>
                                            <input type="text" class="set-right-input" disabled
                                                v-model="getProductById.specs[0].tsn">
                                        </div>
                                    </div>
                                    <div class="row m-3 set-height">
                                        <div class="col-7 style-input-final">
                                            <label for="">Đường kính x Hành trình pít tông</label>
                                            <input type="text" class="ms-3" v-model="getProductById.specs[0].dkhtpt" disabled>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import brandService from '../../services/brand.service';
import categoryService from '../../services/category.service';
import productService from '../../services/product.service';
export default {
    data() {
        return {
            products: {},
            isEditForm: false,
            isformSpec: false,
            isDetailProduct: false,
            isformSpecSreen: false,
            getProductById: {},
            brands: {},
            categories: {},
            lengthPage: 1,
            activePage: 1,
        }
    },
    methods: {
        // async getProducts() {
        //     this.products = await productService.getAll()
        //     // console.log(this.products[0].specs[0].ps)
        // },
        handlePage(index) {
            this.activePage = index
            this.getProPanigation(index)
            // console.log(this.activePage)
        },
        async getProPanigation(pageNumber = 1) {
            try {
                const length = await productService.getPanigation()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await productService.getPanigation(pageNumber, 10)
                this.products = response.data
                // console.log(this.products)
            } catch (error) {
                console.log(error);
            }
        },
        async openFormEdit(id) {
            const response = await productService.findById({ id })
            this.getProductById = response.data.result
            this.isEditForm = true
            // console.log(this.getProductById)
        },
        async openFormDetail(id) {
            const response = await productService.findById({ id })
            this.getProductById = response.data.result
            this.isDetailProduct = true
            // console.log(this.getProductById)
        },
        closeEditForm() {
            this.isEditForm = false
        },
        async getBrand() {
            this.brands = await brandService.getAll()
        },
        async getCategories() {
            this.categories = await categoryService.getAll()
        },
        previous() {
            this.isformSpec = false
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async updateProduct() {
            // console.log(this.getProductById)
            const response = await productService.update(this.getProductById) 
            if(!response.data.status) {
                alert(response.data.mes)
            } else {
                alert(response.data.mes)
                // this.getProPanigation(1)
                location.reload();
                this.closeEditForm()
            }
        },
        handleFileEditProduct(event) {
            this.getProductById.imgproduct = event.target.files[0] || '';
            // console.log(this.logobrand)
        },
    },
    mounted() {
        // this.getProducts()
        this.getProPanigation()
        this.getBrand()
        this.getCategories()
    }
}
</script>
<style scoped>
@import url(../../assets/adminProduct.css);

.active_page {
    background-color: rgb(181, 181, 181);
    color: #fff;
}
</style>