<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from 'components/header/header'
import Tab from 'components/tab/tab'
  export default {
    components: {
      MyHeader,
      Tab
    }
  }
</script>

<style scoped lang="stylus">


</style>
