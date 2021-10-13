import API from "../../configs/api"
import apiMethodSTNHD from "@utility/ApiMethodSuperSchoolMemory"
export const getDownloadAppLink = () => {
  return apiMethodSTNHD.get(API.GET_DOWNLOAD_LINK)
}
