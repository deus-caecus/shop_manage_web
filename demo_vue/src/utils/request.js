//导入axios  npm install axios
import axios from 'axios'
//定义一个变量,记录公共的前缀  ,  baseURL
const baseURL = '/api'
const instance = axios.create({ baseURL })

instance.interceptors.response.use(
  (result) => {
    return result.data
  },
  (err) => {
    alert('服务异常')
    return Promise.reject(err) //异步的状态转化成失败的状态
  },
)

instance.interceptors.request.use(
  (config)=>{
    if(config.url !== "/login"){
      config.headers.token = sessionStorage.getItem('token');
    }
    return config;
  },
  (err)=>{
    return Promise.reject(err) //异步的状态转化成失败的状态
  }
)
export default instance
