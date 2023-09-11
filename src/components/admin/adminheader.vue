<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
            <div class="wapper">
                <div class="app-header__content d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-end app-header-left ps-3">
                        <div class="search-input-close">
                            <div class="search-wapper mb-1">
                                <div class="input-holder">
                                    <input type="text" class="input-search" placeholder="Type to search" />
                                    <button class="search-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                            <path
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="app-header-right mt-2">
                        <div class="d-flex align-items-baseline">
                            <div class="header-right-avatar me-1" @click="clickDropdown">
                                <img :src="'http://localhost:3000/' + inforUser.avatar" alt="" />
                            </div>
                            <div class="header-right-name ms-2">
                                <h6>{{ this.inforUser.fullName }}</h6>
                                <span>{{ this.inforUser.roles }}</span>
                            </div>
                        </div>
                        <div class="dropdown-menu-user" v-show="isdropdown">
                            <div class="dropdown-menu-header">
                                <div class="background-img d-flex align-items-baseline">
                                    <div class="dropdown-menu-avatar">
                                        <img :src="'http://localhost:3000/' + inforUser.avatar" alt="" />
                                    </div>
                                    <div class="dropdown-menu-name mt-1">
                                        <h6>Hoàng Công Hiếu</h6>
                                        <span>Quản trị viên</span>
                                    </div>
                                </div>
                            </div>
                            <div class="dropdown-menu-function ps-4">
                                <div class="change-password mt-3" @click="clickChangePass">
                                    <div class="background-icon">
                                        <svg class="dropdown-svg" xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                            viewBox="0 0 512 512">
                                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" />
                                        </svg>
                                    </div>
                                    <span class="mt-1">Đổi mật khẩu</span>
                                </div>
                                <div class="change-info" @click="clickChangeInfor">
                                    <div class="background-icon">
                                        <svg class="dropdown-svg" xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                            viewBox="0 0 640 512">
                                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z" />
                                        </svg>
                                    </div>
                                    <span class="mt-1">Thông tin cá nhân</span>
                                </div>
                                <div class="logout" @click="logout">
                                    <div class="background-icon">
                                        <svg class="dropdown-svg" xmlns="http://www.w3.org/2000/svg" height="1.3em"
                                            viewBox="0 0 512 512">
                                            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z" />
                                        </svg>
                                    </div>
                                    <span class="mt-1">Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <changePass :activeFormChange="activeFormChange" @closeFC="closeFormChangepass"></changePass>
        <changeInfor :activeFormChangeInfor="activeFormChangeInfor" :inforUser2="inforUser" @refresh="reFresh"
            @closeFCI="closeFormChangeInfor"></changeInfor>
        </div>
</template>
<script>
import userService from "../../services/user.service";
import changePass from "../changePass.vue";
import changeInfor from "../changeInfor.vue";
// import bussinessService from '../../services/bussiness.service'
export default {
    components: {
        changePass,
        changeInfor,
    },
    data() {
        return {
            isdropdown: false,
            inforUser: {},
            activeFormChange: false,
            activeFormChangeInfor: false,
            getavatar: "",
            // inforBussiness: {}
        };
    },
    methods: {
        clickDropdown() {
            this.isdropdown = !this.isdropdown;
        },
        async logout() {
            try {
                await userService.logout();
                sessionStorage.removeItem("user");
                this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
        async getInfoUser() {
            try {
                const response = await userService.getUser();
                // console.log(response, 'res')
                if (response.data != "") {
                    const user = JSON.stringify(response.data);
                    sessionStorage.setItem("user", user);
                    const getinforUser = JSON.parse(sessionStorage.getItem("user"));
                    this.inforUser = getinforUser.user;
                    // console.log(this.inforUser._id)
                } else {
                    const getinforUser = JSON.parse(sessionStorage.getItem("user"));
                    this.inforUser = getinforUser.user;
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
    },
    mounted() {
        this.getInfoUser();
        // this.getBussiness()
    },
};
</script>
<style>
@import url(../../assets/adminheader.css);
</style>
