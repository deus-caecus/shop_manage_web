import request from '@/utils/interceptor'

export const loginService = (loginData) => {
  return request
    .post('/login', loginData)
    .then((response) => {
      return response
    })
    .catch(() => {
      console.log('axios错误')
    })
  // 返回从服务器得到的数据
}
