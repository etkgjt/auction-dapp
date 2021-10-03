import { Formik } from "formik"
import FormField from "../../../components/FormField"
import React, { useState, useEffect } from "react"
import { Form, Row, Col } from "reactstrap"
import FormFieldSelect from "../../../components/FormFieldSelect"
import { useTranslation } from "react-i18next"
import {
  ButtonWrapper,
  ButtonWrapperBlue,
  ButtonWrapperWhite,
  AvatarWrapper,
  EditAvatarButton
} from "../assets/icon"

import { getUserData, user } from "../../../store/user/selector"
import { useDispatch, useSelector } from "react-redux"

import { getValueForm, validationSchema } from "../validation"
import { authLogout } from "../../Authenticate/store/auth/actions"
import * as apiCommon from "../../../store/common/services"
import SlideInModal from "../../../components/SlideInModal"
import PopupLogout from "./PopupLogout"
import { useHistory } from "react-router"

const FormProfile = () => {
  const dispatch = useDispatch()
  const userData = useSelector(getUserData)
  const history = useHistory()

  const [itemsClass, setItemsClass] = useState([])
  const [keyClass, setKeyClass] = useState(1)
  const [itemsCity, setItemsCity] = useState([])
  const [keyCity, setKeyCity] = useState()
  const [itemsDistrict, setItemsDistrict] = useState([])
  const [keyDistrict, setKeyDistrict] = useState()

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

  const onSubmit = () => {}
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
  // console.log(userData)
  return (
    <div className="profile-form-container">
      <div className="profile-form-avatar-wrapper">
        <div style={{ position: "relative" }}>
          <AvatarWrapper />
          <div className="profile-form-edit-avatar-button">
            <EditAvatarButton />
          </div>
        </div>
      </div>
      <div className="profile-form-wrapper">
        <Formik
          onSubmit={onSubmit}
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
            class: userData?.child1ClassId
          })}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form onSubmit={(e) => e.preventDefault()}>
                <Row>
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">
                      Họ và tên
                      <br /> Học viên
                    </span>
                  </Col>
                  <Col xl="9" lg="9" md="9">
                    <FormField
                      field="children_fullname"
                      {...formik}
                      placeholder={i18n.t(`FormSignUp:field:student_name`)}
                    />
                  </Col>
                </Row>
                <Row className="d-flex flex-row align-items-center mb-3">
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">Giới tính</span>
                  </Col>
                  <Col xl="3" lg="3" md="3">
                    <FormFieldSelect
                      className="mb-0"
                      field="gender"
                      {...formik}
                      placeholder={i18n.t(`Giới tính`)}
                      options={[
                        { label: "Nam", value: "nam" },
                        { label: "Nữ", value: "nu" }
                      ]}
                    />
                  </Col>
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">Ngày sinh</span>
                  </Col>
                  <Col xl="3" lg="3" md="3">
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
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">
                      Trường <br />
                      đang học
                    </span>
                  </Col>
                  <Col xl="9" lg="6" md="9">
                    <Row>
                      <Col xl="12" lg="12" md="12">
                        <FormField field="school_name" {...formik} />
                      </Col>
                      <Col xl="6" lg="6" md="6">
                        <FormFieldSelect
                          borderLight
                          field="class"
                          {...formik}
                          valueDefault={formik.values?.class_name}
                          handleChange={(value) =>
                            formik.setFieldValue("class", value)
                          }
                          placeholder={"Lớp"}
                          options={itemsClass}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">
                      Địa chỉ <br />
                      đang ở
                    </span>
                  </Col>
                  <Col xl="9" lg="9" md="9">
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
                    </Row>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">
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
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">Email</span>
                  </Col>
                  <Col xl="6" lg="6" md="6">
                    <FormField
                      field="email"
                      {...formik}
                      placeholder={"Email"}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">
                      Số điện thoại
                    </span>
                  </Col>

                  <Col xl="6" lg="6" md="6">
                    <FormField
                      className="mr-1 w-100"
                      field="phone_number"
                      {...formik}
                      placeholder={"Điện thoại"}
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <span className="d-flex flex-row justify-content-center w-100">
                    <div className="update-profile-button-wrapper">
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
          onSubmit={onSubmit}
          validationSchema={validationSchema(i18n)}
          initialValues={getValueForm({})}
          enableReinitialize
        >
          {(formik) => {
            return (
              <Form onSubmit={(e) => e.preventDefault()}>
                <h1 className="change-password-header-title">
                  Thay đổi mật khẩu
                </h1>
                <Row>
                  <Col xl="4" lg="4" md="4">
                    <span className="form-profile-field-label">
                      Mật khẩu cũ
                    </span>
                  </Col>
                  <Col xl="8" lg="8" md="8">
                    <FormField
                      field="old_password"
                      {...formik}
                      placeholder={"Mật khẩu cũ"}
                      type="password"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="4" lg="4" md="4">
                    <span className="form-profile-field-label">
                      Mật khẩu mới
                    </span>
                  </Col>
                  <Col xl="8" lg="8" md="8">
                    <FormField
                      field="new_password"
                      {...formik}
                      placeholder={"Mật khẩu mới"}
                      type="password"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xl="4" lg="4" md="4">
                    <span className="form-profile-field-label">
                      Nhập lại <br /> Mật khẩu mới
                    </span>
                  </Col>
                  <Col xl="8" lg="8" md="8">
                    <FormField
                      field="repassword"
                      {...formik}
                      placeholder={"Nhập lại mật khẩu mới"}
                      type="password"
                    />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <span className="d-flex flex-row justify-content-center w-100">
                    <div className="update-profile-button-wrapper">
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
          <Col xl="6" lg="6">
            <span className="copy-btn-title">Mã giới thiệu</span>
            <div className="copy-field">
              <p>{userData?.codeInvite}</p>
              <div
                className="copy-code-button"
                onClick={() => {
                  navigator.clipboard.writeText(userData?.codeInvite)
                }}
              >
                Sao chép
              </div>
            </div>
          </Col>
          <Col xl="6" lg="6">
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
                Sao chép
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default FormProfile
