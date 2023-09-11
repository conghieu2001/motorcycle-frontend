<template>
    <div class="inforbussiness-wapper">
        <div class="inforbussiness-title">
            <span>Thông tin doanh nghiệp</span>
        </div>
        <div class="inforbussness-form">
            <div class="form-inforbussiness-title p-4 pb-2 d-flex justify-content-between">
                <h4>Thông tin sử dụng</h4>
                <div class="">
                    <button @click="isEditForm=true" class="custom-btn11 btn-11"><svg class="mb-1 me-1 set-color" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"/></svg>Chỉnh sửa<div class="dot"></div></button>
                </div>
            </div>
            <div class="ps-5 pt-4 pe-5 pb-4">
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Tên doanh nghiệp:</h6>
                    <span class="col-7">{{ bussiness.name }}</span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Tên doanh nghiệp viết tắt:</h6>
                    <span class="col-7"></span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Tên doanh nghiệp viết tắt phần 1:</h6>
                    <span class="col-7"></span>
                </div >
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Tên doanh nghiệp viết tắt phần 2:</h6>
                    <span class="col-7"></span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Địa chỉ:</h6>
                    <span class="col-7">{{ bussiness.address }}</span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Địa chỉ viết tắt:</h6>
                    <span class="col-7"></span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Số điện thoại:</h6>
                    <span class="col-7">{{ bussiness.phoneNumber }}</span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Email:</h6>
                    <span class="col-7">{{ bussiness.email }}</span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Mã số thuế:</h6>
                    <span class="col-7">{{ bussiness.mst }}</span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Tên ngân hàng:</h6>
                    <span class="col-7"></span>
                </div>
                <div class="row infor-bussiness-row">
                    <h6 class="col-5">Người đại diện:</h6>
                    <span class="col-7">{{ bussiness.ndd }}</span>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isEditForm">
            <div class="form-edit-inforbussiness">
                <div class="edit-inforbussiness-title d-flex justify-content-between">
                    <h4>Form chỉnh sửa</h4>
                    <div class="" @click="closeFormEditBussiness">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </div>
                </div>
                <form action="" class="p-3" @submit.prevent.stop="updateInforBussiness">
                    <div class="row">
                        <label class="col-5 title-logo" for="">Logo:</label>
                        <div class="col-7 form-edit-bussiness-img">
                            <div >
                                <img :src="'http://localhost:3000' + bussiness.logo"  alt="">
                            </div>
                            <input type="file" @change="handleFileEditBussiness">
                        </div>
                    </div>
                    <div class="row form-edit-bussiness-input m-3 mt-4">
                        <label class="col-5" for="">Tên doanh nghiệp:</label>
                        <input class="col-7" v-model="bussiness.name" type="text" placeholder="Nhập tên doanh nghiệp">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Tên doanh nghiệp viết tắt:</label>
                        <input class="col-7" v-model="bussiness.nameVT" type="text" placeholder="Nhập tên doanh nghiệp viết tắt">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Tên doanh nghiệp viết tắt phần 1:</label>
                        <input class="col-7" v-model="bussiness.nameVTP1" type="text" placeholder="Nhập tên doanh nghiệp viết tắt phần 1">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Tên doanh nghiệp viết tắt phần 2:</label>
                        <input class="col-7" v-model="bussiness.nameVTP2" type="text" placeholder="Nhập tên doanh nghiệp viết tắt phần 2">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Địa chỉ:</label>
                        <input class="col-7" v-model="bussiness.address" type="text" placeholder="Nhập địa chỉ">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Địa chỉ viết tắt:</label>
                        <input class="col-7" v-model="bussiness.addressVT" type="text" placeholder="Nhập địa chỉ viết tắt">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Số điện thoại:</label>
                        <input class="col-7" v-model="bussiness.phoneNumber" type="text" placeholder="Nhập số điện thoại">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Email:</label>
                        <input class="col-7" v-model="bussiness.email" type="email" placeholder="Nhập email">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Mã số thuế:</label>
                        <input class="col-7" v-model="bussiness.mst" type="text" placeholder="Nhập mã số thuế">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Tên ngân hàng:</label>
                        <input class="col-7" v-model="bussiness.nameBank" type="text" placeholder="Nhập tên ngân hàng">
                    </div>
                    <div class="row form-edit-bussiness-input m-3">
                        <label class="col-5" for="">Người đại diện:</label>
                        <input class="col-7" v-model="bussiness.ndd" type="text" placeholder="Nhập tên người đại diện">
                    </div>
                   <div class="pb-4">
                        <button type="submit" class="custom-btn btn-1">Lưu</button>
                   </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import bussinessService from "../../services/bussiness.service";
export default { 
    data() {
        return {
            bussiness: {
                imagebussiness: null
            },
            isEditForm: false,
            inforBussiness: {
                imagebussiness: null,
                name: '',
                nameVT: '',
                nameVTP1: '',
                nameVTP2: '',
                address: '',
                addressVT: '',
                phoneNumber: '',
                email: '',
                mst: '',
                nameBank: '',
                ndd: ''
            }
        }
    },
    methods: {
        async getBussiness() {
            this.bussiness = await bussinessService.getAll();
            console.log(this.bussiness)
        },
        async updateInforBussiness() {
            // console.log(this.inforBussiness)
            const respone = await bussinessService.update(this.bussiness)
            if(!respone.data.status) {
                alert(respone.data.mes)
            } 
            else {
                alert(respone.data.mes)
            }
        },
        handleFileEditBussiness(event) {
            this.bussiness.imagebussiness = event.target.files[0] || '';
            // console.log(this.inforBussiness.imagebussiness)
        },
        closeFormEditBussiness() {
            this.isEditForm = false
        }
    },
    mounted() {
        this.getBussiness()
    }
}
</script>

<style scoped>
@import url(../../assets/inforBussiness.css);
</style>