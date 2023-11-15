<template>
    <div>
        <userHeader :indexCart="indexCart"></userHeader>
        <div class="cart-page">
            <form class="cart-page-wrapper" @submit.prevent="createOrder">
                <div class="cart-page-left">
                    <h6>Giỏ hàng của bạn</h6>
                    <p>Thông tin mua hàng</p>
                    <input type="text" v-model="infoUser.fullName" placeholder="Họ & tên" required :disabled="checkLogin == true">
                    <input style="margin-bottom: 7px;" type="text" v-model="infoUser.phoneNumber" placeholder="Số điện thoại" required :disabled="checkUserGG == true">
                    <span class="valid-phonenumber" v-if="!!validPhoneNumber">{{ validPhoneNumber }}</span>
                    <input style="margin-top: 7px;" type="email" v-model="infoUser.email" placeholder="Email (tùy chọn)" :disabled="checkLogin == true">
                    <input type="text" v-model="infoUser.address" placeholder="Địa chỉ (tùy chọn)">
                    <textarea v-model="notes" placeholder="Ghi chú (tùy chọn)"></textarea>
                </div>
                <div class="cart-page-right">
                    <div class="cart-page-right-title">
                        <h6>Đơn hàng ({{ orderLength }} sản phẩm)</h6>
                    </div>
                    <div class="d-flex cart-page-right-product align-items-center" v-for="(product, index) in products" :key="index">
                        <div>
                            <img :src="'http://localhost:3000' + product.productId.image"
                                alt="">
                        </div>
                        <div class="cart-page-right-product-name ms-2">
                            <span class="ms-1">{{ product.productId.name }}</span>
                            <div class="button-add-order d-flex pb-2" style="border-bottom: none;">
                                <svg @click="downQuantity(index)" class="p-1 ms-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                    </path>
                                </svg>
                                <div class="ms-2">
                                    {{ product.quantity }}
                                </div>
                                <svg @click="upQuantity(index)" class="p-1 ms-2" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <span class="cart-page-right-product-price">{{ formatCurrency(product.productId.salePrice) }}</span>
                        <svg @click="deleteProduct(index)" class="cart-page-right-icon-trash" xmlns="http://www.w3.org/2000/svg" height="1.3em"
                            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                        </svg>
                    </div>
                    <div class="cart-page-right-warring">
                        <span>Bạn cần thanh toán để có thể giữ hàng tại cửa hàng!</span>
                    </div>
                    <div class="methods-pay-cart-right">
                        <div class="d-flex justify-content-between pb-2">
                            <h6>Tổng tiền</h6>
                            <span>{{ formatCurrency(totalBill) }}</span>
                        </div>
                        <div class="d-flex justify-content-between pb-2">
                            <h6>Cần thanh toán trước ít nhất (10%)</h6>
                            <span>{{ formatCurrency(prepay) }}</span>
                        </div>
                        <div class="d-flex" style="border-bottom: 1px solid rgb(212, 212, 212); padding-bottom: 15px;">
                            <input style="width: 500px;"  type="range" id="vol" name="vol" :min="totalBill*10/100" :max="totalBill" v-model="prepay">
                            <label class="ms-1" for="">{{ Math.ceil(prepay*100/totalBill) || 0 }}%</label>
                        </div>
                        <div class="mt-4">
                            <h6>Phương thức thanh toán</h6>
                            <div class="methods-pay-cart-right-input">
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
                        </div>
                    </div>
                    <button type="submit"><b>Đặt hàng</b></button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import cartService from '../../services/cart.service';
