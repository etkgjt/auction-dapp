import React from "react"
import SigninForm from "./SigninForm"
import InfoDropdown from "./InfoDropdown"

const Dropdown = ({ isLogin = true }) => {
  return (
    <div className="nav-dropdown-container">
      {!isLogin ? <SigninForm /> : <InfoDropdown />}
    </div>
  )
}
export default Dropdown
