import React, { useRef, useEffect } from "react"
import SigninForm from "./SigninForm"
import InfoDropdown from "./InfoDropdown"

const Dropdown = ({
  isLogin = true,
  setIsDropdownOpen = () => {},
  isDropdownOpen
}) => {
  const dropdownRef = useRef()
  // useOutsideClick(dropdownRef, () => setIsDropdownOpen(!isDropdownOpen))
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

// function useOutsideClick(ref, callback) {
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         console.log("CONTaIN")
//         callback()
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [ref])
// }
