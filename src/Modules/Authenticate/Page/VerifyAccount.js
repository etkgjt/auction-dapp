import React, { useEffect } from "react"
import { Form, Button } from "reactstrap"
import { Formik } from "formik"
import FormField from "../../../components/FormField"
import AuthWrapper from "../Components/AuthWrapper"

import { useHistory, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import {
  formSubmitErrorSelector,
  formSubmitDataResponseSelector,
  formSubmitLoadingSelector,
  formSubmitSuccessSelector
} from "../store/formVerifyAccount/selector"
import { formSubmitDataResponseSelector as dataForgotPassword } from "../store/formForgotPassword/selector"
import { formSubmitDataResponseSelector as dataForgotUsername } from "../store/formForgotUsername/selector"
import { toast } from "react-toastify"
import { validationSchema, getValueForm } from "../validation/verify"
import { actions } from "../store/formVerifyAccount/reducer"
import { emailRegex, messageFormat, secretPhone } from "@utils"

const VerifyAccount = () => {
  const params = useParams()
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const error = useSelector((state) => formSubmitErrorSelector(state))
  const response = useSelector((state) => formSubmitDataResponseSelector(state))
  const loading = useSelector((state) => formSubmitLoadingSelector(state))
  const formSubmitSuccess = useSelector((state) =>
    formSubmitSuccessSelector(state)
  )
  const dataFormForgotPassword = useSelector((state) =>
    dataForgotPassword(state)
  )
  const dataFormForgotUserName = useSelector((state) =>
    dataForgotUsername(state)
  )

  const type = params?.type

  const formData = useSelector((state) => {
    const forgotPasswordPhone = dataFormForgotPassword?.userName

    return type === 0
      ? {
          phone: dataFormForgotPassword?.phone,
          type: "forgotPassword",
          userName: dataFormForgotPassword?.userName
        }
      : {
          phone: dataForgotUsername(state)?.phone,
          type: "forgotUsername"
        }
  })

  const isEmail = emailRegex.test(formData)

  const onSubmit = (values) => {
    if (formData) {
      dispatch(
        actions.formVerifyAccountFnMethod({
          otp: values.otp,
          ...formData
        })
      )
    } else {
      history.goBack()
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(response.error?.retText, {
        position: "top-center",
        autoClose: 3000
      })
      dispatch(actions.formVerifyAccountFnReset())
      return () => {
        dispatch(actions.formVerifyAccountFnReset())
      }
    }
    if (formSubmitSuccess) {
      toast.dismiss()
      history.push("/accounts/list")
      return () => {
        dispatch(
          actions.formVerifyAccountFnReset({
            keepDataResponse: true
          })
        )
      }
    }
  }, [formSubmitSuccess, error])

  return (
    <AuthWrapper
      title={i18n.t(`FormVerifyAccount:title`)}
      extra={
        isEmail
          ? messageFormat(i18n.t("FormVerifyAccount:title_description_email"), {
              "{_Email_}": secretPhone(formData.phone)
            })
          : messageFormat(i18n.t("FormVerifyAccount:title_description_phone"), {
              "{_Phone_}": secretPhone(formData.phone)
            })
      }
    >
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema(i18n)}
        initialValues={getValueForm({})}
      >
        {(formik) => {
          return (
            <Form onSubmit={(ev) => ev.preventDefault()}>
              <FormField
                field="otp"
                {...formik}
                className="mb-2"
                innerClass="text-center"
                placeholder={i18n.t(`FormVerifyAccount:field:otp`)}
              ></FormField>

              <Button
                color="primary"
                size="lg"
                block={true}
                className="mb-2"
                loading={loading}
                onClick={formik.handleSubmit}
              >
                {i18n.t(`FormVerifyAccount:btn_verify`)}
              </Button>
            </Form>
          )
        }}
      </Formik>
    </AuthWrapper>
  )
}

export default VerifyAccount
