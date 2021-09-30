import React from "react"
import SigninForm from "./SigninForm"
import InfoDropdown from "./InfoDropdown"

const Dropdown = ({ isLogin = true, setIsDropdownOpen = () => {} }) => {
  return (
    <div className="nav-dropdown-container">
      {!isLogin ? (
        <SigninForm />
      ) : (
        <InfoDropdown setIsDropdownOpen={setIsDropdownOpen} />
      )}
    </div>
  )
}
export default Dropdown
