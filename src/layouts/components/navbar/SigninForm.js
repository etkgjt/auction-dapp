import React from "react"
import { Form, Button, Spinner } from "reactstrap"
import { Formik } from "formik"
import FormField from "../../../components/FormField"
import {
  validationSchema,
  getValueForm
} from "../../../Modules/Authenticate/validation/signin"

import {
  errorSelector,
  loadingSelector,
  loginSuccessSelector
} from "../../../Modules/Authenticate/store/auth/selectors"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { SignInButton } from "./icon"
import { useHistory } from "react-router"

import {
  authSignIn,
  signInReset
} from "../../../Modules/Authenticate/store/auth/actions"
import PopupNewbie from "../popupNewbie"

import { toast } from "react-toastify"
import { getUserData } from "../../../store/user/selector"
import SlideInModal from "../../../components/SlideInModal"
const SignInForm = ({ setIsDropdownOpen = () => {} }) => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()

  const error = useSelector((state) => errorSelector(state))
  const loading = useSelector((state) => loadingSelector(state))
  const loginSuccess = useSelector((state) => loginSuccessSelector(state))

  const onSubmit = (values) => {
    dispatch(authSignIn(values))
  }

  React.useEffect(() => {
    if (error) {
      toast.error(i18n.t(`FormSignIn:errors:user_name_or_password.wrong`), {
        position: "top-center",
        autoClose: 3000
      })
    }
    if (loginSuccess) {
      history.push("/home")
      if (userData?.flagDaisu === 0) {
        SlideInModal.show(
          () => {},
          <PopupNewbie />,
          "invite-popup-modal-wrapper"
        )
      }
      setIsDropdownOpen(false)
    }
    return () => {
      dispatch(signInReset())
    }
  }, [loginSuccess, error])

  return (
    <div className="signin-form-container">
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema(i18n)}
        initialValues={getValueForm({})}
      >
        {(formik) => {
          return (
            <Form onSubmit={(ev) => ev.preventDefault()}>
              <div
                style={{ width: "100%" }}
                className="d-flex flex-column align-items-center w-100 p-0"
              >
                <FormField
                  field="username"
                  {...formik}
                  borderless
                  placeholder={i18n.t(`FormSignIn:field:user_name`)}
                  className="w-100"
                ></FormField>

                <FormField
                  field="password"
                  {...formik}
                  type={"password"}
                  borderless
                  className="w-100"
                  placeholder={i18n.t(`FormSignIn:field:password`)}
                ></FormField>
                <Link
                  to="/forgot-password"
                  onClick={() => {
                    setIsDropdownOpen(false)
                  }}
                >
                  <span className="signin-form__forgot-password-button">
                    Quên mật khẩu
                  </span>
                </Link>

                <div
                  onClick={loading ? () => {} : formik.handleSubmit}
                  className="signin-form__signin-button"
                >
                  <SignInButton />
                  <span>{loading ? <Spinner size="sm" /> : `Đăng nhập`}</span>
                </div>

                <p className="d-block text-center pb-2" size="lg">
                  <Link
                    to="/signup/0"
                    onClick={() => {
                      setIsDropdownOpen(false)
                    }}
                  >
                    <p className="signin-form__signup-button">
                      Chưa có tài khoản?
                      <br /> Đăng ký ngay
                    </p>
                  </Link>
                </p>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
export default SignInForm
