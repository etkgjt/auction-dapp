import { Formik } from "formik"
import FormField from "../../../components/FormField"
import React, { useState, useEffect, useRef } from "react"
import { Form, Row, Col } from "reactstrap"
import FormFieldSelect from "../../../components/FormFieldSelect"
import { useTranslation } from "react-i18next"
import {
  ButtonWrapper,
  ButtonWrapperBlue,
  ButtonWrapperWhite,
  CopyIcon,
  LinkIcon
} from "../assets/icon"

import { getUserData, user } from "../../../store/user/selector"
import { useDispatch, useSelector } from "react-redux"

import { getValueForm, validationSchema } from "../validation"
import {
  getValueForm as getValueFormUpdatePassword,
  validationSchema as validationSchemaUpdatePassword
} from "../validation/updatePassword"
import {
  formSubmitErrorSelector,
  formSubmitDataResponseSelector,
  formSubmitLoadingSelector,
  formSubmitSuccessSelector
} from "../Store/formUpdateProfile/selector"

import {
  formSubmitErrorSelector as formPasswordSubmitErrorSelector,
  formSubmitDataResponseSelector as formPasswordSubmitDataResponseSelector,
  formSubmitLoadingSelector as formPasswordSubmitLoadingSelector,
  formSubmitSuccessSelector as formPasswordSubmitSuccessSelector
} from "../Store/formUpdatePassword/selector"

import { actions as updatePasswordActions } from "../Store/formUpdatePassword/reducer"
import { actions } from "../Store/formUpdateProfile/reducer"
import { actions as actionsUser } from "../../../store/user/reducer"
import { authLogout } from "../../Authenticate/store/auth/actions"
import * as apiCommon from "../../../store/common/services"
import SlideInModal from "../../../components/SlideInModal"
import PopupLogout from "./PopupLogout"
import { useHistory } from "react-router"
import UploadImage from "../../../components/UploadImage"
import { toast } from "react-toastify"
import uploadImage from "../../../utility/uploadImage"
import { useMediaQuery } from "react-responsive"

