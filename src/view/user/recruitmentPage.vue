<template>
    <div>
        <userHeader :indexCart="indexCart"></userHeader>
    <div class="recruitment-page-wapper">
        <div class="link-to-thispage mt-4 ms-0 me-0">
            <router-link to="/">Trang chủ</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" height="0.8em"
                viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
            <span>Tin tuyển dụng</span>
        </div>
        <div>
            <h5 class="mt-3">Tin tức tuyển dụng</h5>
            <div class="m-4">
                <h6>Liên hệ:</h6>
                <ul>
                    <li>Email: {{ bussiness.email }}</li>
                    <li>Điện thoại: {{ bussiness.phoneNumber }}</li>
                    <li>Địa chỉ: {{ bussiness.address }}</li>
                </ul>
            </div>
            <div class="recruitment-page-form" v-for="recruitment in recruiments" :key="recruitment">
                <div class="d-flex justify-content-between">
                    <div class="type-recruitment">
                        {{ recruitment.experience }}
                    </div>
                    <h6 class="recruitment-form-title">{{ recruitment.position }}</h6>
                    <p class="recruitment-text">{{ formatDate(recruitment.createdAt) }}</p>
                </div>
                <div>
                    <p class="recruitment-text">1. Nhiệm vụ chuyên môn</p>
                    <ul>
                        <li class="recruitment-text" v-for="task in recruitment.professionalTasks" :key="task">{{ task.title }}</li>
                    </ul>
                    <p class="recruitment-text" >2. Nhiệm vụ chung</p>
                    <ul>
                        <li class="recruitment-text"  v-for="task in recruitment.togetherTask" :key="task">{{ task.title }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import bussinessService from "../../services/bussiness.service";
import recruitmentService from "../../services/recruitment.service";
import cartService from '../../services/cart.service'
import userHeader from '../../components/user/userHeader.vue'
export default {
    components: {
        userHeader
    },
    data() {
        return {
            bussiness: {},
            recruiments: {},
            indexCart: 0
        }
    },
    methods: {
        async getBussiness() {
            const response = await bussinessService.getAll()
            // console.log(response)
            this.bussiness = response
        },
        async getRecruitments() {
            const response = await recruitmentService.getAll()
            // console.log(response)
            this.recruiments= response.data
        },
        formatDate(data) {
            const date = new Date(data);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            const formattedDate = `${day}/${month}/${year}`;
            return formattedDate
            // console.log(formattedDate);
        },
        async getIndexProduct() {
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                const id = user.user._id
                const response = await cartService.findById({id})
                const userCart = response.data.result
                // console.log(userCart[0].products)
                if(userCart[0] != undefined) {
                    let sumU = 0
                    userCart[0].products.forEach(e => {
                        sumU = sumU + e.quantity
                    })
                    this.indexCart = sumU
                } else {
                    this.indexCart = 0
                }
            } else {
                const arrCart = JSON.parse(localStorage.getItem("cartItems"));
                if(arrCart != null) {
                    let sum = 0
                    arrCart.forEach(e => {
                        sum = sum + e.quantity
                    })
                    this.indexCart = sum || 0
                } else {
                    this.indexCart = 0
                }
            }
        }
    },
    mounted() {
        this.getBussiness()
        this.getRecruitments()
        this.getIndexProduct()
    }
}
</script>
<style scoped>
@import url(../../assets/client/recruitment.css);
</style>