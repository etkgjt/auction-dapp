import React, { useEffect, useRef, useState } from "react"
import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import { Form, Row, Col, Button } from "reactstrap"
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
import {
  FormSignupInfoWrapper,
  FormSignUpAccountInfoWrapper,
  ForgotPasswordButton,
  FormSignUpAccountInfoWrapperMobile,
  FormSignupInfoWrapperMobile
} from "../assets/icon"

import { checkInviteCode, syncUserInfo } from "../store/formSignUp/service"
import { RETCODE_SUCCESS } from "../../../configs/contants"
import { useMediaQuery } from "react-responsive"
import { authLogout } from "../store/auth/actions"

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
      if (code && code !== 0) {
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

  return (
    <Formik
      innerRef={formRef}
      onSubmit={onSubmit}
      validationSchema={validationSchema(i18n)}
      initialValues={getValueForm({
        invite_code: invite_code
      })}
    >
      {(formik) => {
        return (
          <Form
            autocomplete="chrome-off"
            className="px-3"
            onSubmit={(ev) => ev.preventDefault()}
          >
            <div className="form-signup-container">
              <div className="form-signup__login-info-container">
                {isMobile ? (
                  <FormSignUpAccountInfoWrapperMobile />
                ) : (
                  <FormSignUpAccountInfoWrapper />
                )}

                <div className="form-signup__login-info-field-wrapper">
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
                    placeholder={i18n.t(`FormSignUp:field:confirm_password`)}
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
                  <span className="form-signup-description">
                    Vui lòng nhớ Tên đăng nhập để đăng nhập vào Tài Khoản
                  </span>
                </div>
              </div>
              <div className="form-signup__user-info-container">
                {isMobile ? (
                  <FormSignupInfoWrapperMobile />
                ) : (
                  <FormSignupInfoWrapper />
                )}

                <div className="form-signup__user-info-field-container">
                  <Row>
                    <Col xl="3" lg="3" md="3">
                      <span className="form-signup-field-label">
                        Họ và tên
                        {isMobile ? null : <br />} Học viên
                      </span>
                    </Col>
                    <Col xl="9" lg="9" md="9">
                      <FormField
                        field="student_name"
                        {...formik}
                        placeholder={i18n.t(`FormSignUp:field:student_name`)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl="3" lg="3" md="3">
                      <span className="form-signup-field-label">
                        Trường {isMobile ? null : <br />}
                        đang học
                      </span>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="8" xs="8">
                      <FormField field="school_name" {...formik} />
                    </Col>
                    <Col xl="3" lg="3" md="3" sm="4" xs="4">
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
                    <Col xl="3" lg="3" md="3">
                      <span className="form-signup-field-label">
                        Địa chỉ {isMobile ? null : <br />}
                        đang ở
                      </span>
                    </Col>
                    <Col xl="5" lg="5" md="5" sm="6" xs="6">
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
                    <Col xl="4" lg="4" md="4" sm="6" xs="6">
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
                    <Col xl="3" lg="3" md="3">
                      <span className="form-signup-field-label">
                        Họ và tên
                        {isMobile ? null : <br />}Phụ huynh
                      </span>
                    </Col>
                    <Col xl="9" lg="9" md="9">
                      <FormField
                        field="parent_fullname"
                        {...formik}
                        placeholder={i18n.t(`FormSignUp:field:parent_fullname`)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl="6" lg="6" md="6" sm="7" xs="7">
                      <FormField
                        field="email"
                        {...formik}
                        placeholder={"Email"}
                      />
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="5" xs="5">
                      <FormField
                        className="mr-1 w-100"
                        field="phone"
                        {...formik}
                        placeholder={"Điện thoại"}
                      />
                    </Col>
                  </Row>
                  <Row className="d-flex flex-row justify-content-center">
                    <Col xl="8" lg="8" md="8">
                      <div className="form-signup-otp-input-wrapper">
                        <FormField
                          field="otp"
                          {...formik}
                          placeholder={"Mã OTP xác thực"}
                          className="m-0 w-100"
                        />
                        <Button
                          className="send-otp-button"
                          // disabled={Boolean(formik.errors.phone)}
                          loading={loadingOtp}
                          onClick={() => getOtp(formik.values.phone)}
                        >
                          {"Gửi OTP"}
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div
                className="form-signup__submit-button"
                onClick={() => {
                  formik.handleSubmit()
                }}
              >
                <ForgotPasswordButton />
                <span>Hoàn thành đăng ký</span>
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Signup
