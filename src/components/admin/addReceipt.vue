<template>
    <div class="addreceipt-page-wrapper">
        <div class="list-addproduct-title"><span>Phiếu nhập hàng</span></div>
        <div class="addreceipt-page-form">
            <form action="" class="" @submit.prevent="createReceipt">
                <div class="row m-4 mb-0">
                    <div class="col-4">
                        <label for="">Nhà cung cấp <span @click="isFromaddProvider = true" class="provider-add"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em" height="0.8em"
                                    viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                    <path
                                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg></span></label>
                        <select class="choose-brand mt-1" name="" id="" v-model="dataCreateReceipt.providerId" required>
                            <option value="" selected>Chọn thương hiệu</option>
                            <option v-for="provider in providers" :key="provider._id" :value="provider._id">{{ provider.name
                            }}
                            </option>
                        </select>
                    </div>

                    <div class="col-4 d-grid">
                        <label for="">Ảnh phiếu nhập</label>
                        <input type="file" ref="fileInput" @change="handleFileAddInputOrder" required>
                    </div>
                    <div class="col-4 provider-img">
                        <img :src="this.showImg" alt="">
                    </div>
                </div>
                <div class="row h-50 m-4">
                    <div class="col d-grid">
                        <label for="">Ghi chú</label>
                        <textarea v-model="dataCreateReceipt.note" class="" rows="3" cols="10" type="email"
                            placeholder="Nhập nội dung ghi chú (nếu có)"></textarea>
                    </div>

                </div>
                <div v-for="(div) in dataCreateReceipt.ListProducts" :key="div">
                    <div class="row border-row-product m-4 mb-2">
                        <div class="col-2 d-grid">
                            <label for="">Loại</label>
                            <select class="addreceipt-form-choose" v-model="div.productType" required>
                                <option value="" selected>Chọn loại sp</option>
                                <option value="product">Xe</option>
                                <option value="accessory">Phụ kiện</option>
                            </select>
                        </div>
                        <div class="col-4 d-grid" v-if="div.productType == 'product'">
                            <label for="">Tên</label>
                            <select class="addreceipt-form-choose" v-model="div.productId" required>
                                <option value="" selected>Chọn xe</option>
                                <option v-for="product in products" :key="product._id" :value="product._id">{{ product.name
                                }}</option>
                            </select>
                        </div>
                        <div class="col-4 d-grid" v-else>
                            <label for="">Tên</label>
                            <select class="addreceipt-form-choose" v-model="div.productId" required>
                                <option value="" selected>Chọn phụ kiện</option>
                                <option v-for="acessory in accessories" :key="acessory._id" :value="acessory._id">{{
                                    acessory.name }}</option>
                            </select>
                        </div>
                        <div class="col-3 d-grid">
                            <label for="">Giá nhập</label>
                            <input class="addreceipt-form-input" type="number" v-model="div.inputPrice" placeholder="vnđ"
                                required>
                        </div>
                        <div class="col-3 d-grid">
                            <label for="">Số lượng nhập</label>
                            <input class="addreceipt-form-input" required type="number" v-model="div.inputQuantity"
                                placeholder="..." name="" id="">
                        </div>
                    </div>
                </div>

                <div class="button-add-order">
                    <svg @click="addDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <svg @click="removeDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
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
        <div class="overlay" v-if="isFromaddProvider">
                            <div class="form-addprovider">
                                <form action="" @submit.prevent.stop="addProvider">
                                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                                        <h4>Thêm nhà cung cấp mới</h4>
                                        <div class="mb-1" @click="closeFormAddProvider" style="cursor: pointer;">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                                <path
                                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Tên nhà cung cấp <span class="span-requied">*</span></label>
                                        <input type="text" v-model="providerCreate.name" required
                                            placeholder="Nhập tên nhà cung cấp">
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                        <input type="number" v-model="providerCreate.phoneNumber" required
                                            placeholder="Nhập sdt nhà cung cấp">
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Địa chỉ <span class="span-requied">*</span></label>
                                        <input type="text" v-model="providerCreate.address" required
                                            placeholder="Nhập địa chỉ nhà cung cấp">
                                    </div>
                                    <div class="p-3 pb-0 d-grid name-brand">
                                        <label for="">Email <span class="span-requied">*</span></label>
                                        <input type="email" v-model="providerCreate.email" required
                                            placeholder="Nhập email nhà cung cấp">
                                    </div>
                                    <button class="submit-add-brand">Create</button>
                                </form>
                            </div>
                        </div>
    </div>
</template>
<script>
import productService from '../../services/product.service';
import providerService from "../../services/provider.service";
import accessoryService from '../../services/acesstory.service'
import receiptService from '../../services/receipt.service';
export default {
    data() {
        return {
            providers: {},
            dataCreateReceipt: {
                providerId: '',
                inputorderImg: null,
                ListProducts: [{
                    productType: '',
                    productId: '',
                    inputPrice: '',
                    inputQuantity: ''
                }]
            },
            showImg: '',
            products: {},
            accessories: {},
            isFromaddProvider: false,
            providerCreate: {
                name: '',
                email: '',
                phoneNumber: '',
                address: '',
            },
        }
    },
    methods: {
        async getAllProviders() {
            this.providers = await providerService.getAll()
            // console.log(response)
        },
        handleFileAddInputOrder(event) {
            this.dataCreateReceipt.inputorderImg = event.target.files[0] || '';
            const src = URL.createObjectURL(this.dataCreateReceipt.inputorderImg)
            this.showImg = src
            // console.log(this.inputorderImg)
        },
        async getAllProducts() {
            const response = await productService.getPanigation()
            this.products = response.data
        },
        async getAllAccessory() {
            const response = await accessoryService.getAll()
            this.accessories = response.data
            // console.log(this.accessories)
        },
        async createReceipt() {
            // console.log(this.dataCreateReceipt)
            const response = await receiptService.create(this.dataCreateReceipt)
            if (response.data.status) {
                alert(response.data.mes)
                this.$refs.fileInput.value = null
                this.showImg = ''
                this.dataCreateReceipt = {
                    providerId: '',
                    
                    ListProducts: [{
                        productType: '',
                        productId: '',
                        inputPrice: '',
                        inputQuantity: '',
                        note: ''
                    }]
                }
            } else {
                alert(response.data.mes)
            }
            // console.log(response)
        },
        addDiv() {
            this.dataCreateReceipt.ListProducts.push({
                productType: '',
                productId: '',
                inputPrice: '',
                inputQuantity: '',

            });
            // this.isPop = true
        },
        removeDiv() {
            if (this.dataCreateReceipt.ListProducts.length > 1) {
                this.dataCreateReceipt.ListProducts.pop();
            }
            // this.divs.pop();
        },
        async addProvider() {
            try {
                const respone = await providerService.create(this.providerCreate)
                if (respone.data.status == true) {
                    alert(respone.data.mes)
                    this.isFromaddProvider = false
                    this.providerCreate = {
                        name: '',
                        email: '',
                        phoneNumber: '',
                        address: '',
                    }
                    this.getAllProviders()
                } else {
                    alert(respone.data.mes)
                }
            } catch (error) {
                console.log(error)
            }
        },
        closeFormAddProvider() {
            this.isFromaddProvider = false
            this.providerCreate = {
                name: '',
                email: '',
                phoneNumber: '',
                address: '',
            }
        },
    },
    mounted() {
        this.getAllProviders()
        this.getAllProducts()
        this.getAllAccessory()
    }
}
</script>
<style scoped>@import url(../../assets/addReceipt.css);</style>