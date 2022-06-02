<template>
  <div>
    <mt-header title="登录">
      <mt-button icon="back" slot="left"></mt-button>
      <router-link to="/register" slot="right">新用户</router-link>
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
    <mt-button type="primary" size="large" @click="login">安全登录</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      nameState: "",
      pwdState: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      if (this.checkName() && this.checkPwd()) {
        console.log(`${this.name},${this.pwd}`);
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
  },
};
</script>
<style lang="scss" scoped>
</style>