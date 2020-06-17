// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'lib-flexible'
import App from './App'
import router from './router'
import i18n from './common/language/index'
import VueLazyload from 'vue-lazyload'


Vue.config.productionTip = false
Vue.use(VueLazyload,{
	preLoad:1,
	error:'',
	loading:'',
	attempt:1,
	listenEvents:['scroll','mousewheel']
})
window.saveUrl=function(url){
	console.log("url:",url)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
