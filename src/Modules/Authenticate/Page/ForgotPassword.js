import React, { useEffect, useState } from "react"
import { Form, Button } from "reactstrap"
import { Formik } from "formik"
import FormField from "../../../components/FormField"
import { ForgotPasswordWrapper, ForgotPasswordButton } from "../assets/icon"

/* Helpers */
import { useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"

import {
  formSubmitErrorSelector,
  formSubmitDataResponseSelector,
  formSubmitLoadingSelector,
  formSubmitSuccessSelector
} from "../store/formForgotPassword/selector"
import { toast } from "react-toastify"
import { validationSchema, getValueForm } from "../validation/forgotPassword"
import { actions } from "../store/formForgotPassword/reducer"

import "../styles/index.scss"

const ForgotPassword = () => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()

  const [otpSent, setOtpSent] = useState(false)

  const [startCountDown, setStartCountDown] = React.useState(false)
  const [countDown, setCountDown] = React.useState(60)

  const error = useSelector((state) => formSubmitErrorSelector(state))
  const response = useSelector((state) => formSubmitDataResponseSelector(state))
  const loading = useSelector((state) => formSubmitLoadingSelector(state))
  const formSubmitSuccess = useSelector((state) =>
    formSubmitSuccessSelector(state)
  )

  const onSubmit = (values) => {
    setOtpSent(true)
    setStartCountDown(true)
    dispatch(actions.formForgotPasswordFnMethod(values))
  }

  React.useEffect(() => {
    let id = null
    if (startCountDown) {
      id = setInterval(() => {
        setCountDown((old) => old - 1)
      }, 1000)
    }
    return () => clearInterval(id)
  }, [startCountDown])

  React.useEffect(() => {
    if (countDown === 0) {
      setStartCountDown(false)
      setCountDown(60)
    }
  }, [countDown])

  useEffect(() => {
    if (error) {
      toast.error(response.error?.retText, {
        position: "top-center",
        autoClose: 3000
      })
      dispatch(actions.formForgotPasswordFnReset())
      return () => {
        dispatch(actions.formForgotPasswordFnReset())
      }
    }
    if (formSubmitSuccess) {
      toast.dismiss()
      history.push("/verify/0")
      return () => {
        dispatch(
          actions.formForgotPasswordFnReset({
            keepDataResponse: true
          })
        )
      }
    }
  }, [formSubmitSuccess, error])

  return !otpSent ? (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema(i18n)}
      initialValues={getValueForm({})}
    >
      {(formik) => {
        return (
          <Form onSubmit={(ev) => ev.preventDefault()}>
            <div className="forgot-password-page-wrapper">
              <h1 className="forgot-password-page__header">Quên mật khẩu</h1>
              <div style={{ position: "relative" }}>
                <ForgotPasswordWrapper />
                <div className="forgot-password__form-wrapper">
                  <FormField
                    field="username"
                    {...formik}
                    className="mb-2"
                    innerClass="text-center"
                    placeholder={i18n.t(`FormForgotPassword:field:user_name`)}
                  ></FormField>

                  <FormField
                    field="number_phone_or_email"
                    {...formik}
                    className="mb-2"
                    innerClass="text-center"
                    placeholder={i18n.t(
                      `FormForgotPassword:field:number_phone_or_email`
                    )}
                  ></FormField>
                  <p className="forgot-password-form_description">
                    Mã xác nhận sẽ được gửi về <br /> số điện thoại/ email để
                    xác thực
                  </p>
                  <div
                    onClick={() => {
                      formik.handleSubmit()
                    }}
                    className="forgot-password-form_button"
                  >
                    <ForgotPasswordButton />
                    <span className="forgot-password-form_button-text">
                      {i18n.t(`FormForgotPassword:btn_forgot_password`)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  ) : (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema(i18n)}
      initialValues={getValueForm({})}
    >
      {(formik) => {
        return (
          <Form onSubmit={(ev) => ev.preventDefault()}>
            <div className="forgot-password-page-wrapper">
              <h1 className="forgot-password-page__header">Quên mật khẩu</h1>
              <div style={{ position: "relative" }}>
                <ForgotPasswordWrapper />
                <div className="forgot-password__form-wrapper">
                  <FormField
                    field="otp"
                    {...formik}
                    className="mb-2"
                    innerClass="text-center"
                    placeholder={"Nhập OTP"}
                  ></FormField>
                  <p className="forgot-password-form_description">
                    {`Có hiệu lực trong ${countDown}s`} <br />
                    Chưa nhận được ?{" "}
                    <span
                      onClick={() => {
                        setStartCountDown(true)
                      }}
                      className="forgot-password-form__resend_otp"
                    >
                      Gửi lại
                    </span>
                  </p>

                  <FormField
                    field="password"
                    {...formik}
                    className="mb-2"
                    innerClass="text-center"
                    placeholder={"Mật khẩu mới"}
                  ></FormField>
                  <FormField
                    field="repassword"
                    {...formik}
                    className="mb-2"
                    innerClass="text-center"
                    placeholder={"Nhập lại mật khẩu mới"}
                  ></FormField>
                </div>
                <div
                  onClick={() => {
                    formik.handleSubmit()
                  }}
                  className="forgot-password-form__signin_button"
                >
                  <ForgotPasswordButton />
                  <span className="forgot-password-form_button-text">
                    Đăng nhập
                  </span>
                </div>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default ForgotPassword
