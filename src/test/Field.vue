<template>
  <div>
    <mt-field  disableClear state="success" type="text" label="用户名" placeholder="用输入用户名"></mt-field>
    <mt-field :attr="{maxlength:11,a:'111',b:'222'}" state="error" type="password" label="密码" placeholder="用输入密码"></mt-field>
    <mt-field state="warning" type="text" label="手机号" placeholder="用输入手机号"></mt-field>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
