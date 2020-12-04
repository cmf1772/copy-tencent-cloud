import axios from '../http'
import funJson from './classify/cmfAxios'

const article = {
  getMusicList (params) {
    return axios.post('/admin/index/getTjItem')
  },
}

export default article
