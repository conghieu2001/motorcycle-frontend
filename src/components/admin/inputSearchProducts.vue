<template>
    <div class="search-input-close col-3">
                <div class="search-wapper mb-1">
                    <div class="input-holder">
                        <input type="text" class="input-search" :value="modelValue"
                    @input="updateModelValue" @keyup.enter="submit" placeholder="Type to search" />
                        <button class="search-icon" @click="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path
                                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
</template>
<script>
export default {
    props: {
        modelValue: { type: String, default: '' },
    },
    emits: ["submit", "update:modelValue", "update:activeIndex"],
    methods: {
        updateModelValue(e) {

            this.$emit("update:modelValue", e.target.value);
            // console.log(this.products.length)
            // this.isHidden = true

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