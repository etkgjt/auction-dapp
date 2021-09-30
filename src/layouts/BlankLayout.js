// ** React Imports
import { Fragment, useEffect, useState } from "react"
import Navbar from "@layouts/components/navbar"
import Footer from "@layouts/components/footer"
import { ToastContainer } from "react-toastify"
import "./styles.scss"

const BlankLayout = ({ children, ...rest }) => {
  // ** States
  const [isMounted, setIsMounted] = useState(false)

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
    </Fragment>
  )
}

export default BlankLayout
