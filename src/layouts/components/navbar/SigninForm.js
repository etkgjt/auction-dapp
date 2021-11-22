import React, { useState } from "react"
import { Form, Button, Spinner, Input } from "reactstrap"
import Web3 from "web3"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import { useHistory } from "react-router"

import { actions } from "../../../store/user/reducer"

const SignInForm = ({ setIsDropdownOpen = () => {}, address = "" }) => {
  const { i18n } = useTranslation()
  const history = useHistory()
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const onSubmit = () => {
    console.log("NAME", name, address)
  }

  return (
    <div className="signin-form-container">
      <div
        style={{ width: "100%" }}
        className="d-flex flex-column align-items-center w-100 p-5"
      >
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Họ tên"
        />
        <Button onClick={onSubmit} color="primary">
          Đăng ký
        </Button>
      </div>
    </div>
  )
}
export default SignInForm
