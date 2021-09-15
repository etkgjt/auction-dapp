import { Modal } from "reactstrap"
import React from "react"

export default class BackdropPressable extends React.PureComponent {
  static instance = null

  static show = (
    onShowCb = () => {},
    children = <View />,
    contentClassName = ""
  ) => {
    onShowCb()
    if (BackdropPressable.instance) {
      BackdropPressable.instance.setState({ visible: false }, () => {
        BackdropPressable.instance.setState({
          visible: true,
          children,
          contentClassName
        })
      })
    }
  }

  static hide = (onHideCb = () => {}) => {
    if (BackdropPressable.instance) {
      BackdropPressable.instance.setState({
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
    return BackdropPressable.instance.state?.visible || false
  }

  constructor(props) {
    super(props)
    BackdropPressable.instance = this
    this.state = {
      visible: false,
      children: <div />
    }
  }

  render() {
    return (
      <Modal
        contentClassName={BackdropPressable.instance.state?.contentClassName}
        isOpen={BackdropPressable?.instance?.state?.visible || false}
        toggle={() => {
          if (this.state.visible) {
            BackdropPressable.hide()
            return
          }
          BackdropPressable.show()
        }}
        className={
          BackdropPressable.instance.state?.contentClassName ||
          "modal-dialog-centered modal-transparent modal-xl"
        }
      >
        {this.state.children ? this.state.children : <View />}
      </Modal>
    )
  }
}
