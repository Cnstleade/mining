import axios from 'axios';
import Vue from 'vue';
var qs = require('qs');
//axios 配置
axios.defaults.timeout = 6000000;
axios.defaults.baseURL = 'http://101.132.171.38:8088'; //本地服务器

//   /*得到代办人/
// export function httpFindAllSignature() {
//     return axios({
//       url: "/apmsg/findAllSignature",
//       method: "get",
  
//     })
//   }

// export function httpFindMessageRecording(pageNum, pageSize, messagerId) {
//     let data = {
//       pageNum,
//       pageSize,
//       messagerId
//     };
//     return axios({
//       url: "/apmsg/findMessageRecording",
//       method: "post",
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded'
//       },
//       data: qs.stringify(data)
//     })
//   }