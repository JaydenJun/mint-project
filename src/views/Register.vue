<template>
  <div>
    <mt-header title="注册">
      <mt-button icon="back" slot="left"></mt-button>
      <router-link to="/login" slot="right">登录</router-link>
    </mt-header>
    <mt-field
      v-model="name"
      :state="nameState"
      type="text"
      label="用户名"
      placeholder="用输入用户名"
      @blur.native.capture="checkName"
    ></mt-field>
    <mt-field
      v-model="pwd"
      :state="pwdState"
      type="password"
      label="密码"
      placeholder="用输入密码"
      @blur.native.capture="checkPwd"
    ></mt-field>
    <mt-field
      v-model="repwd"
      state=""
      type="password"
      label="确认密码"
      placeholder="请再次输入密码"
      :state="repwdState"
      @blur.native.capture="checkRepwd"
    ></mt-field>
    <mt-button type="primary" size="large" @click="regist">快速注册</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      nameState: "",
      pwdState: "",
      repwdState: "",
      pwd: "",
      repwd: "",
    };
  },
  methods: {
    regist() {
      if (this.checkName() && this.checkPwd() && this.checkRepwd()) {
        console.log(`${this.name},${this.pwd},${this.repwd}`);
      }
    },
    checkName() {
      let reg = /^\w{3,15}$/;
      if (reg.test(this.name)) {
        this.nameState = "success";
        return true;
      } else {
        this.nameState = "error";
        return false;
      }
      console.log("用户名:" + this.name);
    },
    checkPwd() {
      let reg = /^\d{6}$/;
      if (reg.test(this.pwd)) {
        this.pwdState = "success";
        return true;
      } else {
        this.pwdState = "error";
        return false;
      }
    },
    checkRepwd() {
      let reg = /^\d{6}$/;
      if (reg.test(this.repwd) && this.pwd == this.repwd) {
        this.repwdState = "success";
        return true;
      } else {
        this.repwdState = "error";
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>