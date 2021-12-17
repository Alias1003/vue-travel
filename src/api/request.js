//对axios进行二次封装
import axios from 'axios'

//1.利用axios对象的方法create创建一个axios实例
//2.request就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    //基础路劲，发送请求的时候，路径当中会出现api
    baseURL:"/api",
    //请求超时的时间
    timeout: 5000,
});
//请求拦截器：在发送请求之前，请求拦截器可以检测到，可以在请求发出去之前做些操作
requests.interceptors.request.use((config)=>{
    //config：配置对象，对象里有一个属性很重要，headers请求头
    return config;
});
//相应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数，服务器相应数据回来以后，响应拦截器可以检测到，做些操作
    return res.data
},(error) => {
    //响应失败的回调函数
    return Promise.reject(new Error('faile'))
});

export default requests;