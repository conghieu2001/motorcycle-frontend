<template>
    <div>
        <userHeader :indexCart="indexCart" ></userHeader>
        <div class="guarantee-page-wrapperr">
            <div class="row" style="height: auto;">
                <div class="form-search-guarantee-left col-4">
                    <div class="">
                        <span>Tra cứu bảo hành</span>
                        <form class="mt-3" @submit.prevent="getByOrder">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                                </svg>
                                <input type="text" minlength="24" maxlength="24" v-model="searchIDGuarantee" placeholder="Nhập mã đơn hàng của bạn">
                            </div>
                            <button type="submit">Tiếp tục</button>
                        </form>
                    </div>
                </div>
                <div class="col-1">

                </div>
                <div class="form-search-guarantee-right col-7" v-if="isForm">
                    <div class="d-flex justify-content-between ms-3 me-3">
                        <h6>Mã đơn hàng: <span class="fw-bold">#{{ orderById._id }}</span></h6>
                        <h6>Ngày mua: <span class="fw-bold">{{ formatDateNoTime(orderById.createdAt) }}</span></h6>
                    </div>
                    <div class="guarantee-right-table">
                        <div class="guarantee-right-table-head row">
                            <div class="col-1">STT</div>
                            <div class="col-5">Tên</div>
                            <div class="col-3">Bảo hành (tháng)</div>
                            <div class="col-3">Ngày hết hạn</div>
                        </div>
                        <div class="guarantee-right-table-body row" v-for="(product, index) in orderById.products" :key="index">
                            <div class="col-1">{{ index +1 }}</div>
                            <div class="col-5">{{ product.productId.name }}</div>
                            <div class="col-3" v-if="product.productId.warrantyTime">{{ product.productId.warrantyTime }} (tháng)</div>
                            <div class="col-3" v-else>Không bảo hành</div>
                            <div class="col-3" v-if="product.productId.warrantyTime">{{ formatDateNoTime(expirationDate(orderById.createdAt, product.productId.warrantyTime)) }}</div>
                            <div class="col-3" v-else>Không bảo hành</div>
                        </div>
                    </div>
                </div>
                <div class="col-7" v-else>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartService from "../../services/cart.service";
import userHeader from '../../components/user/userHeader.vue'
import orderService from '../../services/order.service';
export default {
    components: {
        userHeader
    },
    data() {
        return {
            indexCart: 0,
            searchIDGuarantee: '',
            orderById: {},
            isForm: false
        }
    },
    methods: {
        async getIndexProduct() {
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                const id = user.user._id
                const response = await cartService.findById({id})
                const userCart = response.data.result
                // console.log(userCart[0].products)
                if(userCart[0] != undefined) {
                    let sumU = 0
                    userCart[0].products.forEach(e => {
                        sumU = sumU + e.quantity
                    })
                    this.indexCart = sumU
                } else {
                    this.indexCart = 0
                }
            } else {
                const arrCart = JSON.parse(localStorage.getItem("cartItems"));
                if(arrCart != null) {
                    let sum = 0
                    arrCart.forEach(e => {
                        sum = sum + e.quantity
                    })
                    this.indexCart = sum || 0
                } else {
                    this.indexCart = 0
                }
            }
        },
        async getByOrder() {
            const response = await orderService.findById({id: this.searchIDGuarantee})
            if(response.data.status == true) {
                this.orderById = response.data.result
                this.isForm = true
            } else {
                alert(response.data.mes)
            }
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        expirationDate(a, b) {
            const date = new Date(a);
            const newDate = new Date(date.getTime() + b * 2629743830);
            // console.log(newDate)
            return newDate

        },
    },
    mounted() {
        this.getIndexProduct()
    }
}
</script>
<style>
.guarantee-page-wrapperr {
    background-color: #edf0f5;
}
.guarantee-page-wrapperr>div {
    font-family: ROBOTO LIGHT;
    width: 100%;
    padding: 65px 175px 0px 175px;
    padding-bottom: 100px;
}
.form-search-guarantee-left {
    text-align: center;
    padding: 85px 99px;
    padding-bottom: 120px;
    border-radius: 12px;
    height: 350px;
    box-shadow: 0 0 16px rgba(0, 0, 0, .11);
    background-color: #fff;
}
.form-search-guarantee-left>div>span {
    font-size: 24px;
    font-weight: normal;
    line-height: 1.5;
    font-family: ROBOTO LIGHT;
}
.form-search-guarantee-left>div>form>div {
    position: relative;
}
.form-search-guarantee-left>div>form>div>svg {
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translate(0, -50%);
    fill: #c00;
}
.form-search-guarantee-left>div>form>div>input {
    border: 1px solid #e0e0e0;
    border-radius: 100px;
    height: 48px;
    padding: 0 50px;
    font-size: 15px;
    width: 80%;
    box-sizing: border-box;
    outline: none;
}
.form-search-guarantee-left>div>form>button {
    background-color: #c00;
    box-shadow: unset;
    border-radius: 100px;
    width: 302px;
    height: 50px;
    border: none;
    text-transform: uppercase;
    color: #fff;
    font-size: 17px;
    max-width: 80%;
    margin-top: 20px;
    outline: none;
}
.form-search-guarantee-right {
    height: auto;
    width: 700px;
    border-radius: 12px;
    box-shadow: 0 0 16px rgba(0, 0, 0, .11);
    background-color: #fff;
}
.form-search-guarantee-right {
    padding: 20px;
}
.guarantee-right-table {
    margin: 20px 30px;
}
.guarantee-right-table-head {
    background-color: #e2e3e5;
    height: 40px;
    font-weight: 600;
    align-items: center;
}
.guarantee-right-table-body {
    border-bottom: 1px solid rgb(222, 222, 222);
    border-left: 1px solid rgb(222, 222, 222);
    border-right: 1px solid rgb(222, 222, 222);
    height: 40px;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
}
</style>