<template>
    <div class="user-search-wapper">
        <div action="">
            <div class="user-input-holder">
                <input   type="text" class="user-input-search" placeholder="Tìm sản phẩm" :value="modelValue"
                    @input="updateModelValue" @keyup.enter="submit" />
                <button class="user-search-icon" type="submit" @click="submit">
                    <svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                    
                </button>
            </div>
            <ul  v-show="isHidden">
                <li v-for="(product, index) in products" :key="product._id" @click="updateActiveIndex(index)">  <router-link @click="handleClick" :to="'/allproduct/' + product._id">{{ product.name }}</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            isHidden: false,
        }
    },
    props: {
        modelValue: { type: String, default: '' },
        // eslint-disable-next-line vue/require-valid-default-prop
        products: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["submit", "update:modelValue", "update:activeIndex"],
    methods: {
        handleInput() {
            this.isHidden = false;
        },
        handleClick (){

            this.isHidden = false
        },
        updateModelValue(e) {

            this.$emit("update:modelValue", e.target.value);
            // console.log(this.products.length)
            this.isHidden = true
            
        },
        submit() {
            this.$emit("submit");
        },
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
    },
    mounted() {
        
    }
};
</script>
<style scoped>
@import url(../../assets/client/header.css);
</style>