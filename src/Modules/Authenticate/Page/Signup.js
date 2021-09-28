import React, { useEffect, useRef, useState } from "react"
import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import { Form, Row, Col, Button } from "reactstrap"
import FormField from "../../../components/FormField"
import { Camera } from "react-feather"

import { getValueForm, validationSchema } from "../validation/signup"
import CustomLabel from "../../../components/CustomLabel"

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
import { useHistory } from "react-router-dom"

import { authSignIn, signInReset } from "../store/auth/actions"
import {
  errorSelector,
  loadingSelector,
  loginSuccessSelector
} from "../store/auth/selectors"
import "../styles/index.scss"

import {
  FormSignupInfoWrapper,
  FormSignUpAccountInfoWrapper,
  ForgotPasswordButton
} from "../assets/icon"

const Signup = () => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const error = useSelector((state) => formSubmitErrorSelector(state))
  const response = useSelector((state) => formSubmitDataResponseSelector(state))
  const loading = useSelector((state) => formSubmitLoadingSelector(state))

  const [itemsCity, setItemsCity] = useState([])
  const [keyCity, setKeyCity] = useState(1)
  const [itemsDistrict, setItemsDistrict] = useState([])
  const [keyDistrict, setKeyDistrict] = useState(1)
  const [itemsClass, setItemsClass] = useState([])
  const [keyClass, setKeyClass] = useState(1)

  const codeLanguage = useSelector((state) => state.common?.codeLanguage || [])
  const [loadingOtp, setLoadingOtp] = useState(false)
  const formSubmitSuccess = useSelector((state) =>
    formSubmitSuccessSelector(state)
  )
  const [userAvatar, setUserAvatar] = useState("")
  const [formData, setFormData] = useState({})

  const loginError = useSelector((state) => errorSelector(state))
  const loginLoading = useSelector((state) => loadingSelector(state))
  const loginSuccess = useSelector((state) => loginSuccessSelector(state))

  const cropImageRef = useRef()
  const formRef = useRef()

  const [shouldGoToActiveAccount, setShouldGoToActiveAccount] = useState(false)

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
      console.log("SUBMIT ERR", err)
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

  const autoLogin = () => {
    dispatch(
      authSignIn({
        username: formData?.username,
        password: formData?.password
      })
    )
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
    }
    return () => {
      dispatch(actions.formSignUpFnReset())
    }
  }, [formSubmitSuccess, error])

  useEffect(() => {
    getListCity()
    getListClass()
  }, [])

  useEffect(() => {
    if (loginError) {
      toast.error(i18n.t(`FormSignIn:errors:user_name_or_password.wrong`), {
        position: "top-center",
        autoClose: 3000
      })
    }
    if (loginSuccess) {
      toast.dismiss()
      history.push("/home")
      if (shouldGoToActiveAccount) {
        history.push("/accounts/active/0")
      }
    }
    return () => {
      dispatch(signInReset())
    }
  }, [loginError, loginSuccess])

  React.useEffect(() => {
    if (userAvatar?.imgSrc) {
      formRef.current?.handleSubmit()
    }
  }, [userAvatar])

  React.useEffect(() => {
    if (keyCity) {
      getListDistrict(keyCity)
    }
  }, [keyCity])

  return (
    <Formik
      innerRef={formRef}
      onSubmit={onSubmit}
      validationSchema={validationSchema(i18n)}
      initialValues={getValueForm({})}
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
                <FormSignUpAccountInfoWrapper />
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
                    placeholder={"Mã giới thiệu (nếu có)"}
                  />
                  <span className="form-signup-description">
                    Vui lòng nhớ Tên đăng nhập để đăng nhập vào Tài Khoản
                  </span>
                </div>
              </div>
              <div className="form-signup__user-info-container">
                <FormSignupInfoWrapper />
                <div className="form-signup__user-info-field-container">
                  <Row>
                    <Col xl="3" lg="3" md="3">
                      <span className="form-signup-field-label">
                        Họ và tên
                        <br /> Học viên
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
                        Trường <br />
                        đang học
                      </span>
                    </Col>
                    <Col xl="6" lg="6" md="6">
                      <FormField field="school_name" {...formik} />
                    </Col>
                    <Col xl="3" lg="3" md="3">
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
                        Địa chỉ <br />
                        đang ở
                      </span>
                    </Col>
                    <Col xl="5" lg="5" md="5">
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
                    <Col xl="4" lg="5" md="6">
                      <FormFieldSelect
                        borderLight
                        field="district"
                        {...formik}
                        valueDefault={formik.values.district}
                        handleChange={(value) =>
                          formik.setFieldValue("district", value)
                        }
                        placeholder={"Quận/ Huyện"}
                        options={itemsDistrict}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xl="3" lg="3" md="3">
                      <span className="form-signup-field-label">
                        Họ và tên
                        <br /> Phụ huynh
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
                    <Col xl="6" lg="6" md="6">
                      <FormField
                        field="email"
                        {...formik}
                        placeholder={"Email"}
                      />
                    </Col>
                    <Col xl="6" lg="6" md="6">
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
              <div className="form-signup__submit-button">
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
