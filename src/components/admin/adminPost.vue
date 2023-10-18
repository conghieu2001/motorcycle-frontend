<template>
    <div>
        <div data-v-0742bf8e="" class="list-addproduct-title"><span data-v-0742bf8e="">Danh sách bài viết</span></div>
        <div>
            <div class="d-flex justify-content-end pb-2 me-3">
                <span class="me-2">Download: </span>
                <div class="exportFilePDF" @click="exportPdf">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                    </svg>
                    PDF
                </div>
                <div class="exportFileExcel" style="width: 70px;" @click="exportExcel">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                        <path
                            d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm212-240h-28.8c-4.4 0-8.4 2.4-10.5 6.3-18 33.1-22.2 42.4-28.6 57.7-13.9-29.1-6.9-17.3-28.6-57.7-2.1-3.9-6.2-6.3-10.6-6.3H124c-9.3 0-15 10-10.4 18l46.3 78-46.3 78c-4.7 8 1.1 18 10.4 18h28.9c4.4 0 8.4-2.4 10.5-6.3 21.7-40 23-45 28.6-57.7 14.9 30.2 5.9 15.9 28.6 57.7 2.1 3.9 6.2 6.3 10.6 6.3H260c9.3 0 15-10 10.4-18L224 320c.7-1.1 30.3-50.5 46.3-78 4.7-8-1.1-18-10.3-18z" />
                    </svg>
                    Excel
                </div>
            </div>
        </div>
        <div class="m-4">
            <div class="post-page-table">
                <div class="row post-page-table-head">
                    <div class="col-1">
                        STT
                    </div>
                    <div class="col-3">
                        <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Tên bài viết</div>
                        <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                            <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                            <li class="mb-2 mt-1"><input type="text" v-model="searchTitle" @input="filteredTitle"
                                    placeholder="Tìm kiếm"></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        Hình ảnh
                    </div>
                    <div class="col-2">
                        <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Người tạo</div>
                        <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                            <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                            <li class="p-2 sortName" @click="sortedName(1)">Từ A -Z</li>
                            <li class="p-2 sortName" @click="sortedName(2)">Từ Z - A</li>
                            <li class="mb-2 mt-1"><input type="text" v-model="searchName" @input="filteredName"
                                    placeholder="Tìm kiếm"></li>
                        </ul>
                    </div>
                    <div class="col-2">
                        <div class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Ngày tạo</div>
                        <ul class="dropdown-menu ms-5 isDropMenuEmailLogin">
                            <li class="p-2  sortName" @click="defaultSearch">Mặc định</li>
                            
                            <li class="mb-2 mt-1"><input type="date" v-model="searchDay" @input="findByDay"
                                    placeholder="Tìm kiếm"></li>
                        </ul>
                    </div>
                    <div class="col-2 text-center">Options</div>
                </div>

                <div class="row post-page-table-body" v-for="(post, index) in posts" :key="index">
                    <div class="col-1 fw-semibold">
                        <div>{{ index + 1 }}</div>
                    </div>
                    <div class="col-3 post-table-body-name">
                        {{ post.title }}
                    </div>
                    <div class="col-2">
                        <img :src="'http://localhost:3000' + post.image" alt="">
                    </div>
                    <div class="col-2">
                        {{ post.userId.fullName }}
                    </div>
                    <div class="col-2">
                        {{ formatDateNoTime(post.createdAt) }}
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        <div class="up-staff text-center" @click="gotoScreenDetail(post._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
                            </svg>
                        </div>
                        <div class="add-role ms-2 text-center" @click="gotoEdit(post._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
                            </svg>
                        </div>
                        <div class="clock-user ms-2 text-center" @click="deletePost(post._id)">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                            </svg>
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
        <div class="overlay" v-if="isScreenPost">
            <div class="post-screen-detail">
                <div class="d-flex justify-content-between screen-detaiorder-title">
                    <h5>Bài viết</h5>
                    <div class="d-flex me-3">
                        <!-- <div class="exportFilePDF">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path
                                    d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                            </svg>
                            PDF
                        </div> -->
                        <svg @click="isScreenPost = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg"
                            height="1.5em"
                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                        </svg>
                    </div>
                </div>
                <div class="post-screen-detail-content">
                    <div class="addpost-content-title">
                        <h6>Chi tiết bài viết</h6>
                    </div>
                    <div>
                        <div class="addpost-content-form post-screen-detail-content-form">
                            <div class="row">
                                <div class="col-6 addpost-input-title">
                                    <label for="">Tiêu đề bài viết <span class="span-requied">*</span></label>
                                    <input type="text" v-model="postById.title" disabled>
                                </div>
                                <div class="col-3 addpost-input-img"><img :src="'http://localhost:3000' + postById.image">
                                </div>
                            </div>
                            <div class="mt-3" v-for="(post, index) in postById.descriptions" :key="index">
                                <label for="">Nội dung bài viết đoạn {{ index + 1 }}</label>
                                <div class="addpost-content-descriptions">
                                    <input type="text" v-model="post.desTitle" disabled>
                                    <textarea cols="67" rows="3" v-model="post.desDes" disabled>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="overlay" v-if="isEditPost">
            <div class="post-screen-detail">
                <form action="" @submit.prevent="updatePost">
                    <div class="d-flex justify-content-between screen-detaiorder-title">
                        <h5>Bài viết</h5>
                        <div class="d-flex me-3">
                            <div class="submit-form-edit-post">
                                <button type="submit">Lưu</button>
                            </div>
                            <svg @click="isEditPost = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg"
                                height="1.5em"
                                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                <path
                                    d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
                            </svg>
                        </div>
                    </div>
                    <div class="post-screen-detail-content">
                        <div class="addpost-content-title">
                            <h6>Chi tiết bài viết</h6>
                        </div>
                        <div>
                            <div class="addpost-content-form post-screen-detail-content-form">
                                <div class="row">
                                    <div class="col-6 addpost-input-title">
                                        <label for="">Tiêu đề bài viết <span class="span-requied">*</span></label>
                                        <input type="text" v-model="postByUpdate.title">
                                    </div>
                                    <div class="col-3 mt-2">
                                        <label for="">Ảnh minh họa (nếu có)</label>
                                        <input type="file" ref="fileInput" @change="handleFileImage">
                                    </div>
                                    <div class="col-3 addpost-input-img"><img
                                            :src="'http://localhost:3000' + postByUpdate.image">
                                    </div>
                                </div>
                                <div class="mt-3" v-for="(post, index) in postByUpdate.descriptions" :key="index">
                                    <label for="">Nội dung bài viết đoạn {{ index + 1 }}</label>
                                    <div class="addpost-content-descriptions">
                                        <input type="text" v-model="post.desTitle">
                                        <textarea cols="67" rows="3" v-model="post.desDes">
                                    </textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import postService from "../../services/post.service";
