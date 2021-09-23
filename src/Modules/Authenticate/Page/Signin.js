import React, { useEffect, useState } from "react"
import { Form, Button } from "reactstrap"
import { Formik } from "formik"
import FormField from "../../../components/FormField"
import AuthWrapper from "../Components/AuthWrapper"

/* Helpers */
import CustomIcon from "../../../components/CustomIcon"
import { Link, useHistory } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Eye, EyeOff, Lock, User } from "react-feather"
import { authSignIn, signInReset } from "../store/auth/actions"
import { useDispatch, useSelector } from "react-redux"

import {
  errorSelector,
  loadingSelector,
  loginSuccessSelector
} from "../store/auth/selectors"
import { toast } from "react-toastify"
import { validationSchema, getValueForm } from "../validation/signin"

const SignIn = () => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const error = useSelector((state) => errorSelector(state))
  const loading = useSelector((state) => loadingSelector(state))
  const loginSuccess = useSelector((state) => loginSuccessSelector(state))

  const { state } = history.location

  const [showPassword, setShowPassword] = useState(false)
  const onSubmit = (values) => {
    dispatch(authSignIn(values))
  }

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  useEffect(() => {
    if (error) {
      toast.error(i18n.t(`FormSignIn:errors:user_name_or_password.wrong`), {
        position: "top-center",
        autoClose: 3000
      })
    }
    if (loginSuccess) {
      toast.dismiss()
      if (state?.justSignUp) {
        history.push("/accounts/active/0")
        return
      }
      history.push("/home")
    }
    return () => {
      dispatch(signInReset())
    }
  }, [loginSuccess, error])

  return (
    <AuthWrapper title={i18n.t(`FormSignIn:title`)}>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema(i18n)}
        initialValues={getValueForm({})}
      >
        {(formik) => {
          return (
            <Form onSubmit={(ev) => ev.preventDefault()}>
              <FormField
                field="username"
                {...formik}
                borderless
                label={i18n.t(`FormSignIn:field:user_name`)}
                prepend={<CustomIcon color="primary" Icon={User} />}
              >
                <div className="text-right mt-1">
                  <p
                    link
                    underline
                    onClick={() => history.push("/forgot-username")}
                  >
                    {i18n.t(`FormSignIn:forgot_user_name`)}
                  </p>
                </div>
              </FormField>

              <FormField
                field="password"
                {...formik}
                type={showPassword ? "text" : "password"}
                borderless
                label={i18n.t(`FormSignIn:field:password`)}
                prepend={<CustomIcon color="primary" Icon={Lock} />}
                append={
                  <CustomIcon
                    color="primary"
                    onClick={togglePassword}
                    Icon={showPassword ? Eye : EyeOff}
                  />
                }
              >
                <div className="text-right mt-1">
                  <p
                    link
                    underline
                    onClick={() => history.push("/forgot-password")}
                  >
                    {i18n.t(`FormSignIn:forgot_password`)}
                  </p>
                </div>
              </FormField>

              <Button
                color="primary"
                size="lg"
                block={true}
                className="mb-2"
                loading={loading}
                onClick={formik.handleSubmit}
              >
                {i18n.t(`FormSignIn:title`)}
              </Button>
              <p className="d-block text-center pb-2" size="lg">
                {i18n.t(`FormSignIn:not_have_acc`)}
                <Link to="/signup">
                  <p color="primary">{i18n.t(`FormSignIn:btn_sign_up`)}</p>
                </Link>
              </p>
            </Form>
          )
        }}
      </Formik>
    </AuthWrapper>
  )
}

export default SignIn
