<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="wrapper">
        <div class="row" style="height: auto;">
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
                        <div class="carousel-item active">
                            <img src="https://i.pinimg.com/564x/7f/ca/ce/7fcacecdc99bf625233bc7f2e5fe19e5.jpg" class="d-block w-100 slide-img" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="https://i.pinimg.com/564x/01/6a/6e/016a6eb00d62db30b8f6ad4e10d8ada5.jpg" class="d-block w-100 slide-img" alt="">
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
            <div class="col-8 mt-5">

                <div class="info-login-box col-8">
                    <div class="app-logo">
                        <img src="https://i.pinimg.com/564x/f4/07/f0/f407f09d1dd37d1026b70627ef04e64c.jpg" alt="">
                    </div>
                    <h4>
                        <div class="welcome">Forgot your Password?</div>
                        <span>Use the form below to recover it.</span>
                    </h4>
                    <form action="" @click.prevent.stop="forget">
                        <div class="row pt-3 pb-3">
                            <div class="col-9">
                                <label class="form-label" for="">Email</label>
                                <input class="form-control" type="email"  v-model="forgetEmail"  placeholder="Email here...">
                                <span class="err-pass" v-if="!!valid.email">{{ valid.email }}</span>
                                <div class="lds-ellipsis" v-if="loading"><div></div><div></div><div></div><div></div></div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <router-link class="to-signup pe-3" to="/login">
                                Sign in existing account
                            </router-link>
                            <button class="submit-recover" type="submit">
                                Recover Password
                            </button>
                        </div>
                    </form>
                </div>
                <ConfirmPass :activeFormConfirm="activeFormConfirm" :email="forgetEmail" @closeCF="closeFormConfirm"></ConfirmPass>
            </div>
        </div>
    </div>
</template>

<script>
import ConfirmPass from '../../components/confirmPass'
import userService from '@/services/user.service';
export default {
    components: {
        ConfirmPass
    },
    data() {
        return {
            valid: {
                email: '',
                password: '',
            },
            isValid: false,
            messageSuccess: '',
            messageFailure: '',
            forgetEmail: '',
            loading: false,
            activeFormConfirm: false,
            verificationCode: [],
        };
    },
    methods: {
        async forget() {
            try {
                const email = this.forgetEmail;
                // this.loading = true;
                const response = await userService.forget({ email });
                this.loading = false;
                if (!response.data.status) {
                    this.messageSuccess = '';
                    this.messageFailure = response.data.mes;
                    // alert(this.messageFailure)
                } else {
                    (this.activeFormConfirm = true);
                    this.messageSuccess = '';
                    this.messageFailure = '';
                }
            } catch (error) {
                console.log(error);
            }
        },
        closeFormConfirm() {
            this.activeFormConfirm = false;
        },
    }
}
</script>

<style scoped>
@import url(../../assets/forgetpass);
</style>