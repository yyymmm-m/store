import { login as loginApi } from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'
export default {
  namespcaed: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo)
          .then((res) => {
            console.log(res)
            commit('setToken', res.token)
            setTokenTime()
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    //退出登录
    logout({ commit }) {
      commit('setToken', '')
      localStorage.clear()
      router.replace('/login')
    }
  }
}
