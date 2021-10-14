import React, { useEffect, useState } from "react"
import { Form, Button, Input, Container } from "reactstrap"
import { Formik } from "formik"
import FormField from "../../../components/FormField"
import {
  ForgotPasswordWrapper,
  ForgotPasswordButton,
  ForgotPasswordFormWrapperMobile
} from "../assets/icon"

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
import {
  formSubmitErrorSelector as formVerifyAccountErrorSelector,
  formSubmitDataResponseSelector as formVerifyResponseSelector,
  formSubmitLoadingSelector as formVerifyLoadingSelector,
  formSubmitSuccessSelector as formVerifySuccessSelector
} from "../store/formVerifyAccount/selector"

import { toast } from "react-toastify"
import { validationSchema, getValueForm } from "../validation/forgotPassword"
import { actions } from "../store/formForgotPassword/reducer"
import { actions as verifyActions } from "../store/formVerifyAccount/reducer"

import "../styles/index.scss"
import "../responsive.scss"
import { sendOtp } from "../store/auth/service"
import { useMediaQuery } from "react-responsive"

const ForgotPassword = () => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState()
  const [formData, setFormData] = useState({})
  const [listAccount, setListAccount] = useState()
  const [startCountDown, setStartCountDown] = React.useState(false)
  const [countDown, setCountDown] = React.useState(60)

  const error = useSelector((state) => formSubmitErrorSelector(state))
  const response = useSelector((state) => formSubmitDataResponseSelector(state))
  const loading = useSelector((state) => formSubmitLoadingSelector(state))
  const formSubmitSuccess = useSelector((state) =>
    formSubmitSuccessSelector(state)
  )

  const verifyError = useSelector(formVerifyAccountErrorSelector)
  const verifyResponse = useSelector(formVerifyResponseSelector)
  const verifyLoading = useSelector(formVerifyLoadingSelector)
  const verifySuccess = useSelector(formVerifySuccessSelector)

  const onSubmit = (values) => {
    setFormData(values)
    dispatch(actions.formForgotPasswordFnMethod(values))
  }

  const getOtp = async (phoneNumber) => {
    const res = await sendOtp({ codeLanguage: "vi-VN", payload: phoneNumber })
    const data = res.data
    if (data.retCode === 0) {
      toast.success(data.retText, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      toast.error(data.retText, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
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
      setOtpSent(false)
      dispatch(actions.formForgotPasswordFnReset())
      return () => {
        dispatch(actions.formForgotPasswordFnReset())
      }
    }
    if (formSubmitSuccess) {
      setOtpSent(true)
      setStartCountDown(true)
    }
    return () => {
      dispatch(actions.formForgotPasswordFnReset())
    }
  }, [formSubmitSuccess, error])
  const onOtpSubmit = () => {
    dispatch(
      verifyActions.formVerifyAccountFnMethod({
        otp: otpCode,
        phone: formData?.number_phone_or_email,
        userName: formData?.username
      })
    )
  }
  useEffect(() => {
    if (verifyError) {
      toast.error(verifyResponse.error?.retText, {
        position: "top-center",
        autoClose: 3000
      })
    } else if (verifySuccess) {
      setListAccount(verifyResponse)
      setStartCountDown(false)
    }
    return () => {
      dispatch(verifyActions.formVerifyAccountFnReset())
    }
  }, [verifyError, verifyResponse])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return listAccount?.length ? (
    <div className="forgot-password-page-wrapper">
      <h1 className="forgot-password-page__header">Tài khoản của bạn</h1>
      <div className="forgot-password-form-wrapper">
        {isMobile ? (
          <ForgotPasswordFormWrapperMobile />
        ) : (
          <ForgotPasswordWrapper />
        )}

        <div className="forgot-password__form-wrapper">
          <div className="d-flex flex-column">
            <span className="result-account__text">{`Tài khoản: ${listAccount[0]?.userName}`}</span>
            <span className="result-account__text">{`Mật khẩu: ${listAccount[0]?.password}`}</span>
            <span className="result-account__text">{`${listAccount[0]?.activeCourse}`}</span>
          </div>

          <div
            onClick={() => {
              history.push("/")
            }}
            className="forgot-password-form__signin_button mt-5"
          >
            <ForgotPasswordButton />
            <span className="forgot-password-form_button-text">
              Trờ về trang chủ
            </span>
          </div>
        </div>
      </div>
    </div>
  ) : !otpSent ? (
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
              <div className="forgot-password-form-wrapper">
                {isMobile ? (
                  <ForgotPasswordFormWrapperMobile />
                ) : (
                  <ForgotPasswordWrapper />
                )}
                <div className="forgot-password__form-wrapper">
                  <FormField
                    field="username"
                    {...formik}
                    className="mt-2"
                    innerClass="text-center"
                    placeholder={i18n.t(`FormForgotPassword:field:user_name`)}
                  ></FormField>

                  <FormField
                    field="number_phone_or_email"
                    {...formik}
                    className="mt-2"
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
    <div className="forgot-password-page-wrapper">
      <h1 className="forgot-password-page__header">Quên mật khẩu</h1>
      <div className="forgot-password-form-wrapper">
        {isMobile ? (
          <ForgotPasswordFormWrapperMobile />
        ) : (
          <ForgotPasswordWrapper />
        )}
        <div className="forgot-password__form-wrapper">
          <Input
            className="form-field-rounded text-center"
            onChange={(e) => setOtpCode(e.target.value)}
            value={otpCode}
            placeholder="Nhập mã OTP"
          />
          <p className="forgot-password-form_description">
            {`Có hiệu lực trong ${countDown}s`} <br />
            Chưa nhận được ?{" "}
            <span
              onClick={() => {
                setStartCountDown(true)
                getOtp(formData?.number_phone_or_email)
              }}
              className="forgot-password-form__resend_otp"
            >
              Gửi lại
            </span>
          </p>
          <div
            onClick={onOtpSubmit}
            className="forgot-password-form__signin_button mt-2"
          >
            <ForgotPasswordButton />
            <span className="forgot-password-form_button-text">Xác nhận</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
