import baseUrl from './base'
import axios from 'axios'

const api = {
  requestGet (url,params) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + url,params)
        .then(data => {
          resolve(data.data)
        }).catch(err => {
          reject(err)
      })
    })
  },
  requestPost (url,params) {
    return new Promise((reslove, reject) => {
      axios.post(baseUrl + url,params)
        .then(data => {
          reslove(data.data)
        }).catch(err => {
        reject(err)
      })
    })
  }
}

export default api
