import React, { useRef, useEffect } from "react"
import SigninForm from "./SigninForm"
import InfoDropdown from "./InfoDropdown"

const Dropdown = ({
  isLogin = true,
  setIsDropdownOpen = () => {},
  isDropdownOpen
}) => {
  const dropdownRef = useRef()

  return (
    <div className="nav-dropdown-container" ref={dropdownRef}>
      {!isLogin ? (
        <SigninForm setIsDropdownOpen={setIsDropdownOpen} />
      ) : (
        <InfoDropdown setIsDropdownOpen={setIsDropdownOpen} />
      )}
    </div>
  )
}
export default Dropdown
