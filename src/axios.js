import axios from 'axios'
import qs from 'qs'


const instance = axios.create({
    baseURL:'/api',
    timeout: 10000
})

const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            instance.get(url, { proms: data }, config).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods){
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
    post(url, data, config,){
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