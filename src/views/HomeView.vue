<template>
  <div>
    <mt-header title="学前端，到达内">
      <div slot="right">
        <router-link to="/register" class="link">注册</router-link>
        &nbsp;
        <router-link to="/login" class="link">登录</router-link>
      </div>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1"> UI</mt-tab-item>
      <mt-tab-item id="2"> 电商</mt-tab-item>
      <mt-tab-item id="3"> 网页</mt-tab-item>
      <mt-tab-item id="4"> 交互</mt-tab-item>
    </mt-navbar>
    <mt-tabbar v-model="tabselected">
      <mt-tab-item id="index">
        <img
          :src="
            require(`@/assets/common/main_${
              tabselected == 'index' ? '1' : '0'
            }.png`)
          "
          slot="icon"
        />
        首页</mt-tab-item
      >
      <mt-tab-item id="cart">
        <img
          v-if="tabselected == 'cart'"
          src="@/assets/common/cart_1.png"
          slot="icon"
        />
        <img v-else src="@/assets/common/cart_0.png" slot="icon" />
        购物车</mt-tab-item
      >
      <mt-tab-item id="me">
        <img
          v-if="tabselected == 'me'"
          src="@/assets/common/me_1.png"
          slot="icon"
        />
        <img v-else src="@/assets/common/me_0.png" slot="icon" />
        我的</mt-tab-item
      >
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
      tabselected: "index",
    };
  },
};
</script>

<style scoped>
.link {
  color: #fff;
}
</style>