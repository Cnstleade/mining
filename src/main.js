// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store/index.js';
import './assets/css/bootstrap.min.css'
import fastclick from 'fastclick'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});
fastclick.attach(document.body);

// router.beforeEach((to, from, next) => {
//    if (store.getters.role) { //判断role 是否存在
//     let arr = Array.isArray(store.getters.role) ? store.getters.role : store.getters.role.split(',');
//     if (store.getters.newrouter.length !== 0) {
//       let ar = arr.concat(['admin', '404', '403', 'login'])
//       next();
//       if (ar.some(v => {
//           return to.fullPath.slice(1) == v
//         })) {
//         next();
//       } else {
//         if (/h5/.test(to.fullPath.slice(1))) {
//           next();
//         } else {
//           next('/403')
//         }
//       }
//     } else {
//       let newrouter, roles = [];
//       arr.forEach(role => {
//         if (powerRouter[0].children.filter(route => {
//             if (route.meta) {
//               return route.meta.role == role
//             } else {
//               return true
//             }
//           })[0] !== undefined) {
//           roles.push(
//             powerRouter[0].children.filter(route => {
//               if (route.meta) {
//                 return route.meta.role == role
//               } else {
//                 return true
//               }
//             })[0]
//           )
//         }
//       })
//       newrouter = powerRouter
//       newrouter[0].children = roles;
//       router.addRoutes(newrouter) //添加动态路由
//       store.dispatch('Roles', newrouter).then(res => {
//         next({ ...to
//         })
//       }).catch(() => {
//       })
//     }
//   } else {
//     if (['/login'].indexOf(to.path) !== -1) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
//   store.dispatch('GetRouter', to).then(res => {

//   }).catch(() => {

//   })
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
