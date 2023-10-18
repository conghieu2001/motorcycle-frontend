<!-- eslint-disable vue/no-unused-components -->
<template>
    <div class="overlay" v-if="activeFormConfirm">
        <div class="confirm-box">
            <div class="confirm-title">Nhập mã bảo mật</div>
            <form action="" >
                <div class="input-code-box">
                <p>Vui lòng kiểm tra mã trong email của bạn. Mã này gồm 6 số.</p>
                <div class="d-flex align-items-center pb-4">
                    <input
                        v-model="code"
                         maxlength="6"
                         type="text" placeholder="Nhập mã">
                    <div class="ms-3">
                        <h6>Chúng tôi đã gửi mã đến địa chỉ email của bạn:</h6>
                        <span>{{ email }}</span>
                    </div>
                </div>
                </div>
                <div class="submit-next-pre d-flex justify-content-between align-items-center">
                    <div class="ms-3 resend-mail"  @click="sendAgain">Bạn chưa có mã (gửi lại)?</div>
                    <div>
                        <button class="close-button" @click="closeFormConfirm">Hủy</button>
                        <button type="submit"  class="next-button" @click.prevent.stop="confirm">Tiếp tục</button>
                    </div>
                </div>
            </form>
        </div>
        <resetPass :activeFormReset="activeFormReset" :email="email" @closeRS="closeFormReset"></resetPass>
    </div>
</template>
<script>
import userService from '@/services/user.service';
import resetPass from '@/components/resetPass.vue'
export default {
    components: {
        resetPass,
    },
    data() {
        return {
            code: '',
            messageFailure: '',
            messageSuccess: '',
            activeFormReset: false,

        };
    },
    props: {
        activeFormConfirm: { type: Boolean },
        email: String
    },
    emits: ['closeCF'],
    methods: {
        closeFormConfirm() {
            this.messageFailure = ''
            this.$emit('closeCF');
        },
        async confirm() {
            try {
                const code = this.code
                const email = this.email;
                const response = await userService.confirmcode({ email, code });
                // console.log(response);
                if (response.data.status) {
                    this.activeFormReset=true
                    this.code = ''
                    // this.closeFormConfirm()
                } else {
                    this.code = ''
                    this.messageFailure = response.data.mes;
                    alert(this.messageFailure)
                }
            } catch (error) {
                console.log(error);
            }
        },
        async sendAgain(){
            try {
                this.code = ''
                const response = await userService.forget({ email:this.email })
            if(response.data.status){
                this.messageSuccess="Mã xác nhận đã được gửi"
                alert(this.messageSuccess)
                this.messageFailure=''
            }else{
                this.messageSuccess=''
                this.messageFailure=response.data.mes
                alert(this.messageFailure)
            }
            } catch (error) {
              console.log(error);  
            }
        },
        closeFormReset(){
            this.closeFormConfirm()
            this.activeFormReset=false
        },
    }
}
</script>
<style scoped>
@import url(../assets/confirmpass.css);
</style>