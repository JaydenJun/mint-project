<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <img src="@/assets/001.png" slot="icon" />
        UI</mt-tab-item
      >
      <mt-tab-item id="2">
        <img src="@/assets/004.png" slot="icon" />
        电商</mt-tab-item
      >
      <mt-tab-item id="3">
        <img src="@/assets/007.png" slot="icon" />
        网页</mt-tab-item
      >
      <mt-tab-item id="4">
        <img src="@/assets/025.png" slot="icon" />
        交互</mt-tab-item
      >
    </mt-navbar>
    
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1"> UI内容 </mt-tab-container-item>
      <mt-tab-container-item id="2"> 电商内容 </mt-tab-container-item>
      <mt-tab-container-item id="3"> 网页内容 </mt-tab-container-item>
      <mt-tab-container-item id="4"> 交互内容 </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "1",
    };
  },
  methods: {
    show() {
      
    }
  },
};
</script>

<style lang="scss" scoped>
</style>