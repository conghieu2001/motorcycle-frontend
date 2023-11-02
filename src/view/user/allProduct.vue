<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <body class="page-user-product-wapper">
        <div class="d-flex justify-content-center page-product-baner">
            <ProductCategory
                @select:all="getAllProduct"
                @select:categoryId="getByCategory"
            >

            </ProductCategory>
            <div class="baner-motocyle ms-5">
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../assets/img/baner-xe-dap-dien-1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/img/baner-xe-dap-dien-2.jpg" class="d-block w-100" alt="...">
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
        </div>
        <div class="d-flex ps-4 pe-4">
            <div class="col-3 handle-icon d-flex">
                <img src="../../assets/img/icon-cart.png" alt="">
                <div class="ps-3">
                    <p>Shop uy tín</p>
                    <p>15 năm kinh nghiệm</p>
                </div>
            </div>
            <div class="col-3 handle-icon d-flex">
                <img src="../../assets/img/icon-hoantien.png" alt="">
                <div class="ps-3">
                    <p>Hoàn tiền</p>
                    <p>Đổi trả trong 3 ngày</p>
                </div>
            </div>
            <div class="col-3 handle-icon d-flex">
                <img src="../../assets/img/icon-freeship.png" alt="">
                <div class="ps-3">
                    <p>Freeship</p>
                    <p>Giao hàng miễn phí</p>
                </div>
            </div>
            <div class="col-3 handle-icon d-flex">
                <img src="../../assets/img/icon-chinhhang.png" alt="">
                <div class="ps-3">
                    <p>Chính hãng</p>
                    <p>Cam kết 100%</p>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <div class="row ms-1" style="height: auto;">
                <div class="col-3 card-product" v-for="product in products" :key="product._id">
                    <router-link :to="'/allproduct/' + product._id">
                        <img :src="'http://localhost:3000' + product.image" alt="">
                        <div class="infor-product">
                            <p class="infor-product-name">{{ product.name }}</p>
                            <p class="infor-product-price">{{ formatCurrency(product.salePrice) }}</p>
                        </div>
                        <div class="check-quantity" v-if="product.inputQuantity == 0">
                           
                        </div>
                        <span class="check-quantity-button" v-if="product.inputQuantity == 0">
                            Hết hàng
                           </span>
                    </router-link>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
import categoryService from '../../services/category.service';
import productService from "../../services/product.service";
import ProductCategory from '../../components/user/productCategory.vue'
export default {
    components: {
        ProductCategory
    },
    data () {
        return {
            products: {},
            proByCate: {},
        }
    },
    methods: {
        async getAllProduct() {
            this.products = await productService.getAll()
        },
        async getByCategory (name) {
            const getIdCa = await categoryService.findByName({name})
            const categoryId = getIdCa.data.result._id
            this.proByCate = await productService.getByCategoryId({categoryId})
            this.products = this.proByCate.data
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        checkQuantity(index) {
            // console.log(index)
            if(index.length <= 0) {
                return false
            } else {
                return true
            }
        }
    },
    mounted() {
        this.getAllProduct()
    }
}
</script>

<style scoped>@import url(../../assets/client/product.css);
.card-product {
    position: relative;
}
.check-quantity {
    /* content: "Hết hàng"; */
    position: absolute;
    left: 22%;
    top: 10%;
    text-align: center;
    width: 156px;
    height: 156px;
    border-radius: 50%;
    opacity: .3;
    background-color: #c00;
    z-index: 1;
}
.check-quantity-button {
    position: absolute;
    background-color: #c00;
    width: 156px;
    height: 40px;
    color: #fff;
    top: 26%;
    left: 49%;
    transform: translateX(-50%);
    bottom: 50px;
    /* opacity: 0; */
    border-radius: 30px;
    text-align: center;
    padding-top: 5px;
}
</style>