import { Formik } from "formik"
import FormField from "../../../components/FormField"
import React from "react"
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

const FormProfile = () => {
  const onSubmit = () => {}
  const { i18n } = useTranslation()
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
      <Formik
        onSubmit={onSubmit}
        // validationSchema={validationSchema(i18n)}
        // initialValues={getValueForm({})}
      >
        {(formik) => {
          return (
            <Form onSubmit={(e) => e.preventDefault()}>
              <div className="profile-form-wrapper">
                <Row>
                  <Col xl="3" lg="3" md="3">
                    <span className="form-profile-field-label">
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
                          field="class_name"
                          {...formik}
                          valueDefault={formik.values?.class_name}
                          handleChange={(value) =>
                            formik.setFieldValue("class_name", value)
                          }
                          placeholder={"Lớp"}
                          options={[]}
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
                          options={[]}
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
                          options={[]}
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
                      field="phone"
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
                      <div className="update-profile-button-wrapper">
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
              </div>
            </Form>
          )
        }}
      </Formik>
      <div className="profile-form-footer">
        <Row>
          <Col xl="6" lg="6">
            <span className="copy-btn-title">Mã giới thiệu</span>
            <div className="copy-field">
              XX-XXX
              <div className="copy-code-button">Sao chép</div>
            </div>
          </Col>
          <Col xl="6" lg="6">
            <span className="copy-btn-title">Link giới thiệu</span>
            <div className="copy-field">
              XX-XXX
              <div className="copy-code-button">Sao chép</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default FormProfile
