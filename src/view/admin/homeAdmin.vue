<template>
    <div>
        <!-- <adminHeader></adminHeader> -->
        <div class="d-flex">
            <adminMenu></adminMenu>
            <adminContent></adminContent>
        </div>
    </div>
</template>
<script>
import adminContent from '../../components/admin/adminContent.vue'
import adminMenu from '../../components/admin/adminMenu.vue'
export default {
    components: {
        adminContent,
        adminMenu
    }
}
</script>
