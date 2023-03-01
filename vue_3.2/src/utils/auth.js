//导入
import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

//登录时设置时间
export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}

//获取
export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}

//比较是否过期
export const diffTokenTime = () => {
  const currenTime = Date.now()
  const tokenTime = getTokenTime()
  return currenTime - tokenTime > TOKEN_TIME_VALUE
}
