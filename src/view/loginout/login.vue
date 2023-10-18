<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="wrapper">
        <div class="row login-row" style="height: auto;">
            <div class="col-4">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/01/6a/6e/016a6eb00d62db30b8f6ad4e10d8ada5.jpg" class="d-block w-100 slide-img" alt="">
                        </div>
                        <div class="carousel-item active">
                            <img src="https://i.pinimg.com/564x/7f/ca/ce/7fcacecdc99bf625233bc7f2e5fe19e5.jpg" class="d-block w-100 slide-img" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/bb/30/0f/bb300fe445eaaa231af554255f1ca934.jpg" class="d-block w-100 slide-img" alt="">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon w-25" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon w-25" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                    </button>
                </div>
            </div>
            <div class="col-8 mt-4">

                <div class="info-login-box col-8">
                    <div class="app-logo">
                        <img src="https://i.pinimg.com/564x/f4/07/f0/f407f09d1dd37d1026b70627ef04e64c.jpg" alt="">
                    </div>
                    <h4>
                        <div class="welcome">Welcome back,</div>
                        <span>Please sign in to your account.</span>
                    </h4>
                    <h6 class="mt-3 forget-pass">No account? <router-link class="to-signup" to="/register">Sign up now</router-link></h6>
                    <div class="divider"></div>
                    <form action="" @submit.prevent.stop="login" >
                        <div class="row">
                            <div class="col-6">
                                <label class="form-label" for="">Email</label>
                                <input class="form-control" type="email" v-model="inforUser.email" placeholder="Email here..." required>
                            </div>
                            <div class="col-6">
                                <label class="form-label" for="">Password</label>
                                <input class="form-control" type="password" v-model="inforUser.password" placeholder="Password here..." required>
                                <span class="err-pass" v-if="!!valid.password">{{ valid.password }}</span>
                            </div>
                        </div>
                        <div class="divider mt-4"></div>
                        <div class="d-flex justify-content-end align-items-baseline">
                            <router-link class="to-signup pe-3" to="/forgetpass">
                                Recover Password
                            </router-link>
                            <button class="submit-login">
                                Login to Dashboard
                            </button>
                        </div>
                    </form>
                    <a class="login-google d-flex align-items-center mt-3" href="http://localhost:3000/user/google">
                        <svg width="40" height="40" role="img" class="google-icon">
                            <g id="Google-Button" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="40" height="40" rx="2"></rect>
                                <g id="logo_googleg_48dp" transform="translate(8, 8) scale(1.4300000000000002)">
                                    <path
                                        d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                                        id="Shape"
                                        fill="#4285F4"
                                    ></path>
                                    <path
                                        d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                                        id="Shape"
                                        fill="#34A853"
                                    ></path>
                                    <path
                                        d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                                        id="Shape"
                                        fill="#FBBC05"
                                    ></path>
                                    <path
                                        d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                                        id="Shape"
                                        fill="#EA4335"
                                    ></path>
                                    <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path>
                                </g>
                            </g>
                        </svg>
                        <span class="text-google"> Đăng nhập với google</span>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import userService from '../../services/user.service'
export default {
    data() {
        return {
            inforUser: {},
            valid: {
                email: '',
                password: '',
            },
            isValid: false,
            messageSuccess: '',
            messageFailure: '',
            activeFormForget:false
        }
    },
    methods: {
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
        validate({ password, email }) {
            if (!email || !email?.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                this.valid.email = 'Không đúng định dạng email';
            } else {
                this.valid.email = false;
            }

            if (!password || !password.match(/^[A-Za-z0-9]{5,}$/)) {
                this.valid.password = 'Mật khẩu quá ngắn';
            } else {
                this.valid.password = false;
            }
            this.isValid = this.hasFalseValue(this.valid);
        },

        async login() {
            this.messageSuccess = '';
            this.messageFailure = '';
            this.validate(this.inforUser);
            if (this.isValid) {
                try {
                    const response = await userService.login(this.inforUser);
                    if (response.status == 200) {
                        if (response.data.status) {
                            this.inforUser = {};
                            this.messageSuccess = response.data.mes;
                            this.messageFailure = '';
                            const user = JSON.stringify(response.data.user);
                            sessionStorage.setItem('user', user);
                            this.$router.push('/admin');
                        } else {
                            this.messageSuccess = '';
                            this.messageFailure = response.data.mes;
                            alert(this.messageFailure)
                            this.inforUser.email =''
                            this.inforUser.password =''
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log('chưa đúng thông tin');
            }
        },
    },
}
</script>

<style scoped>
@import url(../../assets/login.css);
</style>