<template>
    <div class="list-addproduct-wapper">
        <div class="list-addproduct-title"><span>Thêm phụ kiện</span></div>
        <div class="list-addproduct-form">
            <div class="p-4">
                <div class="label-form">
                    <h4>Form nhập phụ kiện</h4>
                </div>
                <form action="" class="pt-4" @submit.prevent.stop="createAcesstory">
                    <div class="d-flex justify-content-between ps-4 pe-4">
                        <div class="d-grid">
                            <label for="">Tên phụ kiện <span class="span-requied">*</span></label>
                            <input class="input-product" v-model="acesstory.name"  required  type="text"
                                placeholder="Nhập tên phụ kiện">
                        </div>
                        <div class="d-grid ms-5">
                            <label for="">Ảnh phụ kiện<span class="span-requied">*</span></label>
                            <input type="file" @change="handleFileAddAcess"  required>
                        </div>
                        <div class="d-grid">
                            <label for="">Giá bán<span class="span-requied">*</span></label>
                            <input class="input-product" type="number" v-model="acesstory.salePrice"  required
                                placeholder="Nhập giá bán">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pt-5 ps-4 pe-4">
                        <div>
                            <div class="d-flex">
                                <label for="">Thương hiệu<span class="span-requied">*</span></label>
                                <div class="add-brand" @click="isBrand=true">Thêm thương hiệu</div>
                            </div>
                            <select class="choose-brand mt-1" name="" id="" v-model="acesstory.brandId" required>
                                <option value="" selected>Chọn thương hiệu</option>
                                <option :value="brands._id" v-for="brand in brands " :key="brand._id"> {{ brand.name }}
                                </option>
                            </select>
                        </div>
                        <div class="">
                            <div class="d-flex">
                                <label for="">Thời gian bảo hành<span class="span-requied">*</span></label>
                            </div>
                            <select class="choose-category mt-1" name="" id="" v-model="acesstory.warrantyTime" required>
                                <option value="" selected>... tháng</option>
                                <option :value="12">12 tháng</option>
                                <option :value="24">24 tháng</option>
                                <option :value="36">36 tháng</option>
                            </select>
                        </div>
                        <div class="d-grid input-acess-phuhop">
                            <label for="">Phù hợp với dòng xe <span class="span-requied">*</span></label>
                            <div class="custom-btn btn-3 mb-5" @click="isAddMotos=true"><span>Chọn</span></div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between p-4">
                        <div class="d-grid description-input">
                            <label for="">Mô tả</label>
                            <textarea class="mb-4" rows="3" cols="120" v-model="acesstory.description"
                                placeholder="Thêm mô tả về phụ kiện"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="custom-btn btn-12"><span>Tạo!</span><span>Tiếp tục</span></button>
                </form>
            </div>
        </div>
        <div class="overlay" v-if="isBrand">
            <div class="form-addbrand">
                <form action="" @submit.prevent.stop="createBrand">
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Form thêm thương hiệu</h4>
                        <div class="addbrand-close mb-1" @click="isBrand=false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 352 512">
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                            </svg>
                        </div>
                    </div>
                    <div class="p-3 pb-0 d-grid name-brand">
                        <label for="">Tên thương hiệu <span class="span-requied">*</span></label>
                        <input type="text" v-model="brand.name" required placeholder="Nhập tên thương hiệu">
                    </div>
                    <div class="image-brand p-3">
                        <label for="">Logo thương hiệu</label>
                        <input type="file" @change="handleFileAddBrand">
                    </div>
                    <button class="submit-add-brand">Create</button>
                </form>
            </div>
        </div>
        <div class="overlay" v-if="isAddMotos">
            <div class="choose-motocycles">
                <div>
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Chọn sản phẩm phù hợp</h4>
                        <div class="addbrand-close mb-1" @click="closeAddMotos">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 352 512">
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                            </svg>
                        </div>
                    </div>
                    <div class="p-2" v-for="product in products" :key="product._id">
                        <input type="checkbox" name="motocycle" v-model="product.ischecked" >
                        <label class="ps-2" for="">{{ product.name }}</label>
                    </div>
                    <div class="custom-btn btn-1" @click="gotoAddMoto">Tiếp tục</div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import brandService from '../../services/brand.service'
import productService from '../../services/product.service'
import accessService from '../../services/acesstory.service'
export default {
    data() {
        return {
            isBrand: false,
            isAddMotos: false,
            brands: [],
            brand: {
                name: '',
                logobrand: null
            },
            messageSuccess: '',
            messageFailure: '',
            acesstory: {
                name: '',
                accessoryimg: null,
                salePrice: '',
                brandId: '',
                fitProductId: [],
                description: '',
                warrantyTime: ''
            },
            products:[],
            ischecked: false
        }
    },
    methods: {
        async createBrand() {
            try {
                const data = {
                    name: this.brand.name,
                    logobrand: this.logobrand
                }
                // console.log(data)
                const response = await brandService.create(data)
                if (!response.data.status) {
                    this.messageSuccess = "";
                    this.messageFailure = response.data.mes;
                    this.brand.name = ''
                    alert(this.messageFailure)
                } else {
                    this.messageSuccess = response.data.mes;
                    this.messageFailure = "";
                    this.brand.name = ''
                    alert(this.messageSuccess)
                    this.isAddBrand = false
                }
            } catch (error) {
                console.log(error)
            }
        },
        handleFileAddBrand(event) {
            this.logobrand = event.target.files[0] || '';
            // console.log(this.logobrand)
        },
        handleFileAddAcess(event) {
            this.acesstory.accessoryimg = event.target.files[0] || '';
            // console.log(this.logobrand)
        },
        async getBrands() {
            this.brands = await brandService.getAll()
        },
        async getProducts() {
            this.products = await productService.getAll()
            // console.log(this.products)
        },
        gotoAddMoto() {
            this.isAddMotos = false
        },
        closeAddMotos() {
            // this.acesstory.fitProductId = {}
            this.isAddMotos = false
        },
        async createAcesstory() {
            // console.log(this.acesstory)
            this.products.forEach(e => {
                if(e.ischecked == true) {
                    this.acesstory.fitProductId.push(e._id)
                }
            })
            // console.log(this.acesstory)
            const response = await accessService.create(this.acesstory)
            if(!response.data.status) {
                alert(response.data.mes)
            } else {
                alert(response.data.mes)
                this.acesstory= {
                    name: '',
                    accessoryimg: null,
                    salePrice: '',
                    brandId: '',
                    fitProductId: [],
                    description: '',
                    warrantyTime: ''
                }
            }
        },
        checkedAcess(ProId, event) {
            // console.log(ProId)
            if(event.target.checked) {
                // console.log('1')
                
                    this.acesstory.fitProductId.push(ProId)
                
                  
            } else {
                // console.log(typeof(this.acesstory.fitProductId))
                const result = this.acesstory.fitProductId.indexOf(ProId)
                console.log(result)
                this.acesstory.fitProductId = this.acesstory.fitProductId.splice(this.acesstory.fitProductId,result, 1)
                
            }
            console.log(this.acesstory.fitProductId)
            // return this.acesstory.fitProductId

        }
    },
    mounted() {
        this.getBrands()
        this.getProducts()
        
    }
}
</script>
<style scoped>@import url(../../assets/adminAddProduct.css);</style>