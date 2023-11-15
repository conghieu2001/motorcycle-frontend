<template>
    <div>
        <userHeader :indexCart="indexCart" ></userHeader>
        <div class="accessory-user-page">
        <div class="accessory-user-page-wrapper">
            <div class="title-by-accessory">
                <p>
                    Phụ tùng chính hiệu đảm bảo chất lượng và tiêu chuẩn với tính đồng bộ giữa các linh kiện cho sự lắp ráp
                    đạt độ chính xác cao nhất. Được chế tạo từ vật liệu chất lượng cao bằng công nghệ tiên tiến nhất, phụ
                    tùng chính hiệu dù được nhập khẩu từ Nhật Bản, Thái Lan, Trung Quốc hay cung cấp bởi các nhà sản xuất
                    trong nước đều luôn đảm bảo các yêu cầu tính năng kỹ thuật, đồng thời thỏa mãn nghiêm ngặt tiêu chuẩn
                    chất lượng của Nhật như Jis, Hes, Jama... và cả các tiêu chuẩn Việt Nam (TCVN). Mọi phụ tùng do Việt Nam
                    cung cấp đều luôn đạt yêu cầu về chất lượng ngang bằng với chất lượng sản xuất tại Nhật Bản.
                </p>
                <p>
                    Phụ tùng chính hiệu cực dễ tìm mua, hiện đã có mặt ở khắp các tỉnh thành được phân phối qua hệ thống Cửa
                    hàng Bán xe máy và Dịch vụ do Ủy nhiệm trên toàn quốc đồng thời còn mở rộng cung cấp qua các cửa hàng
                    sửa chữa cho khách hàng ở xa.
                </p>
                <p>
                    Lựa chọn Phụ tùng chính hiệu để bảo vệ xe của bạn cũng là đảm bảo an toàn cho chính bạn!
                </p>
            </div>
            <div class="accessory-user-list">
                <h6>Sản phẩm</h6>
            </div>
            <div class="mt-4">
                <div class="row" style="height: auto;">
                    <div class="col-3 mt-3" v-for="accessory in accessories" :key="accessory">
                        <div class="accessory-info-wrapper" @click="gotoScreenDetail(accessory._id)">
                            <img :src="'http://localhost:3000' + accessory.image" alt="">
                            <p class="mt-1">{{ accessory.name }}</p>
                            <p style="color: #C00;">{{ formatCurrency(accessory.salePrice) }}</p>
                        <div class="text-center" v-if="accessory.inputQuantity == 0">
                            <span style="font-weight: 600;">Hết hàng</span>
                           </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="loader" title="2" v-if="loader">
            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="100px" height="100px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
                xml:space="preserve">
                <path fill="#000"
                    d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25"
                        to="360 25 25" dur="0.6s" repeatCount="indefinite" />
                </path>
            </svg>
        </div>
        <div class="overlay" v-if="screenDetail">
            <div class="screen-detail-access">
                <div class="float-end me-3 mt-2 close-form-accesssory-screen">
                    <svg @click="screenDetail = false" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                </div>
                <div class="row ps-3 pe-3 pt-5" style="height: auto;">
                    <div class="col-6 access-info-img">
                        <div>
                            <img :src="'http://localhost:3000' + accessById.image" alt="">
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-2 ps-3 pe-3">
                            <div class=" icon-acess-previous">
                                <img src="https://www.honda.com.vn/images/trang-chu/home-page-product-back.png" alt="">
                            </div>
                            <div class="img-acces-list ps-3">
                                <div>
                                    <img :src="'http://localhost:3000' + accessById.image" alt="">
                                </div>
                            </div>
                            <div class=" icon-access-next">
                                <img src="https://www.honda.com.vn/images/trang-chu/home-page-product-next.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-6 access-info-description">
                        <h6>{{ accessById.name }}</h6>
                        <p>
                            {{ accessById.description }}
                        </p>
                        <h6>Giá từ: <span>{{ formatCurrency(accessById.salePrice) }}</span></h6>
                        <div class="add-to-cart-button d-flex justify-content-start">
                            <button class="custom-btn7 btn-7" disabled v-if="accessById.inputQuantity == 0"><span>Tạm thời hết
                                    hàng</span></button>
                            <button class="custom-btn7 btn-7" v-else @click="addToCart"><span>Thêm vào giỏ hàng</span></button>
                        </div>
                        <h6 class="mt-2">Phù hợp với xe:</h6>
                        <ul>
                            <li v-for="fit in accessById.fitProductId" :key="fit">{{ fit.name }}</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-4 access-related">
                    <p>Các sản phẩm liên quan</p>
                    <div class="d-flex ">
                        <div class="list-access-related me-3" v-for="access in related.slice(0, 4)" :key="access" @click="gotoScreenDetail(access._id)">
                            <div class="list-access-related-img">
                                <img :src="'http://localhost:3000' + access.image" alt="">
                            </div>
                            <p>{{ access.name }}</p>
                        </div>
                    </div>
                </div>
                <div class="mt-4 access-related product-related w-50 ms-5">
                    <p>Nhận xét & đánh giá</p>
                    <div class="d-grid feedback-by-product " v-for="fdb in feedbackByProduct" :key="fdb">
                        <div class="d-flex align-items-center">
                            <img :src="'http://localhost:3000' + fdb.userId.avatar" alt="">
                            <h6 class="ms-2">{{ fdb.userId.fullName }}</h6>
                        </div>
                        <div class="feedback-by-product-star">
                            <svg v-for="str in fdb.star" :key="str" class="active_star" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                        </div>
                        <h6 class="feedback-by-product-comment">{{ fdb.comment }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import acesstoryService from "../../services/acesstory.service";
import cartService from "../../services/cart.service";
import feedbackService from '../../services/feedback.service';
import userHeader from '../../components/user/userHeader.vue'
export default {
    components: {
        userHeader
    },
    data() {
        return {
            accessories: {},
            loader: false,
            screenDetail: false,
            accessById: {},
            related: [],
            feedbackByProduct: [],
            indexCart: 0
        }
    },
    methods: {
        async getAllAccess() {
            const response = await acesstoryService.getAll()
            this.accessories = response.data
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async gotoScreenDetail(id) {
            this.related = []
            this.loader = true
            this.screenDetail = true
            this.loader = false
            const response = await acesstoryService.findById({id})
            this.accessById = response.data.result
            this.accessories.forEach(e => {
                if(e.brandId == this.accessById.brandId && e._id != this.accessById._id) {
                    this.related.push(e)
                }
            });
            this.getFeedBackByProduct()
            // console.log(this.accessById)
        },
        isCheckIteminCart(item, arrCart) {
            // console.log(arrCart)
            let myIndex = -1;
            arrCart.forEach((itemCart, index) => {
                if (item.productId._id == itemCart.productId._id) {
                    myIndex = index;
                }
            });
            return myIndex;
        },
        async addToCart() {
            let cart = []
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                const data = {
                    products: {
                        productType: 'accessory',
                        productId: this.accessById._id,
                        quantity: 1
                    },
                    userId: user.user._id
                }
                const id = user.user._id
                // console.log(id)
                const productById = await cartService.findById({id})
                // console.log(productById.data.result[0])
                const document = productById.data.result[0] 
                // console.log(document)
                if(document == null) {
                    const response = await cartService.create(data)
                    if(response.data.status) {
                        alert('Sản phẩm đã được thêm vào giỏ hàng')
                    }
                } else {
                    // console.log(this.accessById._id)
                    this.checkId = false
                    document.products.forEach(e => {
                        if(e.productId._id == this.accessById._id) {
                            // console.log(e)
                            e.quantity = e.quantity + 1
                            this.checkId = true
                        }
                        // console.log(e)
                    })
                    if(this.checkId == true) {
                        // // console.log(document.products)
                        // const data = []
                        // document.products.forEach(e => {
                        //     data.push({
                        //         productId: e.productId._id,
                        //         quantity: e.quantity
                        //     })
                        // })
                        const updateData = {
                            id: document._id,
                            products: [
                                ...document.products
                            ]
                        }
                        const update = await cartService.update(updateData)
                        // console.log(update)
                        if(update.data.status == true) {
                            alert('Sản phẩm đã được thêm vào giỏ hàng')
                        }
                    } else {
                        document.products.push({
                            productType: 'accessory',
                            productId: this.accessById._id,
                            quantity: 1
                        })
                        // const data = []
                        // document.products.forEach(e => {
                        //     data.push({
                        //         productId: e.productId._id,
                        //         quantity: e.quantity
                        //     })
                        // })
                        const updateData = {
                            id: document._id,
                            products: [
                                ...document.products
                            ]
                        }
                        const update = await cartService.update(updateData)
                        // console.log(update)
                        if(update.data.status == true) {
                            alert('Sản phẩm đã được thêm vào giỏ hàng')
                        }
                    }
                }
            } else {
                let newProduct = {
                    productType: 'accessory',
                    productId: {
                        ...this.accessById
                    },
                    quantity: 1
                }
                if(JSON.parse(localStorage.getItem("cartItems")) === null) {
                    cart.push(newProduct)
                    localStorage.setItem("cartItems", JSON.stringify(cart));
                } else {
                    const arrCart = JSON.parse(localStorage.getItem("cartItems"));
                    let index = this.isCheckIteminCart(newProduct, arrCart)
                    // console.log(index)
                    if(index >= 0) {
                        arrCart[index].quantity++;
                    } else {
                        arrCart.push(newProduct)
                    }
                    localStorage.setItem("cartItems", JSON.stringify(arrCart));
                }
                alert('Sản phẩm đã được thêm vào giỏ hàng')
            }
            this.getIndexProduct()
        },
        async getFeedBackByProduct() {
            // await this.gotoScreenDetail({id})
            this.feedbackByProduct = []
            const response = await feedbackService.getAll()
            const feedbacks = response.data
            // console.log(feedbacks)
            feedbacks.forEach(e => {
                if(e.locked == true) {
                    if(e.item.productId._id == this.accessById._id) {
                    this.feedbackByProduct.push(e)
                }
                }
            })
            // console.log(this.feedbackByProduct)
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
        this.getAllAccess()
        this.getIndexProduct()
    }
}
</script>
<style scoped>@import url(../../assets/client/accessory.css);
.active_star{
    fill: yellow;
}
.feedback-by-product {
    padding: 15px 50px;
}
.feedback-by-product>div>img {
    max-width: 50px;
    max-height: 50px;
    border-radius: 50%;
    border: 1px solid rgb(236, 236, 236);
}
.feedback-by-product-star {
    margin-left: 60px;
}
.feedback-by-product-comment {
    margin-left: 60px;
    font: 14px/18px Arial,sans-serif,Helvetica;
}
</style>