//导入axios  npm install axios
import axios from 'axios'
import { useTokenStore } from '@/stores/token.js'
import router from '@/router'
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api'
const instance = axios.create({ baseURL })

instance.interceptors.response.use(
  (result) => {
    return result.data
  },
  (err) => {
    alert('token未生效，请重新登录')
    router.push('/login')
    return Promise.reject(err) //异步的状态转化成失败的状态
  },
)
instance.interceptors.request.use(
  (config) => {
    //在发送请求之前做什么
    let tokenStore = useTokenStore()
    //如果token中有值，在携带
    if (tokenStore.token) {
      config.headers.Authorization = tokenStore.token
    }
    return config
  },
  (err) => {
    //如果请求错误做什么
    Promise.reject(err)
  },
)

export default instance
