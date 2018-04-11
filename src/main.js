// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
// 实现对es6新api的支持

import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// 处理移动端click事件300毫秒延迟

import Vuelazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

//懒加载
Vue.use(Vuelazyload, {
  loading:require('common/image/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
