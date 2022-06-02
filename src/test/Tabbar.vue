<template>
  <div>
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
      tabselected: "index",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>