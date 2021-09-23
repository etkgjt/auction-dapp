import "../styles/index.scss"

import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"
import CustomIcon from "../../../components/CustomIcon"
import { ChevronLeft } from "react-feather"
import { useHistory } from "react-router-dom"

const AuthWrapper = ({ children, title, extra }) => {
  const history = useHistory()
  return (
    <div className="auth-page">
      <div className="background-auth row">
        <div className="col-md-6">
          <div className="wrap-cloud-auth">
            <div className="cloud-auth"></div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-img"></div>
        </div>
        <div className="cloud-bottom"></div>
        <div className="bottom-background"></div>
      </div>
      <div className="auth-wrapper">
        <div className="auth-arrow" onClick={() => history.goBack()}>
          <CustomIcon
            bordered
            size="lg"
            rounded
            color="primary"
            className="bg-white mb-1"
            Icon={ChevronLeft}
          />
        </div>
        <div className="auth-form">
          <Card>
            <CardBody>
              <CardTitle className="card-head-title pt-2">{title}</CardTitle>
              <div className="card-head-extra">{extra}</div>
              {children}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AuthWrapper
