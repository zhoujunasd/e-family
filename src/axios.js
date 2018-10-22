import axios from 'axios'
import qs from 'qs'
import store from './store'

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000
})

// import store from './store'=====================================??????????
// // http request 拦截器
instance.interceptors.request.use(
    // 在发送请求之前做些什么
    config => {
        // console.log(config);
        if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.token = store.state.token;
        }
        return config;
    },
    err => {
    // 对请求错误做些什么
        return Promise.reject(err);
    }
);

// window.location.href = '/login'    ???
// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
    // 对响应数据做点什么
//         return response;
//     },
//     error => {
    // 对响应错误做点什么
//         if (error.response) {    
//             switch (error.response.status) {
//                 case 401:
//                     // 返回 401 清除token信息并跳转到登录页面
//                     store.commit(types.LOGOUT);
//                     router.replace({
//                         path: 'login',
//                         query: {
//                             redirect: router.currentRoute.fullPath
//                         }
//                     })
//             }
//         }
//         return Promise.reject(error.response.data) // 返回接口返回的错误信息
//     }
// );

// 移除拦截器
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

// 为axios实例添加拦截器
// var instance = axios.create();
// instance.interceptors.request.use(function () {/*...*/});

const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                proms: data,...config
            }, ).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        // 转义data
        let datastr = qs.stringify(data)
        return new Promise((resolve, reject) => {
            instance[methods](url, datastr, config).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    post(url, data, config, ) {
        return this.fetch(url, data, config, 'post')
    },

    // post(url, data, config, methods='post'){
    //     // instance.headers = {'Content-Type': 'application/x-www-form-urlencoded'}
    //     return new Promise((resolve, reject) => {
    //         instance[methods](url, data, config).then((res) => {
    //             resolve(res.data)
    //         }).catch((err) => {
    //             reject(err)
    //         })
    //     })
    // }
    // post(url,data,config,method='post'){
    //     instance.headers={'Content-Type': 'application/x-www-form-urlencoded'}
    //     return new Promise((resolve,reject)=>{
    //         instance[method](url,data,config).then((res)=>{
    //         resolve(res.data)
    //       })
    //     }).catch((err)=>{
    //         reject(err)
    //     })
    //   },

}

export default xhr