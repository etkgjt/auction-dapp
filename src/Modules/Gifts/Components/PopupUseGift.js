import { Formik } from "formik"
import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { Form, Input, NavItem } from "reactstrap"
import { CircleCloseButton, PopupNotiWrapper } from "../../../assets/svg"
import FormField from "../../../components/FormField"
import FormFieldSelect from "../../../components/FormFieldSelect"
import SlideInModal from "../../../components/SlideInModal"
import { getValueForm, validationSchema } from "../validation"
import {
  getValueForm as cardGetValueForm,
  validationSchema as cardValidation
} from "../validation/card"
import { ButtonWrapperBlue } from "../assets/icon"
import { useDispatch, useSelector } from "react-redux"
import { getUserData } from "../../../store/user/selector"
import { postUseCard, postUseVoucher } from "../Store/MyGifts/service"
import {
  GIFT_LIST_LIMIT_DETAULT,
  RETCODE_SUCCESS
} from "../../../configs/contants"
import { toast } from "react-toastify"
import { actions } from "../Store/MyGifts/reducer"
import { actions as usedGiftActions } from "../Store/UsedGifts/reducer"
import { useMediaQuery } from "react-responsive"
import popupInvite from "../../../assets/images/popup-invite.png"

const { innerWidth: width, innerHeight: height } = window

const PopupUseGift = ({ item }) => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const userData = useSelector(getUserData)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 })
  const fetchUseCard = async (payload) => {
    try {
      const res = await postUseCard(payload)
      if (res.data.retCode === RETCODE_SUCCESS) {
        toast.success("Sử dụng thành công", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        dispatch(
          actions.getList({
            limit: GIFT_LIST_LIMIT_DETAULT,
            page: 1,
            userid: userData?.userId,
            status: -1,
          })
        )
        dispatch(
          usedGiftActions.getList({
            limit: GIFT_LIST_LIMIT_DETAULT,
            page: 1,
            userid: userData?.userId
          })
        )
      } else {
        toast.error(res.data.retText, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    } catch (err) {
      toast.error("Có lỗi xảy ra, xin vui long thử lại!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } finally {
      SlideInModal.hide()
    }
  }
  const fetchUseVoucher = async (payload) => {
    try {
      const res = await postUseVoucher(payload)
      if (res.data.retCode === RETCODE_SUCCESS) {
        toast.success("Sử dụng thành công, quà sẽ được gửi trong 24h!", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        window.open("https://m.me/469807056541116?ref=VOUCHER-100K", "_blank")
        dispatch(
          actions.getList({
            limit: GIFT_LIST_LIMIT_DETAULT,
            page: 1,
            userid: userData?.userId,
            status: -1
          })
        )
        dispatch(
          usedGiftActions.getList({
            limit: GIFT_LIST_LIMIT_DETAULT,
            page: 1,
            userid: userData?.userId
          })
        )
      } else {
        toast.error(res.data.retText, {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    } catch (err) {
      toast.error("Có lỗi xảy ra, xin vui long thử lại!", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } finally {
      SlideInModal.hide()
    }
  }

  const onSubmit = (values) => {
    if (item?.type === "card") {
      fetchUseCard({
        giftcardid: item?.id,
        userid: userData?.userId,
        phone: values?.phone,
        email: userData?.email,
        childFullName1: userData?.childFullName1,
        network: values?.provider,
        amount: item?.value,
        description: item?.description
      })
    } else {
      fetchUseVoucher({
        giftcardid: item?.id,
        userid: userData?.userId,
        phone: values?.phone,
        email: userData?.email,
        childFullName1: userData?.childFullName1,
        namevoucher: item?.name,
        amount: item?.value,
        description: item?.description
      })
    }
  }
  const onCopyCodeClick = () => {
    toast.success("Sao chép thành công", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
    navigator.clipboard.writeText(userData?.phone)
  }
  return (
    <div className="popup-usegift-container">
      <img src={popupInvite} className="popup-usegift-image-wrapper" />
      <div className="popup-usegift-content-wrapper">
        <h1>{item?.type === "card" ? "Sử dụng thẻ cào" : "Sử dụng Voucher"}</h1>
        {item?.type !== "card" ? (
          <p>
            Copy MÃ SỬ DỤNG bên dưới và gửi vào Fanpage Tâm Trí Lực để được hỗ
            trợ đổi voucher này nhé!
          </p>
        ) : null}

        <div className="popup-usegift-copyfield-wrapper">
          {item?.type === "card" ? (
            <Formik
              onSubmit={onSubmit}
              initialValues={cardGetValueForm({
                phone: userData?.phone
              })}
              enableReinitialize
              validationSchema={cardValidation(i18n)}
            >
              {(formik) => {
                return (
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <FormField
                      {...formik}
                      field="phone"
                      placeholder="Số điện thoại"
                      cl
                      className="w-100"
                    />
                    <FormFieldSelect
                      field={"provider"}
                      placeholder="Nhà mạng"
                      options={[
                        { label: "Viettel", value: "viettel" },
                        { label: "MobiFone", value: "mobile" },
                        { label: "Vinaphone", value: "vinaphone" }
                      ]}
                      {...formik}
                      handleChange={(val) => {
                        formik.setFieldValue("provider", val)
                      }}
                      valueDefault={formik.values.provider}
                    />
                    <div className="use-button" onClick={formik.handleSubmit}>
                      <ButtonWrapperBlue />
                      <p className="use-button-text">Sử dụng</p>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          ) : (
            <Formik
              onSubmit={onSubmit}
              initialValues={getValueForm({ phone: userData?.phone })}
              enableReinitialize
              validationSchema={validationSchema(i18n)}
            >
              {(formik) => {
                return (
                  <Form onSubmit={(e) => e.preventDefault()}>
                    <p className="form-label">Mã sử dụng</p>
                    <FormField
                      {...formik}
                      field="phone"
                      placeholder="Số điện thoại"
                      cl
                      className="w-100"
                    >
                      <div className="copy-button" onClick={onCopyCodeClick}>
                        <p>Sao chép</p>
                      </div>
                    </FormField>
                    <div className="use-button" onClick={formik.handleSubmit}>
                      <ButtonWrapperBlue />
                      <p style={{
                        left: "0%",
                        transform: "translate(20%, -50%)"
                      }} className="use-button-text">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3506 0C5.95872 0 0 5.99258 0 13.4264C0 20.1017 4.90274 25.6391 11.2386 26.7011V17.295H7.84439V13.4264H11.2386V10.468C11.2386 7.13041 13.1997 5.23402 16.2922 5.23402C17.7253 5.23402 19.3093 5.46159 19.3093 5.46159V8.79923H17.6499C15.9905 8.79923 15.4625 9.8612 15.4625 10.9232V13.4264H19.1584L18.555 17.295H15.4625V26.7011C21.8738 25.715 26.7011 20.1775 26.7011 13.4264C26.7011 5.99258 20.7424 0 13.3506 0Z" fill="white"/>
                        </svg>
                        <span style={{marginLeft: "5px"}}>Fanpage Tâm Trí Lực</span>
                      </p>
                    </div>
                  </Form>
                )
              }}
            </Formik>
          )}
        </div>
      </div>
      <div
        className="popup-usegift-close-button"
        onClick={() => SlideInModal.hide()}
      >
        <CircleCloseButton />
      </div>
    </div>
  )
}
export default PopupUseGift
