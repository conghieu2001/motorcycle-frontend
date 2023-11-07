<template>
    <header>
        <div class="header-wapper">
            <div class="">
                <ul class="d-flex justify-content-end">
                    <li class="contact-page me-2 pt-3"><router-link to="/contact">Liên hệ</router-link></li>
                    <li class="recruitment-page me-3 pt-3"><router-link to="/recruiment">Tuyển dụng</router-link></li>
                    <li class="social-icons pt-1">
                        <div>
                            <a href="https://www.facebook.com/">
                                <img src="../../assets/img/icon-fb.png" alt="">
                            </a>
                            <a href="https://www.instagram.com/">
                                <img src="../../assets/img/icon-ins.png" alt="">
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src="../../assets/img/icon-yt.png" alt="">
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="user-header-logo">
                <router-link to="/">
                    <img :src="'http://localhost:3000/' + bussiness.logo" alt="Logo">
                </router-link>
            </div>
        </div>
        <nav class="header-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/introducemystore">Giới thiệu</router-link></li>
                <li><router-link to="/allproduct">Xe máy</router-link></li>
                <li><router-link to="/accessory">Phụ kiện</router-link></li>
                <!-- <li><router-link to="/">My Store</router-link></li> -->
                <li><router-link to="/news">Tin tức</router-link></li>
            </ul>
            <div class="header-icons">
                <!-- <InputSearch v-model="searchText" :products="filteredProducts"></InputSearch> -->
                
                <div class="user-search-wapper">
                    <div action="">
                        <div class="user-input-holder">
                            <input type="text" class="user-input-search" placeholder="Tìm sản phẩm" v-model="searchText"
                                @input="searchItem"  />
                            <button class="user-search-icon" type="submit" disabled>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>

                            </button>
                        </div>
                        <ul v-show="isHidden">
                            <li v-for="(product) in searchProAndAccess" :key="product._id">
                                 <router-link v-if="product.type == 'product'" @click="clearSearch"
                                    :to="'/allproduct/' + product._id">{{ product.name }}
                                </router-link>
                                <router-link v-else @click="clearSearch"
                                    :to="'/accessory/'">{{ product.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div data-bs-toggle="dropdown" aria-expanded="false">
                    <div class="me-2">
                        <svg style="fill: #fff;" xmlns="http://www.w3.org/2000/svg" height="1.2em"
                            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                        </svg>
                    </div>
                </div>
                <div class="dropmenu-user-client-page dropdown-menu p-0" style="height: auto;">
                    <div class="user-client-avatar d-flex justify-content-center align-items-center">
                        <div class="me-2">
                            <img :src="'http://localhost:3000/' + inforUser.avatar" alt="">
                        </div>
                        <div>
                            <h6>{{ inforUser.fullName }}</h6>
                        </div>
                    </div>
                    <div class="user-client-body">
                        <router-link to="/login" class="d-flex align-items-center" v-if="!checkLogin">
                            <svg class="me-2 user-client-body-login" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            <span>Đăng nhập</span>
                        </router-link>
                        <router-link to="/admin" class="d-flex align-items-center" v-if="checkLogin">
                            <svg class="me-2 user-client-body-login" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            <span>Về trang admin</span>
                        </router-link>
                        <router-link to="/orderhistory" class="d-flex align-items-center" v-if="checkLogin">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path data-v-3cedeca4="" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z"></path></svg>
                            <span>Lịch sử đơn hàng</span>
                        </router-link>
                        <router-link to="/searchorderhistory" class="d-flex align-items-center" v-if="!checkLogin">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path data-v-3cedeca4="" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z"></path></svg>
                            <span>Lịch sử đơn hàng</span>
                        </router-link>
                        <div class="d-flex align-items-center" v-if="checkLogin" @click="clickChangePass">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"></path></svg>
                            <span>Đổi mật khẩu</span>
                        </div>
                        <div class="d-flex align-items-center" v-if="checkLogin" @click="clickChangeInfor">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg>
                            <span>Đổi avatar</span>
                        </div>
                        <div class="d-flex align-items-center" @click="logout" v-if="checkLogin">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                            <span>Đăng xuất</span>
                        </div>
                    </div>
                </div>
                <router-link to="/cart">
                    <div class="header-icon-cart">
                        <span>0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em"
                            viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
                        </svg>
                    </div>
                </router-link>
            </div>
        </nav>
        <changePass :activeFormChange="activeFormChange" @closeFC="closeFormChangepass"></changePass>
        <changeInfor :activeFormChangeInfor="activeFormChangeInfor" :inforUser2="inforUser" @refresh="reFresh"
            @closeFCI="closeFormChangeInfor"></changeInfor>
    </header>
</template>

<script>
import bussinessService from "../../services/bussiness.service";
import productService from '../../services/product.service';
// import InputSearch from './inputSearch.vue'
import userService from "../../services/user.service";
import changePass from '../changePass.vue'
import changeInfor from "../changeInfor.vue";
import accessoryService from '../../services/acesstory.service'
export default {
    components: {
        // InputSearch,
        changePass,
        changeInfor,
    },
    data() {
        return {
            bussiness: {},
            inputname: null,
            datas: [],
            activeIndex: -1,
            searchText: "",
            checkLogin: false,
            inforUser: {
            },
            activeFormChange: false,
            activeFormChangeInfor: false,
            products: {},
            accessories: {},
            isHidden: false,
            searchProAndAccess: []
        }
    },
    methods: {
        async getBussness() {
            this.bussiness = await bussinessService.getAll()
        },
        async logout() {
            try {
                await userService.logout();
                sessionStorage.removeItem("user");
                this.getInfoUser()
                this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
        async getInfoUser() {
            try {
                const response = await userService.getUser();
                // console.log(response)
                if (response.data != "") {
                    this.checkLogin = true
                    const user = JSON.stringify(response.data);
                    sessionStorage.setItem("user", user);
                    const getinforUser = JSON.parse(sessionStorage.getItem("user"));
                    this.inforUser = getinforUser.user;
                    // console.log(this.inforUser)
                } else {
                    this.checkLogin = false
                    sessionStorage.removeItem("user");
                    this.inforUser = {
                        avatar: 'default.jpg',
                        fullName: 'Chưa đăng nhập'
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        clickChangePass() {
            this.activeFormChange = true;
        },
        closeFormChangepass() {
            this.activeFormChange = false;
        },
        clickChangeInfor() {
            this.activeFormChangeInfor = true;
        },
        closeFormChangeInfor() {
            this.activeFormChangeInfor = false;
        },
        reFresh() {
            this.getInfoUser();
        },
        async getAllProducts() {
            const response = await productService.getPanigation()
            this.products = response.data
        },
        async getAllAccess() {
            const response = await accessoryService.getAll()
            this.accessories = response.data
            // console.log(this.accessories)
        },
        async searchItem () {
            await this.getAllProducts()
            await this.getAllAccess()
            this.searchProAndAccess = []
            this.products.forEach(e => {
                this.searchProAndAccess.push({
                    ...e,
                    type: 'product'
                })
            })
            this.accessories.forEach(e => {
                this.searchProAndAccess.push({
                    ...e,
                    type: 'accessory'
                })
            })
            this.isHidden = true
            if (!this.searchText) return this.searchProAndAccess;

            else {
                const regex = new RegExp(this.searchText.trim(), 'i');
                this.searchProAndAccess = this.searchProAndAccess.filter((item) =>
                    regex.test(item.name)
                );
            }
        },
        clearSearch() {
            this.searchText = ''
            this.isHidden = false
        }
    },

    mounted() {
        this.getBussness()
        this.getInfoUser();
        this.getAllProducts()
        this.getAllAccess()
    }
}
</script>

<style scoped>
@import url(../../assets/client/header.css);
</style>