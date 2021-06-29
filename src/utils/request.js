import axios from 'axios'
import { Toast } from 'vant'

const { VITE_APP_BASE_API } = import.meta.env

const service = axios.create({
  baseURL: VITE_APP_BASE_API,
  // timeout: 15000 // 默认无超时
})

// request interceptor
service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const {code, msg} = response.data
    if(code === 200){
      return response.data
    }else{
      Toast.fail(msg)
      return Promise.reject()
    }

  },
  (error) => {
    Toast.fail('网络开小差了!')
    return Promise.reject(error)
  }
)

export default service
