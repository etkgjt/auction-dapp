import { Modal } from "reactstrap"
import React from "react"

export default class SlideInModal extends React.PureComponent {
  static instance = null

  static show = (
    onShowCb = () => {},
    children = <View />,
    contentClassName = ""
  ) => {
    onShowCb()
    if (SlideInModal.instance) {
      SlideInModal.instance.setState({ visible: false }, () => {
        SlideInModal.instance.setState({
          visible: true,
          children,
          contentClassName
        })
      })
    }
  }

  static hide = (onHideCb = () => {}) => {
    if (SlideInModal.instance) {
      SlideInModal.instance.setState({
        visible: false,
        contentClassName: "",
        children: <div />
      })
      const timeout = setTimeout(() => {
        onHideCb()
        clearTimeout(timeout)
      }, 300)
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
      children: <div />
    }
  }

  render() {
    return (
      <Modal
        backdrop="static"
        contentClassName={SlideInModal.instance.state?.contentClassName}
        isOpen={SlideInModal?.instance?.state?.visible || false}
        toggle={() => {
          if (this.state.visible) {
            SlideInModal.hide()
            return
          }
          SlideInModal.show()
        }}
        className="modal-dialog-centered modal-transparent"
      >
        {this.state.children ? this.state.children : <View />}
      </Modal>
    )
  }
}
