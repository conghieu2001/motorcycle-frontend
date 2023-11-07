<template>
    <div class="order-history-page">
        <div class="order-history-page-wrapper">
            <div class="order-history-left">
                <span>Anh (chị) <b>{{ orders.userName }}</b></span>
                <div class="d-flex align-items-center mt-3 ms-3">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z"/></svg>
                    <p class="mb-0">Danh sách đơn hàng</p>
                </div>
            </div>
            <div class="order-history-right">
                <span>Danh sách đơn hàng</span>
                <div class="mt-3 order-history-right-detail" v-for="(order, index) in orders" :key="index">
                    <div class="d-flex justify-content-between order-history-right-detail-head ">
                        <span><b>Đơn hàng: </b>#{{ order._id }}</span>
                        <b class="mb-0">{{ order.status }}</b>
                    </div>
                    <div class="mt-3 mb-5 order-history-right-detail-body d-flex align-items-center justify-content-between" v-for="product in order.products" :key="product">
                        <img :src="'http://localhost:3000' + product.productId.image" alt="">
                        <h6>{{ product.productId.name }}</h6>
                        <span>Sl x Giá: <b style="font-size: 16px;">{{ product.saleQuantity }} x {{ formatCurrency(product.salePrice) }}</b></span>
                        <!-- <button class="feedback-detail-product" v-if="checkToggleFeedback(product.productId._id)">Đánh giá</button> -->
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h6>Tổng tiền: <b style="color: red;">{{ formatCurrency(order.totalBill) }}</b></h6>
                            <h6>Số tiền đã thanh toán: <b style="color: red;">{{ formatCurrency(order.amountPaid) }}</b></h6>
                        </div>
                        <div>
                            <div class="click-screen-detail-order" @click="continuePayment(order._id)" v-if="order.status == 'Chờ thanh toán'">
                                <span>Tiếp tục đặt hàng</span>
                            </div>
                            <div class="click-screen-detail-order" @click="cancelOrder(order._id)" v-if="order.status == 'Chờ thanh toán'">
                                <span>Hủy đơn hàng</span>
                            </div>
                            <div class="click-screen-detail-order" @click="gotoFeedback(order._id)" v-if="order.check">
                                <span>Đánh giá sản phẩm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isdetailProduct">
            <div class="form-addfeedback">
                <div class="d-flex justify-content-between pb-0">
                    <h6>Danh sách sản phẩm</h6>
                    <svg @click="isdetailProduct = false" xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>
                <div class="d-flex align-items-center justify-content-start " v-for="product in orderById.products" :key="product">
                    <img :src="'http://localhost:3000' + product.productId.image" alt="">
                    <h6 class="ms-2">{{ product.productId.name }}</h6>
                    <button class="ms-2" @click="gotoFeedbackDetail(product.productId._id, product.productType)" v-if="checkToggleFeedback(product.productId._id)">Đánh giá</button>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isFormFeedBack">
            <form class="form-addfeedback-2" @submit.prevent="createFeedback">
                <div class="d-flex justify-content-end pb-0">
                    <svg @click="closeFormFeedback" xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>
                <label for="">Bình chọn</label>
                <div class="d-flex align-items-center justify-content-center ">
                    <svg @click="clickStar(1)" xmlns="http://www.w3.org/2000/svg" v-bind:class="{ active_star: star1 }" height="1.3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"/></svg>
                    <svg @click="clickStar(2)" xmlns="http://www.w3.org/2000/svg" v-bind:class="{ active_star: star2 }" height="1.3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"/></svg>
                    <svg @click="clickStar(3)" xmlns="http://www.w3.org/2000/svg" v-bind:class="{ active_star: star3 }" height="1.3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"/></svg>
                    <svg @click="clickStar(4)" xmlns="http://www.w3.org/2000/svg" v-bind:class="{ active_star: star4 }" height="1.3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"/></svg>
                    <svg @click="clickStar(5)" xmlns="http://www.w3.org/2000/svg" v-bind:class="{ active_star: star5 }" height="1.3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"/></svg>
                </div>
                <div class="d-grid ">
                    <label for="">Viết đánh giá</label>
                    <textarea v-model="comment" required></textarea>
                </div>
                <div>
                    <button type="submit">Đánh giá</button>
                </div>
            </form>
        </div>
        <div class="overlay" v-if="isContinuepay">
            <div class="continue-pay-methodpay">
                <form class="mt-4" @submit.prevent="continuePaymentMethod">
                        <h6>Phương thức thanh toán</h6>
                        <div class="methods-pay-cart-right-input mt-4" >
                            <div class="cart-right-input-vnpay">
                                <input type="radio" name="method-pay" value="vnpay" v-model="methodsPay" required>
                                <img src="https://vnpay.vn/assets/images/logo-icon/logo-primary.svg" alt="">
                                <label class="pt-1" for="">Thanh toán qua VNPAY</label>
                            </div>
                            <div class="cart-right-input-momo mt-2">
                                <input type="radio" name="method-pay" value="momo" v-model="methodsPay" required>
                                <svg width="40" height="30" viewBox="0 0 72 72" fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="jsx-ddfb0b416b0db288 mx-auto block h-10 w-10 mb-2 ms-3 me-2">
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
                                <label for="">Thanh toán qua MoMo</label>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div @click="isContinuepay = false" class="close-continuepay mt-4 w-25" ><span>Hủy</span></div>
                            <button type="submit" class="custom-btn7 btn-7 mt-4 w-25 ms-3" ><span>Thanh toán</span></button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
