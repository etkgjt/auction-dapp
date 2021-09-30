import axios from "axios"
import { BASE_URL_API } from "@configs/api"

const axiosCreate = axios.create({
  baseURL: BASE_URL_API
})

axiosCreate.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error.message)
  }
)
axiosCreate.interceptors.request.use((request) => {
  return request
})

export default axiosCreate
