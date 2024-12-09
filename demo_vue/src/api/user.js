import request from '@/utils/request'
export const empMsgService = () => {
  return request
    .get('/Employee')
    .then((response) => {
      console.log('emp响应', response)
      console.log('emp响应数据', typeof response.data)
      return response
    })
    .catch(() => {
      console.log('axios错误')
    })
  // 返回从服务器得到的数据
}
