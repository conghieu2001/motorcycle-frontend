<template>
    <div class="list-product">
                <ul>
                    <li>
                        <h2>Danh mục sản phẩm</h2>
                    </li>
                    <ul class="show-list-category">
                        <li  @click="selectAllProduct()"><p>Tất cả sản phẩm</p></li>
                        <li v-for="category in categories" :key="category"  @click="selectByCategory(category.name)"><p>{{ category.name }}</p></li>
                    </ul>
                </ul>
            </div>
</template>
<script>
import categoryService from '../../services/category.service';
export default {
    data() {
        return {
            categories: {}
        }
    }, 
    emits: ["select:all", "select:categoryId"],
    methods: {
        selectByCategory(name) {
            this.$emit("select:categoryId", name);
            // console.log(this.$emit)
        },
        async getCategories() {
            this.categories = await categoryService.getAll()
        },
        selectAllProduct() {
            this.$emit("select:all");
        },
    },
    mounted() {
        this.getCategories()
    }
}
</script>