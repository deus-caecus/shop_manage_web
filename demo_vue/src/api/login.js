import request from '@/utils/request'

export const loginService = async (loginData) => {
  await request
    .post('/login', loginData)
    .then((response) => {
      console.log('11111', response)
      return response
    })
    .catch(() => {
      console.log('axios错误')
    })
  // 返回从服务器得到的数据
}