import orderService from '../../services/order.service';
import userHeader from '../../components/user/userHeader.vue'
export default {
    components: {
        userHeader
    },
    data() {
        return {
            products: [],
            totalBill: 0,
            infoUser: {
                email: '',
                phoneNumber: '',
                fullName: '',
            },
            notes: '',
            checkLogin: false,
            cartId: '',
            orderLength: 0,
            methodsPay: '',
            validPhoneNumber: '',
            prepay: 0,
            indexCart:0,
            checkUserGG: false
        }
    }, 
    methods: {
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async getProductCart() {
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                this.infoUser = {
                    fullName: user.user.fullName,
                    phoneNumber: user.user.phoneNumber,
                    email: user.user.email,
                    id: user.user._id
                }
                // console.log(this.infoUser)
                const id = user.user._id
                const response = await cartService.findById({id})
                const data = response.data.result[0]
                // console.log(data)
                if(data != undefined) {
                    this.products = data?.products
                    this.cartId = data?._id
                    // console.log(this.cartId)
                    this.totalBill = 0
                    this.products.forEach(e => {
                        this.totalBill += e.productId.salePrice * e.quantity
                    })
                    this.prepay = this.totalBill*10/100
                    if(user.isGoogle == true) {
                        this.checkUserGG = true
                    } else {
                        this.checkUserGG = false
                    }
                    this.checkLogin = true
                    this.orderLength = this.products.length || 0
                } else {
                    this.checkUserGG = true
                    this.checkLogin = true
                }
            } else {
                this.products = JSON.parse(localStorage.getItem("cartItems")) || [];
                this.totalBill = 0
                this.products.forEach(e => {
                    this.totalBill += e.productId.salePrice * e.quantity
                })
                this.prepay = this.totalBill*10/100
                this.checkLogin = false
                this.orderLength = this.products.length || 0
            }
        },
        async upQuantity(index) {
            // console.log(this.checkLogin)
            if(this.checkLogin == true) {
                // console.log(this.products[index].productId.inputQuantity)
                if(this.products[index].quantity < this.products[index].productId.inputQuantity) {
                    this.products[index].quantity ++
                    const updateData = {
                        id: this.cartId,
                        products: [
                            ...this.products
                        ]
                    }
                    await cartService.update(updateData)
                    this.totalBill = 0
                    this.products.forEach(e => {
                        this.totalBill += e.productId.salePrice * e.quantity
                    })
                    this.prepay = this.totalBill*10/100
                } else {
                    alert('Số lượng mua không thể vượt quá số lượng sản phẩm tại cửa hàng')
                }
            } else {
                // console.log(this.products[index])
                if(this.products[index].quantity < this.products[index].productId.inputQuantity) {
                    this.products[index].quantity++
                    localStorage.setItem("cartItems", JSON.stringify(this.products));
                    this.totalBill = 0
                    this.products.forEach(e => {
                        this.totalBill += e.productId.salePrice * e.quantity
                    })
                    this.prepay = this.totalBill*10/100
                } else {
                    alert('Số lượng mua không thể vượt quá số lượng sản phẩm tại cửa hàng')
                }
            }
            this.getIndexProduct()
        },
        async downQuantity(index) {
            if(this.checkLogin == true) {
                // console.log(this.products[index].productId.inputQuantity)
                if(this.products[index].quantity > 1) {
                    this.products[index].quantity --
                    const updateData = {
                        id: this.cartId,
                        products: [
                            ...this.products
                        ]
                    }
                    await cartService.update(updateData)
                    this.totalBill = 0
                    this.products.forEach(e => {
                        this.totalBill += e.productId.salePrice * e.quantity
                    })
                    this.prepay = this.totalBill*10/100
                }
            } else {
                if(this.products[index].quantity > 1) {
                    this.products[index].quantity--
                    localStorage.setItem("cartItems", JSON.stringify(this.products));
                    this.totalBill = 0
                    this.products.forEach(e => {
                        this.totalBill += e.productId.salePrice * e.quantity
                    })
                    this.prepay = this.totalBill*10/100
                }
            }
            this.getIndexProduct()
        },
        async deleteProduct(index) {
            if(this.checkLogin == true) {
                this.products.splice(index, 1)
                const updateData = {
                        id: this.cartId,
                        products: [
                            ...this.products
                        ]
                    }
                await cartService.update(updateData)
                this.getProductCart()
            } else {
                this.products.splice(index, 1)
                localStorage.setItem("cartItems", JSON.stringify(this.products));
                this.products = JSON.parse(localStorage.getItem("cartItems")) || [];
                // console.log(this.products)
                if(this.products.length == 0) {
                    localStorage.removeItem("cartItems");
                }
                this.getProductCart()
            }
            this.getIndexProduct()
        },
        async createOrder() {
            if(!this.infoUser.phoneNumber == 'bổ sung') {
                console.log(1)
            } else {
                console.log(2)
            }
            // console.log(this.checkLogin)
            this.validPhoneNumber = ''
            if((!this.infoUser.phoneNumber == 'bổ sung') || !this.infoUser.phoneNumber || !this.infoUser.phoneNumber.match(/^(03[2-9]|05[2-9]|07[0-9]|08[1-9]|09[0-9]|01[2|6|8|9])+([0-9]{7})\b$/)) {
                this.validPhoneNumber = 'Số điện thoại không hợp lệ!'
            }  
            else {
                this.validPhoneNumber = ''
                if(this.products.length == 0) {
                    alert('Giỏ hàng hiện đang chống!')
                } else if(this.methodsPay == 'momo' && (this.prepay <= 1000 || this.prepay > 50000000)) {
                    alert('Số tiền cần thanh toán hiện vượt quá hạn mức. Quý khách hàng vui lòng thanh toán bằng phương thức khác. Xin cảm ơn!')
                }
                else {
                    if(this.checkLogin == true) {
                        const data = []
                        this.products.forEach(e => {
                            data.push({
                                productType: e.productType,
                                productId: e.productId._id,
                                salePrice: e.productId.salePrice,
                                saleQuantity: e.quantity,
                            })
                        })
                        const dataCreate = {
                            ...this.infoUser,
                            notes: this.notes,
                            methodPay: this.methodsPay,
                            ListProducts: data,
                            totalBill: this.totalBill,
                            amountPaid: this.prepay,
                            userId: this.infoUser.id
                        }
                        // console.log(dataCreate.userId)
                        const response = await orderService.createByOnline(dataCreate)
                        if(dataCreate.methodPay == 'vnpay') 
                        {
                            const link = document.createElement('a')
                            link.href = response.data;
                            document.body.appendChild(link)
                            link.click()
                            // console.log(1)
                        }
                        else {
                            const link = document.createElement('a')
                            link.href = response.data.payUrl;
                            document.body.appendChild(link)
                            link.click()
                        }
                    } else {
                        const data = []
                        this.products.forEach(e => {
                            data.push({
                                productType: e.productType,
                                productId: e.productId._id,
                                salePrice: e.productId.salePrice,
                                saleQuantity: e.quantity,
                            })
                        })
                        const dataCreate = {
                            ...this.infoUser,
                            notes: this.notes,
                            methodPay: this.methodsPay,
                            ListProducts: data,
                            totalBill: this.totalBill,
                            amountPaid: this.prepay,
                            userId: null
                        }
                        const response = await orderService.createByOnline(dataCreate)
                        if(dataCreate.methodPay == 'vnpay') 
                        {
                            const link = document.createElement('a')
                            link.href = response.data;
                            document.body.appendChild(link)
                            link.click()
                        }
                        else {
                            const link = document.createElement('a')
                            link.href = response.data.payUrl;
                            document.body.appendChild(link)
                            link.click()
                        }
                    }
                }
            }
        },
        async checkPay() {
            const params = new URLSearchParams(window.location.search);
            // const user = JSON.parse(sessionStorage.getItem("user"));
            await this.getProductCart()
            // console.log(this.checkLogin, this.cartId)
            if (params.get('isPay') == 'true') {
                // console.log(this.checkLogin, this.cartId)
                alert(`Thanh toán đặt hàng thành công! Mã đơn hàng của bạn ${params.get('id')}. `)
                // console.log(this.checkLogin)
                if(this.checkLogin == true) {
                    // console.log(1)
                    const updateData = {
                        id: this.cartId,
                        products: []
                    }
                    await cartService.update(updateData)
                    this.getProductCart()
                } else {
                    // console.log(2)
                    localStorage.removeItem("cartItems");
                    this.getProductCart()
                }
            } else if (params.get('isPay') == 'false') {
                // console.log(this.checkLogin, this.cartId)
                if(this.checkLogin == true) {
                    alert(`Không hoàn tất thanh toán đơn hàng mã ${params.get('id')}. Đơn hàng của bạn ở trạng thái chờ thanh toán. Bạn có thể tiếp tục thanh toán tại lịch sử đơn hàng!`)
                    const updateData = {
                        id: this.cartId,
                        products: [
                        ]
                    }
                    await cartService.update(updateData)
                    this.getProductCart()
                } else {
                    alert(`Đơn hàng của bạn chưa được thanh toán.`)
                }
            }
        },
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
                // console.log(arrCart)
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
        }
    },
    mounted() {
        this.getProductCart()
        this.checkPay()
        this.getIndexProduct()
    }
}
</script>
<style>@import url(../../assets/client/cart.css);
.valid-phonenumber {
    color: red;
    margin-left: 20px;
    font-size: 14px;
}
</style>