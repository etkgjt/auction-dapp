import React, { useEffect, useRef, useState } from "react"
import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import { Form, Row, Col, Button, Container } from "reactstrap"
import FormField from "../../../components/FormField"

import { getValueForm, validationSchema } from "../validation/signup"

import { actions } from "../store/formSignUp/reducer"
import { toast } from "react-toastify"
import {
  formSubmitErrorSelector,
  formSubmitDataResponseSelector,
  formSubmitLoadingSelector,
  formSubmitSuccessSelector
} from "../store/formSignUp/selector"
import { useDispatch, useSelector } from "react-redux"

import * as apiCommon from "../../../store/common/services"

import FormFieldSelect from "../../../components/FormFieldSelect"
import { sendOtp } from "../store/auth/service"
import { useHistory, useParams } from "react-router-dom"

import {
  errorSelector,
  loadingSelector,
  loginSuccessSelector
} from "../store/auth/selectors"
import "../styles/index.scss"
import "../responsive.scss"
import { SubmitFormButtonWhite } from "../assets/icon"

import { checkInviteCode, syncUserInfo } from "../store/formSignUp/service"
import { RETCODE_SUCCESS } from "../../../configs/contants"
import { useMediaQuery } from "react-responsive"
import { authLogout } from "../store/auth/actions"
import { ButtonWrapperWhite } from "../../Profile/assets/icon"

