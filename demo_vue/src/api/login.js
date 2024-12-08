import request from '@/utils/request'
export const loginService = (loginData) => {
  try {
    const response = request.post('/login', loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data // 返回从服务器得到的数据
  } catch (error) {
    // 错误处理逻辑
    console.error('登录失败:', error.response ? error.response.data : error.message)
    throw error
  }
}
