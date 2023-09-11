<template>
    <div class="list-addinputproduct-wapper">
        <div class="list-addproduct-title"><span>Danh sách phiếu nhập hàng</span></div>
        <div class="ms-3 add-inputproduct-form" @click="isformAddOrder = true">
            <svg class="ms-1" xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
            </svg>
            <span>Thêm phiếu đặt hàng</span>
        </div>
        <div class="list-product-table mt-3">
            <table class="table table-striped">
                <thead class="table-info">
                    <tr>
                        <th class="table-input-stt" scope="col">STT</th>
                        <th class="table-input-name" scope="col">Tên sản phẩm</th>
                        <th class="" scope="col">Màu</th>
                        <!-- <th scope="col">Sl Nhập</th>
                        <th scope="col">Giá nhập</th> -->
                        <th class="table-input-thd" scope="col">Tổng hóa đơn</th>
                        <th class="table-input-date" scope="col">Ngày tạo</th>
                        <th class="table-options" scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(inputPro, index) in inputProducts" :key="inputPro._id">
                        <th class="table-input-stt">{{ index + 1 }}</th>
                        <td class="table-input-name"><div v-for="arr in inputPro.array" :key="arr">{{ arr.productName }}</div></td>
                        <td ><div v-for="arr in inputPro.array" :key="arr">{{ arr.productColor }}</div></td>
                        <!-- <td ><div v-for="arr in inputPro.array" :key="arr">{{ arr.inputQuantity }}</div></td>
                        <td ><div v-for="arr in inputPro.array" :key="arr">{{ arr.inputQuantity }}</div></td> -->
                        <td class="table-input-thd">{{ formatCurrency(inputPro.tonghd) }}</td>
                        <td class="table-input-date">{{ formatDateNoTime(inputPro.createdAt) }}</td>
                        <td >
                            <div class="d-flex justify-content-center">
                                <div class="icon-seen" @click="getByIdInputProduct(inputPro._id)">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="ms-3 icon-edit">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
            <div class="pos-nagination">
                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(1)">&laquo;</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item" v-for="index in lengthPage" :key="index">
                        <span class="page-link" :class="{ active_page: activePage === index }" @click="handlePage(index)">{{
                            index }}</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link">...</span>
                    </li>
                    <li class="page-item">
                        <span class="page-link" @click="handlePage(lengthPage)">&raquo;</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="overlay" v-if="isformAddOrder">
            <div class="list-addinputproduct-form">
                <div class="p-4">
                    <div class="label-form-inputproduct d-flex justify-content-between">
                        <h4>Form phiếu nhập hàng</h4>
                        <svg @click="isformAddOrder = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                    <form action="" class="" @submit.prevent.stop="createInputProduct">
                        <div class="row m-4 mb-0 h-50">
                            <div class="col-4">
                                <label for="">Hãng</label>
                                <select class="choose-category mt-1" name="" id="" v-model="brandId" required>
                                    <option value="" selected>Chọn hãng</option>
                                    <option v-for="brand in brands" :key="brand._id" :value="brand._id"> {{ brand.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div v-for="(div) in divs" :key="div">
                            <div class="row border-row-product m-4 mb-2">
                                <div class="col-4 d-grid">
                                    <label for="">Tên</label>
                                    <select class="choose-brand" v-model="div.productId" required>
                                        <option value="" selected>Chọn xe</option>
                                        <option v-for="product in products" :key="product._id" :value="product._id">{{
                                            product.name }} - {{ product.color }}</option>
                                    </select>
                                </div>
                                <div class="col-4 d-grid">
                                    <label for="">Giá nhập</label>
                                    <input class="input-product" v-model="div.inputPrice" type="number" placeholder="vnđ"
                                        required>
                                </div>
                                <div class="col-4 d-grid">
                                    <label for="">Số lượng nhập</label>
                                    <input class="input-product" v-model="div.inputQuantity" required type="number"
                                        placeholder="..." name="" id="">
                                </div>
                            </div>
                        </div>
                        <div class="button-add-order">
                            <svg v-on:click="addDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                            <svg  v-on:click="removeDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>
                        </div>
                        <div class="d-flex justify-content-end pe-4 pt-4">
                            <!-- <div>Tổng tiền = {{ THD }}
                            </div> -->
                            <button type="submit" class="custom-btn btn-12"><span>Tạo!</span><span>Tiếp tục</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isScreenDetail">
            <div class="detail-inputproduct-wapper">
                <div class="infor-bussiness-inputproduct d-flex justify-content-between">
                    <div>
                        <h4>{{ bussiness.name }}</h4>
                        <p>Địa chỉ: {{ bussiness.address }}</p>
                        <p>Điện thoại: {{ bussiness.phoneNumber }}</p>
                    </div>
                    <div class="me-3">
                        <svg @click="isScreenDetail = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                </div>
                <div class="detail-inforproduct-content">
                    <h4>Chi tiết phiếu nhập</h4>
                    <div class="table-detail-inputproduct">
                        <table class="table ">
                            <thead class="table-info">
                                <tr>
                                    <th class="table-name" scope="col">Tên sản phẩm</th>
                                    <th class="table-color" scope="col">Màu</th>
                                    <th scope="col">Sl Nhập</th>
                                    <th scope="col">Giá nhập</th>
                                    <th scope="col">Thành tiền</th>
                                    <th scope="col">Thời gian tạo</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td ><div v-for="arr in inputproductById.array" :key="arr"><span>{{ arr.productName }}</span></div></td>
                                    <td ><div v-for="arr in inputproductById.array" :key="arr"><span>{{ arr.productColor }}</span></div></td>
                                    <td ><div v-for="arr in inputproductById.array" :key="arr"><span>{{ arr.inputQuantity }}</span></div></td>
                                    <td ><div v-for="arr in inputproductById.array" :key="arr"><span>{{ formatCurrency(arr.inputPrice) }}</span></div></td>
                                    <td ><div v-for="arr in inputproductById.array" :key="arr"><span>{{ formatCurrency(arr.inputPrice * arr.inputQuantity) }}</span></div></td>
                                    <td >{{ formatDate(inputproductById.createdAt) }}</td>
                                </tr>

                            </tbody>
                        </table>
                        <div class="ps-2">
                            <span>Tổng hóa đơn: </span>{{ formatCurrency(inputproductById.tonghd) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import productService from '../../services/product.service';
import inputProductService from '../../services/inputProduct.service'
import bussinessService from '../../services/bussiness.service';
import brandService from '../../services/brand.service';
export default {
    data() {
        return {
            isformAddOrder: false,
            isScreenDetail: false,
            products: {},
            // inputProduct:
            // {
            //     productId: '',
            //     inputPrice: '',
            //     inputQuantity: '',
            //     THD: ''
            // },
            lengthPage: 1,
            activePage: 1,
            inputProducts: {},
            bussiness: {},
            inputproductById: {},
            brandId: '',
            divs: [{
                productId: '',
                inputPrice: '',
                inputQuantity: '',
            },],
            brands: {},
        }
    },
    methods: {

        addDiv() {
            this.divs.push({});
            // this.isPop = true
        },
        removeDiv() {
            if(this.divs.length > 1) {
                this.divs.pop();
            }
            // this.divs.pop();
        },
        async getProducts() {
            this.products = await productService.getAll()
            // console.log(this.products)
        },
        async createInputProduct() {
            const data = {
                arrayProduct: this.divs,
                brandId: this.brandId
            }
            const response = await inputProductService.create(data)
            if (!response.data.status) {
                alert(response.data.mes)
            } else {
                alert(response.data.mes)
                this.isformAddOrder = false
                this.brandId = ''
                this.divs = [{
                    productId: '',
                    inputPrice: '',
                    inputQuantity: '',
                }],
                this.getInputProduct()
            }
        },
        handlePage(index) {
            this.activePage = index
            this.getInputProduct(index)
            // console.log(this.activePage)
        },
        async getInputProduct(pageNumber = 1) {
            try {
                const length = await inputProductService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 10)
                // console.log(this.lengthPage)
                const response = await inputProductService.getAll(pageNumber, 10)
                this.inputProducts = response.data
                // console.log(this.inputProducts[0].array[0].productName)
            } catch (error) {
                console.log(error);
            }
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async getBussiness() {
            this.bussiness = await bussinessService.getAll()
        },
        async getByIdInputProduct(id) {

            const response = await inputProductService.findById({ id })
            this.inputproductById = response.data.result
            this.isScreenDetail = true
            // console.log(this.inputproductById)
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },

        formatDate(dateString, config = { dateStyle: 'medium', timeStyle: 'short' }) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', config).format(date);
        },
        async getBrands() {
            this.brands = await brandService.getAll()
        }
    },
    mounted() {
        this.getProducts()
        this.getInputProduct()
        this.getBussiness()
        this.getBrands()
    }
}
</script>
<style scoped>@import url(../../assets/adminAddProduct.css);
</style>