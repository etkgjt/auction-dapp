import React, { useEffect, useRef, useState } from "react"
import { Formik } from "formik"
import { useTranslation } from "react-i18next"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  Row,
  Col,
  Button
} from "reactstrap"
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
    dispatch(getProvince())
    // dispatch(getDistrict(1))
    dispatch(getSchoolClass())
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

  return (
    <Formik
      innerRef={formRef}
      onSubmit={onSubmit}
      validationSchema={validationSchema(i18n)}
      initialValues={getValueForm({})}
    >
      {(formik) => {
        return (
          <Form className="px-3" onSubmit={(ev) => ev.preventDefault()}>
            <Card>
              <CardHeader className="m-auto">
                <CardTitle className="card-head-title text-danger">
                  {i18n.t("FormSignUp:title")}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs={12} md={9}>
                    <Card className="card-gray mb-1">
                      <CardBody>
                        <CustomLabel type="subtitles" className="mb-2">
                          {i18n.t("FormSignUp:sub_title")}
                        </CustomLabel>
                        <Row>
                          <Col xs={12} lg={6}>
                            <FormField
                              field="username"
                              {...formik}
                              label={i18n.t(`FormSignUp:field:user_name`)}
                              placeholder={i18n.t(`FormSignUp:field:user_name`)}
                              className="mb-2"
                            ></FormField>
                          </Col>
                          <Col xs={12} lg={6}>
                            <FormField
                              field="password"
                              type="password"
                              {...formik}
                              label={i18n.t(`FormSignUp:field:password`)}
                              placeholder={i18n.t(`FormSignUp:field:password`)}
                            ></FormField>
                          </Col>
                          <Col xs={12} lg={6}>
                            <FormField
                              field="confirm_password"
                              type="password"
                              {...formik}
                              label={i18n.t(
                                `FormSignUp:field:confirm_password`
                              )}
                              placeholder={i18n.t(
                                `FormSignUp:field:confirm_password`
                              )}
                            ></FormField>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card className="card-gray mb-1">
                      <CardBody>
                        <CustomLabel type="subtitles" className="mb-2">
                          {i18n.t("FormSignUp:student_information")}
                        </CustomLabel>
                        <Row>
                          <Col xs={12} lg={6}>
                            <FormField
                              field="parent_fullname"
                              {...formik}
                              label={i18n.t(`FormSignUp:field:parent_fullname`)}
                              placeholder={i18n.t(
                                `FormSignUp:field:parent_fullname`
                              )}
                              className="mb-2"
                            ></FormField>
                          </Col>
                          <Col xs={12} lg={6}>
                            <FormField
                              field="student_name"
                              {...formik}
                              label={i18n.t(`FormSignUp:field:student_name`)}
                              placeholder={i18n.t(
                                `FormSignUp:field:student_name`
                              )}
                            ></FormField>
                          </Col>
                          <Col xs={12} lg={6}>
                            <FormField
                              field="school_name"
                              {...formik}
                              label={i18n.t(`FormSignUp:field:school_name`)}
                              placeholder={i18n.t(
                                `FormSignUp:field:school_name`
                              )}
                              className="mb-2"
                            ></FormField>
                          </Col>
                          <Col xs={12} lg={6}>
                            <FormFieldSelect
                              borderLight
                              field="class_name"
                              {...formik}
                              valueDefault={formik.values.class_name}
                              handleChange={(value) =>
                                formik.setFieldValue("class_name", value)
                              }
                              label={i18n.t(`FormSignUp:field:class_name`)}
                              placeholder={i18n.t(
                                `FormSignUp:field:class_name`
                              )}
                              options={[]}
                              className="mb-2"
                            ></FormFieldSelect>
                          </Col>
                          <Col xs={12} lg={6}>
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
                                dispatch(getDistrict(value))
                              }}
                              label={i18n.t(`common:city`)}
                              placeholder={i18n.t(`common:city`)}
                              options={itemsDistrict}
                              className="mb-2"
                            ></FormFieldSelect>
                          </Col>
                          <Col xs={12} lg={6}>
                            <FormFieldSelect
                              borderLight
                              field="district"
                              {...formik}
                              valueDefault={formik.values.district}
                              handleChange={(value) =>
                                formik.setFieldValue("district", value)
                              }
                              label={i18n.t(`common:district`)}
                              placeholder={i18n.t(`common:district`)}
                              options={itemsDistrict}
                            ></FormFieldSelect>
                          </Col>
                          <Col xs={12}>
                            <FormField
                              field="address"
                              {...formik}
                              label={i18n.t(`common:address`)}
                              placeholder={i18n.t(`common:address`)}
                            ></FormField>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card className="card-gray mb-1">
                      <CardBody>
                        <CustomLabel type="subtitles" className="mb-2">
                          {i18n.t("FormSignUp:enter_credentials")}
                        </CustomLabel>
                        <Row>
                          <Col xs={12} lg={6}>
                            <FormField
                              field="email"
                              {...formik}
                              label={i18n.t(`common:email`)}
                              placeholder={i18n.t(`common:email`)}
                              className="mb-2"
                            ></FormField>
                          </Col>
                          <Col xs={12} lg={6}>
                            <div className="d-flex">
                              <FormField
                                className="mr-1 w-100"
                                field="phone"
                                {...formik}
                                label={i18n.t(`common:phone`)}
                                placeholder={i18n.t(`common:phone`)}
                              ></FormField>
                              <Button
                                style={{
                                  marginTop: 25,
                                  width: 100,
                                  height: 52
                                }}
                                color="orange"
                                disabled={Boolean(formik.errors.phone)}
                                loading={loadingOtp}
                                onClick={() => getOtp(formik.values.phone)}
                              >
                                {i18n.t("FormSignUp:send_otp")}
                              </Button>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <FormField
                              field="otp"
                              {...formik}
                              label={i18n.t(`FormSignUp:field:otp`)}
                              placeholder={i18n.t(`FormSignUp:field:otp`)}
                            ></FormField>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row className="d-flex flex-row justify-content-end">
                  <div className="w-75 d-flex flex-row justify-content-end">
                    <div className="w-50 d-flex flex-row">
                      <Col
                        className="d-flex justify-content-end"
                        style={{ height: 48 }}
                      >
                        <Button
                          className="buttonWhite"
                          onClick={() => {
                            history.push("/home")
                          }}
                          block
                        >
                          {i18n.t("FormActive:cancel")}
                        </Button>
                      </Col>
                      <Col
                        className="d-flex justify-content-end"
                        style={{ height: 48 }}
                      >
                        <Button
                          onClick={() => {
                            if (cropImageRef.current?.submitCrop) {
                              cropImageRef.current?.submitCrop()
                              return
                            }
                            formik.handleSubmit()
                          }}
                          type="submit"
                          color="danger"
                          block
                        >
                          {i18n.t("FormSignUp:btn_sign_up")}
                        </Button>
                      </Col>
                    </div>
                  </div>
                </Row>
              </CardBody>
            </Card>
            <div className="paddingView" />
          </Form>
        )
      }}
    </Formik>
  )
}

export default Signup