const FormProfile = () => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const history = useHistory()
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
  //REf
  const cropImageRef = useRef()
  const formRef = useRef()
  //STATE
  const [itemsClass, setItemsClass] = useState([])
  const [keyClass, setKeyClass] = useState(1)
  const [itemsCity, setItemsCity] = useState([])
  const [keyCity, setKeyCity] = useState()
  const [itemsDistrict, setItemsDistrict] = useState([])
  const [keyDistrict, setKeyDistrict] = useState()
  const [userAvatar, setUserAvatar] = useState("")

  //SELECTOR
  //FORM PASSWORD
  const formPasswordSubmitLoading = useSelector(
    formPasswordSubmitLoadingSelector
  )
  const formPasswordSubmitSuccess = useSelector(
    formPasswordSubmitSuccessSelector
  )
  const formPasswordSubmitError = useSelector(formPasswordSubmitErrorSelector)
  const formPasswordSubmitDataResponse = useSelector(
    formPasswordSubmitDataResponseSelector
  )
  //FORM PROFILE
  const formSubmitLoading = useSelector(formSubmitLoadingSelector)
  const formSubmitSuccess = useSelector(formSubmitSuccessSelector)
  const formSubmitError = useSelector(formSubmitErrorSelector)
  const formSubmitDataResponse = useSelector(formSubmitDataResponseSelector)

  const fetchListClass = async () => {
    try {
      const res = await apiCommon.getListClass()
      if (res.status === 200) {
        setItemsClass(
          res.data.data.map((item) => ({ label: item.name, value: item.id }))
        )
      } else {
        setItemsClass([])
      }
    } catch (err) {
      setItemsClass([])
    }
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

  const onSubmitForm = async (values) => {
    try {
      dispatch(actions.formUpdateProfileSuperSchoolMemoryFnLoading(true))
      let uri = null
      if (userAvatar?.imgSrc) {
        const file = await fetch(userAvatar?.imgSrc).then((res) => res.blob())
        const id = Date.now()
        const fileName = `avatar_${id}.jpg`
        uri = await uploadImage(
          file,
          `/avatar/STNHD/${userData?.userId}`,
          fileName
        )
      }

      dispatch(
        actions.formUpdateProfileSuperSchoolMemoryFnMethod({
          ...values,
          user_name: userData?.userName || "",
          userId: userData?.userId,
          avartar: uri ? uri : userData?.avatar
        })
      )
    } catch (err) {
      console.log("submit err", err)
    }
  }

  const onUpdatePasswordSubmit = (values) => {
    dispatch(
      updatePasswordActions.formUpdatePasswordSuperSchoolMemoryFnMethod({
        ...values,
        userId: userData?.userId
      })
    )
  }
  const { i18n } = useTranslation()

  const _handleLogout = () => {
    SlideInModal.show(
      () => {},
      <PopupLogout
        onSubmitPress={() => {
          SlideInModal.hide()
          setTimeout(() => {
            dispatch(authLogout())
            history.push("/")
          }, 200)
        }}
      />,
      "logout-popup-modal-wrapper"
    )
  }

  useEffect(async () => {
    await fetchListClass()
    await getListCity()
  }, [])

  useEffect(() => {
    if (keyCity) {
      getListDistrict(keyCity)
    }
  }, [keyCity])

  useEffect(() => {
    if (formPasswordSubmitError) {
      toast.error(formPasswordSubmitDataResponse.error.retText, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    if (formPasswordSubmitSuccess) {
      toast.success("Cập nhật mật khẩu thành công", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    return () => {
      dispatch(
        updatePasswordActions.formUpdatePasswordSuperSchoolMemoryFnReset()
      )
    }
  }, [formPasswordSubmitSuccess, formPasswordSubmitError])

  useEffect(() => {
    if (formSubmitError) {
      toast.error(formSubmitDataResponse?.error?.retText, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
    if (formSubmitSuccess) {
      toast.success("Cập nhật thông tin thành công", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      dispatch(
        actionsUser.getInfoUser({
          userId: userData?.userId
        })
      )
      history.goBack()
    }

    return () => {
      dispatch(actions.formUpdateProfileSuperSchoolMemoryFnReset())
    }
  }, [formSubmitSuccess, formSubmitError])

  React.useEffect(() => {
    setKeyCity(userData?.cityId)
    setKeyDistrict(userData?.districtId)
  }, [])
  React.useEffect(() => {
    if (userAvatar?.imgSrc) {
      formRef.current?.handleSubmit()
    }
  }, [userAvatar])

  return (
    <div className="profile-form-container">
      <div className="profile-form-avatar-wrapper">
        <div style={{ position: "relative" }}>
          <UploadImage
            ref={cropImageRef}
            onChange={(data) => setUserAvatar(data)}
            value={userAvatar?.imgSrc || userData?.avatar}
          />
        </div>
      </div>
      <div className="profile-form-wrapper">
        <Formik
          innerRef={formRef}
          onSubmit={onSubmitForm}
          validationSchema={validationSchema(i18n)}
          initialValues={getValueForm({
            children_fullname: userData?.childFullName1,
            gender: userData?.gender,
            birth_day: userData?.dayofbirth,
            district: userData?.districtId,
            city: userData?.cityId,
            email: userData?.email,
            phone_number: userData?.phone,
            parent_fullname: userData?.fullName,
            class: userData?.child1ClassId,
            street_address: userData?.address
          })}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <Col xl="3">
                    <span className="form-profile-field-label">
                      Họ và tên
                      {isMobile || isTablet ? null : <br />} Học viên
                    </span>
                  </Col>
                  <Col xl="9">
                    <FormField
                      field="children_fullname"
                      {...formik}
                      placeholder={i18n.t(`FormSignUp:field:student_name`)}
                    />
                  </Col>
                </Row>
                <Row className="d-flex flex-row align-items-center mb-3">
                  <Col xl="3">
                    <span className="form-profile-field-label">Giới tính</span>
                  </Col>
                  <Col xl="3">
                    <FormFieldSelect
                      className="mb-0"
                      field="gender"
                      {...formik}
                      placeholder={i18n.t(`Giới tính`)}
                      options={[
                        { label: "Nam", value: "nam" },
                        { label: "Nữ", value: "nu" }
                      ]}
                      valueDefault={formik.values.gender}
                      handleChange={(val) => {
                        formik.setFieldValue("gender", val)
                      }}
                    />
                  </Col>
                  <Col xl="2">
                    <span className="form-profile-field-label">Ngày sinh</span>
                  </Col>
                  <Col xl="4">
                    <FormField
                      className="mb-0"
                      field="birth_day"
                      {...formik}
                      type="date"
                      placeholder={i18n.t(`Ngày sinh`)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="3">
                    <span className="form-profile-field-label">
                      Trường {isMobile || isTablet ? null : <br />}
                      đang học
                    </span>
                  </Col>
                  <Col xl="9">
                    <Row>
                      <Col xl="12" lg="12" md="12">
                        <FormField field="school_name" {...formik} />
                      </Col>
                      <Col xl="6" lg="6" md="6">
                        <FormFieldSelect
                          borderLight
                          field="class"
                          {...formik}
                          valueDefault={formik.values?.class}
                          handleChange={(value) => {
                            formik.setFieldValue("class", value)
                          }}
                          placeholder={"Lớp"}
                          options={itemsClass}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xl="3">
                    <span className="form-profile-field-label">
                      Địa chỉ {isMobile || isTablet ? null : <br />}
                      đang ở
                    </span>
                  </Col>
                  <Col xl="9">
                    <Row>
                      <Col xl="12" lg="12" md="12">
                        <FormFieldSelect
                          borderLight
                          field="city"
                          {...formik}
                          valueDefault={formik.values?.city}
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
                      <Col xl="12" lg="12" md="12">
                        <FormFieldSelect
                          borderLight
                          field="district"
                          {...formik}
                          valueDefault={formik.values?.district}
                          handleChange={(value) =>
                            formik.setFieldValue("district", value)
                          }
                          placeholder={"Quận/ Huyện"}
                          options={itemsDistrict}
                        />
                      </Col>
                      <Col xl="12" lg="12" md="12">
                        <FormField
                          field="street_address"
                          {...formik}
                          placeholder={"Địa chỉ"}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xl="3">
                    <span className="form-profile-field-label">
                      Họ và tên
                      {isMobile || isTablet ? null : <br />} Phụ huynh
                    </span>
                  </Col>
                  <Col xl="9">
                    <FormField
                      field="parent_fullname"
                      {...formik}
                      placeholder={i18n.t(`FormSignUp:field:parent_fullname`)}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="3">
                    <span className="form-profile-field-label">Email</span>
                  </Col>
                  <Col xl="6">
                    <FormField
                      field="email"
                      {...formik}
                      placeholder={"Email"}
                      disabled
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="3">
                    <span className="form-profile-field-label">
                      Số điện thoại
                    </span>
                  </Col>

                  <Col xl="6">
                    <FormField
                      className="mr-1 w-100"
                      field="phone_number"
                      {...formik}
                      placeholder={"Điện thoại"}
                      disabled
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <span className="d-flex flex-row justify-content-center w-100">
                    <div
                      className="update-profile-button-wrapper"
                      onClick={() => {
                        if (cropImageRef.current?.submitCrop) {
                          cropImageRef.current?.submitCrop()
                        } else {
                          formik.handleSubmit()
                        }
                      }}
                    >
                      <ButtonWrapper />
                      <span className="update-profile-button-label">
                        Cập nhật
                      </span>
                    </div>
                  </span>
                </Row>
              </Form>
            )
          }}
        </Formik>
        <Formik
          onSubmit={onUpdatePasswordSubmit}
          validationSchema={validationSchemaUpdatePassword(i18n)}
          initialValues={getValueFormUpdatePassword({})}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form onSubmit={(e) => e.preventDefault()}>
                <h1 className="change-password-header-title">
                  Thay đổi mật khẩu
                </h1>
                <Row>
                  <Col xl="4">
                    <span className="form-profile-field-label">
                      Mật khẩu cũ
                    </span>
                  </Col>
                  <Col xl="8">
                    <FormField
                      field="old_password"
                      {...formik}
                      placeholder={"Mật khẩu cũ"}
                      type="password"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="4">
                    <span className="form-profile-field-label">
                      Mật khẩu mới
                    </span>
                  </Col>
                  <Col xl="8">
                    <FormField
                      field="new_password"
                      {...formik}
                      placeholder={"Mật khẩu mới"}
                      type="password"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="4">
                    <span className="form-profile-field-label">
                      Nhập lại {isMobile || isTablet ? null : <br />} Mật khẩu
                      mới
                    </span>
                  </Col>
                  <Col xl="8">
                    <FormField
                      field="confirm_new_password"
                      {...formik}
                      placeholder={"Nhập lại mật khẩu mới"}
                      type="password"
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <span className="d-flex flex-row justify-content-center w-100">
                    <div
                      className="update-profile-button-wrapper"
                      onClick={formik.handleSubmit}
                    >
                      <ButtonWrapper />
                      <span className="update-profile-button-label">
                        Thay đổi
                      </span>
                    </div>
                  </span>
                </Row>

                <Row className="group-btn-wrapper">
                  <Col xl="12" md="12" lg="12">
                    <span className="d-flex flex-row justify-content-center w-100">
                      <div
                        className="update-profile-button-wrapper"
                        onClick={_handleLogout}
                      >
                        <ButtonWrapperBlue />
                        <span className="update-profile-button-label">
                          Đăng xuất
                        </span>
                      </div>
                    </span>
                  </Col>
                  <Col xl="12" md="12" lg="12" className="mt-3">
                    <span className="d-flex flex-row justify-content-center w-100">
                      <div className="update-profile-button-wrapper">
                        <ButtonWrapperWhite />
                        <span className="update-profile-button-label-red">
                          Liên hệ hỗ trợ
                        </span>
                      </div>
                    </span>
                  </Col>
                </Row>
              </Form>
            )
          }}
        </Formik>
      </div>
      <div className="profile-form-footer">
        <Row>
          <Col xl="6" lg="6" sm="6" xs="6">
            <span className="copy-btn-title">Mã giới thiệu</span>
            <div className="copy-field">
              <p>{userData?.codeInvite}</p>
              <div
                className="copy-code-button"
                onClick={() => {
                  navigator.clipboard.writeText(userData?.codeInvite)
                }}
              >
                {isMobile || isTablet ? <CopyIcon /> : "Sao chép"}
              </div>
            </div>
          </Col>
          <Col xl="6" lg="6" sm="6" xs="6">
            <span className="copy-btn-title">Link giới thiệu</span>
            <div className="copy-field">
              <p>{`${window.location.origin}/signup/${userData?.codeInvite}`}</p>
              <div
                className="copy-code-button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${window.location.origin}/signup/${userData?.codeInvite}`
                  )
                }}
              >
                {isMobile || isTablet ? <LinkIcon /> : "Sao chép"}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default FormProfile
