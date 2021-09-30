import * as Yup from "yup"
import {
  messageError,
  emailOrPhoneRegex,
  phoneRegex,
  fullNameRegex,
  usernameRegex
} from "@utils"
export const getValueForm = (valuesDefault = {}) => {
  return {
    user_name: null,
    parent_fullname: null,
    phone_number: null,
    email: null,

    children_fullname: null,
    school_name: null,
    class: null,

    gender: null,
    city: null,
    district: null,
    street_address: null,

    date_active: null,
    account: null,
    duration: null,

    ...valuesDefault
  }
}

export const validationSchema = (i18n) => {
  return Yup.object().shape({
    user_name: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormUpdate:field:user_name")
        )
      )
      .matches(
        usernameRegex,
        messageError(
          i18n.t("validation:user_name"),
          i18n.t("FormUpdate:field:user_name")
        )
      )
      .test(
        "len",
        messageError(
          i18n.t("validation:user_name"),
          i18n.t("FormUpdate:field:user_name")
        ),
        (val) => val?.toString().length > 5
      )
      .test(
        "len",
        messageError(
          i18n.t("validation:user_name"),
          i18n.t("FormUpdate:field:user_name")
        ),
        (val) => val?.toString().length < 13
      ),
    parent_fullname: Yup.string()
      .nullable()
      .matches(
        fullNameRegex,
        messageError(
          i18n.t("validation:full_name"),
          i18n.t("FormUpdate:field:parent_fullname")
        )
      )
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormUpdate:field:parent_fullname")
        )
      ),

    email: Yup.string()
      .nullable()
      .email(
        messageError(i18n.t("validation:email"), i18n.t("activeAccount:email"))
      )
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("activeAccount:email")
        )
      ),

    phone_number: Yup.string()
      .nullable()
      .matches(
        phoneRegex,
        messageError(
          i18n.t("validation:phone"),
          i18n.t("FormUpdate:field:phone_number")
        )
      )
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormUpdate:field:phone_number")
        )
      ),

    children_fullname: Yup.string()
      .nullable()
      .matches(
        fullNameRegex,
        messageError(
          i18n.t("validation:full_name"),
          i18n.t("activeLesson:children_fullname")
        )
      )
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("activeLesson:children_fullname")
        )
      ),
    school_name: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("activeAccount:school_name")
        )
      ),

    class: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("activeAccount:class_name")
        )
      ),

    street_address: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("activeAccount:full_address")
        )
      ),

    city: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormUpdate:field:city")
        )
      ),
    district: Yup.string()
      .nullable()
      .required(
        messageError(
          i18n.t("validation:required"),
          i18n.t("FormUpdate:field:district")
        )
      )
  })
}