import * as XLSX from 'xlsx'
export default {
    data() {
        return {
            posts: {},
            lengthPage: 1,
            activePage: 1,
            isScreenPost: false,
            isEditPost: false,
            postById: {},
            postByUpdate: {

            },
            searchTitle: '',
            searchName: '',
            searchDay: ''
        }
    },
    methods: {
        async getAllPosts(pageNumber = 1) {
            try {
                const length = await postService.getAll()
                // console.log(length)
                this.lengthPage = Math.ceil(length.data.length / 5)
                // console.log(this.lengthPage)
                const response = await postService.getAll(pageNumber, 5)
                this.posts = response.data
                // console.log(this.posts)
            } catch (error) {
                console.log(error);
            }
        },
        handlePage(index) {
            this.activePage = index
            this.getAllPosts(index)
        },
        formatDateNoTime(dateString) {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(date);
        },
        exportExcel() {
            const filename = 'posts'
            const response = this.posts
            // console.log(response)
            let aaa = 'http://localhost:3000'
            let data = []
            response.forEach(e => {
                data.push([
                    e.title,
                    { v: aaa + e.image, t: 's' }, // thêm tùy chọn `t` để chỉ định loại dữ liệu là hình ảnh
                    e.userId.fullName,
                    e.userId.email,
                    this.formatDateNoTime(e.createdAt)
                ])
            })

            // console.log(data)
            const ws = XLSX.utils.json_to_sheet(data);
            ws['!cols'] = [{ width: 25 }, { width: 15 }, { width: 25 }, { width: 30 }, { width: 20 }];
            ws['A1'] = { v: 'Tiêu đề bài viết' };
            ws['B1'] = { v: 'Hình ảnh' };
            ws['C1'] = { v: 'Người tạo' };
            ws['D1'] = { v: 'Email người tạo' };
            ws['E1'] = { v: 'Ngày tạo' };
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'buffer' });
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${filename}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);

        },
        async gotoScreenDetail(id) {
            this.isScreenPost = true
            const response = await postService.findById({ id })
            this.postById = response.data
            // console.log(this.postById)
        },
        async gotoEdit(id) {
            this.isEditPost = true
            const response = await postService.findById({ id })
            this.postByUpdate = response.data
            // console.log(this.postByUpdate)
        },
        async updatePost() {
            // console.log(this.postByUpdate)
            const response = await postService.update(this.postByUpdate)
            if (response.data.status) {
                alert(response.data.mes)
                this.isEditPost = false
                this.getAllPosts(1)
            } else {
                alert(response.data.mes)
            }
        },
        handleFileImage(event) {
            this.postByUpdate.postimg = event.target.files[0] || '';

        },
        async deletePost(id) {
            if (confirm('Bạn có chắc chắn muốn xóa không?')) {
                await postService.delete({ id })
                this.getAllPosts(1)
            } else {
                this.getAllPosts(1)
            }
        },
        async exportPdf() {
            if (this.posts.length > 0) {
                let forTable = ''
                this.posts.forEach(post => {
                    forTable += `
                            <tr style="height: 80px; ">
                                
                                <td style="border: 1px solid black; padding: 5px; ">
                                <div style="overflow: hidden; -webkit-line-clamp: 3; display: -webkit-box; height: 55px; -webkit-box-orient: vertical;">
                                    ${post.title}
                                    
                                </div>
                                </td>
                                <td style="border: 1px solid black; padding: 10px;" >
                                <img style="width: 70px; height: 70px;" src="http://localhost:3000/${post.image}" alt="">
                                </td>
                                <td style="border: 1px solid black; padding: 5px">${post.userId.fullName}</td>
                                <td style="border: 1px solid black; padding: 5px">${post.userId.email}</td>
                                <td style="border: 1px solid black; padding: 5px; text-align: center">${this.formatDateNoTime(post.createdAt)}</td>
                                
                            
                            </tr>
                    `
                })
                const template = `
                <div style="font-family: Arial, Helvetica, sans-serif; width: 210mm;">
                    <h3 style="font-size: 24px; text-align: center; padding-top: 90px; padding-left: 50px;">Danh sách bài viết</h3>
                    <table style="border-collapse: collapse; width: 95%; margin: 0 auto;">
                        <thead>
                            <tr>
                                <!-- <th style="border: 1px solid black; padding: 5px; width: 60px;">STT</th> -->
                                <th style="border: 1px solid black; padding: 5px; width: 200px;">Tiêu đề bài viết</th>
                                <th style="border: 1px solid black; padding: 5px; width: 80px;">Hình ảnh</th>
                                <th style="border: 1px solid black; padding: 5px">Người tạo</th>
                                <th style="border: 1px solid black; padding: 5px">Email người tạo</th>
                                <th style="border: 1px solid black; padding: 5px">Ngày lập</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${forTable}
                        </tbody>
                    </table>
                    <div style="margin: 40px;">
                    <span style=" float: right;">....., ngày..., tháng..., năm 20..</span>
                    </div>
                </div>
                `

                const response = await postService.exportPdf({ data: template })
                const blob = new Blob([response.data], {
                    type: 'application/pdf'
                })
                // console.log(blob)
                const url = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                // console.log(link)
                link.href = url;
                link.setAttribute('download', 'listproduct.pdf')
                document.body.appendChild(link)
                link.click()
            } else {
                alert('Không có sản phẩm nào được chọn!')
            }
        },
        async filteredTitle() {
            if (!this.searchTitle) return this.getAllPosts(1);

            else {
                const regex = new RegExp(this.searchTitle.trim(), 'i');
                await this.getAllPosts(1)
                this.posts = this.posts.filter((post) =>
                    regex.test(post.title)
                );
            }
        },
        async filteredName() {
            if (!this.searchName) return this.getAllPosts(1);

            else {
                const regex = new RegExp(this.searchName.trim(), 'i');
                await this.getAllPosts(1)
                this.posts = this.posts.filter((post) =>
                    regex.test(post.userId.fullName)
                );
            }
        },
        sortedName(is) {
            if (is == 1) {
                return this.posts.sort((a, b) => a.userId.fullName.localeCompare(b.userId.fullName));
            } else {
                return this.posts.sort((a, b) => b.userId.fullName.localeCompare(a.userId.fullName));
            }
        },
        defaultSearch() {
            this.searchName = '',
            this.searchTitle = '',
            this.searchDay = ''
            this.getAllPosts(1)
        },
        // filteredDates() {
        //     this.posts = this.post.filter((date) => date.createdAt.toDateString() === this.selectedDate.toDateString());
        // },
        async findByDay() {
            try {
                // console.log(this.searchDay)
                const day = this.searchDay
                const response = await postService.findByDay({ day })
                // console.log(response.data.result)
                this.posts = response.data.result
            } catch (error) {
                console.log(error)
            }

        },
    },
    mounted() {
        this.getAllPosts()
    }
}
</script>
<style scoped>@import url(../../assets/adminPost.css);</style>