const Signup = () => {
  //HOOK
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const { invite_code } = useParams()
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isLogin = useSelector(loginSuccessSelector)

  //STATE
  const [itemsCity, setItemsCity] = useState([])
  const [keyCity, setKeyCity] = useState(1)
  const [itemsDistrict, setItemsDistrict] = useState([])
  const [keyDistrict, setKeyDistrict] = useState(1)
  const [itemsClass, setItemsClass] = useState([])
  const [keyClass, setKeyClass] = useState(1)
  const [loadingOtp, setLoadingOtp] = useState(false)
  const [userAvatar, setUserAvatar] = useState("")
  const [formData, setFormData] = useState({})
  const [disabledInviteCode, setDisableIntiveCode] = useState(false)

  const [startCountDown, setStartCountDown] = React.useState(false)
  const [countDown, setCountDown] = React.useState(30)

  //SELECTOR
  const error = useSelector(formSubmitErrorSelector)
  const response = useSelector(formSubmitDataResponseSelector)
  const loading = useSelector(formSubmitLoadingSelector)
  const codeLanguage = useSelector((state) => state.common?.codeLanguage || [])
  const formSubmitSuccess = useSelector(formSubmitSuccessSelector)
  const loginError = useSelector(errorSelector)
  const loginLoading = useSelector(loadingSelector)
  const loginSuccess = useSelector(loginSuccessSelector)

  const formRef = useRef()

  const checkValidInviteCode = async (code = "") => {
    try {
      if (code && code !== 0 && code !== "0") {
        const res = await checkInviteCode(code)
        if (res?.data?.retCode !== RETCODE_SUCCESS) {
          toast.error(res.data.retText, {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
          formRef.current.setFieldValue("invite_code", "")
        } else {
          toast.success("Mã giới thiệu hợp lệ", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
          setDisableIntiveCode(true)
        }
      }
    } catch (err) {}
  }

  const getListCity = async (payload = {}) => {
    try {
      const items = await apiCommon.getListCity({
        params: {
          where: payload
        }
      })

      if (items.status === 200) {
        setItemsCity(
          items.data.data.map((item) => ({ label: item.name, value: item.id }))
        )
      } else {
        setItemsCity([])
      }
    } catch (e) {
      setItemsCity([])
    }
    setKeyCity(keyCity + 1)
  }

  const getListClass = async () => {
    try {
      const res = await apiCommon.getListClass()
      setItemsClass(
        res.data?.data?.map((item) => ({ label: item?.name, value: item?.id }))
      )
    } catch (err) {
      setItemsClass([])
    }
  }

  const getListDistrict = async (field) => {
    try {
      const items = await apiCommon.getListDistrict({
        params: {
          ProvinceId: field
        }
      })

      if (items.status === 200) {
        setItemsDistrict(
          items.data.data.map((item) => ({ label: item.name, value: item.id }))
        )
      } else {
        setItemsDistrict([])
      }
    } catch (e) {
      setItemsDistrict([])
    }
    setKeyDistrict(keyDistrict + 1)
  }

  const onSubmit = async (values) => {
    try {
      setFormData(values)
      dispatch(actions.formSignUpFnMethod({ ...values, avartar: null }))
    } catch (err) {
      console.log("submit err", err)
    }
  }

  const getOtp = async (phoneNumber) => {
    setLoadingOtp(true)
    setStartCountDown(true)
    const res = await sendOtp({ codeLanguage, payload: phoneNumber })
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
    setLoadingOtp(false)
  }

  const fetchSyncUserInfo = async (payload) => {
    try {
      const res = await syncUserInfo(payload)

      if (res.data.retCode === RETCODE_SUCCESS) {
        toast.success("Đăng ký thành công", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        history.push("/")
      } else {
        toast.error(res.data.retText, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    } catch (err) {
      toast.error(err, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  useEffect(() => {
    if (error) {
      toast.error(response.error?.retText, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    if (formSubmitSuccess) {
      fetchSyncUserInfo({
        ...response,
        InviteCode: formRef.current?.values?.invite_code
          ? formRef.current?.values?.invite_code
          : ""
      })
    }
    return () => {
      dispatch(actions.formSignUpFnReset())
    }
  }, [formSubmitSuccess, error])

  useEffect(() => {
    getListCity()
    getListClass()
  }, [])

  React.useEffect(() => {
    if (keyCity) {
      getListDistrict(keyCity)
    }
  }, [keyCity])

  React.useEffect(() => {
    if (invite_code) {
      checkValidInviteCode(invite_code)
    }
  }, [invite_code])

  React.useEffect(() => {
    if (isLogin) dispatch(authLogout())
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      setCountDown(30)
    }
  }, [countDown])

  return (
    <Formik
      innerRef={formRef}
      onSubmit={onSubmit}
      validationSchema={validationSchema(i18n)}
      initialValues={getValueForm({
        invite_code: invite_code === "0" ? null : invite_code
      })}
    >
      {(formik) => {
        return (
          <Form
            autocomplete="chrome-off"
            onSubmit={(ev) => ev.preventDefault()}
          >
            <div className="form-signup-container">
              <div className="form-signup-wrapper">
                <Row>
                  <Col xl="5" lg="5" className="px-0">
                    <div className="form-signup__login-info-container">
                      <FormField
                        field="username"
                        {...formik}
                        placeholder={i18n.t(`FormSignUp:field:user_name`)}
                      />
                      <FormField
                        field="password"
                        type="password"
                        {...formik}
                        placeholder={i18n.t(`FormSignUp:field:password`)}
                      />
                      <FormField
                        field="confirm_password"
                        type="password"
                        {...formik}
                        placeholder={i18n.t(
                          `FormSignUp:field:confirm_password`
                        )}
                      />
                      <FormField
                        field="invite_code"
                        {...formik}
                        disabled={disabledInviteCode}
                        onBlurCustom={() => {
                          checkValidInviteCode(formik.values["invite_code"])
                        }}
                        placeholder={"Mã giới thiệu (nếu có)"}
                      />
                      <p className="form-signup-description">
                        Vui lòng nhớ Tên đăng nhập để đăng nhập vào Tài Khoản
                      </p>
                    </div>
                  </Col>
                  <Col xl="7" lg="7" className="px-0">
                    <div className="form-signup__user-info-container">
                      <div className="form-signup__user-info-field-container">
                        <Row>
                          <Col xl="2" lg="2" md="2" className="px-0">
                            <span className="form-signup-field-label">
                              Họ và tên
                              {isMobile ? null : <br />} Học viên
                            </span>
                          </Col>
                          <Col xl="10" lg="10" md="10" className="px-0">
                            <FormField
                              field="student_name"
                              {...formik}
                              placeholder={i18n.t(
                                `FormSignUp:field:student_name`
                              )}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col xl="2" lg="2" md="2" className="px-0">
                            <span className="form-signup-field-label">
                              Trường {isMobile ? null : <br />}
                              đang học
                            </span>
                          </Col>
                          <Col
                            xl="6"
                            lg="6"
                            md="6"
                            sm="8"
                            xs="8"
                            className="px-0"
                          >
                            <FormField field="school_name" {...formik} />
                          </Col>
                          <Col
                            xl="4"
                            lg="4"
                            md="4"
                            sm="4"
                            xs="4"
                            style={{ paddingRight: 0 }}
                          >
                            <FormFieldSelect
                              borderLight
                              field="class_name"
                              {...formik}
                              valueDefault={formik.values.class_name}
                              handleChange={(value) =>
                                formik.setFieldValue("class_name", value)
                              }
                              placeholder={"Lớp"}
                              options={itemsClass}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col xl="2" lg="2" md="2" className="px-0">
                            <span className="form-signup-field-label">
                              Địa chỉ {isMobile ? null : <br />}
                              đang ở
                            </span>
                          </Col>
                          <Col
                            xl="5"
                            lg="5"
                            md="5"
                            sm="6"
                            xs="6"
                            className="px-0"
                          >
                            <FormFieldSelect
                              borderLight
                              field="city"
                              {...formik}
                              valueDefault={formik.values.city}
                              handleChange={(value) => {
                                formik.setValues({
                                  ...formik.values,
                                  city: value,
                                  district: ""
                                })
                                setKeyCity(value)
                              }}
                              placeholder={"Tỉnh/ Thành phố"}
                              options={itemsCity}
                            />
                          </Col>
                          <Col
                            xl="5"
                            lg="5"
                            md="5"
                            sm="6"
                            xs="6"
                            style={{ paddingRight: 0 }}
                          >
                            <FormFieldSelect
                              borderLight
                              field="district"
                              {...formik}
                              valueDefault={formik.values.district}
                              handleChange={(value) =>
                                formik.setFieldValue("district", value)
                              }
                              placeholder={"Quận/Huyện"}
                              options={itemsDistrict}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col xl="2" lg="2" md="2" className="px-0">
                            <span className="form-signup-field-label">
                              Họ và tên
                              {isMobile ? null : <br />}Phụ huynh
                            </span>
                          </Col>
                          <Col xl="10" lg="10" md="10" className="px-0">
                            <FormField
                              field="parent_fullname"
                              {...formik}
                              placeholder={i18n.t(
                                `FormSignUp:field:parent_fullname`
                              )}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            xl="6"
                            lg="6"
                            md="6"
                            sm="7"
                            xs="7"
                            className="px-0"
                          >
                            <FormField
                              field="email"
                              {...formik}
                              placeholder={"Email"}
                            />
                          </Col>
                          <Col
                            xl="6"
                            lg="6"
                            md="6"
                            sm="5"
                            xs="5"
                            style={{ paddingRight: 0 }}
                          >
                            <FormField
                              className="mr-1 w-100"
                              field="phone"
                              {...formik}
                              placeholder={"Điện thoại"}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="12"
                    className="d-flex flex-row justify-content-center"
                  >
                    <div className="form-signup-otp-input-wrapper">
                      <FormField
                        field="otp"
                        {...formik}
                        placeholder={"Mã OTP xác thực"}
                        className="m-0 w-100"
                      />
                      <Button
                        className="send-otp-button"
                        loading={loadingOtp}
                        onClick={() => {
                          getOtp(formik.values.phone)
                        }}
                      >
                        {"Gửi OTP"}
                      </Button>
                    </div>
                  </Col>
                  <p className="otp-description">
                    {`Có hiệu lực trong ${countDown}s`} <br />
                    Chưa nhận được ?{" "}
                    <span
                      onClick={
                        startCountDown
                          ? () => {}
                          : () => {
                              setStartCountDown(true)
                              getOtp(formData?.number_phone_or_email)
                            }
                      }
                      className="resend_otp"
                    >
                      Gửi lại
                    </span>
                  </p>
                  <Col>
                    <div
                      className="form-signup__submit-button"
                      onClick={() => {
                        formik.handleSubmit()
                      }}
                    >
                      <SubmitFormButtonWhite />
                      <span>Hoàn thành đăng ký</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Signup
