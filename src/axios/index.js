// 一、配置axios
import axios from 'axios'
import {ElMessage} from "element-plus";
// import store from '@/store/index' 如果使用vuex，那么token，userinfo都可以在登录以后存储到store中，不需要使用storage
// 获取浏览器的接口地址。
//https://api.test.esl-passport.cn/api/
let baseUrl = process.env.NODE_ENV === 'development' ? 'https://dev.api.eslpassport.com/api/' : 'https://dev.api.eslpassport.com/api/'
// axios配置
axios.defaults.baseURL = baseUrl
// 设置请求最大时长
axios.defaults.timeout = 16000
// axios.defaults.withCredentials = true
// 请求拦截器，设置token
axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');

    if (token && token !='' ) {
        config.headers.token = token
        // token && (config.headers.Authorization = token)
    }
    config.headers.platform = 4;
    return config
}, error => {
    // 可以安装elementui等ui组件，将错误信息输出到界面。
    // console.log(error)
    return Promise.error(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
        return response.data
    },
    error => {
        // console.log(error)
        if (error.response) {
            if (error.response.status == 401) {
                return window.location.href = '/login'
            } else {
                let errResponse = error.response;

                return  ElMessage({
                    message: errResponse.data.msg,
                    type: 'error'
                })
                // return Promise.reject(error.response);
            }
        }
        // 对响应错误做点什么
        if (!error.response) {
            return Promise.reject(error);
        }

    })

// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// @param file 上传文件对象
// @param auth 是否携带token
// get请求
export function get(url, data) {
    return axios.get(url, {
        params: data
    })
}

// post请求
export function post(url, data) {
    return axios.post(url, data)
}

// put请求
export function put(url, data) {
    return axios.put(url, data)
}

// delete 请求
export function del(url, data) {
    return axios.delete(url, data)
}

// upload 请求
export function uploader(url, file) {
    let params = new FormData()
    params.append('file', file)
    return axios.post(url, params)
}
