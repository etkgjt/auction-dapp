import * as Yup from "yup"
import { messageError, phoneRegex } from "@utils"

export const getValueForm = (valuesDefault = {}) => {
  return {
    phone: "",
    provider: "",
    ...valuesDefault
  }
}

export const validationSchema = (i18n) => {
  return Yup.object().shape({
    phone: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormForgotPassword:field:number_phone_or_email")
        )
      )
      .matches(
        phoneRegex,
        messageError(
          i18n.t("validation:emailOrPhoneRegex"),
          i18n.t("FormForgotPassword:field:number_phone_or_email")
        )
      ),
    provider: Yup.string()
      .nullable()
      .required(messageError(i18n.t("validation:required"), i18n.t("Provider")))
  })
}
