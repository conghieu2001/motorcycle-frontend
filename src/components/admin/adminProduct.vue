<template>
    <div class="list-product-wapper">
        <div class="list-product-title pb-1"><span>Danh sách sản phẩm</span></div>
        <!-- <div class="search-input-close col-3">
                <div class="search-wapper mb-1">
                    <div class="input-holder">
                        <input type="text" class="input-search" v-model="searchText" placeholder="Type to search" />
                        <button class="search-icon" @click="clearInput">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div> -->
        <div class="d-flex justify-content-end pb-2 me-3">
            <span class="me-2">Download: </span>
            <div class="exportFilePDF" @click.prevent.stop="exportPdf">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                </svg>
                PDF
            </div>
            <download-excel class="exportFileExcel" :fetch="exportExcel" :fields="headerExportExcel" type="xlsx"
                autoColumnWidths:true :before-generate="startDownload" :before-finish="finishDownload"
                worksheet="My Worksheet" name="filename.xlsx">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                </svg>
                Excel
            </download-excel>
        </div>
        <div class="list-product-table">
            <table class="table table-striped">
                <thead class="table-info">
                    <tr>
                        <th scope="col">STT</th>
                        <th class="table-name dropdown-toggle"  @click="clickToggle(1)" >
                            Tên</th>

                        <th class="table-color dropdown-toggle" scope="col" @click="clickToggle(2)">
                            Màu</th>
                        <th class="dropdown-toggle" scope="col"
                        @click="clickToggle(3)">Sl Nhập</th>
                        <th class="dropdown-toggle" scope="col">Đã bán</th>
                        <th class="dropdown-toggle" scope="col" @click="clickToggle(4)">Giá
                            nhập</th>
                        <th class="dropdown-toggle" scope="col" @click="clickToggle(5)">Giá
                            bán</th>
                        <th class="table-options" scope="col">Options</th>
                    </tr>
                </thead>
                <ul class="isdropmenuName" v-if="isDropmenuName">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortedProductsAZ">Từ A - Z</li>
                    <li class="p-2 sortName" @click="sortedProductsZA">Từ Z - A</li>
                    <li class="mb-2"><input type="text" v-model="searchText" @input="filteredProducts"
                            placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuColor" v-if="isDropmenuColor" >
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <!-- <li class="p-2  sortName" @click="sortedProductsAZ">Từ A - Z màu</li>
                    <li class="p-2 sortName" @click="sortedProductsZA">Từ Z - A</li> -->
                    <li class="mb-2 mt-2"><input type="text" v-model="searchText" placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuInputQuantity" v-if="isDropmenuInputQuantity" >
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortInputQuantityAZ">Từ A - Z</li>
                    <li class="p-2 sortName" @click="sortInputQuantityZA">Từ Z - A</li>
                    <li class="mb-2"><input type="text" v-model="searchText" placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuInputprice" v-if="isDropmenuInputPrice" >
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortInputPiceAZ">Từ A - Z</li>
                    <li class="p-2 sortName" @click="sortInputPiceZA">Từ Z - A</li>
                    <li class="mb-2"><input type="text" v-model="searchText" placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuSaleprice" v-if="isDropmenuSalePrice">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortSalePrice">Từ thấp đến cao</li>
                    <li class="p-2 sortName" @click="sortSalePriceZA">Từ cao đến thấp</li>
                    <li class="mb-2"><input type="text" v-model="searchText" placeholder="Tìm kiếm"></li>
                </ul>
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
        <div class="overlay" v-if="isEditForm && !!getProductById">
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
                <div>
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
                            <input class="input-product" type="text" disabled
                                :value="formatCurrency(getProductById.salePrice)">
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
                            <textarea class="mb-4" rows="6" cols="86" v-model="getProductById.description"
                                disabled></textarea>
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
                                            <input type="text" class="set-left-input" disabled
                                                v-model="getProductById.specs[0].ps">
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
                                            <input type="text" class="ms-3" v-model="getProductById.specs[0].dkhtpt"
                                                disabled>
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
import JsonExcel from "vue-json-excel3";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
    components: {
        // eslint-disable-next-line no-undef
        downloadExcel: JsonExcel
    },
    data() {
        return {
            products: [],
            isEditForm: false,
            isformSpec: false,
            isDetailProduct: false,
            isformSpecSreen: false,
            getProductById: {},
            brands: {},
            categories: {},
            lengthPage: 1,
            activePage: 1,
            activeIndex: -1,
            searchText: "",
            sortKey: '',
            sortColum: "name",
            sortOrder: "asc",
            headerExportExcel: {
                "Product name": "name",
                Color: "color",
                InputQuantity: "inputQuantity",
                inputPrice: "inputPrice",
                salePrice: "salePrice",
                description: "description",
                warrantyTime: "warrantyTime",
            },
            isDropmenuName: false,
            isDropmenuColor: false,
            isDropmenuInputQuantity: false,
            isDropmenuInputPrice: false,
            isDropmenuSalePrice: false,
            test: [
                ['col1', 'col2', 'col3']
            ],
            infors: []
        }
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        // searchText() {
        //     this.filteredProducts

        // },
    },

    computed: {
        // productStrings() {
        //     return this.products.map((product) => {
        //         const { name, color } = product;
        //         return [name, color].join("");
        //     });
        // },
        // // Trả về các contact có chứa thông tin cần tìm kiếm.
        // filteredProducts() {
        //     // console.log(this.searchText)
        //     if (!this.searchText) return this.products;
        //     else if (this.searchText == '') {
        //         return this.products;
        //     }
        //     else {
        //         // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        //         this.products = this.products.filter((_product, index) =>
        //             this.productStrings[index].includes(this.searchText)
        //         );
        //         return this.products
        //     }
        // },


    },

    methods: {
        productStrings() {
            return this.products.map((product) => {
                const { name, color } = product;
                return [name, color].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        async filteredProducts() {
            // console.log(this.searchText)
            if (!this.searchText) return this.getProPanigation(1);

            else {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                const regex = new RegExp(this.searchText.trim(), 'i');
                // console.log(regex)
                await this.getProPanigation(1)
                this.products = this.products.filter((_product) =>
                    // this.productStrings()[index].includes(this.searchText)
                    regex.test(_product.name)
                );
                // return this.products
            }
        },
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
            // console.log(response, id)
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
            if (!response.data.status) {
                alert(response.data.mes)
            } else {
                alert(response.data.mes)
                // this.getProPanigation(1)
                this.getProPanigation()
                this.closeEditForm()
            }
        },
        handleFileEditProduct(event) {
            this.getProductById.imgproduct = event.target.files[0] || '';
            // console.log(this.logobrand)
        },
        sortInputQuantityAZ() {
            return this.products.sort((a, b) => a.inputQuantity - b.inputQuantity);
        },
        sortInputQuantityZA() {
            return this.products.sort((a, b) => b.inputQuantity - a.inputQuantity);
        },
        sortInputPiceAZ() {
            return this.products.sort((a, b) => a.inputPrice - b.inputPrice);
        },
        sortInputPiceZA() {
            return this.products.sort((a, b) => b.inputPrice - a.inputPrice);
        },
        sortSalePrice() {
            return this.products.sort((a, b) => a.salePrice - b.salePrice);
        },
        sortSalePriceZA() {
            return this.products.sort((a, b) => b.salePrice - a.salePrice);
        },
        sortedProductsAZ() {
            return this.products.sort((a, b) => a.name.localeCompare(b.name));
        },
        sortedProductsZA() {
            return this.products.sort((a, b) => b.name.localeCompare(a.name));
        },
        clearInput() {
            this.searchText = ''
            this.getProPanigation()
            // location.reload()
        },
        async exportExcel() {
            const response = this.products
            // console.log(response)
            return response
        },
        startDownload() {
            alert('Export Successfully!');
        },
        finishDownload() {
            alert('hide loading');
        },

        async exportPdf() {
            if (this.products.length > 0) {
                let forTable = ''

                this.products.forEach(product => {
                    forTable +=
                        `<tr>
                        <td style="border: 1px solid black; padding: 5px">${product.name}</td>
                        <td style="border: 1px solid black; padding: 5px">${product.color}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${product.inputQuantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(product.inputPrice)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(product.salePrice)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: center">0</td>
                        
                    </tr>`
                })
                // console.log(forTable)
                const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 90px; padding-left: 50px;">Danh sách các sản phẩm</h3>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 5px">Tên</th>
                    <th style="border: 1px solid black; padding: 5px">Màu</th>
                    <th style="border: 1px solid black; padding: 5px">SL nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Giá nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Giá bán</th>
                    <th style="border: 1px solid black; padding: 5px">Đã bán</th>
                </tr>
            </thead>
            <tbody>
                ${forTable}
            </tbody>
        </table>
        <span style="padding: 40px ; float: right;">....., ngày..., tháng..., năm 20..</span>
      </div>`

                const response = await productService.exportPdf({ data: template })
                const blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                // console.log(blob)
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                // console.log(link)
                link.href = url;
                link.setAttribute('download', 'listproduct.pdf')
                document.body.appendChild(link)
                link.click()
            } else {
                alert('Không có sản phẩm nào được chọn!')
            }
        },
        defaultSearch() {
            this.searchText = ''
            this.getProPanigation(1)
        },
        clickToggle(is) {
            if(is == 1) {
                this.isDropmenuName = !this.isDropmenuName
                this.isDropmenuColor = false
                this.isDropmenuInputPrice = false
                this.isDropmenuInputQuantity= false
                this.isDropmenuSalePrice = false
            } else if(is ==2) {
                this.isDropmenuColor = !this.isDropmenuColor
                this.isDropmenuName = false
                this.isDropmenuInputPrice = false
                this.isDropmenuInputQuantity= false
                this.isDropmenuSalePrice = false
            }
            else if(is ==3) {
                this.isDropmenuInputQuantity= !this.isDropmenuInputQuantity
                this.isDropmenuColor = false
                this.isDropmenuName = false
                this.isDropmenuInputPrice = false
                this.isDropmenuSalePrice = false
            }
            else if(is ==4) {
                this.isDropmenuInputQuantity= false
                this.isDropmenuColor = false
                this.isDropmenuName = false
                this.isDropmenuInputPrice = !this.isDropmenuInputPrice
                this.isDropmenuSalePrice = false
            }
            else if(is ==5) {
                this.isDropmenuInputQuantity= false
                this.isDropmenuColor = false
                this.isDropmenuName = false
                this.isDropmenuInputPrice = false
                this.isDropmenuSalePrice = !this.isDropmenuSalePrice
            }
        }
    },
    mounted() {
        this.getProPanigation()
        this.getBrand()
        this.getCategories()
    },
}
</script>
<style scoped>
@import url(../../assets/adminProduct.css);

.active_page {
    background-color: rgb(181, 181, 181);
    color: #fff;
}
</style>