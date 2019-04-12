import baseUrl from './base'
import axios from 'axios'

const api = {
  requestGet (url) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + url)
        .then(data => {
          resolve(data.data)
        }).catch(err => {
          reject(err)
      })
    })
  },
  requestPost (url) {
    return new Promise((reslove, reject) => {
      axios.post(baseUrl + url)
        .then(data => {
          resolve(data.data)
        }).catch(err => {
        reject(err)
      })
    })
  }
}

export default api
