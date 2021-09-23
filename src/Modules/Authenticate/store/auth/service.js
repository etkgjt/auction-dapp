import API from '../../configs/api'
import apiMethod from '@utility/ApiMethod'

export const signIn = ({codeLanguage, payload}) => {
  return apiMethod.post(
    codeLanguage + API.POST_AUTH_SIGN_IN,
    payload
  )
}
export const sendOtp = ({codeLanguage, payload}) => {
  return apiMethod.post(codeLanguage + API.POST_SEND_OTP, 
    {
      phoneNumber: payload
    }
    )
}
