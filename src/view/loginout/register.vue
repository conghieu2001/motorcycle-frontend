<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <userHeader :indexCart="indexCart"></userHeader>
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
                                    placeholder="Full name here...">
                                <span class="err-pass" v-if="!!valid.fullName">{{ valid.fullName }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Email</label>
                                <input class="form-control" v-model="inforUser.email" type="email"
                                    placeholder="Email here...">
                                <span class="err-pass" v-if="!!valid.email">{{ valid.email }}</span>
                            </div>
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Phone number</label>
                                <input class="form-control" v-model="inforUser.phoneNumber" type="text"
                                    placeholder="Phone number here...">
                                <span class="err-pass" v-if="!!valid.phoneNumber">{{ valid.phoneNumber }}</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Password</label>
                                <input class="form-control" v-model="inforUser.password" type="password"
                                    placeholder="Password here...">
                                <span class="err-pass" v-if="!!valid.passWord">{{ valid.passWord }}</span>
                            </div>
                            <div class="col-6">
                                <span class="text-danger">*</span>
                                <label class="form-label" for="">Repeat Password</label>
                                <input class="form-control" v-model="inforUser.confirmPass" type="password"
                                    placeholder="Repeat Password here...">
                                <span class="err-pass" v-if="!!valid.confirmPass">{{ valid.confirmPass }}</span>
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
        <div class="overlay" v-if="isFormInputCode">
            <div class="confirm-box">
                <div class="confirm-title">Nhập mã xác minh</div>
                <form action="" @submit.prevent="confirm">
                    <div class="input-code-box">
                        <p>Vui lòng kiểm tra mã trong email của bạn. Mã này gồm 6 số.</p>
                        <div class="d-flex align-items-center pb-4">
                            <input v-model="code" maxlength="6" type="text" placeholder="Nhập mã">
                            <div class="ms-3">
                                <h6>Chúng tôi đã gửi mã đến địa chỉ email của bạn:</h6>
                                <span>{{ inforUser.email }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="submit-next-pre d-flex justify-content-between align-items-center">
                        <div class="ms-3 resend-mail" @click="sendAgain">Bạn chưa có mã (gửi lại)?</div>
                        <div>
                            <button class="close-button" @click="isFormInputCode = false">Hủy</button>
                            <button type="submit" class="next-button">Tiếp tục</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import userService from '@/services/user.service';
import cartService from '../../services/cart.service'
import userHeader from '../../components/user/userHeader.vue'
export default {
    components: {
        userHeader
    },
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
            messageFailure: '',
            isFormInputCode: false,
            code: '',
            indexCart: 0
        }
    },
    methods: {
        async register() {
            this.inforUser = {
                ...this.inforUser,
                chekedCode: false
            }
            this.validate(this.inforUser)
            if (this.isValid) {
                try {
                    const result = await userService.register(this.inforUser)
                    // console.log(result);
                    if (result.status == 200) {
                        if (result.data.status) {
                            this.isFormInputCode = true
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
        },
        async confirm() {
            try {
                const code = {
                    code: this.code,
                    email: this.inforUser.email,
                }
                const response = await userService.confirmcodeCreate(code);
                // console.log(response);
                if (response.data.status) {
                    this.inforUser = {
                        ...this.inforUser,
                        chekedCode: true
                    }
                    const resultCreate = await userService.register(this.inforUser)
                    if(resultCreate.data.status) {
                        this.isFormInputCode = false
                        alert(resultCreate.data.mes)
                        this.inforUser.fullName = ''
                        this.inforUser.email = ''
                        this.inforUser.phoneNumber = ''
                        this.inforUser.password = ''
                        this.inforUser.confirmPass = ''
                        this.messageFailure = ''
                        this.code = ''
                    }
                    // this.activeFormReset=true
                    // this.closeFormConfirm()
                } else {
                    // this.messageFailure = response.data.mes;
                    alert(response.data.mes)
                    this.code = ''
                }
            } catch (error) {
                console.log(error);
            }
        },
        async getIndexProduct() {
            const user = JSON.parse(sessionStorage.getItem("user"));
            if(user) {
                const id = user.user._id
                const response = await cartService.findById({id})
                const userCart = response.data.result
                // console.log(userCart[0].products)
                if(userCart[0] != undefined) {
                    let sumU = 0
                    userCart[0].products.forEach(e => {
                        sumU = sumU + e.quantity
                    })
                    this.indexCart = sumU
                } else {
                    this.indexCart = 0
                }
            } else {
                const arrCart = JSON.parse(localStorage.getItem("cartItems"));
                if(arrCart != null) {
                    let sum = 0
                    arrCart.forEach(e => {
                        sum = sum + e.quantity
                    })
                    this.indexCart = sum || 0
                } else {
                    this.indexCart = 0
                }
            }
        }
    },
    mounted() {
        this.$refs.inputRef.focus();
        this.getIndexProduct()
    },
}
</script>
<style scoped>
@import url(../../assets/register.css);
</style>