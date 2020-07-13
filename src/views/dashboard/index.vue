<template>
  <div class="dashboard-container">
    <!--    <div class="dashboard-text">登录用户名: {{ name }}</div>-->
    <div class="dashboard-logo">
<!--      <img width="1000" height="500" alt="logo" src="../../icons/tu1.png">-->
      <p>长租系统 V2.0&nbsp;&nbsp;&nbsp;数据管理中心</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dashboard {
    position: relative;
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
    &-logo {
      position: absolute;
      right: 10px;
      bottom: 10px;
      /*top: 80px;
      left: 160px;*/
      text-align: center;
    }
  }
</style>
