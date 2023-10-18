<template>
    <div class="guarantee-page-wrapper pb-5">
        <div class="pt-4">
            <div class="guarantee-form-wrapper">
                <span>Tra cứu thông tin đơn hàng</span>
                <form @submit.prevent="getByIdOrder" class="mt-3 guarantee-form-search" action="">
                    <div>
                        <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"/></svg>
                        <input v-model="idOrder" type="text" minlength="24" maxlength="24" placeholder="Nhập ID hóa đơn">
                    </div>
                    <button type="submit" class="guarantee-form-submit">Tiếp tục</button>
                </form>
                <div @click="closeSearchIdOrder" class="close-search-idorder">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.8em" viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>
            </div>
        </div>
        <div class="detail-guarantee-form-wrapper" v-if="isDetailOrder">
            <div class="p-1">
                <h6>Chi tiết đơn hàng</h6>
            </div>
            <div class="d-flex justify-content-between ps-3 pe-3">
                <div>
                    Tổng hóa đơn: <span>{{ orderById.totalBill }}</span>
                </div>
                <div>
                    Trạng thái: <span>{{ orderById.status }}</span>
                </div>
                <div>
                    Phương thức thanh toán: <span>{{ orderById.methodPay }}</span>
                </div>
            </div>
            <div class="d-flex justify-content-between ps-2 pe-2 mt-2">
                <div class="detail-guarantee-form-infor-customer">
                    <h6>Thông tin khách hàng</h6>
                    <div>
                        Tên khách hàng: <span>{{ orderById.customerId.name }}</span>
                    </div>
                    <div>
                        Số điện thoại: <span>{{ orderById.phoneNumber }}</span>
                    </div>
                    <div>
                        Email: <span>{{ orderById.customerId.email }}</span>
                    </div>
                    <div>
                        Địa chỉ: <span>{{ orderById.address }}</span>
                    </div>
                </div>
                <div class="detail-guarantee-form-infor-user">
                    <h6>Thông tin người lập</h6>
                    <div>
                        Tên người lập: <span>{{ orderById.userId.fullName }}</span>
                    </div>
                    <div>
                        Số điện thoại: <span>{{ orderById.userId.phoneNumber }}</span>
                    </div>
                    <div>
                        Email: <span>{{ orderById.userId.email }}</span>
                    </div>
                    <div>
                        Ngày lập: <span>{{ formatDateNoTime(orderById.createdAt) }}</span>
                    </div>
                </div>
            </div>
            <div class="p-3 mt-2">
                <h6>Danh sách sản phẩm</h6>
                <div class="row guarantee-form-list-product-head">
                    <div class="col-1">STT</div>
                    <div class="col-3">Tên</div>
                    <div class="col-3">Bảo hành</div>
                    <div class="col-3">Ngày hết hạn</div>
                    <div class="col-2">Lựa chọn</div>
                </div>
                <div class="row guarantee-form-list-product-body" v-for="(product, index) in orderById.products" :key="index">
                    <div class="col-1">{{ index + 1 }}</div>
                    <div class="col-3">{{ product.productId.name }}</div>
                    <div class="col-3">{{ product.productId.warrantyTime }} (tháng)</div>
                    <div class="col-3">{{ formatDateNoTime(expirationDate(orderById.createdAt, product.productId.warrantyTime)) }}</div>
                    <div class="col-2"><button v-if="product.productType == 'product'" @click="gotoCreateGuarantee(product._id, formatDateNoTime(expirationDate(orderById.createdAt, product.productId.warrantyTime)))">Bảo hành</button></div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isCreateGuarantee">
            <div class="screen-detail-order">
                <form action="" @submit.prevent="createGuarantee">
                    <div class="d-flex justify-content-between screen-detaiorder-title">
                        <h5 style="width: auto;">Tạo hóa đơn bảo hành</h5>
                        <div class="d-flex me-3">
                            <div class="submit-form-edit-post">
                                <button type="submit" style="width: 60px; height: 30px;">Tạo</button>
                            </div>
                            <svg @click="closeFormCreate" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 512 512">
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="addorder-page-content scroll-infor-order mt-2">
                        <div class="addorder-content-title d-flex justify-content-between pe-3">
                            <h6>
                                Thông tin chi tiết: <span style="font-size: 14px;">Sản phẩm còn trong thời gian bảo hành</span>
                            </h6>
                            <h6>Ngày lập hóa đơn: <span style="font-size: 14px; color: red; font-weight: 600;">{{ formatDateNoTime(detaiGuarantee.createdAt) }}</span></h6>
                        </div>
                        <div class="addorder-form-infor-customer h-25">
                            <div class="form-infor-customer-title">Thông tin khách hàng</div>
                            <div class="row mt-2 ">
                                <div class="col-5">
                                    <div class="form-infor-customer-input">
                                        <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                        <input type="text" :value=" detaiGuarantee.customerId.name "  disabled />
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                        <input type="text" :value=" detaiGuarantee.phoneNumber " disabled />
                                    </div>
                                    
                                </div>
                                <div class="col-5 mt-1">
                                    <div class="form-infor-customer-input">
                                        <label for="">Email</label>
                                        <input type="email" :value=" detaiGuarantee.customerId.email " disabled/>
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Địa chỉ</label>
                                        <input type="text" :value=" detaiGuarantee.address " disabled/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="addorder-form-screen mt-4">
                            <div class="form-screen-title">Thông tin người tạo</div>
                            <div class="row mt-2 form-screen-content">
                                <div class="col-4">
                                    <label for="">Họ & Tên</label>
                                    <input class="ms-0" type="text" :value="detaiGuarantee.userId.fullName" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">SĐT</label>
                                    <input class="ms-0" type="text" :value="detaiGuarantee.userId.phoneNumber" disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">Email</label>
                                    <input class="ms-0" type="text" :value="detaiGuarantee.userId.email" disabled />
                                </div>
                            </div>
                        </div>
                        <div class="addorder-form-screen mt-4">
                            <div class="form-screen-title pt-2" style="height: 40px; background-color: #ffbea4;">Thông tin sản phẩm bảo hành</div>
                            <div class="row mt-2 form-screen-content">
                                <div class="col-4">
                                    <label for="">Tên sản phẩm</label>
                                    <input class="ms-0" style="background-color: #FAF0E6;" :value="detaiGuarantee.product.name" type="text"  disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">Bảo hành (tháng)</label>
                                    <input class="ms-0" style="background-color: #FAF0E6;" :value="detaiGuarantee.product.warrantyTime" type="text"  disabled />
                                </div>
                                <div class="col-4">
                                    <label for="">Ngày hết hạn bảo hành</label>
                                    <input class="ms-0" style="background-color: #FAF0E6;" :value="detaiGuarantee.warrantyExpirationDate" type="text" disabled />
                                </div>
                            </div>
                        </div>
                        <div class="guarantee-add-notewarranty">
                            <h6>Ghi chú thông tin bảo hành:</h6>
                            <textarea v-model="dataCreateGuarantee.notes" rows="5"></textarea>
                        </div>
                        <div class="guarantee-add-notewarranty">
                            <h6>Chi phí bảo hành: <span style="font-size: 16px; color: red; font-weight: 600;">0đ</span></h6>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import orderService from "../../services/order.service";
