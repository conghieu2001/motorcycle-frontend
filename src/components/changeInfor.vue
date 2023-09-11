<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="overlayy" v-if="activeFormChangeInfor">
    <div class="box-changeInfor-pass" >
      <div
        class="d-flex justify-content-end align-items-baseline confirm-titlee"
      >
        <div class="title-changeInfor">Chỉnh sửa thông tin cá nhân</div>
        <div class="me-3 background-close" @click="closeFormChangeInfor">
          <div>
            <svg
              class="icon-close"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 352 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              />
            </svg>
          </div>
        </div>
      </div>
      <form class="ps-4 pe-4" @submit.prevent.stop="updateUser" enctype="multipart/form-data">
        <div class="user-image d-flex mt-3">
          <h5>Ảnh hồ sơ</h5>
          <div class="user-image-edit">
            <img
              :src="'http://localhost:3000/' +inforUser2.avatar"
              alt="avatar"
            />
            <input type="file" @change="handleSelectFile" />
          </div>
        </div>
        <hr>
        <div class="user-name d-flex mt-3 mb-3">
          <h5 class="">Tên</h5>
          <input class="ps-3" type="text"  v-model="inforUser2.fullName"/>
        </div>
        <hr>
        <div class="user-email d-flex mt-3 mb-3">
          <h5>Email</h5>
          <input class="ps-3" type="email" v-model="inforUser2.email" />
        </div>
        <hr>
        <div class="user-sdt d-flex mt-3 mb-3">
          <h5>SĐT</h5>
          <input class="ps-3" type="text"  v-model="inforUser2.phoneNumber"/>
        </div>
        <hr>
        <div class="user-sdt d-flex mt-3 mb-3">
          <h5>Vị Trí</h5>
          <input class="ps-3" type="text"  v-model="inforUser2.roles" disabled/>
        </div>
        <hr>
        <button type="submit" class="next-button-changeInfor mb-4 mt-3" >
                            Tiếp tục
                        </button>
      </form>
    </div>
  </div>
</template>
<script>
import userService from '../services/user.service';
// import userService2 from '../services/userupdate.service';
export default {
  data() {
    return {
      image: null,
    }
  },
  props: {
    activeFormChangeInfor: {type: Boolean},
    inforUser2: {}
  },
  emits: ['closeFCI', 'refresh'],
  methods: {
    closeFormChangeInfor() {
      this.$emit("closeFCI");
    },
    
    async logout(){
            try {
                await userService.logout()
                sessionStorage.removeItem('user')
                this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
        },
    async updateUser() {
            try{
              const data = {
                ...this.inforUser2,
                image: this.image
              }
              console.log(data)
                const response = await userService.update(data)
                if (!response.data.status) {
                        this.messageSuccess = "";
                        this.messageFailure = response.data.mes;
                        alert(this.messageFailure)
                    } else {
                        this.messageSuccess = "";
                        this.messageFailure = "";
                        sessionStorage.removeItem('user')
                        this.closeFormChangeInfor()
                        this.$emit("refresh");
                    }
            }catch(error) {
                console.log(error)
            }
        },
        handleSelectFile(event){
            this.image = event.target.files[0] || '';
          console.log(this.image)
        },
  },
  mounted() {
    // console.log(this.inforUser2Id)
    // this.getUserById()
  },

}
</script>
<style>
@import url(../assets/changeInfor.css);
</style>
