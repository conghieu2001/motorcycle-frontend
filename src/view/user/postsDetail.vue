<template>
    <div class="detailpost-page-wapper">
        <div class="link-to-thispage mt-4 ms-0 me-0">
            <router-link to="/">Trang chủ</router-link>
            <svg xmlns="http://www.w3.org/2000/svg" height="0.8em"
                viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
            </svg>
            <span>Tin tức</span>
        </div>
        <div class="mt-4 ms-5 me-5">
            <div class="detail-post-title">
                <p>{{ postById.ddmmyy }}</p>
                <h2>{{ postById.title }}</h2>
            </div>
            <div class="d-flex justify-content-between">
                <img class="image-postbyid" :src="'http://localhost:3000' + postById.image" alt="">
                <!-- <img class="image-postbyid" src="https://cdn.honda.com.vn/news-promotion/April2023/R7CoGmZIfE4hbcE8xRXc.jpg" alt=""> -->
            </div>
            <div class="detail-post-des" v-for="des in postById.descriptions" :key="des">
                <span style="text-decoration: none;">{{ des.desTitle }}</span>
                <p>{{ des.desDes }}</p>
                 
            </div>
        </div>
    </div>
</template>
<script>
import postService from '../../services/post.service';
export default {
    data() {
        return {
            idUrl: '',
            postById: {
                ddmmyy: '01/01/2023'
            },
        }
    },
    methods: {
        getUrl() {
            const url = this.$route.fullPath;
            const parts = url.split("/");
            this.idUrl = parts[parts.length - 1];
            // console.log(this.idUrl);
        },
        async getById() {
            const id = this.idUrl
            const response = await postService.findById({id})
            this.postById = response.data
            const date = new Date(this.postById.createdAt)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            this.postById.ddmmyy = day + '/' + month +'/' + year
            // console.log(this.postById.ddmmyy)
        }
    },
    mounted() {
        this.getUrl()
        this.getById()
    }
}   
</script>
<style scoped>
@import url(../../assets/client/detailPost);
.image-postbyid {
    max-width: 800px;
    max-height: 500px;
    margin: 30px auto;
}
</style>