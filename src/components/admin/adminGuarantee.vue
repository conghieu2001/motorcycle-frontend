<template>
    <div class="order-page-wrapper">
        <div class="order-page-title">
            <h4>Danh sách hóa đơn bán hàng</h4>
        </div>
        <div class="d-flex justify-content-end me-3">
            <span class="me-2">Download: </span>
            <div @click="exportPdf" class="exportFilePDF">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path
                        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                </svg>
                PDF
            </div>
            <div @click="exportExcel" class="exportFileExcel" style="width: 70px;">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path
                        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                </svg>
                Excel
            </div>
        </div>
        <div class="user-page-table">
            <div class="row user-page-table-header">
                <div class="col-1">
                    STT
                </div>
                <div class="col-2">
                    <div class="dropdown-toggle" style="cursor: pointer;" data-bs-toggle="dropdown" aria-expanded="false">
                        Tên khách hàng</div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="sortedCustomerName(1)">Từ A - Z</li>
                        <li class="p-2 sortName" @click="sortedCustomerName(2)">Từ Z - A</li>
                        <li class="mb-2 mt-1"><input type="text" v-model="searchCustomerName" @input="filteredCustomername"
                                placeholder="Tìm kiếm"></li>
                    </ul>
                </div>
                <div class="col-4">
                    <div class="dropdown-toggle" style="cursor: pointer;" data-bs-toggle="dropdown" aria-expanded="false">
                        Tên sản phẩm bảo hành</div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                        <li class="mb-2 mt-1"><input type="text" v-model="searchProductGuaranteeName"
                                @input="filteredProductGuarantee" placeholder="Tìm kiếm"></li>
                    </ul>
                </div>
                <div class="col-2">
                    <div class="dropdown-toggle" style="cursor: pointer;" @click="(isDateWarrantyTime = !isDateWarrantyTime) && (isExpirationDate = false)">
                        Ngày bảo hành</div>
                </div>
                <div class="col-2 ">
                    <div class="dropdown-toggle" style="cursor: pointer;" @click="(isExpirationDate = !isExpirationDate) && (isDateWarrantyTime = false)">Ngày hết hạn bảo hành</div>

                </div>
                <div class="col-1 text-center">
                    Options
                </div>
            </div>
            <ul class=" ms-5 isDropMenuEmailLogin toggle-search-datewarranty" v-if="isDateWarrantyTime">
                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                <li class="p-2 sortName">Theo ngày
                    <input class="mt-2" type="date" v-model="searchDateWarranty" @input="searchDate" style="background-color: #fff; border: 1px solid grey; height: 30px;">
                </li>
                <li class="p-2 sortName">Theo tháng
                    <input class="mt-2" type="month" v-model="searMonthWarranty" @input="searchMonth" style="background-color: #fff; border: 1px solid grey; height: 30px;">
                </li>
                <li class="p-2 sortName">Theo năm
                    <input class="mt-2" type="number" v-model="searchYearWarranty" @input="searchYear" style="background-color: #fff; border: 1px solid grey; height: 30px;"
                        placeholder="VD: 2023">
                </li>
            </ul>
            <ul class=" ms-5 isDropMenuEmailLogin toggle-search-ExpirationDate" v-if="isExpirationDate">
                <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                <li class="p-2 sortName">Theo ngày
                    <input class="mt-2" type="date" v-model="searchDateExpriration" @input="searchDate2" style="background-color: #fff; border: 1px solid grey; height: 30px;">
                </li>
                <li class="p-2 sortName">Theo tháng
                    <input class="mt-2" type="month" v-model="searchMonthExpriration" @input="searchMonth2" style="background-color: #fff; border: 1px solid grey; height: 30px;">
                </li>
                <li class="p-2 sortName">Theo năm
                    <input class="mt-2" type="number" v-model="searchYearExpriration" @input="searchYear2" style="background-color: #fff; border: 1px solid grey; height: 30px;"
                        placeholder="VD: 2023">
                </li>
            </ul>
            <div class="row user-page-table-body" v-for="(guarantee, index) in guarantees" :key="index">
                <div class="col-1 table-body-index">
                    {{ index + 1 }}
                </div>
                <div class="col-2">
                    {{ guarantee.orderId.name }}
                </div>
                <div class="col-4">
                    {{ guarantee.productIdGuarantee.name }}
                </div>
                <div class="col-2 ">
                    {{ formatDateNoTime(guarantee.createdAt) }}
                </div>
                <div class="col-2">
                    {{ formatDateNoTime(expirationDate(guarantee.orderId.createdAt,
                        guarantee.productIdGuarantee.warrantyTime)) }}
                </div>
                <div class="col-1 text-center d-flex justify-content-center">

                    <div @click="gotoScreenDetail(guarantee._id)" class="up-staff">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                                d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
                        </svg>
                    </div>
                    <div @click="exportHTML(guarantee._id)" class="add-role ms-2">
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
        <div class="overlay" v-if="isFormScreenDetail">
            <div class="screen-detail-order">
                <form action="">
                    <div class="d-flex justify-content-between screen-detaiorder-title">
                        <h5 style="width: auto;">Chi tiết hóa đơn bảo hành</h5>
                        <div class="d-flex me-3">
                            <div class="exportFilePDF" @click="exportPdfDetail">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                    <path
                                        d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                                </svg>
                                PDF
                            </div>
                            <svg @click="isFormScreenDetail = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 512 512">
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="addorder-page-content scroll-infor-order mt-2">
                        <div class="addorder-content-title d-flex justify-content-between pe-3">
                            <h6>
                                Thông tin chi tiết: <span style="font-size: 14px;">Sản phẩm còn trong thời gian bảo
                                    hành</span>
                            </h6>
                            <h6>Phiếu được lập ngày: <span style="font-size: 14px; color: red; font-weight: 600;">{{ formatDateNoTime(guaranteeById.createdAt) }}</span></h6>
                        </div>
                        <div class="addorder-form-infor-customer h-25">
                            <div class="form-infor-customer-title">Thông tin khách hàng</div>
                            <div class="row mt-2 ">
                                <div class="col-5">
                                    <div class="form-infor-customer-input">
                                        <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                        <input type="text" :value="guaranteeById.orderId.name" disabled />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                        <input type="text" :value="guaranteeById.orderId.phoneNumber" disabled />
                                    </div>

                                </div>
                                <div class="col-5 mt-1">
                                    <!-- <div class="form-infor-customer-input">
                                        <label for="">Email</label>
                                        <input type="email" :value="guaranteeById.orderId.email" disabled />
                                    </div> -->
                                    <div class="form-infor-customer-input">
                                        <label for="">Địa chỉ</label>
                                        <input type="text" :value="guaranteeById.orderId.address" disabled />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="addorder-form-screen mt-4">
                            <div class="form-screen-title">Thông tin người tạo</div>
                            <div class="row mt-2 form-screen-content">
                                <div class="col-4">
                                    <label for="">Họ & Tên</label>
                                    <input class="ms-0" type="text" :value="guaranteeById.userCreate.fullName" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">SĐT</label>
                                    <input class="ms-0" type="text" :value="guaranteeById.userCreate.phoneNumber" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">Email</label>
                                    <input class="ms-0" type="text" :value="guaranteeById.userCreate.email" disabled />
                                </div>
                            </div>
                        </div>
                        <div class="addorder-form-screen mt-4">
                            <div class="form-screen-title pt-2" style="height: 40px; background-color: #ffbea4;">Sản phẩm
                                bảo hành</div>
                            <div class="row mt-2 form-screen-content">
                                <div class="col-4">
                                    <label for="">Tên sản phẩm</label>
                                    <input class="ms-0" style="background-color: #FAF0E6;"
                                         type="text" :value="guaranteeById.productIdGuarantee.name" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">Bảo hành (tháng)</label>
                                    <input class="ms-0" style="background-color: #FAF0E6;"
                                         type="text" :value="guaranteeById.productIdGuarantee.warrantyTime" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">Ngày hết hạn bảo hành</label>
                                    <input class="ms-0" style="background-color: #FAF0E6;"
                                         type="text" :value="formatDateNoTime(expirationDate(guaranteeById.orderId.createdAt, guaranteeById.productIdGuarantee.warrantyTime))" disabled />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6 class="ps-3" style="font-weight: 500;">Thay mới phụ kiện <span v-if="guaranteeById.accessories.length == 0">Không sử dụng</span></h6>
                            <div class="m-3" >
                                <div class="addorder-form-products row" v-for="access in guaranteeById.accessories" :key="access">
                                    <div class="col-4 d-grid">
                                        <label for="">Tên sản phẩm</label>
                                        <input type="text" :value="access.accessId.name" disabled>
                                    </div>
                                    <div class="col-3 d-grid">
                                        <label for="">Số lượng</label>
                                        <input type="number" 
                                        :value="access.quantity" disabled>
                                    </div>
                                    <div class="col-2 d-grid">
                                        <label for="">Thành tiền</label>
                                        <div style="font-weight: 600;"> 0đ
                                        </div>
                                    </div>
                                    <div class=" col-3" >
                                        <div style="color: red; padding-top: 35px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="guarantee-add-notewarranty">
                            <h6>Ghi chú thông tin bảo hành:</h6>
                            <textarea :value="guaranteeById.notes" rows="5" disabled></textarea>
                        </div>
                        <div class="guarantee-add-notewarranty">
                            <h6>Chi phí bảo hành: <span style="font-size: 16px; color: red; font-weight: 600;">0đ</span>
                            </h6>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import guaranteeService from "../../services/guarantee.service";
