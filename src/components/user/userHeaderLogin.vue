<template>
    <header>
        <div class="header-wapper">
            <div class="">
                <ul class="d-flex justify-content-end">
                    <li class="contact-page me-2 pt-3"><router-link to="/">Liên hệ</router-link></li>
                    <li class="recruitment-page me-3 pt-3"><router-link to="/">Tuyển dụng</router-link></li>
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
                    <img :src="'http://localhost:3000/' + bussiness.logo"  alt="Logo">
                </router-link>
            </div>
        </div>
        <nav class="header-nav header-login-nav">
            <ul>
                <li><router-link to="/">Giới thiệu</router-link></li>
                <li><router-link to="/">Xe máy</router-link></li>
                <li><router-link to="/">My Store</router-link></li>
                <li><router-link to="/">Tin tức</router-link></li>
            </ul>
            <div class="header-icons">
                <router-link to="/login">
                    <div class="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"/></svg>
                    </div>
                </router-link>
                <router-link to="/">
                    <div class="header-icon-cart">
                        <span>0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/></svg>
                    </div>
                </router-link>
            </div>
        </nav>
    </header>
</template>

<script>
import bussinessService from "../../services/bussiness.service";
export default {
    data() {
        return {
            bussiness: {}
        }
    },
    methods: {
        async getBussness() {
            this.bussiness = await bussinessService.getAll()
        }
    },
    mounted() {
        this.getBussness()
    },
}
</script>

<style scoped>
@import url(../../assets/client/header.css);
.header-login-nav {
    background-color: #3dcbf9;
}
</style>
// import userService from '../../services/user.service'
// export default {
//     data() {
//         return {

//             email: ''
//         }
//     },
//     methods: {
//         getItem() {
//             const user = JSON.parse(sessionStorage.getItem('user'))
//             // console.log(user, 'user')
//             // console.log(sessionStorage.getItem('user'))
//             if (sessionStorage.getItem('user')) {
//                 this.email = user.user.email
//             } else {
//                 this.email = '...@gmail.com'
//             }
//         },
//         async logout() {
//             try {
//                 await userService.logout()
//                 sessionStorage.removeItem('user')
//                 this.getItem()
//             } catch (error) {
//                 console.log(error);
//             }
//         },
//         async getInfoUser() {
//             try {
//                 const response = await userService.getUser()
//                 // console.log(response, 'res')
//                 if (response.data != "") {
//                     const user = JSON.stringify(response.data);
//                     sessionStorage.setItem('user', user);
//                     this.getItem()
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     },
//     mounted() {
//         this.getItem()
//         this.getInfoUser()
//     }
// }