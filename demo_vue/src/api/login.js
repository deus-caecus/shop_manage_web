import request from '@/utils/request'
export const loginService = async (loginData) => {
  try {
    const response = await request
      .post('/login', loginData);
    return response.data;
  } catch (error) {
    // 错误处理：检查是否有响应数据
    if (error.response) {
      // 服务器响应了一个错误状态码（如4xx, 5xx）
      console.error('Server responded with an error:', error.response.data);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('No response received:', error.request);
    } else {
      // 某种错误触发了请求的创建
      console.error('Error creating the request:', error.message);
    }
    // 抛出错误，以便调用者能够捕获并处理它
    console.log("unknown error");
    throw error;
  }
  // 返回从服务器得到的数据
}