import * as XLSX from 'xlsx'
export default {
    data() {
        return {
            guarantees: {},
            lengthPage: 1,
            activePage: 1,
            searchCustomerName: '',
            searchProductGuaranteeName: '',
            isDateWarrantyTime: false,
            isExpirationDate: false,
            searchDateWarranty: '',
            searchDateExpriration: '',
            searMonthWarranty: '',
            searchMonthExpriration: '',
            searchYearWarranty: '',
            searchYearExpriration: '',
            isFormScreenDetail: false,
            guaranteeById: {},
            exportHTMLById: {}
        }
    },
    methods: {
        async getAllGuarantees(pageNumber = 1) {
            try {
                const length = await guaranteeService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await guaranteeService.getAll(pageNumber, 10)
                this.guarantees = response.data
                // console.log(this.guarantees)
            } catch (error) {
                console.log(error);
            }
        },
        handlePage(index) {
            this.activePage = index
            this.getAllGuarantees(index)
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        expirationDate(a, b) {
            const date = new Date(a);
            const newDate = new Date(date.getTime() + b * 2629743830);
            return newDate

        },
        exportExcel() {
            const filename = 'guarantees'
            const response = this.guarantees
            // console.log(response)
            let data = []
            response.forEach(e => {
                data.push([
                    e.orderId._id,
                    e.orderId.name,
                    e.productIdGuarantee.name,
                    this.formatDateNoTime(e.createdAt),
                    this.formatDateNoTime(this.expirationDate(e.createdAt, e.productIdGuarantee.warrantyTime)),
                    e.accessories.length,
                    e.userCreate.fullName,
                    e.userCreate.email,
                ])
            })

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 25 }, { width: 25 }, { width: 30 }, { width: 15 }, { width: 22 }, { width: 30 }, { width: 25 }, { width: 25 }];
            ws['A1'] = { v: 'ID hóa đơn mua hàng' };
            ws['B1'] = { v: 'Tên khách hàng' };
            ws['C1'] = { v: 'Tên sản phẩm bảo hành' };
            ws['D1'] = { v: 'Ngày bảo hành' };
            ws['E1'] = { v: 'Ngày hết hạn bảo hành' };
            ws['F1'] = { v: 'Số lượng phụ kiện cần thay mới' };
            ws['G1'] = { v: 'Người tạo' };
            ws['H1'] = { v: 'Email người tạo' };
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
        async filteredCustomername() {
            if (!this.searchCustomerName) return this.getAllGuarantees(1);

            else {
                const regex = new RegExp(this.searchCustomerName.trim(), 'i');
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    regex.test(guarantee.orderId.name)
                );
            }
        },
        sortedCustomerName(is) {
            if (is == 1) {
                return this.guarantees.sort((a, b) => a.orderId.name.localeCompare(b.orderId.name));
            } else {
                return this.guarantees.sort((a, b) => b.orderId.name.localeCompare(a.orderId.name));
            }
        },
        async filteredProductGuarantee() {
            if (!this.searchProductGuaranteeName) return this.getAllGuarantees(1);

            else {
                const regex = new RegExp(this.searchProductGuaranteeName.trim(), 'i');
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    regex.test(guarantee.productIdGuarantee.name)
                );
            }
        },
        async searchDate() {
            this.searMonthWarranty = ''
            this.searchYearWarranty= ''
            if (!this.searchDateWarranty) return this.getAllGuarantees(1);
            else {
                const date = new Date(this.searchDateWarranty)
                // console.log(date)
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    // console.log((new Date(guarantee.createdAt)).toLocaleDateString())
                    
                    date.toLocaleDateString() === (new Date(guarantee.createdAt)).toLocaleDateString()
                );
            }
        },
        async searchDate2() {
            this.searchMonthExpriration= ''
            this.searchYearExpriration= ''
            if (!this.searchDateExpriration) return this.getAllGuarantees(1);
            else {
                const date = new Date(this.searchDateExpriration)
                // console.log(date.toLocaleDateString())
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    // console.log(this.expirationDate(guarantee.orderId.createdAt,guarantee.productIdGuarantee.warrantyTime).toLocaleDateString())
                    
                    date.toLocaleDateString() === this.expirationDate(guarantee.orderId.createdAt,guarantee.productIdGuarantee.warrantyTime).toLocaleDateString()
                );
            }
        },
        async searchMonth() {
            this.searchDateWarranty= ''
            this.searchYearWarranty= ''
            // console.log((this.searMonthWarranty))
            if (!this.searMonthWarranty) return this.getAllGuarantees(1);
            else {
                // const date = new Date(this.searMonthWarranty)
                // // console.log(date)
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    // console.log(new Date(guarantee.createdAt).getMonth())
                    // console.log(this.aaaaa(guarantee.createdAt))
                    this.searMonthWarranty === this.convertMonthYear(guarantee.createdAt)
                );
            }
        },
        async searchMonth2() {
            this.searchDateExpriration= ''
            this.searchYearExpriration= ''
            // console.log((this.searchMonthExpriration))
            if (!this.searchMonthExpriration) return this.getAllGuarantees(1);
            else {
                // const date = new Date(this.searchMonthExpriration)
                // // console.log(date)
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    // console.log(new Date(guarantee.createdAt).getMonth())
                    // console.log(this.aaaaa(guarantee.createdAt))
                    this.searchMonthExpriration === this.convertMonthYear(this.expirationDate(guarantee.orderId.createdAt,guarantee.productIdGuarantee.warrantyTime))
                );
            }
        },
        async searchYear() {
            this.searchDateWarranty= ''
            this.searMonthWarranty= ''
            // console.log((this.searchYearWarranty))
            if (!this.searchYearWarranty) return this.getAllGuarantees(1);
            else {
                // const date = new Date(this.searchYearWarranty)
                // // console.log(date)
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    // console.log(new Date(guarantee.createdAt).getMonth())
                    // console.log(this.aaaaa(guarantee.createdAt))
                    this.searchYearWarranty === new Date(guarantee.createdAt).getFullYear()
                );
            }
        },
        async searchYear2() {
            this.searchDateExpriration= ''
            this.searchMonthExpriration= ''
            // console.log((this.searchYearWarranty))
            if (!this.searchYearExpriration) return this.getAllGuarantees(1);
            else {
                // const date = new Date(this.searchYearExpriration)
                // // console.log(date)
                await this.getAllGuarantees(1)
                this.guarantees = this.guarantees.filter((guarantee) =>
                    // console.log(new Date(guarantee.createdAt).getMonth())
                    // console.log(this.aaaaa(guarantee.createdAt))
                    this.searchYearExpriration === new Date(this.expirationDate(guarantee.orderId.createdAt,guarantee.productIdGuarantee.warrantyTime)).getFullYear()
                );
            }
        },
        convertMonthYear(data) {
            
            // console.log(data)
            const date = new Date(data)
            const month = date.getMonth() + 1
            // console.log(month)
            let checkMonth = ''
            if(month < 10) {
                checkMonth = '0'+month
            } else {
                checkMonth = month
            }
            return date.getFullYear() +'-'+ checkMonth
        },
        defaultSearch() {
            this.searchCustomerName= '',
            this.searchProductGuaranteeName= '',
            this.searchDateWarranty= '',
            this.searchDateExpriration= '',
            this.searMonthWarranty= '',
            this.searchMonthExpriration= '',
            this.searchYearWarranty= '',
            this.searchYearExpriration= '',
            this.getAllGuarantees(1)
        },
        async gotoScreenDetail(id) {
            
            const response = await guaranteeService.findById({id})
            if(response.data.status) {
                this.isFormScreenDetail = true
                this.guaranteeById = response.data.result
            } else {
                alert(response.data.mes)
            }
            // console.log(this.guaranteeById.orderId.name)
        },
        async exportHTML(id) {
            const response = await guaranteeService.findById({id})
            this.exportHTMLById = response.data.result
            // console.log(this.exportHTMLById)
            let forTable = ''

            // console.log(this.inputProducts)
            this.exportHTMLById.accessories.forEach((access, index) => {
                forTable +=
                    `<tr>
                        <td>${index +1}</td>
                        <td>${access.accessId.name}</td>
                        <td style="text-align: end;">${access.quantity}</td>
                        <td style="text-align: end;">0đ</td>
                    </tr>`
            })
            // console.log(forTable)
            const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm">
        <h4 style="text-align: center; padding-top: 30px; font-size: 18px">
          Chi tiết hóa đơn bảo hành
        </h4>
        <div
          style="
            margin: 15px;
            border: 1px solid rgb(206, 206, 206);
            border-radius: 2px;
            height: 150px;
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
                  type="text" value="${this.exportHTMLById.orderId.name}"
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
                  type="text" value="${this.exportHTMLById.orderId.phoneNumber}"
                />
              </div>
            </div>
            <div style="margin-top: 15px">
              <label style="font-weight: 500; color: #000">Địa chỉ</label>
              <input
                style="
                  width: 280px;
                  height: 30px;
                  margin-left: 15px;
                  background-color: #f6f6f6;
                  border: 1px solid rgb(206, 206, 206);
                  border-radius: 2px;
                "
                type="text" value="${this.exportHTMLById.orderId.address}"
              />
            </div>
          </div>
        </div>
        <div
          style="
            margin: 15px;
            border: 1px solid rgb(206, 206, 206);
            border-radius: 2px;
            height: 150px;
          "
        >
          <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
            Người lập hóa đơn
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
                  type="text" value="${this.exportHTMLById.userCreate.fullName}"
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
                  type="text" value="${this.exportHTMLById.userCreate.phoneNumber}"
                />
              </div>
            </div>
            <div style="margin-top: 15px">
              <label style="font-weight: 500; color: #000">Email</label>
              <input
                style="
                  width: 280px;
                  height: 30px;
                  margin-left: 15px;
                  background-color: #f6f6f6;
                  border: 1px solid rgb(206, 206, 206);
                  border-radius: 2px;
                "
                type="text" value="${this.exportHTMLById.userCreate.email}"
              />
            </div>
          </div>
        </div>
        <div
          style="
            margin: 15px;
            border: 1px solid rgb(206, 206, 206);
            border-radius: 2px;
            height: 140px;
          "
        >
          <div
            style="
              padding: 10px 0 10px 20px;
              background-color: rgb(255, 190, 164);
            "
          >
            Sản phẩm bảo hành
          </div>
          <div style="display: flex; justify-content: space-between">
            <div style="margin: 20px; display: grid">
              <label style="font-weight: 500; color: #000">Tên sản phẩm</label>
              <input
                style="
                  margin-top: 10px;
                  width: 250px;
                  height: 30px;
                  float: right;
                  background-color: rgb(250, 240, 230);
                  border: 1px solid rgb(206, 206, 206);
                  border-radius: 2px;
                "
                type="text" value="${this.exportHTMLById.productIdGuarantee.name}"
              />
            </div>
            <div style="margin: 20px; display: grid">
              <label style="font-weight: 500; color: #000"
                >Số tháng bảo hành</label
              >
              <input
                style="
                  margin-top: 10px;
                  width: 150px;
                  height: 30px;
                  float: right;
                  background-color: rgb(250, 240, 230);
                  border: 1px solid rgb(206, 206, 206);
                  border-radius: 2px;
                "
                type="text" value="${this.exportHTMLById.productIdGuarantee.warrantyTime}"
              />
            </div>
            <div style="margin: 20px; display: grid">
              <label style="font-weight: 500; color: #000"
                >Ngày hết hạn bảo hành</label
              >
              <input
                style="
                  margin-top: 10px;
                  width: 200px;
                  height: 30px;
                  float: right;
                  background-color: rgb(250, 240, 230);
                  border: 1px solid rgb(206, 206, 206);
                  border-radius: 2px;
                "
                type="text" value="${this.formatDateNoTime(this.expirationDate(this.exportHTMLById.orderId.createdAt, this.exportHTMLById.productIdGuarantee.warrantyTime))}"
              />
            </div>
          </div>
        </div>
        <div style="margin: 15px">Thay mới phụ kiện:</div>
        <div style="margin: 20px 100px">
          <table style="width: 600px" border="1">
            <thead
              style="text-align: left; height: 40px; background-color: #e2e3e5"
            >
              <tr>
                <th style="text-align: center;">STT</th>
                <th style="text-align: center;">Tên sản phẩm</th>
                <th style="text-align: center;">Số lượng</th>
                <th style="text-align: center;">Thành tiền</th>
              </tr>
            </thead>
            <tbody style="height: 40px">
              ${forTable}
            </tbody>
          </table>
        </div>
        <div style="text-align: end; margin-right: 70px">
          <div>
            Tổng hóa đơn: <span style="color: red; font-weight: 600">0đ</span>
          </div>
        </div>
      </div>`
            // const template = `<h1>Hoàng Công Hiếu</h1>`
            let mywindow = window.open('', 'PRINT', 'height=1123,width=900,top=100,left=150');

            mywindow.document.write(`<html><head><title>Hoa-Don-Bao-Hanh-${this.formatDateNoTime(this.exportHTMLById.createdAt)}</title>`);
            mywindow.document.write('</head><body >');
            mywindow.document.write(`${template}`);
            mywindow.document.write('</body></html>');

            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print();
            // mywindow.close();
        },
        async exportPdfDetail() {
            let forTable = ''
            this.guaranteeById.accessories.forEach((access, index) => {
                forTable +=
                    `<tr>
                        <td>${index +1}</td>
                        <td>${access.accessId.name}</td>
                        <td style="text-align: end;">${access.quantity}</td>
                        <td style="text-align: end;">0đ</td>
                    </tr>`
            })
            // console.log(forTable)
            const template = `<div style="font-family: Arial, Helvetica, sans-serif; width: 210mm">
                <h4 style="text-align: center; padding-top: 30px; font-size: 18px">
                Chi tiết hóa đơn bảo hành
                </h4>
                <div
                style="
                margin: 15px;
                border: 1px solid rgb(206, 206, 206);
                border-radius: 2px;
                height: 150px;
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
                    type="text" value="${this.guaranteeById.orderId.name}"
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
                    type="text" value="${this.guaranteeById.orderId.phoneNumber}"
                    />
                </div>
                </div>
                <div style="margin-top: 15px">
                <label style="font-weight: 500; color: #000">Địa chỉ</label>
                <input
                    style="
                    width: 280px;
                    height: 30px;
                    margin-left: 15px;
                    background-color: #f6f6f6;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    "
                    type="text" value="${this.guaranteeById.orderId.address}"
                />
                </div>
                </div>
                </div>
                <div
                style="
                margin: 15px;
                border: 1px solid rgb(206, 206, 206);
                border-radius: 2px;
                height: 150px;
                "
                >
                <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                Người lập hóa đơn
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
                    type="text" value="${this.guaranteeById.userCreate.fullName}"
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
                    type="text" value="${this.guaranteeById.userCreate.phoneNumber}"
                    />
                </div>
                </div>
                <div style="margin-top: 15px">
                <label style="font-weight: 500; color: #000">Email</label>
                <input
                    style="
                    width: 280px;
                    height: 30px;
                    margin-left: 15px;
                    background-color: #f6f6f6;
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    "
                    type="text" value="${this.guaranteeById.userCreate.email}"
                />
                </div>
                </div>
                </div>
                <div
                style="
                margin: 15px;
                border: 1px solid rgb(206, 206, 206);
                border-radius: 2px;
                height: 140px;
                "
                >
                <div
                style="
                padding: 10px 0 10px 20px;
                background-color: rgb(255, 190, 164);
                "
                >
                Sản phẩm bảo hành
                </div>
                <div style="display: flex; justify-content: space-between">
                <div style="margin: 20px; display: grid">
                <label style="font-weight: 500; color: #000">Tên sản phẩm</label>
                <input
                    style="
                    margin-top: 10px;
                    width: 250px;
                    height: 30px;
                    float: right;
                    background-color: rgb(250, 240, 230);
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    "
                    type="text" value="${this.guaranteeById.productIdGuarantee.name}"
                />
                </div>
                <div style="margin: 20px; display: grid">
                <label style="font-weight: 500; color: #000"
                    >Số tháng bảo hành</label
                >
                <input
                    style="
                    margin-top: 10px;
                    width: 150px;
                    height: 30px;
                    float: right;
                    background-color: rgb(250, 240, 230);
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    "
                    type="text" value="${this.guaranteeById.productIdGuarantee.warrantyTime}"
                />
                </div>
                <div style="margin: 20px; display: grid">
                <label style="font-weight: 500; color: #000"
                    >Ngày hết hạn bảo hành</label
                >
                <input
                    style="
                    margin-top: 10px;
                    width: 200px;
                    height: 30px;
                    float: right;
                    background-color: rgb(250, 240, 230);
                    border: 1px solid rgb(206, 206, 206);
                    border-radius: 2px;
                    "
                    type="text" value="${this.formatDateNoTime(this.expirationDate(this.guaranteeById.orderId.createdAt, this.guaranteeById.productIdGuarantee.warrantyTime))}"
                />
                </div>
                </div>
                </div>
                <div style="margin: 15px">Thay mới phụ kiện:</div>
                <div style="margin: 20px 100px">
                <table style="width: 600px" border="1">
                <thead
                style="text-align: left; height: 40px; background-color: #e2e3e5"
                >
                <tr>
                    <th style="text-align: center;">STT</th>
                    <th style="text-align: center;">Tên sản phẩm</th>
                    <th style="text-align: center;">Số lượng</th>
                    <th style="text-align: center;">Thành tiền</th>
                </tr>
                </thead>
                <tbody style="height: 40px">
                ${forTable}
                </tbody>
                </table>
                </div>
                <div style="display: flex; justify-content: space-between; margin-right: 70px; margin-left: 70px">
                    <div>
                        Tổng hóa đơn: <span style="color: red; font-weight: 600">0đ</span>
                    </div>
                    <div>
                        Ngày lập hóa đơn: <span style="color: red; font-weight: 600">${this.formatDateNoTime(this.guaranteeById.createdAt)}</span>
                    </div>
                </div>
                </div>`

            const response = await guaranteeService.exportPdf({ data: template })
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
            // console.log(this.guarantees)
            let table = ''
            this.guarantees.forEach((guarantee, index) => {
                let forTable = ''
                guarantee.accessories.forEach((access, index) => {
                    forTable +=
                        `<tr>
                            <td>${index +1}</td>
                            <td>${access.accessId.name}</td>
                            <td style="text-align: end;">${access.quantity}</td>
                            <td style="text-align: end;">0đ</td>
                        </tr>`
                })
                table += 
                `
                <div style="height: 100%; box-sizing: border-box">
                    <div style="font-family: Arial, Helvetica, sans-serif; width: 100%;">
                            <h5 style="padding-left: 20px; padding-top: 20px;">Trang ${index + 1}</h5>
                            <div style=" float: right;">....., ngày..., tháng..., năm 20..</div>
                        <h3 style="font-size: 24px; text-align: center; padding: 20px; margin: 0 20px; border-bottom: 1px solid grey;">Danh sách hóa đơn</h3>
                        <div
                        style="
                        margin: 15px;
                        border: 1px solid rgb(206, 206, 206);
                        border-radius: 2px;
                        height: 150px;
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
                            type="text" value="${guarantee.orderId.name}"
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
                            type="text" value="${guarantee.orderId.phoneNumber}"
                            />
                        </div>
                        </div>
                        <div style="margin-top: 15px">
                        <label style="font-weight: 500; color: #000">Địa chỉ</label>
                        <input
                            style="
                            width: 280px;
                            height: 30px;
                            margin-left: 15px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                            "
                            type="text" value="${guarantee.orderId.address}"
                        />
                        </div>
                        </div>
                        </div>
                        <div
                        style="
                        margin: 15px;
                        border: 1px solid rgb(206, 206, 206);
                        border-radius: 2px;
                        height: 150px;
                        "
                        >
                        <div style="padding: 10px 0 10px 20px; background-color: #f7f7f7">
                        Người lập hóa đơn
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
                            type="text" value="${guarantee.userCreate.fullName}"
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
                            type="text" value="${guarantee.userCreate.phoneNumber}"
                            />
                        </div>
                        </div>
                        <div style="margin-top: 15px">
                        <label style="font-weight: 500; color: #000">Email</label>
                        <input
                            style="
                            width: 280px;
                            height: 30px;
                            margin-left: 15px;
                            background-color: #f6f6f6;
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                            "
                            type="text" value="${guarantee.userCreate.email}"
                        />
                        </div>
                        </div>
                        </div>
                        <div
                        style="
                        margin: 15px;
                        border: 1px solid rgb(206, 206, 206);
                        border-radius: 2px;
                        height: 140px;
                        "
                        >
                        <div
                        style="
                        padding: 10px 0 10px 20px;
                        background-color: rgb(255, 190, 164);
                        "
                        >
                        Sản phẩm bảo hành
                        </div>
                        <div style="display: flex; justify-content: space-between">
                        <div style="margin: 20px; display: grid">
                        <label style="font-weight: 500; color: #000">Tên sản phẩm</label>
                        <input
                            style="
                            margin-top: 10px;
                            width: 250px;
                            height: 30px;
                            float: right;
                            background-color: rgb(250, 240, 230);
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                            "
                            type="text" value="${guarantee.productIdGuarantee.name}"
                        />
                        </div>
                        <div style="margin: 20px; display: grid">
                        <label style="font-weight: 500; color: #000"
                            >Số tháng bảo hành</label
                        >
                        <input
                            style="
                            margin-top: 10px;
                            width: 150px;
                            height: 30px;
                            float: right;
                            background-color: rgb(250, 240, 230);
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                            "
                            type="text" value="${guarantee.productIdGuarantee.warrantyTime}"
                        />
                        </div>
                        <div style="margin: 20px; display: grid">
                        <label style="font-weight: 500; color: #000"
                            >Ngày hết hạn bảo hành</label
                        >
                        <input
                            style="
                            margin-top: 10px;
                            width: 200px;
                            height: 30px;
                            float: right;
                            background-color: rgb(250, 240, 230);
                            border: 1px solid rgb(206, 206, 206);
                            border-radius: 2px;
                            "
                            type="text" value="${this.formatDateNoTime(this.expirationDate(guarantee.orderId.createdAt, guarantee.productIdGuarantee.warrantyTime))}"
                        />
                        </div>
                        </div>
                        </div>
                        <div style="margin: 15px">Thay mới phụ kiện:</div>
                        <div style="margin: 20px 100px">
                        <table style="width: 600px" border="1">
                        <thead
                        style="text-align: left; height: 40px; background-color: #e2e3e5"
                        >
                        <tr>
                            <th style="text-align: center;">STT</th>
                            <th style="text-align: center;">Tên sản phẩm</th>
                            <th style="text-align: center;">Số lượng</th>
                            <th style="text-align: center;">Thành tiền</th>
                        </tr>
                        </thead>
                        <tbody style="height: 40px">
                        ${forTable}
                        </tbody>
                        </table>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-right: 70px; margin-left: 70px">
                            <div>
                                Tổng hóa đơn: <span style="color: red; font-weight: 600">0đ</span>
                            </div>
                            <div>
                                Ngày lập hóa đơn: <span style="color: red; font-weight: 600">${this.formatDateNoTime(guarantee.createdAt)}</span>
                            </div>
                        </div>
                        </div>
                </div>
                `
            })
            const response = await guaranteeService.exportPdf({ data: table })
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
    },
    mounted() {
        this.getAllGuarantees()
    }
}
</script>
<style scoped>@import url(../../assets/guarantee.css);</style>