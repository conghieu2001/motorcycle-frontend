<template>
  <div class="overlay" v-if="activeFormReset">
    <div class="confirm-box-reset">
      <div class="confirm-titlee">Chọn mật khẩu mới</div>
      <form action="" @submit.prevent.stop="reset">
        <div class="input-code-box">
          <p>
            Tạo mật khẩu mới có tối thiểu 8 ký tự. Mật khẩu mạnh là mật khẩu được kết hợp
            từ các ký tự, số và dấu câu.
          </p>
          <div class="set-height">
            <div class="input-changepass">
              <input
                type="password"
                v-model="inforUser.password"
                placeholder="Mật khẩu mới"
              />
            </div>
            <span class="err-passw" v-if="!!valid.passWord">{{ valid.passWord }}</span>
          </div>
          <div class="set-height">
            <div class="input-changepass">
              <input
                type="password"
                v-model="inforUser.confirmPass"
                placeholder="Nhập lại mật khẩu mới"
              />
            </div>
            <span class="err-passw" v-if="!!valid.confirmPass">{{
              valid.confirmPass
            }}</span>
          </div>
        </div>
        <div class="submit-next-pre d-flex justify-content-end align-items-center">
          <div>
            <button class="close-button" @click="closeFormReset">Hủy</button>
            <button type="submit" class="next-button">Tiếp tục</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import userService from "@/services/user.service";
export default {
  data() {
    return {
      inforUser: {},
      valid: {
        passWord: "",
        confirmPass: "",
      },
      isValid: false,
      messageSuccess: "",
      messageFailure: "",
    };
  },
  props: {
    activeFormReset: Boolean,
    email: String,
  },
  emits: ["closeRS"],
  methods: {
    async reset() {
      this.validate(this.inforUser);
      if (this.isValid) {
        try {
          const data = {
            email: this.email,
            password: this.inforUser.password,
          };
          // console.log(data)
          const response = await userService.reset(data);
          if (response.data.status) {
            this.messageSuccess = response.data.mes;
            this.messageFailure = "";
            alert(this.messageSuccess);
            this.$router.push("/");
          } else {
            this.messageFailure = response.data.mes;
            this.messageSuccess = "";
            alert(this.messageFailure);
            this.$router.push("/");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("sai");
      }
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
    validate({ password, confirmPass }) {
      if (password != confirmPass) {
        this.valid.confirmPass = "Mật khẩu không trùng khớp";
      } else {
        this.valid.confirmPass = false;
      }
      if (!password || !password.match(/^[A-Za-z0-9]{8,}$/)) {
        this.valid.passWord = "Mật khẩu quá ngắn";
        this.valid.confirmPass = "Mật khẩu không trùng khớp";
      } else {
        this.valid.passWord = false;
      }
      this.isValid = this.hasFalseValue(this.valid);
    },
    closeFormReset() {
      this.$emit("closeRS");
    },
  },
};
</script>
<style scoped>
@import url(../assets/resetPass.css);
</style>
