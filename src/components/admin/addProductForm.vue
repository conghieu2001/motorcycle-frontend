<template>
    <div class="list-addproduct-wapper">
        <div class="list-addproduct-title"><span>Thêm sản phẩm</span></div>
        <div class="list-addproduct-form">
            <div class="p-4">
                <div class="label-form">
                    <h4>Form nhập sản phẩm</h4>
                </div>
                <form action="" class="pt-4" @submit.prevent.stop="createProduct">
                    <div class="d-flex justify-content-between ps-4 pe-4">
                        <div class="d-grid">
                            <label for="">Tên sản phẩm <span class="span-requied">*</span></label>
                            <input class="input-product" v-model="products.name" required  type="text"
                                placeholder="Nhập tên sản phẩm">
                        </div>
                        <div class="d-grid">
                            <label for="">Ảnh sản phẩm<span class="span-requied">*</span></label>
                            <input type="file" @change="handleFileAddProduct" required>
                        </div>
                        <div class="d-grid">
                            <label for="">Màu sắc<span class="span-requied">*</span></label>
                            <input class="input-product" v-model="products.color" required type="text" name="" id=""
                                placeholder="Màu sắc">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pt-5 ps-4 pe-4">
                        <div>
                            <div class="d-flex">
                                <label for="">Thương hiệu<span class="span-requied">*</span></label>
                                <div class="add-brand" @click="isAddBrand = true">Thêm thương hiệu</div>
                            </div>
                            <select class="choose-brand mt-1" name="" id="" v-model="products.brandId" required>
                                <option value="" selected>Chọn thương hiệu</option>
                                <option v-for="brand in brands" :key="brand._id" :value="brand._id">{{ brand.name }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <div class="d-flex">
                                <label for="">Loại xe<span class="span-requied">*</span></label>
                                <div class="add-category" @click="isAddCategory = true">Thêm loại xe</div>
                            </div>
                            <select class="choose-category mt-1" name="" id="" v-model="products.categoryId" required>
                                <option value="" selected>Chọn loại xe</option>
                                <option v-for="category in categories" :key="category._id" :value="category._id">{{
                                    category.name }}</option>
                            </select>
                        </div>
                        <div class="d-grid">
                            <label for="">Giá bán<span class="span-requied">*</span></label>
                            <input class="input-product" type="text" v-model="products.salePrice" required
                                placeholder="Nhập giá bán">
                        </div>
                    </div>
                    <div class="d-flex justify-content-between p-4">
                        <div class="d-flex">
                            <div class="d-grid">
                                <label for="">Thông số kĩ thuật <span class="span-requied">*</span></label>
                                <div class="custom-btn btn-3 mb-5" @click="isAddSpec=true"><span>Thêm</span></div>
                            </div>
                            <div class="d-grid">
                                <label for="">Thời gian bảo hành<span class="span-requied">*</span></label>
                                <select class="select-baohanh" name="" id="" v-model="products.warrantyTime" required>
                                    <option value="" selected>.. tháng</option>
                                    <option :value="12" >12 tháng</option>
                                    <option :value="24" >24 tháng</option>
                                    <option :value="36" >36 tháng</option>
                                </select>
                            </div>
                        </div>
                        <div class="d-grid description-input">
                            <label for="">Mô tả</label>
                            <textarea class="mb-4" rows="3" cols="75" v-model="products.description"
                                placeholder="Thêm mô tả về sản phẩm"></textarea>
                        </div>
                    </div>
                    <div class="overlay" v-if="isAddSpec">
            <div class="form-addSpec">
                <div action="" >
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Form thông số kỹ thuật</h4>
                        <div class="addSpec-close" @click="closeAddSpec">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Khối lượng bản thân</label>
                                <input type="text" class="set-left-input" v-model="products.specs.klbt"  placeholder="Nhập khối lượng">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Dài x Rộng x Cao</label>
                                <input type="text" class="set-right-input" v-model="products.specs.drc" placeholder="Nhập D R C">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Khoảng cách trục bánh xe</label>
                                <input type="text" class="set-left-input" v-model="products.specs.kctbx" placeholder="Nhập khoảng cách">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Độ cao yên</label>
                                <input type="text" class="set-right-input" v-model="products.specs.dcy" placeholder="Nhập độ cao yên">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Khoảng sáng gầm xe</label>
                                <input type="text" class="set-left-input" v-model="products.specs.ksgx" placeholder="Nhập khoảng sáng gầm xe">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Dung tích bình xăng</label>
                                <input type="text" class="set-right-input" v-model="products.specs.dtbx" placeholder="Nhập dung tích">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Kích cỡ lớp trước/ sau</label>
                                <input type="text" class="set-left-input" v-model="products.specs.kclt" placeholder="Nhập kích cỡ">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Phuộc trước</label>
                                <input type="text" class="set-right-input" v-model="products.specs.pt" placeholder="Nhập phuộc trước">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Phuộc sau</label>
                                <input type="text" class="set-left-input" v-model="products.specs.ps" placeholder="Nhập phuộc sau">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Loại động cơ</label>
                                <input type="text" class="set-right-input" v-model="products.specs.ldc" placeholder="Nhập loại động cơ">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Công suất tối đa</label>
                                <input type="text" class="set-left-input" v-model="products.specs.cstd" placeholder="Nhập công suất tối đa">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Dung tích nhớt máy</label>
                                <input type="text" class="set-right-input" v-model="products.specs.dtnm" placeholder="Nhập dung tích nhớt">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Mức tiêu thụ nhiên liệu</label>
                                <input type="text" class="set-left-input" v-model="products.specs.mttnl" placeholder="Nhập mức tiêu thụ nhiên liệu">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Loại truyền động</label>
                                <input type="text" class="set-right-input" v-model="products.specs.ltd" placeholder="Nhập loại truyền động">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Hệ thống khởi động</label>
                                <input type="text" class="set-left-input" v-model="products.specs.htkd" placeholder="Nhập hệ thống khởi động">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Moment cực đại</label>
                                <input type="text" class="set-right-input" v-model="products.specs.mcd" placeholder="Nhập moment cực đại">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-6 style-input">
                                <label for="">Dung tích xy-lanh</label>
                                <input type="text" class="set-left-input" v-model="products.specs.dtxl" placeholder="Nhập dung tích xy lanh">
                            </div>
                            <div class="col-6 style-input">
                                <label for="">Tỷ số nén</label>
                                <input type="text" class="set-right-input" v-model="products.specs.tsn" placeholder="Nhập tỷ số nén">
                            </div>
                        </div>
                        <div class="row m-3 set-height">
                            <div class="col-7 style-input-final">
                                <label for="">Đường kính x Hành trình pít tông</label>
                                <input type="text" class="ms-3" v-model="products.specs.dkhtpt" placeholder="Nhập đường kính">
                            </div>
                            <div class="col-5">
                                <button class="submit-add-spec" @click="clickNext">Tiếp tục</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    <button type="submit" class="custom-btn btn-12"><span>Tạo!</span><span>Tiếp tục</span></button>
                </form>
            </div>
        </div>
        <div class="overlay" v-if="isAddBrand">
            <div class="form-addbrand">
                <form action="" @submit.prevent.stop="createBrand">
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Form thêm thương hiệu</h4>
                        <div class="addbrand-close mb-1" @click="isAddBrand = false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
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
        <div class="overlay" v-if="isAddCategory">
            <div class="form-addCategory">
                <form action="" @submit.prevent.stop="createCategory">
                    <div class="d-flex justify-content-between align-items-center addbrand-title">
                        <h4>Form thêm loại xe</h4>
                        <div class="addbrand-close mb-1" @click="isAddCategory = false">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 352 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                            </svg>
                        </div>
                    </div>
                    <div class="p-3  d-grid name-category">
                        <label for="">Tên loại xe <span class="span-requied">*</span></label>
                        <input type="text" class="set-right-input" v-model="categoryName"  placeholder="Nhập tên loại xe">
                    </div>
                    <button class="submit-add-brand">Create</button>
                </form>
            </div>
        </div>
        
    </div>
</template>
<script>
import brandService from '../../services/brand.service'
import categoryService from '../../services/category.service'
import productService from '../../services/product.service'
export default {
    data() {
        return {
            isAddBrand: false,
            isAddCategory: false,
            isAddSpec: false,
            messageSuccess: '',
            messageFailure: '',
            addProductFail: '',
            brand: {
                name: '',
                logobrand: null
            },
            categoryName: '',
            brands: [],
            categories: [],
            products: {
                imgproduct: null,
                brandId: '',
                categoryId: '',
                name: '',
                description: '',
                salePrice: '',
                warrantyTime: '',
                specs: 
                    {
                        klbt: '',  
                        drc: '',  
                        kctbx: '',  
                        dcy: '',  
                        ksgx: '',  
                        dtbx: '', 
                        kclt: '', 
                        pt: '', 
                        ps: '', 
                        ldc: '', 
                        cstd: '', 
                        dtnm: '', 
                        mttnl: '', 
                        ltd: '', 
                        htkd: '', 
                        mcd: '', 
                        dtxl: '', 
                        tsn: '', 
                        dkhtpt: '', 
                    }
                
            }
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
                    this.getBrand()
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
        async createCategory() {
            try {
                const name = this.categoryName
                const response = await categoryService.create({ name })
                if (!response.data.status) {
                    this.messageSuccess = "";
                    this.messageFailure = response.data.mes;
                    this.categoryName = ''
                    alert(this.messageFailure)
                } else {
                    this.messageSuccess = response.data.mes;
                    this.messageFailure = "";
                    this.categoryName = ''
                    alert(this.messageSuccess)
                    this.getCategory()
                    this.isAddCategory = false
                }
            } catch (error) {
                console.log(error)
            }
        },
        async getBrand() {
            this.brands = await brandService.getAll()
            // console.log(this.brands[0].data)
        },
        async getCategory() {
            this.categories = await categoryService.getAll()
            // console.log(this.categories)
        },
        handleFileAddProduct(event) {
            this.products.imgproduct = event.target.files[0] || '';
            // console.log(this.logobrand)
        },
        
        async createProduct() {
            try {
                // console.log(this.products)
                const response = await productService.create(this.products)
                if (response.data.status) {
                    alert(response.data.mes)
                    this.products = {
                        imgproduct: '',
                        brandId: '',
                        categoryId: '',
                        name: '',
                        description: '',
                        salePrice: '',
                        specs: [
                            {
                                klbt: '',  
                                drc: '',  
                                kctbx: '',  
                                dcy: '',  
                                ksgx: '',  
                                dtbx: '', 
                                kclt: '', 
                                pt: '', 
                                ps: '', 
                                ldc: '', 
                                cstd: '', 
                                dtnm: '', 
                                mttnl: '', 
                                ltd: '', 
                                htkd: '', 
                                mcd: '', 
                                dtxl: '', 
                                tsn: '', 
                                dkhtpt: '', 
                            }
                        ]
                    }
                    
                } else {
                    this.addProductFail = response.data.mes
                    alert(this.addProductFail)
                }
            } catch (error) {
                console.log(error)
            }
        },
        clickNext() {
            this.isAddSpec = false
        },
        closeAddSpec() {
            this.products.specs =  [
                            {
                                klbt: '',  
                                drc: '',  
                                kctbx: '',  
                                dcy: '',  
                                ksgx: '',  
                                dtbx: '', 
                                kclt: '', 
                                pt: '', 
                                ps: '', 
                                ldc: '', 
                                cstd: '', 
                                dtnm: '', 
                                mttnl: '', 
                                ltd: '', 
                                htkd: '', 
                                mcd: '', 
                                dtxl: '', 
                                tsn: '', 
                                dkhtpt: '', 
                            }
                        ]
            this.isAddSpec = false
        },
    },
    mounted() {
        this.getBrand()
        this.getCategory()
    }
}
</script>
<style scoped>@import url(../../assets/adminAddProduct.css);</style>