import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

export default class SlideInModal extends React.PureComponent {
  static instance = null

  static show = (
    onShowCb = () => {},
    body,
    modalClassName = "",
    beforeHideCb = () => {}
  ) => {
    onShowCb()
    if (SlideInModal.instance) {
      SlideInModal.instance.setState({ visible: false }, () => {
        SlideInModal.instance.setState({
          visible: true,
          modalClassName,
          body,
          beforeHideCb
        })
      })
    }
  }

  static hide = (onHideCb = () => {}) => {
    if (SlideInModal.instance) {
      if (SlideInModal?.instance?.state?.beforeHideCb) {
        SlideInModal?.instance?.state?.beforeHideCb()
      }
      SlideInModal.instance.setState({
        visible: false
      })
    }
  }
  static getIsShow = () => {
    return SlideInModal.instance.state?.visible || false
  }

  constructor(props) {
    super(props)
    SlideInModal.instance = this

    this.state = {
      visible: false,
      body: <div />
    }
  }

  render() {
    return (
      <Modal
        backdrop={
          SlideInModal?.instance?.state?.modalClassName?.indexOf("static") ===
          -1
            ? undefined
            : "static"
        }
        isOpen={SlideInModal?.instance?.state?.visible || false}
        toggle={() => {
          SlideInModal.hide()
          if (SlideInModal?.instance?.state?.beforeHideCb) {
            SlideInModal?.instance?.state?.beforeHideCb()
          }
        }}
        className="modal-dialog-centered"
        contentClassName={SlideInModal?.instance?.state?.modalClassName || ""}
      >
        <ModalBody>{this.state.body ? this.state.body : <div />}</ModalBody>
      </Modal>
    )
  }
}