export default {
    data() {
        return {
            isDetailOrder: false,
            idOrder: '',
            orderById: {
                totalBill: 0
            },
            isCreateGuarantee: false,
            detaiGuarantee: {},
            getProduct: {},
            dataCreateGuarantee: {}
        }
    },
    methods: {
        async getByIdOrder() {
            // console.log(1)
            const response = await orderService.findById({id: this.idOrder})
            if(response.data.status) {
                this.isDetailOrder = true
                this.orderById = response.data.result
                // console.log(this.orderById)
            } else {
                this.idOrder = ''
                alert(response.data.mes)
            }
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
        gotoCreateGuarantee(id, time) {
           this.isCreateGuarantee = true
        //    let getProduct = {}
           this.orderById.products.forEach(e => {
                if(e._id == id) {
                    this.getProduct = {
                        ...e.productId
                    }
                }
           });
            this.detaiGuarantee = {
                ...this.orderById,
                product: this.getProduct,
                warrantyExpirationDate: time
            }
        },
        closeFormCreate() {
            this.isCreateGuarantee = false
            this.detaiGuarantee = {}
            this.getProduct = {}
        },
        async createGuarantee() {
            this.dataCreateGuarantee = {
                orderId: this.detaiGuarantee._id,
                product: this.detaiGuarantee.product,
                notes: this.dataCreateGuarantee.notes
            }
            // console.log(this.dataCreateGuarantee)
        },
        closeSearchIdOrder() {
            this.idOrder = ''
            this.isDetailOrder= false 
        }
    }
}
</script>
<style scoped>
@import url(../../assets/guarantee.css);
</style>