import baseUrl from './base'
import axios from 'axios'
export default {
  requestGet(url){
    return new Promise((resolve,reject) => {
      axios.get(baseUrl + url)
        .then(data =>{
          resolve(data)
        })
        .catch(err =>{
          reject(err)
        })
    })
  },
  requestPost(url,params){
    console.log()
    return new Promise((resolve,reject) => {
      axios.post (baseUrl + url,params)
        .then(data =>{
          resolve(data)
        })
        .catch(err =>{
          reject(err)
        })
    })
  }
}
