import * as Yup from "yup"
import { messageError, emailRegex, phoneRegex } from "@utils"

export const getValueForm = (valuesDefault = {}) => {
  return {
    avatar: "",
    username: "",
    password: "",
    confirm_password: "",
    parent_fullname: "",
    student_name: "",
    class_name: "",
    school_name: "",
    city: "",
    district: "",
    address: "",
    email: "",
    phone: "",
    otp: "",
    ...valuesDefault
  }
}

export const validationSchema = (i18n) => {
  return Yup.object().shape({
    username: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:user_name")
        )
      ),
    parent_fullname: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:parent_fullname")
        )
      ),
    student_name: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:student_name")
        )
      ),
    school_name: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:school_name")
        )
      ),
    class_name: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:class_name")
        )
      ),
    city: Yup.string()
      .nullable()
      .required(
        messageError(i18n.t("validation:required"), i18n.t("common:city"))
      ),
    district: Yup.string()
      .nullable()
      .required(
        messageError(i18n.t("validation:required"), i18n.t("common:district"))
      ),
    email: Yup.string()
      .nullable()
      .required(
        messageError(i18n.t("validation:required"), i18n.t("common:email"))
      )
      .matches(
        emailRegex,
        messageError(i18n.t("validation:invalid_email"), i18n.t("common:email"))
      ),
    phone: Yup.string()
      .nullable()
      .required(
        messageError(i18n.t("validation:required"), i18n.t("common:phone"))
      )
      .matches(
        phoneRegex,
        messageError(i18n.t("validation:invalid_phone"), i18n.t("common:phone"))
      ),
    otp: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:otp")
        )
      ),
    password: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:password")
        )
      ),
    confirm_password: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormSignUp:field:password")
        )
      )
      .oneOf(
        [Yup.ref("password"), null],
        i18n.t("FormSignUp:field:confirm_password_must_match")
      )
  })
}
