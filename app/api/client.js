import {create} from 'apisauce'

const apiClient = create({
  baseURL: 'http://192.168.222.123:9000/api'
})

export default apiClient;