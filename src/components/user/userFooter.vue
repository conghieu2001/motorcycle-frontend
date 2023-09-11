<template>
    <div class="footer-wapper">
        <div class="d-flex">
            <div class="d-flex footer-infor-bussiness">
                <img src="http://localhost:3000//logo.jpg" alt="">
                <div class="ms-4 pe-5">
                    <h3><span style="font-size: 80%;"><span style="color: #cc0000; font-size: 100%;"><strong>Cửa hàng</strong></span></span></h3>
                    <span style="font-size: 85%; color: #000000;"><strong>Tên: </strong> {{ bussiness.name }}<br>
                    <strong>Điện thoại:</strong> {{ bussiness.phoneNumber }}<br>
                    <strong>Email:&nbsp;</strong>{{ bussiness.email }}<br>
                    <strong>Địa chỉ:</strong> {{ bussiness.address }}</span>
                </div>
            </div>
            <div class="mt-3">
                <h3><span style="font-size: 60%;"><span style="color: #cc0000; font-size: 100%;"><strong>Kết nối với chúng tôi</strong></span></span></h3>
                <div class="footer-icons">
                    <a href="https://www.facebook.com/"><img src="../../assets/img/icon-fb.png" alt=""></a>
                    <a href="https://www.instagram.com/"><img src="../../assets/img/icon-ins.png" alt=""></a>
                    <a href="https://www.youtube.com/"><img src="../../assets/img/icon-yt.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div>
                <span>© 2023. Copyright by CongHieu VietNam </span>
            </div>
        </div>
    </div>
</template>
<script>
import bussinessService from "../../services/bussiness.service";
export default {
    data() {
        return {
            bussiness: {}
        }
    },
    methods : {
        async getBussiness() {
            this.bussiness = await bussinessService.getAll()
        }
    },
    mounted() {
        this.getBussiness()
    }
}
</script>
<style scoped>
@import url(../../assets/client/footer.css);
</style>