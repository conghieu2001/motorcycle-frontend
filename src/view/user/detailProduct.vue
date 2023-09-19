<template>
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
                    <button class="custom-btn7 btn-7"><span>Thêm vào giỏ hàng</span></button>
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
    </div>
</template>
<script>
import productService from '../../services/product.service';
export default {
    data() {
        return {
            product: {}
        }
    },
    methods: {
        async getProductById() {
            const response = await productService.getById(this.$route.params.id)
            this.product = response.result
            console.log(this.product.specs[0].klbt)
        },
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        }
    },
    mounted() {
        this.getProductById()
    }
}
</script>
<style scoped>
@import url(../../assets/client/detaiproduct.css);
</style>