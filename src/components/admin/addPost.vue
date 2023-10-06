<template>
    <div class="add-post-page-wrapper">
        <div class="add-post-page-title">
            <h4>Thêm bài viết mới</h4>
        </div>
        <div class="add-post-page-content">
            <div class="addpost-content-title"><h6>Tạo bài viết</h6></div>
            <form action="" @submit.prevent="createPost">
                <div class="addpost-content-form">
                    <div class="row">
                        <div class="col-6 addpost-input-title">
                            <label for="">Tiêu đề bài viết <span class="span-requied">*</span></label>
                            <input type="text" v-model="dataCreate.title" placeholder="Nhập tiêu đề bài viết" required>
                        </div>
                        <div class="col-3 mt-2">
                            <label for="">Ảnh minh họa (nếu có)</label>
                            <input type="file" ref="fileInput" @change="handleFileImage">
                        </div>
                        <div class="col-3 addpost-input-img">
                            <img :src="showImg" alt="">
                        </div>
                    </div>
                    <div class="mt-3" v-for="(div, index) in dataCreate.ListDes" :key="index">
                        <label for="">Nội dung bài viết đoạn {{ index + 1 }}</label>
                        <div class="addpost-content-descriptions">
                            <input type="text" v-model="div.desTitle" placeholder="Tiêu đề">
                            <textarea v-model="div.desDes"  cols="67" rows="3" placeholder="Mô tả..."></textarea>
                        </div>
                    </div>
                </div>
                <div class="add-remove-button-addpost">
                    <svg @click="addDiv" class="p-1" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                    <svg @click="removeDiv" class="p-1 ms-4" xmlns="http://www.w3.org/2000/svg" height="1.5em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                </div>
                <div class="submit-button-addpost">
                    <button>Tạo</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import postService from '../../services/post.service'
export default {
    data() {
        return {
            dataCreate: {
                title: '',
                postimg: null,
                ListDes: [
                    {
                        desTitle: '',
                        desDes: ''
                    }
                ]
            },
            showImg: null
        }
    },
    methods: {
        addDiv() {
            this.dataCreate.ListDes.push({
                        desTitle: '',
                        desDes: ''
            });
            // this.isPop = true
        },
        removeDiv() {
            if (this.dataCreate.ListDes.length > 1) {
                this.dataCreate.ListDes.pop();
            }
            // this.divs.pop();
        },
        handleFileImage(event) {
            this.dataCreate.postimg = event.target.files[0] || '';
            const src = URL.createObjectURL(this.dataCreate.postimg)
            this.showImg = src
        },
        async createPost() {
            // console.log(this.dataCreate)
            const response = await postService.create(this.dataCreate)
            // console.log(response)
            if(response.data.status) {
                alert(response.data.mes)
                this.dataCreate= {
                    title: '',
                    ListDes: [
                        {
                            desTitle: '',
                            desDes: ''
                        }
                    ]
                }
                this.$refs.fileInput.value = null
                this.showImg = ''
            } else {
                alert(response.data.mes)
            }
        }
    }
}
</script>
<style scoped>
@import url(../../assets/adminPost.css);
</style>