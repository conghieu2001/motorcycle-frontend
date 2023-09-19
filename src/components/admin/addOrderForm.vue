<template>
    <div class="list-addinputproduct-wapper">
        <div class="list-addproduct-title"><span>Danh sách phiếu nhập hàng</span></div>
        <div class="d-flex justify-content-between">
            <div class="ms-3 add-inputproduct-form" @click="isformAddOrder = true">
                <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <span>Thêm phiếu đặt hàng</span>
            </div>
            <div class="d-flex justify-content-end pb-2 me-3">
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" @click="exportPdf">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                    </svg>
                    PDF
                </div>
                <div class="exportFileExcel" style="width: 70px;" @click="exportExcel">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                    </svg>
                    Excel
                </div>
            </div>
        </div>
        <div class="list-product-table mt-3">
            <table class="table table-striped">
                <thead class="table-info">
                    <tr>
                        <th class="table-input-stt" scope="col">STT</th>
                        <th class="table-input-name dropdown-toggle" @click="clickToggle(1)" scope="col">
                            Nhà cung cấp</th>
                        <th class="table-input-thd dropdown-toggle" @click="clickToggle(2)" scope="col">Tổng hóa đơn</th>
                        <th class="dropdown-toggle" scope="col" @click="clickToggle(3)">Người tạo</th>
                        <!-- <th scope="col">Sl Nhập</th>
                        <th scope="col">Giá nhập</th> -->
                        <th class="table-input-date dropdown-toggle" scope="col" @click="clickToggle(4)">Ngày tạo</th>
                        <th class="table-options" scope="col">Options</th>
                    </tr>
                </thead>
                <ul class="isdropmenuName-inputproduct" v-if="isdropmenuProvider">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortedProviderName(1)">Từ A - Z</li>
                    <li class="p-2 sortName" @click="sortedProviderName(2)">Từ Z - A</li>
                    <li class="mb-2"><input type="text" v-model="searchText" @input="filteredProducts"
                            placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuColor-inputproduct" v-if="isdropmenuTHD" >
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortTHD(1)">Từ thấp - cao</li>
                    <li class="p-2 sortName" @click="sortTHD(2)">Từ cao - thấp</li>
                    <li class="mb-2 mt-2"><input type="text" v-model="searchText" placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuInputQuantity-inputproduct" v-if="isdropmenuUserCreate" >
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    
                    <li class="mb-2"><input type="text" v-model="searchText" placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuInputprice-inputproduct" v-if="isdropmenuDate" >
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortInputPiceAZ">Mới nhất</li>
                    <li class="p-2 sortName" @click="sortInputPiceZA">Cũ nhất</li>
                    <li class="mb-2"><input type="text" v-model="searchText" placeholder="Tìm kiếm"></li>
                </ul>
                <tbody>
                    <tr v-for="(inputPro, index) in inputProducts" :key="inputPro._id">
                        <th class="table-input-stt">{{ index + 1 }}</th>
                        <td class="table-input-name">
                            {{ inputPro.providerId.name }}
                        </td>
                        <td>
                            {{ formatCurrency(inputPro.tonghd) }}
                        </td>
                        <!-- <td ><div v-for="arr in inputPro.array" :key="arr">{{ arr.inputQuantity }}</div></td>
                        <td ><div v-for="arr in inputPro.array" :key="arr">{{ arr.inputQuantity }}</div></td> -->
                        <td class="table-input-thd">Hoàng Công Hiếu</td>
                        <td class="table-input-date">{{ formatDateNoTime(inputPro.createdAt) }}</td>
                        <td>
                            <div class="d-flex justify-content-center">
                                <div class="icon-seen" @click="getByIdInputProduct(inputPro._id)">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="ms-3 icon-edit">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em"
                                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                                        </svg>
                                    </div>
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
        <div class="overlay" v-if="isformAddOrder">
            <div class="list-addinputproduct-form">
                <div class="p-4">
                    <div class="label-form-inputproduct d-flex justify-content-between">
                        <h4>Form phiếu nhập hàng</h4>
                        <svg @click="closeAddOrder" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                    <form action="" class="" @submit.prevent.stop="createInputProduct">
                        <div class="row m-4 mb-0">
                            <div class="col-4">
                                <label for="">Nhà cung cấp <span @click="isFromaddProvider = true" class="provider-add"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="1.5em" height="0.9em"
                                            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg></span></label>
                                <select v-model="providerId" class="choose-brand mt-1" name="" id="" required>
                                    <option value="" selected>Chọn thương hiệu</option>
                                    <option v-for="provider in providers" :key="provider._id" :value="provider._id"> {{
                                        provider.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="col-4 d-grid">
                                <label for="">Ảnh phiếu nhập</label>
                                <input type="file" @change="handleFileAddInputOrder" required>
                            </div>
                            <div class="col-4 provider-img">
                                <img :src="this.showImg" alt="">
                            </div>
                        </div>
                        <div class="row h-50 m-4">
                            <div class="col d-grid">
                                <label for="">Ghi chú</label>
                                <textarea class="" rows="3" v-model="noteOrder" cols="10" type="email"
                                    placeholder="Nhập nội dung ghi chú (nếu có)" required></textarea>
                            </div>

                        </div>
                        <div v-for="(div) in divs" :key="div">
                            <div class="row border-row-product m-4 mb-2">
                                <div class="col-4 d-grid">
                                    <label for="">Tên</label>
                                    <select class="choose-brand" v-model="div.productId" required>
                                        <option value="" selected>Chọn xe</option>
                                        <option v-for="product in products" :key="product._id" :value="product._id">{{
                                            product.name }} - {{ product.color }}</option>
                                    </select>
                                </div>
                                <div class="col-4 d-grid">
                                    <label for="">Giá nhập</label>
                                    <input class="input-product" v-model="div.inputPrice" type="number" placeholder="vnđ"
                                        required>
                                </div>
                                <div class="col-4 d-grid">
                                    <label for="">Số lượng nhập</label>
                                    <input class="input-product" v-model="div.inputQuantity" required type="number"
                                        placeholder="..." name="" id="">
                                </div>
                            </div>
                        </div>
                        <div class="overlay" v-if="isFromaddProvider">
                            <div class="form-addprovider">
                                <form action="" @submit.prevent.stop="addProvider">
                                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                                        <h4>Thêm nhà cung cấp mới</h4>
                                        <div class="mb-1" @click="closeFormAddProvider" style="cursor: pointer;">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                <path
                                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Tên nhà cung cấp <span class="span-requied">*</span></label>
                                        <input type="text" v-model="providerCreate.name" required
                                            placeholder="Nhập tên nhà cung cấp">
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                        <input type="number" v-model="providerCreate.phoneNumber" required
                                            placeholder="Nhập sdt nhà cung cấp">
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Địa chỉ <span class="span-requied">*</span></label>
                                        <input type="text" v-model="providerCreate.address" required
                                            placeholder="Nhập địa chỉ nhà cung cấp">
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Email <span class="span-requied">*</span></label>
                                        <input type="email" v-model="providerCreate.email" required
                                            placeholder="Nhập email nhà cung cấp">
                                    </div>
                                    <button class="submit-add-brand">Create</button>
                                </form>
                            </div>
                        </div>
                        <div class="button-add-order">
                            <svg v-on:click="addDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                            <svg v-on:click="removeDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div>
                        <div class="d-flex justify-content-end pe-4 pt-4">
                            <!-- <div>Tổng tiền = {{ THD }}
                            </div> -->
                            <button type="submit" class="custom-btn btn-12"><span>Tạo!</span><span>Tiếp tục</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isScreenDetail">
            <div class="detail-inputproduct-wapper">
                <div class="infor-bussiness-inputproduct d-flex justify-content-between">
                    <div>
                        <h4>{{ bussiness.name }}</h4>
                        <p>Địa chỉ: {{ bussiness.address }}</p>
                        <p>Điện thoại: {{ bussiness.phoneNumber }}</p>
                    </div>
                    <div class="me-3">
                        <svg @click="isScreenDetail = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                </div>
                <div class="detail-inforproduct-content">
                    <h4>Chi tiết phiếu nhập</h4>
                    <div class="d-flex justify-content-between">
                        <div class="ms-5">
                            <h6><strong>Nhà cung cấp:</strong> {{ inputproductById.providerId.name }} <strong>SĐT:</strong>
                                {{ inputproductById.providerId.phoneNumber }}</h6>
                            <h6><strong>Địa chỉ:</strong> {{ inputproductById.providerId.address }}</h6>
                            <h6><strong>Email:</strong> {{ inputproductById.providerId.email }}</h6>
                        </div>
                        <div class="me-5">
                            <h6><strong>Người tạo:</strong> Hoàng Công Hiếu</h6>
                            <h6><strong>Thời gian tạo:</strong> {{ formatDate(inputproductById.createdAt) }}</h6>
                            <div class="d-flex justify-content-end">
                                <div class="exportFilePDF" @click="exportPdfDetail" style="width: 70px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                                    </svg>
                                    PDF
                                </div>
                                <div class="exportFileExcel" style="width: 70px;" @click="exportExcelDetail">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                        viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                                    </svg>
                                    Excel
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-detail-inputproduct">
                        <table class="table ">
                            <thead class="table-info">
                                <tr>
                                    <th class="table-name" scope="col">Tên sản phẩm</th>
                                    <th class="table-color" scope="col">Màu</th>
                                    <th scope="col">Sl Nhập</th>
                                    <th scope="col">Giá nhập</th>
                                    <th scope="col">Thành tiền</th>


                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div v-for="arr in inputproductById.products" :key="arr"><span>{{ arr.productName
                                        }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in inputproductById.products" :key="arr"><span>{{ arr.productColor
                                        }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in inputproductById.products" :key="arr"><span>{{ arr.inputQuantity
                                        }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in inputproductById.products" :key="arr"><span>{{
                                            formatCurrency(arr.inputPrice) }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in inputproductById.products" :key="arr"><span>{{
                                            formatCurrency(arr.inputPrice * arr.inputQuantity) }}</span></div>
                                    </td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="ps-2">
                            <span>Tổng hóa đơn: {{ formatCurrency(inputproductById.tonghd) }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import productService from '../../services/product.service';
import inputProductService from '../../services/inputProduct.service'
import bussinessService from '../../services/bussiness.service';
import brandService from '../../services/brand.service';
import providerService from '../../services/provider.service';
import * as XLSX from 'xlsx'
export default {

    data() {
        return {
            isformAddOrder: false,
            isScreenDetail: false,
            products: {},
            lengthPage: 1,
            activePage: 1,
            inputProducts: {},
            bussiness: {},
            inputproductById: {},
            brandId: '',
            inputorderImg: null,
            providerId: '',
            divs: [{
                productId: '',
                inputPrice: '',
                inputQuantity: '',

            },],
            brands: {},
            valid: {
                phoneNumber: ''
            },
            isValid: false,
            providers: {},
            providerCreate: {
                name: '',
                email: '',
                phoneNumber: '',
                address: '',
            },
            noteOrder: '',
            isFromaddProvider: false,
            showImg: '',
            isdropmenuProvider: false,
            isdropmenuTHD: false,
            isdropmenuUserCreate: false,
            isdropmenuDate: false,
            searchText: ''
        }
    },
    methods: {
        closeAddOrder() {
            this.isformAddOrder = false
            this.divs = [{
                productId: '',
                inputPrice: '',
                inputQuantity: '',

            },]
            this.noteOrder = ''
            this.showImg = ''
        },
        addDiv() {
            this.divs.push({});
            // this.isPop = true
        },
        removeDiv() {
            if (this.divs.length > 1) {
                this.divs.pop();
            }
            // this.divs.pop();
        },
        async getProducts() {
            this.products = await productService.getAll()
            // console.log(this.products)
        },
        handleFileAddInputOrder(event) {
            this.inputorderImg = event.target.files[0] || '';
            const src = URL.createObjectURL(this.inputorderImg)
            this.showImg = src
            // console.log(this.inputorderImg)
        },
        async createInputProduct() {
            // if (this.validate(this.providerPhoneNumber) == true) {
            const data = {
                arrayProduct: this.divs,
                inputorderImg: this.inputorderImg,
                note: this.noteOrder,
                providerId: this.providerId
            }
            // console.log(data)
            const response = await inputProductService.create(data)
            if (!response.data.status) {
                alert(response.data.mes)
            } else {
                alert(response.data.mes)
                this.isformAddOrder = false
                this.inputorderImg = null
                this.noteOrder = '',
                    this.providerId = '',
                    this.divs = [{
                        productId: '',
                        inputPrice: '',
                        inputQuantity: '',
                    }],
                    this.getInputProduct(1)
            }
            // } else {
            //     console.log("error")
            // }
        },
        hasFalseValue(obj) {
            let temp = false
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (obj[key] === false) {
                        temp = true;
                    }
                    else {
                        temp = false
                        break;
                    }
                }
            }
            return temp
        },
        validate(providerPhoneNumber) {
            // console.log(providerPhoneNumber)
            if (
                !providerPhoneNumber ||
                !providerPhoneNumber.match(/^(03[2-9]|05[2-9]|07[0-9]|08[1-9]|09[0-9]|01[2|6|8|9])+([0-9]{7})\b$/)
            ) {
                this.valid.phoneNumber = 'Số điện thoại không hợp lệ';
            } else {
                this.valid.phoneNumber = false;
            }

            this.isValid = this.hasFalseValue(this.valid);
            return this.isValid
            // console.log(this.isValid)
        },
        handlePage(index) {
            this.activePage = index
            this.getInputProduct(index)
            // console.log(this.activePage)
        },
        async getInputProduct(pageNumber = 1) {
            try {
                const length = await inputProductService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await inputProductService.getAll(pageNumber, 10)
                this.inputProducts = response.data
                // console.log(this.inputProducts[0].providerId.name)
            } catch (error) {
                console.log(error);
            }
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async getBussiness() {
            this.bussiness = await bussinessService.getAll()
        },
        async getByIdInputProduct(id) {

            const response = await inputProductService.findById({ id })
            this.inputproductById = response.data.result
            this.isScreenDetail = true
            // console.log(this.inputproductById)
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },

        formatDate(dateString, config = { dateStyle: 'medium', timeStyle: 'short' }) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', config).format(date);
        },
        async getBrands() {
            this.brands = await brandService.getAll()
        },
        async getProvider() {
            this.providers = await providerService.getAll()
            // console.log(this.providers)
        },
        async addProvider() {
            try {
                const respone = await providerService.create(this.providerCreate)
                if (respone.data.status == true) {
                    alert(respone.data.mes)
                    this.isFromaddProvider = false
                    this.providerCreate = {
                        name: '',
                        email: '',
                        phoneNumber: '',
                        address: '',
                    }
                    this.getProvider()
                } else {
                    alert(respone.data.mes)
                }
            } catch (error) {
                console.log(error)
            }
        },
        closeFormAddProvider() {
            this.isFromaddProvider = false
            this.providerCreate = {
                name: '',
                email: '',
                phoneNumber: '',
                address: '',
            }
        },
        exportExcelDetail() {
            const filename = 'detailinputproduct'
            const respone = this.inputproductById.products
            let data = []
            respone.forEach(e => {
                data.push([
                    e.productName,
                    e.productColor,
                    e.inputQuantity,
                    e.inputPrice
                ])
            });

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 25 }, { width: 25 }, { width: 25 }, { width: 25 }];
            ws['A1'] = { v: 'Tên sản phẩm' };
            ws['B1'] = { v: 'Màu' };
            ws['C1'] = { v: 'Số lượng nhập' };
            ws['D1'] = { v: 'Giá nhập' };
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);

        },
        exportExcel() {
            const filename = 'inputproduct'
            const response = this.inputProducts
            // console.log(response)
            let data = []
            response.forEach(e => {
                data.push([
                    e.providerId.name,
                    e.providerId.phoneNumber,
                    e.providerId.email,
                    e.providerId.address
                ])
            })

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 25 }, { width: 15 }, { width: 25 }, { width: 50 }];
            ws['A1'] = { v: 'Nhà cung cấp' };
            ws['B1'] = { v: 'SĐT' };
            ws['C1'] = { v: 'Email' };
            ws['D1'] = { v: 'Địa chỉ' };
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);

        },
        async exportPdfDetail() {
            // const response = this.inputproductById.products
            // console.log(response)

            let forTable = ''

            // console.log(this.inputProducts)
            this.inputproductById.products.forEach(product => {
                forTable +=
                    `<tr>
                        <td style="border: 1px solid black; padding: 5px">${product.productName}</td>
                        <td style="border: 1px solid black; padding: 5px">${product.productColor}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${product.inputQuantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(product.inputPrice)}</td>
                    </tr>`
            })
            // console.log(forTable)
            const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 90px; padding-left: 50px;">Danh sách các sản phẩm</h3>
        <div style="display: flex; justify-content: space-between;">
          <div style="margin-left: 50px;">
            <p>Nhà cung cấp: ${this.inputproductById.providerId.name}</p>
            <p>SDT: ${this.inputproductById.providerId.phoneNumber} Email: ${this.inputproductById.providerId.email}</p>
            <p>Địa chỉ: ${this.inputproductById.providerId.address}</p>
          </div>
          <div style="margin-right: 50px;">
            <p>Người tạo: Hoàng Công Hiếu</p>
            <p>Ngày tạo: ${this.formatDateNoTime(this.inputproductById.createdAt)}</p>
          </div>
        </div>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 5px">Tên</th>
                    <th style="border: 1px solid black; padding: 5px">Màu</th>
                    <th style="border: 1px solid black; padding: 5px">SL nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Giá nhập</th>
                </tr>
            </thead>
            <tbody>
                ${forTable}
            </tbody>
        </table>
        <div style="margin: 40px;">
          <span style="float: left;">Tổng hóa đơn: ${this.formatCurrency(this.inputproductById.tonghd)}</span>
        <span style=" float: right;">....., ngày..., tháng..., năm 20..</span>
        </div>
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

        },
        async exportPdf() {
            // const response = this.inputproductById.products
            // console.log(response)

            let table = ''
            // console.log(this.inputProducts)
            this.inputProducts.forEach((product, index) => {
                let forTable = ''
                product.products.forEach(e => {
                    forTable += `
                    <tr>
                        <td style="border: 1px solid black; padding: 5px">${e.productName}</td>
                        <td style="border: 1px solid black; padding: 5px">${e.productColor}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${e.inputQuantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(e.inputPrice)}</td>
                    </tr>
                    `
                })
                table +=
                    `
                    <div style="height: 100%; box-sizing: border-box">
                    <div style="font-family: Arial, Helvetica, sans-serif; width: 100%;">
                    <h5 style="padding-left: 20px; padding-top: 20px;">Trang ${index + 1}</h5>
                    <div style=" float: right;">....., ngày..., tháng..., năm 20..</div>
                <h3 style="font-size: 24px; text-align: center; padding: 20px; margin: 0 20px; border-bottom: 1px solid grey;">Danh sách các sản phẩm</h3>
                <div style="display: flex; justify-content: space-between; margin-top: 30px;">
          <div style="margin-left: 50px;">
            <p>Nhà cung cấp: ${product.providerId.name}</p>
            <p>SDT: ${product.providerId.phoneNumber} Email: ${product.providerId.email}</p>
            <p>Địa chỉ: ${product.providerId.address}</p>
          </div>
          <div style="margin-right: 50px;">
            <p>Người tạo: Hoàng Công Hiếu</p>
            <p>Ngày tạo: ${this.formatDateNoTime(product.createdAt)}</p>
          </div>
        </div>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 5px">Tên</th>
                    <th style="border: 1px solid black; padding: 5px">Màu</th>
                    <th style="border: 1px solid black; padding: 5px">SL nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Giá nhập</th>
                </tr>
            </thead>
            <tbody>
                        ${forTable}
                </tbody>
            </table>
            </div>   </div> 
                    `
            })
            // console.log(table)
    //         const template = `
                
        
    //         ${table}
        
        
        
        
    //   `

            const response = await productService.exportPdf({ data: table })
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

        },
        clickToggle(is) {
            if (is == 1) {
                this.isdropmenuProvider = !this.isdropmenuProvider
                this.isdropmenuTHD = false
                this.isdropmenuUserCreate = false
                this.isdropmenuDate = false
            } else if (is == 2) {
                this.isdropmenuProvider = false
                this.isdropmenuTHD = !this.isdropmenuTHD
                this.isdropmenuUserCreate = false
                this.isdropmenuDate = false
            }
            else if (is == 3) {
                this.isdropmenuProvider = false
                this.isdropmenuTHD = false
                this.isdropmenuUserCreate = !this.isdropmenuUserCreate
                this.isdropmenuDate = false
            }
            else if (is == 4) {
                this.isdropmenuProvider = false
                this.isdropmenuTHD = false
                this.isdropmenuUserCreate = false
                this.isdropmenuDate = !this.isdropmenuDate
            }
            
        },
        async filteredProducts() {
            // console.log(this.searchText)
            if (!this.searchText) return this.getInputProduct(1);

            else {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                const regex = new RegExp(this.searchText.trim(), 'i');
                // console.log(regex)
                await this.getInputProduct(1)
                this.inputProducts = this.inputProducts.filter((_product) =>
                    // this.productStrings()[index].includes(this.searchText)
                    regex.test(_product.providerId.name)
                );
                // return this.products
            }
        },
        defaultSearch() {
            this.searchText = ''
            this.getInputProduct(1)
        },
        sortedProviderName(is) {
            if(is == 1) {
                return this.inputProducts.sort((a, b) => a.providerId.name.localeCompare(b.providerId.name));
            } else {
                return this.inputProducts.sort((a, b) => b.providerId.name.localeCompare(a.providerId.name));
            }
        },
        sortTHD(is) {
            if(is == 1) {
                return this.inputProducts.sort((a, b) => a.tonghd - b.tonghd);
            } else {
                return this.inputProducts.sort((a, b) => b.tonghd - a.tonghd);
            }
        },

    },
    mounted() {
        this.getProducts()
        this.getInputProduct()
        this.getBussiness()
        this.getBrands()
        this.getProvider()
    }
}
</script>
<style scoped>
@import url(../../assets/adminAddProduct.css);
</style>