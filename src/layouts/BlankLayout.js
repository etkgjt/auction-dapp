// ** React Imports
import { Fragment, useEffect, useState } from "react"
import Navbar from "@layouts/components/navbar"
import Footer from "@layouts/components/footer"
import { ToastContainer } from "react-toastify"
import "./styles.scss"
import SlideInModal from "../components/SlideInModal"
import { InviteFriendIcon } from "../assets/svg"
import PopupInvite from "./components/popupInvite"
import PopupNewBie from "./components/popupNewbie"
import { useSelector } from "react-redux"
import { getUserData } from "../store/user/selector"
import { loginSuccessSelector } from "../Modules/Authenticate/store/auth/selectors"

const BlankLayout = ({ children, ...rest }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)
  const userData = useSelector(getUserData)
  const isLogin = useSelector(loginSuccessSelector)

  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Fragment>
      <div className="home__page">
        <div className="app-content content">
          <div className="content-wrapper">
            <div className="content-header">
              <Navbar />
            </div>
            <div className="content-body">{children}</div>
            <div className="content-footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <SlideInModal />
      {isLogin ? (
        <span
          className="invite-friend-button"
          onClick={() => {
            if (userData?.flagDaisu === 1) {
              SlideInModal.show(
                () => {},
                <PopupInvite />,
                "invite-popup-modal-wrapper"
              )
            } else {
              SlideInModal.show(
                () => {},
                <PopupNewBie />,
                "invite-popup-modal-wrapper"
              )
            }
          }}
        >
          <InviteFriendIcon />
        </span>
      ) : null}
    </Fragment>
  )
}

export default BlankLayout
