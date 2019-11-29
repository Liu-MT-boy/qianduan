import axios from 'axios'
// 基准路径
axios.defaults.baseURL = 'http://localhost:3000'

// 添加拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('heima_back_39_token')
  if (token) {
    console.log('调用证据')
    config.headers.Authorization = token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 暴露
export default axios
