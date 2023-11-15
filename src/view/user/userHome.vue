<template>
    <div>
        <userHeader :indexCart="indexCart"></userHeader>
        <div>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../assets/img/slide-show-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/slide-show-2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/slide-show-3.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div class="user-homepage-wapper">
            <div class="session-product">
                <div class="session-product-title">
                    <h3>Sản phẩm</h3>
                </div>
                <div class="d-flex align-items-center ms-4" style="height: 300px;">
                    <div class="session-product-icon mb-5" @click="handlePage(activePage - 1)">
                        <img src="../../assets/img/home-page-product-back.png" alt="">
                    </div>
                    <ul class="slide-show-item row ps-3 pe-3" style="height: auto; width: auto;" >
                        <li class="col-3" style="width: 260px;" v-for="product in products" :key="product">
                            <router-link :to="'/allproduct/' + product._id">
                                <div class="slide-show-item-img">
                                    <img :src="'http://localhost:3000' + product.image" alt="">
                                </div>
                                <div class="infor-product">
                                    <p class="infor-product-name">  {{product.name}}  </p>
                                    <p class="infor-product-price">  {{formatCurrency(product.salePrice)}}  </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <div class="session-product-icon mb-5" @click="handlePage(activePage + 1)">
                        <img class="float-end" src="../../assets/img/home-page-product-next.png" alt="">
                    </div>
                </div>

            </div>
            <div class="session-posts">
                <div class="session-product-title">
                    <h3>Hoạt động của Honda</h3>
                </div>
                <div class="d-flex align-items-center mt-4 ms-5">
                    <div class="session-product-icon" @click="handlePagePosts(activePagePost - 1)">
                        <img src="../../assets/img/home-page-product-back.png" alt="">
                    </div>
                    <ul class="row" style="height: auto; width: auto;">
                        <li class="col-4 session-posts-li" style="width: 350px;" v-for="post in posts" :key="post">
                            <router-link :to="'/postdetail/'+ post._id">
                                <div class="session-posts-img">
                                    <img :src="'http://localhost:3000' + post.image" alt="">
                                </div>
                                <div class="session-posts-title pt-2 pb-2">
                                    <span class="ps-3 pe-3">{{ post.title }}</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <div class="session-product-icon" @click="handlePagePosts(activePagePost + 1)">
                        <img src="../../assets/img/home-page-product-next.png" alt="">
                    </div>
                </div>

            </div>
            <div class="session-news mt-4 mb-5">
                <div class="session-product-title">
                    <h3>Tin tức nổi bật</h3>
                </div>
                <div class="row mt-4" style="height: auto;">
                    <router-link to="/postdetail" class="col-6 session-news-left">
                        <div class="session-news-left-img">
                            <img src="https://cdn.honda.com.vn/news-promotion/April2023/R7CoGmZIfE4hbcE8xRXc.jpg" alt="">
                        </div>
                        <div class="session-news-left-infor">
                            <p>01/05/2023</p>
                            <h5>HỖ TRỢ PHÍ ĐĂNG KÝ XE WINNER X CÙNG CHƯƠNG TRÌNH KHUYẾN MẠI  “ƯU ĐÃI BỨT PHÁ – VUI LÁI THẢ GA”</h5>
                        </div>
                        <p class="session-news-left-read-more">Xem thêm ></p>
                    </router-link>
                    <div class="col-6 ps-4">
                        <div class="row">
                            <router-link :to="'/postdetail/'+ post._id" class="col-6 session-news-right" v-for="post in lastPost" :key="post">
                                <div class="session-news-right-img">
                                    <img style="height: 170px;" :src="'http://localhost:3000' + post.image" alt="">
                                </div>
                                <div class="session-news-right-infor">
                                    <p>{{ formatDateNoTime(post.createdAt) }}</p>
                                    <h5>{{ post.title }}</h5>
                                </div>
                                <p class="session-news-right-read-more">Xem thêm ></p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import postService from '../../services/post.service';
import productService from '../../services/product.service';
import cartService from '../../services/cart.service'
import userHeader from '../../components/user/userHeader.vue'
export default {
    components: {
        userHeader
    },
    data() {
        return {
            products: {},
            lengthPage: 1,
            activePage: 1,
            posts: {},
            lengthPagePost: 1,
            activePagePost: 1,
            lastPost : [],
            indexCart: 0
        }
    },
    methods: {
        async getProducts(pageNumber = 1) {
            try {
                const length = await productService.getPanigation()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 4)
                // console.log(this.lengthPage)
                const response = await productService.getPanigation(pageNumber, 4)
                this.products = response.data
                // console.log(this.products)
            } catch (error) {
                console.log(error);
            }
        },
        handlePage(index) {
            if(index > this.lengthPage) {
                this.getProducts(1)
                this.activePage = 1
            } else if(index <= 0 ) {
                this.getProducts(this.lengthPage)
                this.activePage = this.lengthPage
            } else {
                this.getProducts(index)
                this.activePage = index
            }
        },
        async getAllPosts(pageNumber = 1) {
            try {
                const length = await postService.getAll()
                // console.log(length)
                this.lengthPagePost = Math.ceil(length.data.length / 3)
                // console.log(this.lengthPagePost)
                const response = await postService.getAll(pageNumber, 3)
                this.posts = response.data
                // console.log(this.posts)
            } catch (error) {
                console.log(error);
            }
        },
        async bannerPost() {
            const response = await postService.getAll()
            this.lastPost = response.data.slice(-4)
            // console.log(this.lastPost)
        },
        handlePagePosts(index) {
            // console.log(index)
            if(index > this.lengthPagePost) {
                this.getAllPosts(1)
                this.activePagePost = 1
            } else if(index <= 0 ) {
                this.getAllPosts(this.lengthPagePost)
                this.activePagePost = this.lengthPagePost
            } else {
                this.getAllPosts(index)
                this.activePagePost = index
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
        async getIndexProduct() {
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                const id = user.user._id
                const response = await cartService.findById({id})
                const userCart = response.data.result
                // console.log(userCart[0])
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
        this.getProducts()
        this.getAllPosts()
        this.bannerPost()
        this.getIndexProduct()
    }
}
</script>
<style scoped>
@import url(../../assets/client/home.css);
</style>