<template>
    <div class="news-page">
        <div class="news-page-wrapper">
            <div class="news-page-title">
                <h6>Tin tức chung</h6>
            </div>
            <div class="mt-2 ms-3">
                <p class="mb-0">Trang {{ pageNumber }}</p>
            </div>
            <div class="row news-list">
                <div class="col-3 mt-4" v-for="post in posts" :key="post">
                    <div class="news-detail">
                        <router-link :to="'/postdetail/'+ post._id">
                            <div>
                                <img :src="'http://localhost:3000' + post.image" alt="">
                            </div>
                            <div>
                                <p>{{ formatDateNoTime(post.createdAt) }}</p>
                                <h5>{{ post.title }}
                                </h5>
                            </div>
                            <p>Xem thêm ></p>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-4">
                <ul class="pagination" style="cursor: pointer;">
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
        </div>
    </div>
</template>
<script>
import postService from "../../services/post.service";
export default {
    data() {
        return {
            posts: {},
            lengthPage: 1,
            activePage: 1,
            pageNumber: 1
        }
    },
    methods: {
        async getAllPosts(pageNumber = 1) {
            try {
                const length = await postService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 12)
                // console.log(this.lengthPage)
                const response = await postService.getAll(pageNumber, 12)
                this.posts = response.data
                // console.log(this.posts)
            } catch (error) {
                console.log(error);
            }
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        handlePage(index) {
            this.activePage = index
            this.getAllPosts(index)
            this.pageNumber = index
        },
    },
    mounted() {
        this.getAllPosts()
    }
}
</script>
<style>
@import url(../../assets/client/news.css);
</style>