<template>
    <div class="right-content-wapper" style="padding-left: 0 !important;">
        <adminHeader></adminHeader>
        <router-view></router-view>
    </div>
</template>
<script>
import adminHeader from '../../components/admin/adminheader.vue'
export default {
    components: {
        adminHeader
    }
}
</script>
<style scoped>
.right-content-wapper {
    width: 1235px;
}
</style>