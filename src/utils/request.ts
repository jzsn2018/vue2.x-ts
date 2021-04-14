/*
 * @Date: 2021-04-14 15:56:54
 * @LastEditors: Timothy
 * @LastEditTime: 2021-04-14 17:31:33
 * @Description:
 */
import axios from 'axios'
const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
  timeout: 10000
})
export default request
