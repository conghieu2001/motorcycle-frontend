<template>
    <div class="list-addinputproduct-wapper">
        <div class="list-addproduct-title"><span>Danh sách phiếu nhập hàng</span></div>
        <div class="d-flex justify-content-end">

            <div class="d-flex align-items-center">
                <div>
                    <div class="searchbytime btn btn-info dropdown-toggle me-4" @click="isSearchDate = !isSearchDate">
                        Tìm kiếm theo thời gian
                    </div>
                    <ul v-if="isSearchDate" class="searchbytime-drop-inputpro-page list-group">
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

                </div>
                <div class="d-flex justify-content-end pb-2 me-3">
                    <span class="me-2">Download: </span>
                    <div class="exportFilePDF" @click="exportPdf">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path
                                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                        </svg>
                        PDF
                    </div>
                    <div class="exportFileExcel" style="width: 70px;" @click="exportExcel">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                            <path
                                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                        </svg>
                        Excel
                    </div>
                </div>
            </div>
        </div>
        <div class="list-product-table mt-3">
            <table class="table table-striped">
                <thead class="table-info">
                    <tr class="">
                        <th class="col-1">STT</th>
                        <th class="col-2">
                            <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Nhà cung cấp</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="p-2 sortName" @click="sortedProviderName(1)">Từ A -Z</li>
                                <li class="p-2 sortName" @click="sortedProviderName(2)">Từ Z - A</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchProviderName"
                                        @input="filteredReceipts" placeholder="Tìm kiếm"></li>
                            </ul>
                        </th>
                        <th class="col-3">
                            <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Địa chỉ</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="p-2 sortName" @click="sortedProviderAddress(1)">Từ Z - A</li>
                                <li class="p-2 sortName" @click="sortedProviderAddress(2)">Từ Z - A</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchProviderAddress"
                                        @input="filteredAddress" placeholder="Tìm kiếm"></li>
                            </ul>
                        </th>
                        <th class="col-2">
                            <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Tổng hóa đơn</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="p-2 sortName" @click="sortedTotalBill(1)">Từ A - Z</li>
                                <li class="p-2 sortName" @click="sortedTotalBill(2)">Từ Z - A</li>
                                <li class="mb-2 mt-1 searchTotalBill-form">
                                    <form action="" @submit.prevent="findByNumberTHD">
                                        <div class="d-flex">
                                            <input type="number" v-model="fromNumberTHD" maxlength="13" placeholder="₫ TỪ"
                                                required>
                                            <div></div>
                                            <input type="number" v-model="toNumberTHD" maxlength="13" placeholder="₫ ĐẾN"
                                                required>
                                        </div>
                                        <button type="submit">Áp dụng</button>
                                    </form>
                                </li>
                            </ul>
                        </th>
                        <th class="col-2">
                            <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Người tạo</div>
                            <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                                <li class="p-2 sortName" @click="sortedUserCreate(1)">Từ Z - A</li>
                                <li class="p-2 sortName" @click="sortedUserCreate(2)">Từ Z - A</li>
                                <li class="mb-2 mt-1"><input type="text" v-model="searchUserCreate"
                                        @input="filteredUserCreate" placeholder="Tìm kiếm"></li>
                            </ul>
                        </th>
                        <th class="col-2">
                            Ngày lập
                        </th>
                        <th class="col-1">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(receipt, index) in receipts" :key="receipt._id">
                        <th class="col-1">{{ index + 1 }}</th>
                        <td class="col-2">
                            {{ receipt.providerId.name }}
                        </td>
                        <td class="col-3">
                            {{ receipt.providerId.address }}
                        </td>
                        <td class="col-2">
                            {{ formatCurrency(receipt.totalBill) }}
                        </td>
                        <!-- <td ><div v-for="arr in receipt.array" :key="arr">{{ arr.inputQuantity }}</div></td>
                        <td ><div v-for="arr in receipt.array" :key="arr">{{ arr.inputQuantity }}</div></td> -->
                        <td class="col-2">{{ receipt.userCreate.fullName }}</td>
                        <td class="col-2">{{ formatDateNoTime(receipt.createdAt) }}</td>
                        <td class="col-1">
                            <div class="d-flex justify-content-center">
                                <div class="icon-seen" @click="getByIdreceipt(receipt._id)">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512">
                                            <path
                                                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="ms-3 icon-edit" @click="exportHTML(receipt._id)">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512">
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
        <div class="overlay" v-if="isScreenDetail">
            <div class="detail-inputproduct-wapper">
                <div class="infor-bussiness-inputproduct d-flex justify-content-between">
                    <div>
                        <h4></h4>
                        <p>Địa chỉ: {{ bussiness.address }}</p>
                        <p>Điện thoại: {{ bussiness.phoneNumber }}</p>
                    </div>
                    <div class="me-3">
                        <svg @click="isScreenDetail = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                            viewBox="0 0 512 512">
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                </div>
                <div class="detail-inforproduct-content">
                    <h4>Chi tiết phiếu nhập</h4>
                    <div class="d-flex justify-content-between">
                        <div class="ms-5">
                            <h6><strong>Nhà cung cấp:</strong> {{ receiptById.providerId.name }} <strong>SĐT:</strong>{{
                                receiptById.providerId.phoneNumber }}
                            </h6>
                            <h6><strong>Địa chỉ: </strong>{{ receiptById.providerId.address }} </h6>
                            <h6><strong>Email:</strong> {{ receiptById.providerId.email }}</h6>
                        </div>
                        <div class="me-5">
                            <h6><strong>Người tạo:</strong> {{ receiptById.userCreate.fullName }}</h6>
                            <h6><strong>Thời gian tạo:</strong> {{ formatDateNoTime(receiptById.createdAt) }} </h6>
                            <div class="d-flex justify-content-end">
                                <div class="exportFilePDF" @click="exportPdfDetail" style="width: 70px;">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                                    </svg>
                                    PDF
                                </div>
                                <!-- <div class="exportFileExcel" style="width: 70px;" @click="exportExcelDetail">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                                    </svg>
                                    Excel
                                </div> -->
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
                                        <div v-for="arr in receiptById.products" :key="arr"><span>{{ arr.productId.name
                                        }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in receiptById.products" :key="arr"><span>{{ arr.productId.color
                                        }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in receiptById.products" :key="arr"><span>{{ arr.inputQuantity
                                        }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in receiptById.products" :key="arr"><span>{{
                                            formatCurrency(arr.inputPrice) }}</span></div>
                                    </td>
                                    <td>
                                        <div v-for="arr in receiptById.products" :key="arr"><span>{{
                                            formatCurrency(arr.inputPrice * arr.inputQuantity) }}</span></div>
                                    </td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="ps-2">
                            <span>Tổng hóa đơn: {{ receiptById.totalBill }}</span>
                        </div>
                    </div>
                    <div class="pt-2 pb-4 detail-img-inputproduct">
                        <span>Phiếu nhập hàng</span>
                        <div class="d-flex justify-content-center">
                            <img :src="'http://localhost:3000' + receiptById.image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import receiptService from '../../services/receipt.service'
