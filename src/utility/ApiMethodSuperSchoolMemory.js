import axios from "axios"
import { BASE_URL_API, BASE_URL_API_STNHD } from "@configs/api"

const axiosCreate = axios.create({
  baseURL: BASE_URL_API_STNHD
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
