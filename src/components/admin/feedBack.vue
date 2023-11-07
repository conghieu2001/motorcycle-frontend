<template>
    <div class="feedback-wrapper">
        <div class="order-page-title">
            <h4>Nhận xét & đánh giá của khách hàng</h4>
        </div>
        <div class="feedback-table">
            <div class="feedback-table-head row">
                <div class="col-1">
                    STT
                </div>
                <div class="col-3">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Tên sản phẩm</div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="sortedProductName(1)">Từ A - Z</li>
                        <li class="p-2 sortName" @click="sortedProductName(2)">Từ Z - A</li>
                        <li class="mb-2 mt-1"><input type="text" v-model="searchPro" @input="filteredProductName"
                                placeholder="Tìm kiếm"></li>
                    </ul>
                </div>
                <div class="col-3">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Tên khách hàng</div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="sortedCustomername(1)">Từ A - Z</li>
                        <li class="p-2 sortName" @click="sortedCustomername(2)">Từ Z - A</li>
                        <li class="mb-2 mt-1"><input type="text" v-model="searchCus" @input="filteredCustomername"
                                placeholder="Tìm kiếm"></li>
                    </ul>
                </div>
                <div class="col-3">
                    <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Nội dung đánh giá</div>
                    <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                        <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                        <li class="p-2 sortName" @click="sortedComment(1)">Từ A - Z</li>
                        <li class="p-2 sortName" @click="sortedComment(2)">Từ Z - A</li>
                        <li class="mb-2 mt-1"><input type="text" v-model="searchComment" @input="filteredComment"
                                placeholder="Tìm kiếm"></li>
                    </ul>
                </div>
                <div class="col-2 text-center">
                    Options
                </div>
            </div>
            <div class="feedback-table-body row" v-for="(fdb, index) in feedbacks" :key="index">
                <div class="col-1 pt-1 fw-bold">
                    {{ index + 1 }}
                </div>
                <div class="col-3 pt-1">
                    {{ fdb.item.productId.name }}
                </div>
                <div class="col-3 pt-1">
                    {{ fdb.userId.fullName }}
                </div>
                <div class="col-3 feedback-body-comment">
                    {{ fdb.comment }}
                </div>
                <div class="col-2 pt-1">
                    <div class="d-flex justify-content-center">
                        <div class="up-staff text-center" @click="gotoScreenDetail(fdb._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                                <path
                                    d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
                            </svg>
                        </div>
                        <div class="up-staff text-center ms-2" v-if="fdb.locked == false" @click="lockFeedback(fdb._id)">
                            <svg style="fill: green;" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>
                        </div>
                        <div class="up-staff text-center ms-2" v-if="fdb.locked == true" @click="unLockFeedback(fdb._id)">
                            <svg style="fill: #F6830F;" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
                        </div>
                        <div class="up-staff text-center ms-2"  @click="deleteFeedback(fdb._id)">
                            <svg style="fill: #c00;" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
            <div class="overlay" v-if="isScreen">
            <div class="screen-detail-order">
                <div class="d-flex justify-content-between screen-detaiorder-title">
                    <h5>Chi tiết đánh giá</h5>
                    <div class="d-flex me-3">
                        <svg @click="isScreen = false" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                            viewBox="0 0 512 512">
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                </div>
                <div class="addorder-page-content scroll-infor-order mt-2">
                    <div class="addorder-content-title d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                            <h6 class="me-2 mb-0">Số điểm: 
                            </h6>
                            <div class="feedback-by-product-star mb-1">
                                <svg v-for="str in feedbackById.star" :key="str" class="active_star" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                            </div>
                        </div>
                        <h6 class="me-4">Trạng thái: 
                            <span v-if="feedbackById.locked == true">Hiển thị</span>
                            <span v-else>Đã ẩn</span>
                        </h6>
                    </div>
                    <!-- <div class="addorder-content-title">
                        <h6>Hình thức thanh toán: <span>{{ orderById.methodPay }}</span></h6>
                    </div> -->
                    <form action="">
                        <div class="addorder-form-infor-customer">
                            <div class="form-infor-customer-title">Thông tin khách hàng</div>
                            <div class="row">
                                <div class="col-5 mt-5">
                                    <div class="form-infor-customer-input">
                                        <label for="">Họ & Tên<span class="span-requied">*</span></label>
                                        <input type="text" :value="feedbackById.userId.fullName" disabled>
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Số điện thoại<span class="span-requied">*</span></label>
                                        <input type="text" :value="feedbackById.userId.phoneNumber" disabled>
                                    </div>
                                    <div class="form-infor-customer-input">
                                        <label for="">Email</label>
                                        <input type="email" :value="feedbackById.userId.email" disabled>
                                    </div>
                                    <!-- <div class="form-infor-customer-input">
                                        <label for="">Địa chỉ</label>
                                        <input type="text"  disabled>
                                    </div> -->
                                </div>
                                <div class="col form-customer-note">
                                    <label for="">Nội dung đánh giá:</label>
                                    <textarea cols="80" v-model="feedbackById.comment" disabled></textarea>
                                </div>
                            </div>

                        </div>
                        
                        <div class="screen-detail-order-products">
                            <div class="row screen-detail-order-products-row">
                                <div class="col-1">
                                    STT
                                </div>
                                <div class="col-4">
                                    ID hóa đơn
                                </div>
                                <div class="col-4">
                                    Tên sản phẩm
                                </div>
                                <div class="col-3">
                                    Giá
                                </div>
                            </div>
                            <div class="row screen-detail-order-products-content-row"
                                >
                                <div class="col-1 fw-bold">
                                    1
                                </div>
                                <div class="col-4">
                                   {{ feedbackById.orderId }}
                                </div>
                                <div class="col-4">
                                {{ feedbackById.item.productId.name }}
                                </div>
                                <div class="col-3">
                                    {{ formatCurrency(feedbackById.item.productId.salePrice) }}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import feedbackService from '../../services/feedback.service'