import bussinessService from '../../services/bussiness.service';
import * as XLSX from 'xlsx'
export default {

    data() {
        return {
            receipts: {},
            lengthPage: 1,
            activePage: 1,
            isScreenDetail: false,
            receiptById: {},
            bussiness: {},
            exportHTMLById: {},
            isSearchDate: false,
            searchProviderName: '',
            searchProviderAddress: '',
            searchUserCreate: '',
            fromNumberTHD: '',
            toNumberTHD: '',
            searchDay: '',
            searchMonth: '',
            searchYear: ''
        }
    },
    methods: {
        async getAllReceipt(pageNumber = 1) {
            try {
                const length = await receiptService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await receiptService.getAll(pageNumber, 10)
                this.receipts = response.data
                // console.log(this.receipts)
            } catch (error) {
                console.log(error);
            }
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },

        formatDate(dateString, config = { dateStyle: 'medium', timeStyle: 'short' }) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', config).format(date);
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        handlePage(index) {
            this.activePage = index
            this.getAllReceipt(index)
        },
        async getByIdreceipt(id) {
            const response = await receiptService.findById({ id })
            if (response.data.result) {
                this.receiptById = response.data.result
                // console.log(this.receiptById)
                this.isScreenDetail = true
            } else {
                alert(response.data.mes)
            }
            // console.log(this.receiptById)
        },
        async getBussiness() {
            this.bussiness = await bussinessService.getAll()
            // console.log(this.bussiness)
        },
        async exportHTML(id) {
            const response = await receiptService.findById({ id })
            this.exportHTMLById = response.data.result
            // console.log(this.exportHTMLById)
            let forTable = ''

            // console.log(this.inputProducts)
            this.exportHTMLById.products.forEach(product => {
                forTable +=
                    `<tr>
                        <td style="border: 1px solid black; padding: 5px">${product.productId.name}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${product.productId.warrantyTime} (tháng)</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${product.productId.inputQuantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(product.productId.inputPrice)}</td>
                    </tr>`
            })
            // console.log(forTable)
            const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 90px; padding-left: 50px;">Danh sách phiếu nhập hàng</h3>
        <div style="display: flex; justify-content: space-between;">
          <div style="margin-left: 50px;">
            <p>Nhà cung cấp: ${this.exportHTMLById.providerId.name}</p>
            <p>SDT: ${this.exportHTMLById.providerId.phoneNumber} Email: ${this.exportHTMLById.providerId.email}</p>
            <p>Địa chỉ: ${this.exportHTMLById.providerId.address}</p>
          </div>
          <div style="margin-right: 50px;">
            <p>Người tạo: ${this.exportHTMLById.userCreate.fullName}</p>
            <p>Ngày tạo: ${this.formatDateNoTime(this.exportHTMLById.createdAt)}</p>
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
          <span style="float: left;">Tổng hóa đơn: ${this.formatCurrency(this.exportHTMLById.totalBill)}</span>
        <span style=" float: right;">....., ngày..., tháng..., năm 20..</span>
        </div>
        <div style="width: 100%;">
          <img style="width: 40%; max-height:40%; margin: 50px 190px;" src="http://localhost:3000/${this.exportHTMLById.image}" alt="">
        </div>
      </div>`
            // const template = `<h1>Hoàng Công Hiếu</h1>`
            let mywindow = window.open('', 'PRINT', 'height=1123,width=900,top=100,left=150');

            mywindow.document.write(`<html><head><title>Phieu-Nhap-Kho-thu-${this.formatDateNoTime(this.exportHTMLById.createdAt)}</title>`);
            mywindow.document.write('</head><body >');
            mywindow.document.write(`${template}`);
            mywindow.document.write('</body></html>');

            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print();
            // mywindow.close();
        },
        exportExcel() {
            const filename = 'receipt'
            const response = this.receipts
            // console.log(response)
            let data = []
            response.forEach(e => {
                data.push([
                    e.providerId.name,
                    e.providerId.phoneNumber,
                    e.providerId.email,
                    e.providerId.address,
                    e.userCreate.fullName,
                    this.formatCurrency(e.totalBill),
                    this.formatDateNoTime(e.createdAt)
                ])
            })

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 25 }, { width: 15 }, { width: 25 }, { width: 30 }, { width: 20 }, { width: 15 }, { width: 15 }];
            ws['A1'] = { v: 'Nhà cung cấp' };
            ws['B1'] = { v: 'SĐT' };
            ws['C1'] = { v: 'Email' };
            ws['D1'] = { v: 'Địa chỉ' };
            ws['E1'] = { v: 'Người tạo' };
            ws['F1'] = { v: 'Tổng hóa đơn' };
            ws['G1'] = { v: 'Ngày tạo' };
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
            this.receiptById.products.forEach(product => {
                forTable +=
                    `<tr>
                        <td style="border: 1px solid black; padding: 5px">${product.productType}</td>
                        <td style="border: 1px solid black; padding: 5px">${product.productId.name}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${product.inputQuantity}</td>
                        <td style="border: 1px solid black; padding: 5px; text-align: right;">${this.formatCurrency(product.inputPrice)}</td>
                    </tr>`
            })
            // console.log(forTable)
            const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
        <h3 style="font-size: 24px; text-align: center; padding-top: 90px; padding-left: 50px;">Danh sách các sản phẩm</h3>
        <div style="display: flex; justify-content: space-between;">
          <div style="margin-left: 50px;">
            <p>Nhà cung cấp: ${this.receiptById.providerId.name}</p>
            <p>SDT: ${this.receiptById.providerId.phoneNumber} Email: ${this.receiptById.providerId.email}</p>
            <p>Địa chỉ: ${this.receiptById.providerId.address}</p>
          </div>
          <div style="margin-right: 50px;">
            <p>Người tạo: Hoàng Công Hiếu</p>
            <p>Ngày tạo: ${this.formatDateNoTime(this.receiptById.createdAt)}</p>
          </div>
        </div>
        <table style="border-collapse: collapse; width: 90%; margin: 0 auto;">
            <thead>
                <tr>
                    <th style="border: 1px solid black; padding: 5px">Loại</th>
                    <th style="border: 1px solid black; padding: 5px">Tên</th>
                    <th style="border: 1px solid black; padding: 5px">SL nhập</th>
                    <th style="border: 1px solid black; padding: 5px">Giá nhập</th>
                </tr>
            </thead>
            <tbody>
                ${forTable}
            </tbody>
        </table>
        <div style="margin: 40px;">
          <span style="float: left;">Tổng hóa đơn: ${this.formatCurrency(this.receiptById.totalBill)}</span>
        <span style=" float: right;">....., ngày..., tháng..., năm 20..</span>
        </div>
        <div style="width: 100%;">
          <img style="width: 40%; max-height:40%; margin: 50px 190px;" src="http://localhost:3000/${this.receiptById.image}" alt="">
        </div>
      </div>`

            const response = await receiptService.exportPdf({ data: template })
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
            this.receipts.forEach((product, index) => {
                let forTable = ''
                product.products.forEach(e => {
                    forTable += `
                    <tr>
                        <td style="border: 1px solid black; padding: 5px">${e.productId.name}</td>
                        <td style="border: 1px solid black; padding: 5px">${e.productId.color}</td>
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
            <p>Người tạo: ${product.userCreate.fullName}</p>
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
            const response = await receiptService.exportPdf({ data: table })
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
        async filteredReceipts() {
            if (!this.searchProviderName) return this.getAllReceipt(1);

            else {
                const regex = new RegExp(this.searchProviderName.trim(), 'i');
                await this.getAllReceipt(1)
                this.receipts = this.receipts.filter((receipt) =>
                    regex.test(receipt.providerId.name)
                );
            }
        },
        async filteredAddress() {
            if (!this.searchProviderAddress) return this.getAllReceipt(1);

            else {
                const regex = new RegExp(this.searchProviderAddress.trim(), 'i');
                await this.getAllReceipt(1)
                this.receipts = this.receipts.filter((receipt) =>
                    regex.test(receipt.providerId.address)
                );
            }
        },
        async filteredUserCreate() {
            if (!this.searchUserCreate) return this.getAllReceipt(1);

            else {
                const regex = new RegExp(this.searchUserCreate.trim(), 'i');
                await this.getAllReceipt(1)
                this.receipts = this.receipts.filter((receipt) =>
                    regex.test(receipt.userCreate.fullName)
                );
            }
        },
        defaultSearch() {
            this.searchProviderAddress = '',
            this.searchProviderName = '',
            this.searchUserCreate = '',
            this.fromNumberTHD = ''
            this.toNumberTHD = ''
            this.searchDay = '',
            this.searchMonth = ''
            this.searchYear = ''
            this.getAllReceipt(1)
        },
        sortedProviderName(is) {
            if (is == 1) {
                return this.receipts.sort((a, b) => a.providerId.name.localeCompare(b.providerId.name));
            } else {
                return this.receipts.sort((a, b) => b.providerId.name.localeCompare(a.providerId.name));
            }
        },
        sortedProviderAddress(is) {
            if (is == 1) {
                return this.receipts.sort((a, b) => a.providerId.address.localeCompare(b.providerId.address));
            } else {
                return this.receipts.sort((a, b) => b.providerId.address.localeCompare(a.providerId.address));
            }
        },
        sortedTotalBill(is) {
            if (is == 1) {
                return this.receipts.sort((a, b) => a.totalBill - b.totalBill);
            } else {
                return this.receipts.sort((a, b) => b.totalBill - a.totalBill);
            }
        },
        sortedUserCreate(is) {
            if (is == 1) {
                return this.receipts.sort((a, b) => a.userCreate.fullName.localeCompare(b.userCreate.fullName));
            } else {
                return this.receipts.sort((a, b) => b.userCreate.fullName.localeCompare(a.userCreate.fullName));
            }
        },
        async findByNumberTHD() {
            const data = {
                fromNumber: this.fromNumberTHD,
                toNumber: this.toNumberTHD
            }
            const response = await receiptService.findByNumberTHD({ data })
            // console.log(response)
            if (response.data.status == true) {
                this.receipts = response.data.result
            } else {
                this.receipts = response.data.result
                alert(response.data.mes)
                // console.log(this.messFail)
            }

        },
        async findByDay() {
            try {
                // console.log(this.searchDay)
                const day = this.searchDay
                const response = await receiptService.findByDate({ day })
                // console.log(response.data.result)
                this.receipts = response.data.result
            } catch (error) {
                console.log(error)
            }

        },
        async findByMonth() {
            try {
                // console.log(this.searchMonth)
                const month = this.searchMonth
                const response = await receiptService.findByDate({ month })
                // console.log(response.data.result)
                this.receipts = response.data.result
            } catch (error) {
                console.log(error)
            }

        },
        async findByYear() {
            try {
                // console.log(this.searchYear)
                const year = this.searchYear
                const response = await receiptService.findByDate({ year })
                console.log(response.data.result)
                this.receipts = response.data.result
            } catch (error) {
                console.log(error)
            }

        },
    },


    
    mounted() {
        this.getBussiness()
        this.getAllReceipt()
    }
}
</script>
<style scoped>
@import url(../../assets/adminAddProduct.css);
</style>