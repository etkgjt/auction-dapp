import * as Yup from "yup"
import { messageError } from "@utils"

export const getValueForm = (valuesDefault = {}) => {
  return {
    old_password: null,
    new_password: null,
    confirm_new_password: ""
  }
}

export const validationSchema = (i18n) => {
  return Yup.object().shape({
    old_password: Yup.string()
      .nullable()
      .min(
        6,
        messageError(i18n.t("validation:min"), i18n.t("profile:old_password"), {
          "{length}": 6
        })
      )
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("profile:old_password")
        )
      ),
    new_password: Yup.string()
      .nullable()
      .min(
        6,
        messageError(i18n.t("validation:min"), i18n.t("profile:new_password"), {
          "{length}": 6
        })
      )
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("profile:new_password")
        )
      ),

    confirm_new_password: Yup.string()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:confirm_password")
        )
      )
      .oneOf(
        [Yup.ref("new_password"), null],
        i18n.t("profile:confirm_password_not_match")
      )
  })
}
