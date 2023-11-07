<template>
    <div>
        <div class="search-orderhistory-page" v-if="thisPage">
            <div class="search-orderhistory-wrapper">
                <div class="search-orderhistory-content">
                    <img src="https://cdn.tgdd.vn/2022/10/banner/TGDD-540x270.png" alt="">
                    <div class="">
                        <span>Tra cứu thông tin đơn hàng</span>
                        <form action="" @submit.prevent="gotoOrder">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                                </svg>
                                <input type="text" v-model="phoneNumber" placeholder="Nhập số điện thoại mua hàng">
                                <span v-if="!!validPhoneNumber">{{ validPhoneNumber }}</span>
                            </div>
                            <button type="submit">Tiếp tục</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="order-history-page" v-if="isComponent">
            <div class="order-history-page-wrapper">
                <div class="order-history-left">
                    <span>Xin chào <b>Anh (chị)</b></span>
                    <div class="d-flex align-items-center mt-3 ms-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z" />
                        </svg>
                        <p class="mb-0">Danh sách đơn hàng</p>
                    </div>
                    <div class="order-history-back-search ms-3" @click="backSearch">Trở về kìm tiếm</div>
                </div>
                <div class="order-history-right">
                    <span>Danh sách đơn hàng</span>
                    <div v-if="checkOrder">
                        <div class="mt-3 order-history-right-detail" v-for="order in orders" :key="order">
                            <div class="d-flex justify-content-between order-history-right-detail-head ">
                                <span><b>Đơn hàng: </b>#{{ order._id }}</span>
                                <b class="mb-0">{{ order.status }}</b>
                            </div>
                            <div v-for="product in order.products" :key="product"
                                class="mt-3 mb-5 order-history-right-detail-body d-flex align-items-center justify-content-between">
                                <img :src="'http://localhost:3000' + product.productId.image" alt="">
                                <h6>{{ product.productId.name }}</h6>
                                <span>Sl x Giá: <b style="font-size: 16px;">{{ product.saleQuantity }} x {{ product.salePrice }}</b></span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div>
                                    <h6>Tổng tiền: <b style="color: red;">{{ order.totalBill }}</b></h6>
                                    <h6>Số tiền đã thanh toán: <b style="color: red;">{{ order.amountPaid }}</b></h6>
                                </div>
                                <!-- <div class="click-screen-detail-order">
                                    <span>Tiếp tục đặt hàng</span>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h5 style="width: 100%; margin-top: 20px;">Không có đơn hàng nào được mua bởi số điện thoại này!
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import orderService from '../../services/order.service'
export default {
    data() {
        return {
            thisPage: true,
            isComponent: false,
            checkOrder: false,
            phoneNumber: '',
            validPhoneNumber: '',
            orders: {}
        }
    },
    methods: {
        async gotoOrder() {
            if (!this.phoneNumber
                ||
                !this.phoneNumber.match(/^(03[2-9]|05[2-9]|07[0-9]|08[1-9]|09[0-9]|01[2|6|8|9])+([0-9]{7})\b$/)) {
                this.validPhoneNumber = 'Số điện thoại không đúng!'
                this.phoneNumber = ''
            } else {
                this.validPhoneNumber = ''
                this.thisPage = false
                this.isComponent = true
                const phoneNumber = this.phoneNumber
                const response = await orderService.findByPhoneNumber({phoneNumber})
                this.orders = response.data.result
                this.orders.reverse()
                if(this.orders.length > 0) {
                    this.checkOrder = true
                } else {
                    this.checkOrder = false
                }
                this.phoneNumber = ''
                // console.log(this.orders)
            }
        },
        backSearch() {
            this.thisPage = true
            this.isComponent = false
        }
    }
}
</script>
<style>
.search-orderhistory-page {
    background-color: #edf0f5;
}

.search-orderhistory-wrapper {
    padding-top: 25px;
    width: 1200px;
    margin: 0 auto;
}

.search-orderhistory-content {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
    font-family: ROBOTO LIGHT;
    width: 100%;
    margin: 65px 0 0px 0;
    padding-bottom: 150px;

}

.search-orderhistory-content>div {
    padding: 85px 99px;
    padding-bottom: 120px;
    border-radius: 12px;
    box-shadow: 0 0 16px rgba(0, 0, 0, .11);
    background-color: #fff;
}

.search-orderhistory-content>div>span {
    font-size: 24px;
    font-weight: normal;
    line-height: 1.5;
}

.search-orderhistory-content>div>form {
    position: relative;
    margin-top: 20px;
}

.search-orderhistory-content>div>form>div>svg {
    position: absolute;
    top: 22%;
    left: 25px;
    transform: translate(0, -50%);
    fill: #c00;
}

.search-orderhistory-content>div>form>div>input {
    border: 1px solid #e0e0e0;
    border-radius: 100px;
    height: 48px;
    padding: 0 50px;
    font-size: 15px;
    width: 100%;
    box-sizing: border-box;
    outline: none;
}

.search-orderhistory-content>div>form>button {
    background-color: #c00;
    box-shadow: unset;
    border-radius: 100px;
    width: 302px;
    height: 50px;
    border: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 17px;
    max-width: 100%;
    margin-top: 20px;
    outline: none;
}

.search-orderhistory-content>div>form>div>span {
    color: red;
    font-size: 14px;
    position: absolute;
    top: 49%;
    left: 60px;
    transform: translate(0, -50%);
    fill: #c00;
}
.order-history-back-search {
    margin-top: 20px;
    justify-content: center;
    background: #c00 !important;
    color: #fff !important;
    font-size: 16px !important;
    cursor: pointer;
}
</style>