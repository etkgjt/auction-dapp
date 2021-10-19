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
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "../store/user/selector"
import { loginSuccessSelector } from "../Modules/Authenticate/store/auth/selectors"
import MessengerCustomerChat from "react-messenger-customer-chat"
import "./responsive.scss"
import { FACEBOOK_PAGE_ID } from "../configs/environment"
import { actions } from "../store/user/reducer"
import { getInfoUserSTNHD } from "../store/user/service"

import { getFacebookInfo } from "../store/common/actions"
import { getFacebookSelector } from "../store/common/selectors"

const BlankLayout = ({ children, ...rest }) => {
  const dispatch = useDispatch()
  // ** States

  const [isMounted, setIsMounted] = useState(false)
  const userData = useSelector(getUserData)
  const isLogin = useSelector(loginSuccessSelector)
  const facebookData = useSelector(getFacebookSelector)

  const getFacebookData = () => {
    const { value } = facebookData
    const toArray = value?.split(",")
    return toArray
  }

  const fetchDataUserAgain = async (e) => {
    if (userData?.flagDaisu === 1) {
      dispatch(
        actions.getInfoUser({
          userId: userData?.userId
        })
      )
    } else {
      if (isLogin && userData?.userId) {
        const res = await getInfoUserSTNHD({
          username: userData?.userName
        })
        if (res.data.data?.isDaiSu) {
          dispatch(
            actions.getInfoUser({
              userId: userData?.userId,
              flagDaisu: 1
            })
          )
        } else {
          dispatch(
            actions.getInfoUser({
              userId: userData?.userId
            })
          )
        }
      }
    }
  }
  //** ComponentDidMount
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    fetchDataUserAgain()
    dispatch(getFacebookInfo())
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
      <div
        style={{
          position: "fixed",
          bottom: 100,
          right: 20,
          width: 100,
          height: 100
        }}
      >
        <MessengerCustomerChat
          pageId={getFacebookData()?.[1]}
          appId={getFacebookData()?.[0]}
        />
      </div>
    </Fragment>
  )
}

export default BlankLayout
