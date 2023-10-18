<template>
    <div class="overlay" v-if="activeFormChange">
        <div class="box-change-pass">
            <div class="confirm-titlee">Đặt lại mật khẩu</div>
            <form action="" @submit.prevent.stop="changePassword">
                <div class="input-code-box">
                    <p>
                        Tạo mật khẩu mới có tối thiểu 8 ký tự. Mật khẩu mạnh là mật khẩu được kết hợp
                        từ các ký tự, số và dấu câu.
                    </p>
                    <div class="set-height">
                        <div class="input-changepass">
                            <input type="password" v-model="inforUser.password" placeholder="Mật khẩu cũ" />
                        </div>
                        <!-- <span class="err-passw" v-if="messageFailure != ''">{{ messageFailure }}</span> -->
                    </div>
                    <div class="set-height">
                        <div class="input-changepass">
                            <input type="password" v-model="inforUser.newPassword" placeholder="Mật khẩu mới" />
                        </div>
                        <span class="err-passw" v-if="!!valid.newPassword">{{ valid.newPassword }}</span>
                    </div>
                    <div class="set-height">
                        <div class="input-changepass">
                            <input type="password" v-model="inforUser.confirmnewpassword"
                                placeholder="Nhập lại mật khẩu mới" />
                        </div>
                        <span class="err-passw" v-if="!!valid.confirmnewpassword">{{ valid.confirmnewpassword }}</span>
                    </div>
                </div>
                <div class="submit-next-pre d-flex justify-content-end align-items-center">
                    <div>
                        <button class="close-button" @click="closeFormChangepass">Hủy</button>
                        <button type="submit" class="next-button" >
                            Tiếp tục
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import userService from "../services/user.service";
export default {
    data() {
        return {
            inforUser: {},
            messageSuccess: '',
            messageFailure: '',
            valid: {
                newPassword: '',
                confirmnewpassword: '',
            },
            isValid: false,
        };
    },
    props: {
        activeFormChange: { type: Boolean },
    },
    emits: ["closeFC"],
    methods: {
        async changePassword() {
            this.validate(this.inforUser);
            // console.log(this.inforUser, 'all')
            if (this.isValid) {
                try {
                    const password = this.inforUser.password;
                    const newPassword = this.inforUser.newPassword;
                    // console.log(password, newPassword)
                    const response = await userService.changePass(
                        {password, newPassword}
                    );
                    if (!response.data.status) {
                        this.messageSuccess = "";
                        this.messageFailure = response.data.mes;
                        this.inforUser.password = ''
                        alert(this.messageFailure)
                        // this.inforUser.password = ""
                    } else {
                        this.messageSuccess = "";
                        this.messageFailure = "";
                        this.closeFormChangepass()
                        this.logout()
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log("error")
            }
        },
        async logout() {
            try {
                await userService.logout();
                sessionStorage.removeItem("user");
                this.$router.push("/");
            } catch (error) {
                console.log(error);
            }
        },
        closeFormChangepass() {
            this.inforUser.password = ''
            this.inforUser.newPassword = ''
            this.inforUser.confirmnewpassword = ''
            this.$emit("closeFC");
        },
        hasFalseValue(obj) {
            let temp = false;
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (obj[key] === false) {
                        temp = true;
                    } else {
                        temp = false;
                        break;
                    }
                }
            }
            return temp;
        },
        validate({ newPassword, confirmnewpassword }) {
            if (newPassword != confirmnewpassword) {
                this.valid.confirmnewpassword = "Mật khẩu không trùng khớp";
            } else {
                this.valid.confirmnewpassword = false;
            }
            if (!newPassword || !newPassword.match(/^[A-Za-z0-9]{8,}$/)) {
                this.valid.newPassword = "Mật khẩu quá ngắn";
                // this.valid.confirmnewpassword = "Mật khẩu không trùng khớp";
            } else {
                this.valid.newPassword = false;
            }
            this.isValid = this.hasFalseValue(this.valid);
        },
    },
};
</script>
<style>
@import url(../assets/changePass.css);
</style>
