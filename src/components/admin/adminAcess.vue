<template>
    <div class="list-product-wapper">
        <div class="list-product-title pb-1"><span>Danh sách sản phẩm</span></div>
        <div class="d-flex justify-content-end pb-2 me-3">

            <div class="d-flex align-items-center">
                <!-- <div>
                    <div class="searchbytime btn btn-info dropdown-toggle me-4" @click="isSearchDate = !isSearchDate">
                        Tìm kiếm theo thời gian
                    </div>
                    <ul v-if="isSearchDate" class="searchbytime-drop list-group">
                        <li class="list-group-item" @click="defaultSearch">

                            <span>Mặc định</span>


                        </li>
                        <li class="list-group-item">
                            <div data-bs-toggle="collapse" data-bs-target="#searchDate" aria-expanded="false"
                                aria-controls="searchDate">
                                <span>Theo ngày</span>
                            </div>
                            <div class="collapse searchdata-showcontent mt-2" id="searchDate">
                                <input type="date" v-model="searchDay" @input="findByDay">
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div data-bs-toggle="collapse" data-bs-target="#searchDate2" aria-expanded="false"
                                aria-controls="searchDate2">
                                <span>Theo tháng</span>
                            </div>
                            <div class="collapse searchdata-showcontent mt-2" id="searchDate2">
                                <input type="month" v-model="searchMonth" @input="findByMonth">
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div data-bs-toggle="collapse" data-bs-target="#searchDate3" aria-expanded="false"
                                aria-controls="searchDate3">
                                <span>Theo năm</span>
                            </div>
                            <div class="collapse searchdata-showcontent mt-2" id="searchDate3">
                                <input type="number" v-model="searchYear" @input="findByYear" placeholder="Nhập năm (2023)">
                            </div>
                        </li>
                    </ul>

                </div> -->
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" @click.prevent.stop="exportPdf">
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
        <div class="list-product-table">
            <table class="table table-striped">
                <thead class="table-info">
                    <tr>
                        <th scope="col">STT</th>
                        <th class="table-name dropdown-toggle" @click="clickToggle(1)">
                            Tên</th>
                        <th class="dropdown-toggle" scope="col" @click="clickToggle(2)">Sl Nhập</th>
                        <th class="dropdown-toggle" scope="col" @click="clickToggle(3)">Sl đã bán</th>
                        <th class="dropdown-toggle" scope="col" @click="clickToggle(4)">Giá
                            nhập</th>
                        <th class="dropdown-toggle" scope="col" @click="clickToggle(5)">Giá bán</th>
                        <th class="table-options" scope="col">Options</th>
                    </tr>
                </thead>
                <ul class="isdropmeAcessnuName" v-if="isDropmenuName">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortName(1)">Từ A - Z</li>
                    <li class="p-2 sortName" @click="sortName(2)">Từ Z - A</li>
                    <li class="mb-2"><input type="text" v-model="searchText" @input="filteredAcesstories"
                            placeholder="Tìm kiếm"></li>
                </ul>
                <ul class="isdropmenuAcessInputQuantity" v-if="isDropmenuInputQuantity">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortInputquantity(1)">Từ A - Z</li>
                    <li class="p-2 sortName" @click="sortInputquantity(2)">Từ Z - A</li>
                    <li class="mb-2 ps-1 pe-1">
                        <form action="" @submit.prevent="findByAcessInputquantity">
                            <div class="d-flex">
                                <input type="number" min="0" v-model="data.fromNumberIQ" maxlength="13" placeholder="₫ TỪ" required>
                                <div></div>
                                <input type="number" min="0" v-model="data.toNumberIQ" maxlength="13" placeholder="₫ ĐẾN" required>
                            </div>
                            <button type="submit">Áp dụng</button>
                        </form>
                    </li>
                </ul>
                <ul class="isdropmenuAcessInputprice" v-if="isDropmenuSaleQuantity">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortSalequantity(1)">Từ A - Z</li>
                    <li class="p-2 sortName" @click="sortSalequantity(2)">Từ Z - A</li>
                    <li class="mb-2 ps-1 pe-1">
                        <form action="" @submit.prevent="findByAcessSalequantity">
                            <div class="d-flex">
                                <input type="number" min="0" v-model="data.fromNumberSQ" maxlength="13" placeholder="₫ TỪ" required>
                                <div></div>
                                <input type="number" min="0" v-model="data.toNumberSQ" maxlength="13" placeholder="₫ ĐẾN" required>
                            </div>
                            <button type="submit">Áp dụng</button>
                        </form>
                    </li>
                </ul>
                <ul class="isdropmenuAcessSaleprice" v-if="isDropmenuInputPrice">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortInputPrice(1)">Từ thấp đến cao</li>
                    <li class="p-2 sortName" @click="sortInputPrice(2)">Từ cao đến thấp</li>
                    <li class="mb-2 ps-1 pe-1">
                        <form action="" @submit.prevent="findByAcessInputPrice">
                            <div class="d-flex">
                                <input type="number" min="0" v-model="data.fromNumberIP" maxlength="13" placeholder="₫ TỪ" required>
                                <div></div>
                                <input type="number" min="0" v-model="data.toNumberIP" maxlength="13" placeholder="₫ ĐẾN" required>
                            </div>
                            <button type="submit">Áp dụng</button>
                        </form>
                    </li>
                </ul>
                <ul class="isdropmenuAcessCreate" v-if="isDropmenuSalePrice">
                    <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                    <li class="p-2  sortName" @click="sortSalePrice(1)">Từ thấp đến cao</li>
                    <li class="p-2 sortName" @click="sortSalePrice(2)">Từ cao đến thấp</li>
                    <li class="mb-2 ps-1 pe-1">
                        <form action="" @submit.prevent="findByAcessSalePrice">
                            <div class="d-flex">
                                <input type="number" min="0" v-model="data.fromNumberSP" maxlength="13" placeholder="₫ TỪ" required>
                                <div></div>
                                <input type="number" min="0" v-model="data.toNumberSP" maxlength="13" placeholder="₫ ĐẾN" required>
                            </div>
                            <button type="submit">Áp dụng</button>
                        </form>
                    </li>
                </ul>
                <tbody>
                    <tr v-for="(acesstory, index) in acesstories" :key="index">
                        <th>{{ index + 1 }}</th>
                        <td class="table-name">{{ acesstory.name }}</td>
                        <td class="table-center">{{ acesstory.inputQuantity }}</td>
                        <td class="table-center">{{ acesstory.saleQuantity }}</td>
                        <td>{{ formatCurrency(acesstory.inputPrice) }}</td>
                        <td>{{ formatCurrency(acesstory.salePrice) }}</td>
                        <!-- <td>{{ formatDateNoTime(acesstory.createdAt) }}</td> -->
                        <td class="table-options d-flex justify-content-center">
                            <div class="icon-seen" @click="getById(acesstory._id)">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                        viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                        <path
                                            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ms-3 icon-edit" @click="editById(acesstory._id)">
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
                <!-- <p v-else>{{ this.messFail }}</p> -->
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
        <div class="overlay" v-if="isScreenDetail">
            <div class="screen-detail-acess">
                <div>
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Thông tin chi tiết</h4>
                        <div class="mb-2" style="cursor: pointer;" @click="isScreenDetail = false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="detail-access-page">
                        <div class="row detail-acess-content m-4 me-2">
                            <div class="col-6 p-0">
                                <label for="">Tên</label>
                                <input class="me-5" type="text" :value="acesstoryById.name" disabled>
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">Ngày tạo</label>
                                <input type="text" :value="formatDateNoTime(acesstoryById.createdAt)" disabled>
                            </div>
                        </div>
                        <div class="row detail-acess-content m-4 me-2">
                            <div class="col-6 p-0">
                                <label for="">Giá nhập</label>
                                <input class="me-5" type="text" :value="formatCurrency(acesstoryById.inputPrice)" disabled>
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">Giá bán</label>
                                <input type="text" :value="formatCurrency(acesstoryById.salePrice)">
                            </div>
                        </div>
                        <div class="row detail-acess-content m-4 me-2">
                            <div class="col-6 p-0">
                                <label for="">SL nhập</label>
                                <input class="me-5" type="text" :value="acesstoryById.inputQuantity" disabled>
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">SL đã bán</label>
                                <input type="text" :value="acesstoryById.saleQuantity">
                            </div>
                        </div>
                        <div class="row detail-acess-content m-4 me-2">
                            <div class="col-6 p-0">
                                <label for="">Bảo hành</label>
                                <input class="me-5" type="text" placeholder="Không bảo hành" disabled>
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">Mô tả</label>
                                <textarea name="" id="" cols="30" rows="3" :value="acesstoryById.description"
                                    disabled></textarea>
                            </div>
                        </div>
                        <div class="row detail-acess-content m-4 me-2">
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">Ảnh</label>
                                <img :src="'http://localhost:3000' + acesstoryById.image" alt="">
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-5" for="">Phù hợp với các xe</label>
                                <ul class="ms-5">
                                    <li v-for="productName in acesstoryById.fitProductId" :key="productName">{{
                                        productName.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isEditDetail">
            <div class="edit-detail-acess">
                <form @submit.prevent="updateAcess">
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Thông tin chi tiết</h4>
                        <div class="mb-2" style="cursor: pointer;" @click="isEditDetail = false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="detail-access-page">
                        <div class="row detail-acess-content m-4 me-2">
                            <div class="col-6 p-0">
                                <label for="">Tên</label>
                                <input class="me-5" type="text" v-model="acesstoryByIdUpdate.name">
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">Ngày tạo</label>
                                <input type="text" v-model="acesstoryByIdUpdate.createdAt" disabled>
                            </div>
                        </div>
                        <div class="row detail-acess-content m-4 me-2">
                            <!-- <div class="col-6 p-0">
                                <label for="">Giá nhập</label>
                                <input class="me-5" type="number" v-model="acesstoryByIdUpdate.inputPrice">
                            </div> -->
                            <div class="col-6 p-0">
                                <label for="">Bảo hành</label>
                                <input class="me-5" type="number" placeholder="Không bảo hành" disabled>
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">Giá bán</label>
                                <input type="number" min="0" v-model="acesstoryByIdUpdate.salePrice">
                            </div>
                        </div>
                        <div class="row detail-acess-content acess-content-height-auto1  m-4 me-2">
                            
                            <div class="col-6 p-0">
                                <label class="" for="">Mô tả</label>
                                <textarea class="me-5" name="" id="" cols="30" rows="3" v-model="acesstoryByIdUpdate.description"></textarea>
                            </div>
                            <div class="col-6 p-0">
                                <label class="ms-2" for="">Phù hợp với các xe</label>
                                <ul class="acess-list-fitproduct">
                                    <li  v-for="product in products"  :key="product._id">
                                        <input type="checkbox"  @change="(event) => checkedAcess(product._id, event)" :checked="acesstoryByIdUpdate.fitProductId.some(item => item == product._id)" >
                                        <label class="ps-2" for="">{{ product.name }}</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row detail-acess-content m-4 me-2 acess-content-height-auto" >
                            <div class="col-6 p-0">
                                <div class="row">
                                    <label class="col-3" for="">Ảnh</label>
                                    <input class="col-7" type="file" @change="handleFileAddAcess">
                                </div>
                            </div>
                           <div class="col-6">
                                <img :src="showImg" alt="">
                           </div>
                            
                        </div>
                    </div>
                    <div class="button-submit-formedit-acess d-flex justify-content-end">
                        <button type="submit" class="btn btn-secondary">Lưu thay đổi</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import acesstoryService from '../../services/acesstory.service';
import * as XLSX from 'xlsx'
import userService from '../../services/user.service';
import productService from '../../services/product.service';
export default {
    data() {
        return {
            isDropmenuName: false,
            isDropmenuInputQuantity: false,
            isDropmenuInputPrice: false,
            isDropmenuSalePrice: false,
            isDropmenuSaleQuantity: false,
            acesstories: {},
            activePage: 1,
            lengthPage: 1,
            acesstoryById: {},
            acesstoryByIdUpdate: {},
            isScreenDetail: false,
            isEditDetail: false,
            // accessoryimg: null,
            showImg: '',
            searchName: '',
            data: {
                fromNumberIQ: '',
                toNumberIQ: '',
                fromNumberIP: '',
                toNumberIP:'',
                fromNumberSP:'',
                toNumberSP:'',
                fromNumberSQ:'',
                toNumberSQ:''
            },
            products: {}
        }
    },
    methods: {
        async getAll(pageNumber = 1) {
            try {
                const length = await acesstoryService.getAll()
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await acesstoryService.getAll(pageNumber, 10)
                this.acesstories = response.data
                // console.log(this.acesstories)
            } catch (error) {
                console.log(error);
            }
        },
        clickToggle(is) {
            if (is == 1) {
                this.isDropmenuName = !this.isDropmenuName
                this.isDropmenuSaleQuantity = false
                this.isDropmenuInputPrice = false
                this.isDropmenuInputQuantity = false
                this.isDropmenuSalePrice = false
                this.close()
            } else if (is == 2) {
                this.isDropmenuInputQuantity = !this.isDropmenuInputQuantity
                this.isDropmenuName = false
                this.isDropmenuInputPrice = false
                this.isDropmenuSaleQuantity = false
                this.isDropmenuSalePrice = false
                this.close()
            }
            else if (is == 3) {
                this.isDropmenuInputQuantity = false
                this.isDropmenuSaleQuantity = !this.isDropmenuSaleQuantity
                this.isDropmenuName = false
                this.isDropmenuInputPrice = false
                this.isDropmenuSalePrice = false
                this.close()
            }
            else if (is == 4) {
                this.isDropmenuInputQuantity = false
                this.isDropmenuSaleQuantity = false
                this.isDropmenuName = false
                this.isDropmenuInputPrice = !this.isDropmenuInputPrice
                this.isDropmenuSalePrice = false
                this.close()
            }
            else if (is == 5) {
                this.isDropmenuInputQuantity = false
                this.isDropmenuSaleQuantity = false
                this.isDropmenuName = false
                this.isDropmenuInputPrice = false
                this.isDropmenuSalePrice = !this.isDropmenuSalePrice
                this.close()
            }
        },
        exportExcel() {
            const filename = 'acesstory'
            const response = this.acesstories
            // console.log(response)
            let data = []
            response.forEach(e => {
                data.push([
                    e.name,
                    e.description,
                    e.inputQuantity,
                    e.inputPrice,
                    e.salePrice,
                    e.saleQuantity,
                    'Không bảo hành',
                    this.formatDateNoTime(e.createdAt)
                ])
            })

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 25 }, { width: 50 }, { width: 10 }, { width: 20 }, { width: 20 }, { width: 10 }, { width: 15 }, { width: 15 }];
            ws['A1'] = { v: 'Tên' };
            ws['B1'] = { v: 'Mô tả' };
            ws['C1'] = { v: 'SL nhập' };
            ws['D1'] = { v: 'Giá nhập' };
            ws['E1'] = { v: 'Giá bán' };
            ws['F1'] = { v: 'SL đã bán' };
            ws['G1'] = { v: 'Bảo hành' };
            ws['H1'] = { v: 'Ngày tạo' };
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
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        formatDate(dateString, config = { dateStyle: 'medium', timeStyle: 'short' }) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', config).format(date);
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        async exportPdf() {
            if (this.acesstories.length > 0) {
                let forTable = ''

                this.acesstories.forEach(acess => {
                    forTable +=
                        `<tr>
                        <td style="border: 1px solid black; padding: 5px">${acess.name}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${acess.inputQuantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(acess.inputPrice)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(acess.salePrice)}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: center">${acess.saleQuantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: center">Không bảo hành</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: center">${this.formatDateNoTime(acess.createdAt)}</td>
                        
                    </tr>`
                })
                // console.log(forTable)
                const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 90px; padding-left: 50px;">Danh sách các sản phẩm</h3>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 5px">Tên</th>
                    <th style="border: 1px solid black; padding: 5px">SL nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Giá nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Giá bán</th>
                    <th style="border: 1px solid black; padding: 5px">Đã bán</th>
                    <th style="border: 1px solid black; padding: 5px">Bảo hành(tháng)</th>
                    <th style="border: 1px solid black; padding: 5px">Ngày tạo</th>
                </tr>
            </thead>
            <tbody>
                ${forTable}
            </tbody>
        </table>
        <span style="padding: 40px ; float: right;">....., ngày..., tháng..., năm 20..</span>
      </div>`

                const response = await userService.exportPdf({ data: template })
                const blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                // console.log(blob)
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                // console.log(link)
                link.href = url;
                link.setAttribute('download', 'listAcesstory.pdf')
                document.body.appendChild(link)
                link.click()
            } else {
                alert('Không có sản phẩm nào được chọn!')
            }
        },
        async getById(id) {
            // console.log(id)
            const response = await acesstoryService.findById({ id })
            this.acesstoryById = response.data.result
            this.isScreenDetail = true
            // console.log(this.acesstoryById)
        },
        async editById(id) {
            // console.log(id)
            const response = await acesstoryService.findByIdUpdate({ id })
            this.acesstoryByIdUpdate = response.data.result
            this.isEditDetail = true
            // console.log(this.acesstoryByIdUpdate)
        },
        handleFileAddAcess(event) {
            this.acesstoryByIdUpdate.accessoryimg = event.target.files[0] || '';
            const src = URL.createObjectURL(this.acesstoryByIdUpdate.accessoryimg)
            this.showImg = src
            // console.log(this.acesstoryByIdUpdate.accessoryimg)
        },
        async updateAcess() {
            // const data = [{
            //     ...this.acesstoryByIdUpdate,
            //     accessoryimg: this.accessoryimg
            // }]
            // console.log(this.acesstoryByIdUpdate)
            const response = await acesstoryService.update(this.acesstoryByIdUpdate)
            if(response.data.status == true) {
                alert(response.data.mes)

                this.getAll()
                this.isEditDetail = false
            } else {
                alert(response.data.mes)
            }
        },
        async filteredAcesstories() {
            if (!this.searchText) return this.getAll(1);

            else {
                const regex = new RegExp(this.searchText.trim(), 'i');
                await this.getAll(1)
                this.acesstories = this.acesstories.filter((acess) =>
                    regex.test(acess.name)
                );
            }
        },
        sortName(is) {
            if (is == 1) {
                return this.acesstories.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                return this.acesstories.sort((a, b) => b.name.localeCompare(a.name));
            }
        },
        defaultSearch(){
            this.searchName = ''
            this.getAll()
        },
        sortInputquantity(is) {
            if (is == 1) {
                return this.acesstories.sort((a, b) => a.inputQuantity - b.inputQuantity);
            } else {
                return this.acesstories.sort((a, b) => b.inputQuantity - a.inputQuantity);
            }
        },
        sortSalequantity(is) {
            if (is == 1) {
                return this.acesstories.sort((a, b) => a.saleQuantity - b.saleQuantity);
            } else {
                return this.acesstories.sort((a, b) => b.saleQuantity - a.saleQuantity);
            }
        },
        sortInputPrice(is) {
            if (is == 1) {
                return this.acesstories.sort((a, b) => a.inputPrice - b.inputPrice);
            } else {
                return this.acesstories.sort((a, b) => b.inputPrice - a.inputPrice);
            }
        },
        sortSalePrice(is) {
            if (is == 1) {
                return this.acesstories.sort((a, b) => a.salePrice - b.salePrice);
            } else {
                return this.acesstories.sort((a, b) => b.salePrice - a.salePrice);
            }
        },
        async findByAcessInputquantity() {
            
            let result = []
            await this.getAll(1)
            this.acesstories.forEach(e => {
                if(this.data.fromNumberIQ <= e.inputQuantity && this.data.toNumberIQ >= e.inputQuantity) {
                    result.push(e)
                }
            })
            this.acesstories = result
        },
        async findByAcessSalequantity() {
            
            let result = []
            await this.getAll(1)
            this.acesstories.forEach(e => {
                if(this.data.fromNumberSQ <= e.saleQuantity && this.data.toNumberSQ >= e.saleQuantity) {
                    result.push(e)
                }
            })
            this.acesstories = result
        },
        async findByAcessInputPrice() {
            
            let result = []
            await this.getAll(1)
            this.acesstories.forEach(e => {
                if(this.data.fromNumberIP <= e.inputPrice && this.data.toNumberIP >= e.inputPrice) {
                    result.push(e)
                }
            })
            this.acesstories = result
        },
        async findByAcessSalePrice() {
            
            let result = []
            await this.getAll(1)
            this.acesstories.forEach(e => {
                if(this.data.fromNumberSP <= e.salePrice && this.data.toNumberSP >= e.salePrice) {
                    result.push(e)
                }
            })
            this.acesstories = result
        },
        close() {
            this.data= {
                fromNumberIQ: '',
                toNumberIQ: '',
                fromNumberIP: '',
                toNumberIP:'',
                fromNumberSP:'',
                toNumberSP:'',
                fromNumberSQ:'',
                toNumberSQ:''
            }
        },
        async getProducts() {
            this.products= await productService.getAll()
            // console.log(this.products)
        },
        checkedAcess(ProId, event) {
            // console.log(ProId)
            // this.acesstoryByIdUpdate.fitProductId = []
            if(event.target.checked) {
                this.acesstoryByIdUpdate.fitProductId.push(ProId)                 
            } else {
                const result = this.acesstoryByIdUpdate.fitProductId.indexOf(ProId)
                this.acesstoryByIdUpdate.fitProductId = this.acesstoryByIdUpdate.fitProductId.filter((item, index) => index !== result)
                
            }
            // console.log(this.acesstoryByIdUpdate.fitProductId)
            return this.acesstoryByIdUpdate.fitProductId

        }
        
    },
    mounted() {
        this.getAll()
        this.getProducts()
    },

}
</script>
<style scoped>
@import url(../../assets/adminAcess.css);

.active_page {
    background-color: rgb(181, 181, 181);
    color: #fff;
}</style>