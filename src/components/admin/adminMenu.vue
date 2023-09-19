<template>
    <div class=" menu-wapper">
        <div class="header-logo d-flex align-items-center ps-5">
            <img class="pt-1" :src="'http://localhost:3000/' + inforBussiness.logo" alt="">
            <span class="ms-2 mt-2">Công Hiếu</span>
        </div>
        <div class="menu-left-wapper">
            <div class="menu-left-wapper-title"><p>Danh mục quản lí</p></div>
            <div>
                <div class="d-flex align-items-center title-menu" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"
                    @click="this.isIconBussiness = !this.isIconBussiness">
                    <div class="p-2">
                        <svg class="iconsss" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"
                            viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                        </svg>
                    </div>
                    <span>Doanh nghiệp</span>
                    <div class="p-2" v-if="!isIconBussiness">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"
                            viewBox="0 0 256 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
                    </div>
                    <div v-else class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 448 512">
                            <path
                                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                        </svg>
                    </div>
                </div>
                <div class="collapse show-content mt-2" id="collapseExample">
                    <div class="pb-2 mb-1">
                        <router-link to="/admin/inforbussiness">Thông tin doanh nghiệp</router-link>
                    </div>
                </div>

            </div>
            <div class="mt-2">
                <div class="d-flex align-items-center title-menu" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"
                    @click="this.isIconProduct = !this.isIconProduct">
                    <div class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512.9 192c-14.9-.1-29.1 2.3-42.4 6.9L437.6 144H520c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24h-45.3c-6.8 0-13.3 2.9-17.8 7.9l-37.5 41.7-22.8-38C392.2 68.4 384.4 64 376 64h-80c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h66.4l19.2 32H227.9c-17.7-23.1-44.9-40-99.9-40H72.5C59 104 47.7 115 48 128.5c.2 13 10.9 23.5 24 23.5h56c24.5 0 38.7 10.9 47.8 24.8l-11.3 20.5c-13-3.9-26.9-5.7-41.3-5.2C55.9 194.5 1.6 249.6 0 317c-1.6 72.1 56.3 131 128 131 59.6 0 109.7-40.8 124-96h84.2c13.7 0 24.6-11.4 24-25.1-2.1-47.1 17.5-93.7 56.2-125l12.5 20.8c-27.6 23.7-45.1 58.9-44.8 98.2.5 69.6 57.2 126.5 126.8 127.1 71.6.7 129.8-57.5 129.2-129.1-.7-69.6-57.6-126.4-127.2-126.9zM128 400c-44.1 0-80-35.9-80-80s35.9-80 80-80c4.2 0 8.4.3 12.5 1L99 316.4c-8.8 16 2.8 35.6 21 35.6h81.3c-12.4 28.2-40.6 48-73.3 48zm463.9-75.6c-2.2 40.6-35 73.4-75.5 75.5-46.1 2.5-84.4-34.3-84.4-79.9 0-21.4 8.4-40.8 22.1-55.1l49.4 82.4c4.5 7.6 14.4 10 22 5.5l13.7-8.2c7.6-4.5 10-14.4 5.5-22l-48.6-80.9c5.2-1.1 10.5-1.6 15.9-1.6 45.6-.1 82.3 38.2 79.9 84.3z"/></svg>
                    </div>
                    <span>Sản phẩm</span>
                    <div class="p-2" v-if="!this.isIconProduct">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"
                            viewBox="0 0 256 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
                    </div>
                    <div v-else class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 448 512">
                            <path
                                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                        </svg>
                    </div>
                </div>
                <div class="collapse show-content mt-2" id="collapseExample2">
                    <div class="pb-2 mb-1 abcd">
                        <router-link to="/admin/adminproduct" >Danh sách sản phẩm</router-link>
                    </div>
                    <div class="pb-2 mb-1">
                        <router-link to="/admin/addproduct">Thêm sản phẩm</router-link>
                    </div>
                    <div class="pb-2 mb-1">
                        <router-link to="/admin/addinputproduct">Phiếu nhập hàng</router-link>
                    </div>
                </div>

            </div>
            <div class="mt-2">
                <div class="d-flex align-items-center title-menu" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3"
                    @click="this.isIconAcess = !this.isIconAcess">
                    <div class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"/></svg>
                    </div>
                    <span>Phụ kiện</span>
                    <div class="p-2" v-if="!this.isIconAcess">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"
                            viewBox="0 0 256 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
                    </div>
                    <div v-else class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 448 512">
                            <path
                                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                        </svg>
                    </div>
                </div>
                <div class="collapse show-content mt-2" id="collapseExample3">
                    <div class="pb-2 mb-1 abcd">
                        <router-link to="/admin/addacesstory" >Thêm phụ kiện</router-link>
                    </div>
                </div>

            </div>
            <div class="mt-2">
                <div class="d-flex align-items-center title-menu" data-bs-toggle="collapse"
                    data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4"
                    @click="this.isIconUser = !this.isIconUser">
                    <div class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/></svg>
                    </div>
                    <span>Tài khoản</span>
                    <div class="p-2" v-if="!this.isIconUser">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px"
                            viewBox="0 0 256 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                        </svg>
                    </div>
                    <div v-else class="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 448 512">
                            <path
                                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                        </svg>
                    </div>
                </div>
                <div class="collapse show-content mt-2" id="collapseExample4">
                    <div class="pb-2 mb-1 abcd">
                        <router-link to="/admin/adminuser" >Danh sách tài khoản</router-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import bussinessService from '../../services/bussiness.service'
export default {
    data() {
        return {
            isIconBussiness: false,
            isIconProduct: false,
            isIconAcess: false,
            isIconUser: false,
            inforBussiness: {}
        }
    },
    methods: {
            async getBussiness() {
                this.inforBussiness = await bussinessService.getAll()
            }
    },
    mounted() {
        this.getBussiness()
    }
}
</script>
<style scoped>
@import url(../../assets/adminMenu.css);
.menu-wapper {
    width: 300px;
}
</style>
