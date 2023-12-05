<template>
    <div>
        <userHeader :indexCart="indexCart"></userHeader>
        <div class="detai-product-wapper">
            <div class="row" style="height: auto;">
                <div class="col-7 detail-product-image">
                    <img :src="'http://localhost:3000' + product.image" alt="">
                </div>
                <div class="col-5 detail-product-infor">
                    <h3>{{ product.name }}</h3>
                    <h4>Giá từ: {{ formatCurrency(product.salePrice) }}</h4>
                    <h5>Mô tả</h5>
                    <p>{{ product.description }}</p>
                    <div class="add-to-cart-button">
                        <button class="custom-btn7 btn-7" disabled v-if="product.inputQuantity == 0"><span>Tạm thời hết
                                hàng</span></button>
                        <button class="custom-btn7 btn-7" v-else @click="addToCart"><span>Thêm vào giỏ hàng</span></button>
                    </div>
                </div>
            </div>
            <div class="detail-product-spec mt-5">
                <span>Thông số kỹ thuật</span>
                <div class="row infor-spec">
                    <div class="col-12" v-for="scp in product.specs" :key="scp">
                        <div class="row set-height-user-detail-spec">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Khối lượng bản thân</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.klbt }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Dài x Rộng x Cao</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.dcc }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Khoảng cách trục bánh xe</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.kctbx }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Độ cao yên</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.dcy }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Khoảng sáng gầm xe</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.ksgx }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Dung tích bình xăng</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.dtbx }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Kích cỡ lớp trước/ sau</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.klt }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Phuộc trước</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.pt }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Phuộc sau</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.ps }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Loại động cơ</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.ldc }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Công suất tối đa</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.cstd }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Dung tích nhớt máy</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.dtnm }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Mức tiêu thụ nhiên liệu</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.mttnl }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Hộp số</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.hs }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Loại truyền động</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.ltd }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Hệ thống khởi động</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.htkd }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Moment cực đại</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.mcd }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Dung tích xy-lanh</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.dtxl }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec ">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Đường kính x Hành trình pít tông</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.dkhtpt }}</p>
                            </div>
                        </div>
                        <div class="row set-height-user-detail-spec normal-active">
                            <div class="col-5 set-height-user-detail-spec-title">
                                <p>Tỷ số nén</p>
                            </div>
                            <div class="col-7 set-height-user-detail-spec-des">
                                <p>{{ scp.tsn }}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="mt-4 access-related product-related">
                <p>Các sản phẩm liên quan</p>
                <div class="d-flex ">
                    <router-link :to="'/allproduct/' + product._id"  style="text-decoration: none;"
                        class="list-access-related me-3" v-for="product in related.slice(0, 6)" :key="product">
                        <div class="list-access-related-img">
                            <img :src="'http://localhost:3000' + product.image" alt="">
                        </div>
                        <p style="font-weight: 600;">{{ product.name }}</p>
                    </router-link>
                </div>
            </div>
            <div class="mt-4 access-related product-related w-50">
                <p>Nhận xét & đánh giá</p>
                <div class="d-grid feedback-by-product " v-for="fdb in feedbackByProduct" :key="fdb">
                    <div class="d-flex align-items-center">
                        <img :src="'http://localhost:3000' + fdb.userId.avatar" alt="" v-if="fdb.userId.isGoogle == false">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAKlBMVEXT09P+/v7Q0NDW1tbf39/4+Pj7+/vs7Ozv7+/a2trz8/Po6Ojj4+PMzMymzRIKAAAEaElEQVR4nO2dyZbjIAxFbcADQ///7zbESWWwk3iQeHKO7qpO1cavEUISQt00iqIoiqIoiqIoiqIoiqIoiqIoiqIoiqIoazBNYxvrL+Qf0J9zhKwixWEM3YUwDik5f0pF3sUh9O0LfRii8+hv24RpXAzdq5AbXYiuGOApMDaNb5Vc9YzpJOaW5tY1pw8J/Z3fMW6NlEmOk25r4zolE6PkrWPcFikFuYtjh61a2naQ6QiMD9u1tG3wEhfHfXHH7+gc+svnpJ1ashppTtqklQ55iV6WGuMOaMlqJDk14w9pyWoEeQF7UEtWI8ZD/9u99+90/9AqJsyOs3LOIMPQEoWWthXh0iyBkRU6AduGxsgKeEM7eMI8IuC02ZTAfGYESzkUxrzSJ/DSEC4MemkId0wBvGvIXNnEgNTiic6YGx2y2El0+N8BhgGWdPsXRlwYQG1lUDvbXCb7Dq66EenFRJiYXYWyzwSYGNIT8wpKi2fQ0qI8AMP+x3kA4lhmAhTR0OWYj4yYWNMwOLPszkBiyM//QqdiVMyTGI4zs+11ZVTMkxjy1KyAOmcYMoCcA4DEkFcACqhC4E9FzZZDDKyiwXDQ9CgttIXmCVy5mcED4KqADB4AVzez5BlNAF5skh+buLJZ09Bez5QLGqCYff1y7wnQ/m1if4a0Mup7AOhdU0NcO4PeAja0S4NeGNKkBpTKPEDVBySiE4isRwPen3FRQxQ7g5L/F2gMrbMixGx/zrAEvj9rgsKj4T3ZH4ePTvRx+YA5mkADGzMWOBY+Y4PlOUeSTmR6ucz+piBZNnZlpxcQtPcf2fMeqMPmY+8xbvPGEfxW09hhU9TZDzJimGVM4zb4gVH6e21j00pbC0nystxYJSec5dl5DgjGj3unH4Ud+d94vzwhCd8qc4xpfAz90wr1fYi+/OWEmIz1KcYhE2PytvwG/VXHMFfQ36EoiqL8GOVksfY6Ecz7/OP1l2cja3BxfJ0+1YUxOmdPEzCXf3vvPo6e6sbk/BmWKCtJw4rCRjck6XpynjmsLmqEQXKuaUrMv1ZKoWQEMuUYu8a85uYmcXVs3DveKEpzbmbvpKaLHAlXs3eONp5JugcgaAcSMdukoXrhLOJi49BueaQTUEOnG6IBnwy2sez/RQ12QOCekYafQKr5qVZgjlfnKC/A8+gUIoXnAS1mbXhenBXqN57xPDjL9IAOJ+rG+Sc9dZvoDf2Qlke6qvkn/fScZ6pGnVwb5o+KTSi8RlaoaGjMRlaoZmgsL2dfqZQP0DXMf6JSMz377p+o4gOOjwBeR41BwWxxzIwaS1NLS4U32/UWpkLAyTPSZBnuQSc0LzLWwlxJ40ovl+FOOitaGfekA9IhwCtgveuoa2XMdlYnLLvDGaDVtjLW5448g/M+wTnEvfKW4axvMtdkluBLn8kuyTaIYQsCagaZN/iCzer7n/MRV4WqzCts447oL8q+w3aVVt+Z8b1HBTgzPnf2Y2IqR2YFrv+RonqYySpG/Mr8B2O5OnI1m+QvAAAAAElFTkSuQmCC" alt="" v-else>
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
</template>
<script>
import productService from '../../services/product.service';
import feedbackService from '../../services/feedback.service';
import cartService from '../../services/cart.service'
import userHeader from '../../components/user/userHeader.vue'
export default {
    components: {
        userHeader
    },
    data() {
        return {
            product: {},
            products: {},
            related: [],
            checkId: false,
            feedbackByProduct: [],
            // id: '',
            currentParams: this.$route.params.id,
            indexCart: 0
        }
    },
    beforeRouteUpdate(to, from, next) {
        // Thực hiện các hành động cần thiết khi params thay đổi
        // console.log('Params changed:', to.params);
        this.currentParams = to.params;
        this.getProductById2(this.currentParams)
        next();
    },
    watch() {

    },
    methods: {
        checkStar() {
            return false
        },
        async gotoProductRelated(id) {
            this.related = []
            const linkDT = '/allproduct/' + id;
            this.$router.replace({ path: linkDT });
            const response = await productService.getById(id)
            this.product = response.result
            this.products.forEach(e => {
                if (e.brandId == this.product.brandId && e._id != this.product._id) {
                    this.related.push(e)
                }
            });
            this.getFeedBackByProduct()
        },
        async getProductById() {
            this.id = this.$route.params.id
            // console.log(this.id)
            const response = await productService.getById(this.id)
            this.product = response.result
            // console.log(this.product)
            // console.log(this.product.specs[0].klbt)
        },
        async getProductById2(data) {
            // this.id = this.$route.params.id
            const id = data.id
            // console.log(id, data)
            const response = await productService.getById(id)
            this.product = response.result
            // console.log(this.product.specs[0].klbt)
            this.getAllProducts()
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async getAllProducts() {
            this.related = []
            const response = await productService.getAll()
            this.products = response
            this.products.forEach(e => {
                if (e.brandId == this.product.brandId && e._id != this.product._id) {
                    this.related.push(e)
                }
            });
            // console.log(this.related)
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
                        productType: 'product',
                        productId: this.product._id,
                        quantity: 1
                    },
                    userId: user.user._id
                }
                const id = user.user._id
                // console.log(id)
                const productById = await cartService.findById({id})
                // console.log(productById.data.result[0])
                const document = productById.data.result[0] 
                if(document == null) {
                    const response = await cartService.create(data)
                    if(response.data.status) {
                        alert('Sản phẩm đã được thêm vào giỏ hàng')
                    }
                    // this.getIndexProduct()
                } else {
                    this.checkId = false
                    document.products.forEach(e => {
                        if(e.productId._id == this.product._id) {
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
                            // this.getIndexProduct()
                            alert('Sản phẩm đã được thêm vào giỏ hàng')
                        }
                    } else {
                        document.products.push({
                            productId: this.product._id,
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
                            // this.getIndexProduct()
                            alert('Sản phẩm đã được thêm vào giỏ hàng')
                        }
                    }
                }
            } else {
                let newProduct = {
                    productType: 'product',
                    productId: {
                        ...this.product
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
            await this.getProductById()
            this.feedbackByProduct = []
            const response = await feedbackService.getAll()
            // console.log(response.data)
            const feedbacks = response.data
            // console.log(feedbacks)
            feedbacks.forEach(e => {
                if(e.locked == true) {
                    if(e.item.productId._id == this.product._id) {
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
        // this.id = this.$route.params.id
        this.getProductById()
        this.getAllProducts()
        this.getFeedBackByProduct()
        // this.test()
        this.getIndexProduct()
    }
}
</script>
<style scoped>
@import url(../../assets/client/detaiproduct.css);
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