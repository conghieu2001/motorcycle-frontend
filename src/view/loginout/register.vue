<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="wrapper">
        <div class="row" style="height: auto;">
            <div class="col-8 mt-2">

                <div class="info-login-box col-8">
                    <div class="app-logo">
                        <img src="https://i.pinimg.com/564x/f4/07/f0/f407f09d1dd37d1026b70627ef04e64c.jpg" alt="">
                    </div>
                    <h4>
                        <div class="welcome">Welcome back,</div>
                        <span>It only takes a <span class="text-successs">few seconds</span> to create your account</span>
                    </h4>
                    <form action="" @submit.prevent.stop="register">
                        <div class="row">
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Full Name</label>
                                <input class="form-control" v-model="inforUser.fullName" type="text" ref="inputRef"
                                    placeholder="Full name here..." >
                                    <span class="err-pass" v-if="!!valid.fullName">{{ valid.fullName }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Email</label>
                                <input class="form-control" v-model="inforUser.email" type="email"
                                    placeholder="Email here..." >
                                    <span class="err-pass" v-if="!!valid.email">{{ valid.email }}</span>
                            </div>
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Phone number</label>
                                <input class="form-control" v-model="inforUser.phoneNumber" type="text"
                                    placeholder="Phone number here..." >
                                    <span class="err-pass" v-if="!!valid.phoneNumber">{{ valid.phoneNumber }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Password</label>
                                <input class="form-control" v-model="inforUser.password" type="password"
                                    placeholder="Password here..." >
                                    <span class="err-pass" v-if="!!valid.passWord">{{ valid.passWord }}</span>
                            </div>
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Repeat Password</label>
                                <input class="form-control" v-model="inforUser.confirmPass" type="password"
                                    placeholder="Repeat Password here..." >
                                    <span class="err-pass" v-if="!!valid.confirmPass">{{valid.confirmPass  }}</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-baseline pt-4 p-1">
                            <div>
                                Already have an account?
                                <router-link class="to-signup pe-3" to="/login">
                                    Sign in
                                </router-link>
                            </div>
                            <button type="submit" class="submit-create">
                                Create Acount
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-4">
                <div class="img-right">
                    <img src="https://i.pinimg.com/564x/4c/02/60/4c0260c2f2c0ff16cbae1ab3b2dad1c7.jpg" alt="">
                    <img src="https://i.pinimg.com/564x/68/b8/0c/68b80c966a0c7a9ae0500cd8db6e145f.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import userService from '@/services/user.service';
export default {
    data() {
        return {
            inforUser: {},
            valid: {
                fullName: '',
                email: '',
                phoneNumber: '',
                passWord: '',
                confirmPass: '',
            },
            isValid: false,
            messageSuccess: '',
            messageFailure: ''
        }
    },
    methods: {
        async register() {
            this.validate(this.inforUser)
            if (this.isValid) {
                try {
                    const result = await userService.register(this.inforUser)
                    // console.log(result);
                    if (result.status == 200) {
                        if (result.data.status) {
                            this.inforUser = {}
                            this.messageSuccess = result.data.mes
                            alert(this.messageSuccess)
                            this.inforUser.fullName = ''
                            this.inforUser.email = ''
                            this.inforUser.phoneNumber = ''
                            this.inforUser.password = ''
                            this.inforUser.confirmPass = ''
                            this.messageFailure = ''
                        }
                        else {
                            this.messageSuccess = ''
                            this.messageFailure = result.data.mes
                            alert(this.messageFailure)
                            this.inforUser.fullName = ''
                            this.inforUser.email = ''
                            this.inforUser.phoneNumber = ''
                            this.inforUser.password = ''
                            this.inforUser.confirmPass = ''
                        }
                    }
                    else {
                        //chuyển đến trang lỗi sever
                    }
                } catch (error) {
                    console.log(error);
                }
            }

        },
        hasFalseValue(obj) {
            let temp = false
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    if (obj[key] === false) {
                        temp = true;
                    }
                    else {
                        temp = false
                        break;
                    }
                }
            }
            return temp
        },
        validate({ password, confirmPass, email, phoneNumber, fullName }) {
            if (password != confirmPass || !confirmPass) {
                this.valid.confirmPass = 'Mật khẩu không trùng khớp';
            } else {
                this.valid.confirmPass = false;
            }
            if (!email || !email?.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                this.valid.email = 'Không đúng định dạng email';
            } else {
                this.valid.email = false;
            }
            if (
                !phoneNumber ||
                !phoneNumber.match(/^(03[2-9]|05[2-9]|07[0-9]|08[1-9]|09[0-9]|01[2|6|8|9])+([0-9]{7})\b$/)
            ) {
                this.valid.phoneNumber = 'Số điện thoại không hợp lệ';
            } else {
                this.valid.phoneNumber = false;
            }
            if (!fullName) {
                this.valid.fullName = 'Họ tên không được bỏ trống';
            } else {
                this.valid.fullName = false;
            }
            if (!password || !password.match(/^[A-Za-z0-9]{8,}$/)) {
                this.valid.passWord = 'Mật khẩu ít nhất 8 kí tự';
                this.valid.confirmPass = 'Mật khẩu không trùng khớp';
            } else {
                this.valid.passWord = false;
            }
            this.isValid = this.hasFalseValue(this.valid);
        }
    },
    mounted() {
        this.$refs.inputRef.focus();
    },
}
</script>
<style scoped>@import url(../../assets/register.css);</style>