<template>
    <div>
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
                <div class="row" style="height: 300px; width: 100%; overflow: hidden;">
                    <div class="session-product-icon col-1">
                        <img src="../../assets/img/home-page-product-back.png" alt="">
                    </div>
                    <ul class="slide-show-item col-10 row " style="height: auto;" >
                        <li class="col-3" v-for="product in products" :key="product">
                            <router-link to="/">
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
                    <div class="session-product-icon col-1">
                        <img src="../../assets/img/home-page-product-next.png" alt="">
                    </div>
                </div>

            </div>
            <div class="session-posts">
                <div class="session-product-title">
                    <h3>Hoạt động của Honda</h3>
                </div>
                <div class="d-flex align-items-center mt-4">
                    <div class="session-product-icon">
                        <img src="../../assets/img/home-page-product-back.png" alt="">
                    </div>
                    <ul class="row" style="height: auto;">
                        <li class="col-4 session-posts-li">
                            <router-link to="/">
                                <div class="session-posts-img">
                                    <img src="	https://cdn.honda.com.vn/home-active-honda/December2019/1La5InbwRcqogdBxut05.png" alt="">
                                </div>
                                <div class="session-posts-title pt-2 pb-2">
                                    <span>Lái xe an toàn</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="col-4 session-posts-li">
                            <router-link to="/">
                                <div class="session-posts-img">
                                    <img src="	https://cdn.honda.com.vn/home-active-honda/December2019/1La5InbwRcqogdBxut05.png" alt="">
                                </div>
                                <div class="session-posts-title pt-2 pb-2">
                                    <span>Lái xe an toàn</span>
                                </div>
                            </router-link>
                        </li>
                        <li class="col-4 session-posts-li">
                            <router-link to="/">
                                <div class="session-posts-img">
                                    <img src="	https://cdn.honda.com.vn/home-active-honda/December2019/1La5InbwRcqogdBxut05.png" alt="">
                                </div>
                                <div class="session-posts-title pt-2 pb-2">
                                    <span>Lái xe an toàn</span>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                    <div class="session-product-icon">
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
                            <router-link to="/postdetail" class="col-6 session-news-right">
                                <div class="session-news-right-img">
                                    <img src="https://cdn.honda.com.vn/news-motorbike/April2023/6vPtfIOsbNi25Km726ot.jpg" alt="">
                                </div>
                                <div class="session-news-right-infor">
                                    <p>01/05/2023</p>
                                    <h5>HỖ TRỢ PHÍ ĐĂNG KÝ XE WINNER X CÙNG CHƯƠNG TRÌNH KHUYẾN MẠI  “ƯU ĐÃI BỨT PHÁ – VUI LÁI THẢ GA”</h5>
                                </div>
                                <p class="session-news-right-read-more">Xem thêm ></p>
                            </router-link>
                            <router-link to="/postdetail" class="col-6 session-news-right">
                                <div class="session-news-right-img">
                                    <img src="https://cdn.honda.com.vn/news-motorbike/April2023/6vPtfIOsbNi25Km726ot.jpg" alt="">
                                </div>
                                <div class="session-news-right-infor">
                                    <p>01/05/2023</p>
                                    <h5>HỖ TRỢ PHÍ ĐĂNG KÝ XE WINNER X CÙNG CHƯƠNG TRÌNH KHUYẾN MẠI  “ƯU ĐÃI BỨT PHÁ – VUI LÁI THẢ GA”</h5>
                                </div>
                                <p class="session-news-right-read-more">Xem thêm ></p>
                            </router-link>
                            <router-link to="/postdetail" class="col-6 session-news-right">
                                <div class="session-news-right-img">
                                    <img src="https://cdn.honda.com.vn/news-motorbike/April2023/6vPtfIOsbNi25Km726ot.jpg" alt="">
                                </div>
                                <div class="session-news-right-infor">
                                    <p>01/05/2023</p>
                                    <h5>HỖ TRỢ PHÍ ĐĂNG KÝ XE WINNER X CÙNG CHƯƠNG TRÌNH KHUYẾN MẠI  “ƯU ĐÃI BỨT PHÁ – VUI LÁI THẢ GA”</h5>
                                </div>
                                <p class="session-news-right-read-more">Xem thêm ></p>
                            </router-link>
                            <router-link to="/postdetail" class="col-6 session-news-right">
                                <div class="session-news-right-img">
                                    <img src="https://cdn.honda.com.vn/news-motorbike/April2023/6vPtfIOsbNi25Km726ot.jpg" alt="">
                                </div>
                                <div class="session-news-right-infor">
                                    <p>01/05/2023</p>
                                    <h5>HỖ TRỢ PHÍ ĐĂNG KÝ XE WINNER X CÙNG CHƯƠNG TRÌNH KHUYẾN MẠI  “ƯU ĐÃI BỨT PHÁ – VUI LÁI THẢ GA”</h5>
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
import productService from '../../services/product.service';
export default {
    data() {
        return {
            products: {},
        }
    },
    methods: {
        async getProducts() {
            this.products = await productService.getAll()
            // console.log(this.products)
            
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
    },
    mounted() {
        this.getProducts()
    }
}
</script>
<style scoped>
@import url(../../assets/client/home.css);
</style>