</template>
<script>
import orderService from '../../services/order.service';
import feedbackService from '../../services/feedback.service'
// import productService from '../../services/product.service';
// import accessoryService from '../../services/acesstory.service'
export default {
    data() {
        return {
            checkLogin: false,
            isdetailProduct: false,
            isFormFeedBack: false,
            orders: {
                userName: ''
            },
            star1: false,
            star2: false,
            star3: false,
            star4: false,
            star5: false,
            starNumber: 5,
            comment: '',
            orderById: {},
            productById: {},
            feedbacks: {},
            check: [],
            aaa: false,
            isContinuepay: false,
            constinueId: '',
            methodsPay: ''
        }
    },
    methods: {
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async getInfoUser() {
            await this.getAllFeedback()
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                this.checkLogin = true
                const userId = user.user._id
                const response = await orderService.findByUserId({userId})
                this.orders = response.data.result
                this.orders = this.orders.reverse()
                this.orders.userName = this.orders[0].userId.fullName
                // console.log(this.orders[0].userId.fullName)
                this.orders.forEach((order, index) => {
                    if(order.status == 'Hoàn thành') {
                        let fb = []
                        this.feedbacks.forEach(f => {
                            if(order._id == f.orderId) {
                                fb.push(f)
                            }
                        })
                        if(order.products.length == fb.length) {
                            this.orders[index].check = false
                        } else {
                            this.orders[index].check = true
                        }
                    } else {
                        this.orders[index].check = false
                    }
                })
            } else {
                this.checkLogin = false
                this.$router.push('/');
            }
            // console.log(user)
        },
        async continuePayment(id) {
            this.isContinuepay = true
            this.constinueId = id  
        },
        async continuePaymentMethod() {
            const data = {
                id: this.constinueId,
                methodPay: this.methodsPay
            }
            const response = await orderService.continuePayment(data)
            if(data.methodPay == 'vnpay') {
                const link = document.createElement('a')
                link.href = response.data;
                document.body.appendChild(link)
                link.click()  
            } else {
                const link = document.createElement('a')
                link.href = response.data.payUrl;
                document.body.appendChild(link)
                link.click() 
            }
        },
        async cancelOrder(id) {
            const response = await orderService.cancel({id})
            if(response.data.status) {
                alert(response.data.mes)
                this.getInfoUser()
            } else {
                alert(response.data.mes)
            }
        },
        clickStar(index) {
            if(index == 1) {
                this.star1= true
                this.star2= false
                this.star3= false
                this.star4= false
                this.star5= false
                this.starNumber = 1
            } else if(index == 2) {
                this.star1= true
                this.star2= true
                this.star3= false
                this.star4= false
                this.star5= false
                this.starNumber = 2
            } else if(index == 3) {
                this.star1= true
                this.star2= true
                this.star3= true
                this.star4= false
                this.star5= false
                this.starNumber = 3
            } else if(index == 4) {
                this.star1= true
                this.star2= true
                this.star3= true
                this.star4= true
                this.star5= false
                this.starNumber = 4
            } else if(index == 5) {
                this.star1= true
                this.star2= true
                this.star3= true
                this.star4= true
                this.star5= true
                this.starNumber = 5
            }
        },
        closeFormFeedback () {
            this.isFormFeedBack= false,
            this.isdetailProduct= false,
            this.starNumber = 5
            this.comment = ''
        },
        async gotoFeedback(id) {
            const response =await orderService.findById({id})
            this.isdetailProduct= true
            this.orderById = response.data.result
            // console.log(this.orderById)
        },
        async gotoFeedbackDetail(id, type) {
            this.productById = {
                id: id,
                type: type
            }
            this.isFormFeedBack = true
            // if(type == 'product') {
            //     const response = await productService.findById({id})
            //     this.orderById = response.data.result
            //     this.isFormFeedBack = true
            // } else {
            //     const response = await accessoryService.findById({id})
            //     this.orderById = response.data.result
            //     this.isFormFeedBack = true
            // }
        },
        async createFeedback() {
            const user = JSON.parse(sessionStorage.getItem("user"));
            const data = {
                item: {
                    productType: this.productById.type,
                    productId: this.productById.id,
                },
                comment: this.comment,
                star: this.starNumber,
                userId: user.user._id,
                orderId: this.orderById._id
            }
            const response = await feedbackService.create(data)
            if(response.data.status == true) {
                alert(response.data.mes)
                this.closeFormFeedback()
                this.star1= false
                this.star2= false
                this.star3= false
                this.star4= false
                this.star5= false
                this.getAllFeedback()
                this.getInfoUser()
            } else {
                alert(response.data.mes)
            }
        },
        async getAllFeedback() {
            const response = await feedbackService.getAll()
            this.feedbacks = response.data
            // console.log(this.feedbacks)
        },
        checkToggleFeedback(id) {
            this.aaa = false
            this.feedbacks.forEach(e => {
                if(e.item.productId._id == id && this.orderById._id == e.orderId) {
                    this.aaa = true
                }
            })
            if(this.aaa == true) {
                return false
            } else {
                return true
            }
        }
    },
    mounted() {
        this.getAllFeedback()
        this.getInfoUser()
    }
}
</script>
<style scoped>
@import url(../../assets/client/orderhistory.css);
.active_star{
    fill: yellow;
}
.form-addfeedback {
    width: 500px;
    height: auto;
    background-color: #fff;
    position: absolute;
    top: 25%;
    left: 35%;
    border-radius: 5px;
}
.form-addfeedback>div {
    padding: 15px;
}
.form-addfeedback>div>img {
    max-width: 50px;
    max-height: 50px;
}
.form-addfeedback>div>h6 {
    width: 300px;
}
.form-addfeedback>div>button {
    width: 100px;
    height: 30px;
    outline: none;
    border: 1px solid #F96F3A;
    border-radius: 4px;
    /* line-height: 16px; */
    color: #F96F3A;
    /* padding: 10px 15px; */
    text-align: center;
    cursor: pointer;
    background-color: #F96F3A;
    color: #fff;
}
.form-addfeedback>div>svg {
    cursor: pointer;
}
.form-addfeedback-2 {
    width: 500px;
    height: 390px;
    background-color: #fff;
    position: absolute;
    top: 25%;
    left: 35%;
    border-radius: 5px;
}
.form-addfeedback-2>div {
    padding: 15px;
}
.form-addfeedback-2>div>svg {
    cursor: pointer;
}
.form-addfeedback-2>label {
    padding-left: 15px;
}
.form-addfeedback-2>div>textarea {
    width: 90%;
    height: 150px;
    margin: 0px auto;
    font-size: 14px;
}
.form-addfeedback-2>div>button {
    width: 100px;
    height: 30px;
    outline: none;
    border: 1px solid #F96F3A;
    border-radius: 4px;
    /* line-height: 16px; */
    color: #F96F3A;
    /* padding: 10px 15px; */
    text-align: center;
    cursor: pointer;
    background-color: #F96F3A;
    color: #fff;
    float: right;
}
.feedback-detail-product {
    width: 100px;
    height: 30px;
    outline: none;
    border: 1px solid #F96F3A;
    border-radius: 4px;
    /* line-height: 16px; */
    color: #F96F3A;
    /* padding: 10px 15px; */
    text-align: center;
    cursor: pointer;
    background-color: #F96F3A;
    color: #fff;
}
/* .test-1, .test-2, .test-3, .test-4, .test-5{
    fill: #F96F3A;
} */
.continue-pay-methodpay {
    width: 500px;
    height: 270px;
    background-color: #fff;
    position: absolute;
    top: 25%;
    left: 35%;
    border-radius: 5px;
    padding: 0 20px;
}
.continue-pay-methodpay>form {
    margin-left: 20px;
}
.continue-pay-methodpay>form>div {
    padding-left: 40px;
}
.close-continuepay {
    margin-left: 50px;
    border: none;
    text-align: center;
    padding-top: 7px;
    background-color: rgb(198, 198, 198);
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    box-shadow: -7px -7px 20px 0px rgba(255,255,255,.9), -4px -4px 5px 0px rgba(255,255,255,.9), 7px 7px 20px 0px rgba(0,0,0,.2), 4px 4px 5px 0px rgba(0,0,0,.3);
}
</style>