// import productService from '../../services/product.service'
export default {
    data() {
        return {
            
            feedbacks: {},
            lengthPage: 1,
            activePage: 1,
            searchPro: '',
            searchCus: '',
            searchComment: '',
            isScreen: false,
            feedbackById: {}
        }
    },
    methods: {
        formatCurrency(price) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(price);
        },
        async getAllFeedback(pageNumber = 1) {
            try {
                const length = await feedbackService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length /6)
                // console.log(this.lengthPage)
                const response = await feedbackService.getAll(pageNumber,6)
                this.feedbacks = response.data
                // this.orders.reverse()
                // console.log(this.orders)
            } catch (error) {
                console.log(error);
            }
        },
        handlePage(index) {
            this.activePage = index
            this.getAllFeedback(index)
        },
        async lockFeedback(id) {
            const response = await feedbackService.locked({id})
            if(response.data.status == true) {
                alert(response.data.mes) 
                this.getAllFeedback()
            } else {
                alert(response.data.mes) 
            }
        },
        async unLockFeedback(id) {
            const response = await feedbackService.unLocked({id})
            if(response.data.status == true) {
                alert(response.data.mes) 
                this.getAllFeedback()
            } else {
                alert(response.data.mes) 
            }
        },
        async deleteFeedback(id) {
            // console.log(id)
            const response = await feedbackService.delete({id})
            alert(response.data.mes)
            this.getAllFeedback(1)
        },
        async filteredProductName() {
            if (!this.searchPro) return this.getAllFeedback(1);

            else {
                const regex = new RegExp(this.searchPro.trim(), 'i');
                await this.getAllFeedback(1)
                this.feedbacks = this.feedbacks.filter((receipt) =>
                    regex.test(receipt.item.productId.name)
                );
            }
        },
        sortedProductName(is) {
            if (is == 1) {
                return this.feedbacks.sort((a, b) => a.item.productId.name.localeCompare(b.item.productId.name));
            } else {
                return this.feedbacks.sort((a, b) => b.item.productId.name.localeCompare(a.item.productId.name));
            }
        },
        async filteredCustomername() {
            if (!this.searchCus) return this.getAllFeedback(1);

            else {
                const regex = new RegExp(this.searchCus.trim(), 'i');
                await this.getAllFeedback(1)
                this.feedbacks = this.feedbacks.filter((receipt) =>
                    regex.test(receipt.userId.fullName)
                );
            }
        },
        sortedCustomername(is) {
            if (is == 1) {
                return this.feedbacks.sort((a, b) => a.userId.fullName.localeCompare(b.userId.fullName));
            } else {
                return this.feedbacks.sort((a, b) => b.userId.fullName.localeCompare(a.userId.fullName));
            }
        },
        async filteredComment() {
            if (!this.searchComment) return this.getAllFeedback(1);

            else {
                const regex = new RegExp(this.searchComment.trim(), 'i');
                await this.getAllFeedback(1)
                this.feedbacks = this.feedbacks.filter((receipt) =>
                    regex.test(receipt.comment)
                );
            }
        },
        sortedComment(is) {
            if (is == 1) {
                return this.feedbacks.sort((a, b) => a.comment.localeCompare(b.comment));
            } else {
                return this.feedbacks.sort((a, b) => b.comment.localeCompare(a.comment));
            }
        },
        defaultSearch() {
            this.searchComment = ''
            this.searchCus = ''
            this.searchPro = ''
            this.getAllFeedback(1)
        },
        async gotoScreenDetail(id) {
            const response = await feedbackService.findById({id})
            this.feedbackById = response.data.result
            // console.log(this.feedbackById)
            this.isScreen = true
        }
    },
    mounted() {
        this.getAllFeedback()
    }
}
</script>
<style>
.feedback-table {
    padding: 20px 50px;
}
.feedback-table-head {
    height: 40px !important;
    background-color: #e2e3e5;
    align-items: center;
    font-weight: 600;
}
.feedback-table-body {
    border-bottom: 1px solid rgb(222, 222, 222);
    border-left: 1px solid rgb(222, 222, 222);
    border-right: 1px solid rgb(222, 222, 222);
    /* height: auto; */
    max-height: 50px;
    font-family: Arial, Helvetica, sans-serif;
    /* align-items: center; */
}
.feedback-table-body>div {
    /* padding: 10px; */
    margin-top: 5px;
    margin-bottom: 5px;
}
.feedback-body-comment {
    max-height: 50px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    -webkit-box-orient: vertical;
}
.active_star{
    fill: yellow;
}
</style>