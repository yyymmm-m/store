//路由守卫  登录之口才可以访问

import router from './index'
import store from '@/store'

//白名单 用户没登录可以访问的页面
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
