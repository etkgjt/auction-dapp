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
import { RETCODE_SUCCESS } from "../../../configs/contants"
import { toast } from "react-toastify"
import { actions } from "../Store/MyGifts/reducer"
import { actions as usedGiftActions } from "../Store/UsedGifts/reducer"

const { innerWidth: width, innerHeight: height } = window

const PopupUseGift = ({ item }) => {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const userData = useSelector(getUserData)

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
            limit: 25,
            page: 1,
            userid: userData?.userId
          })
        )
        dispatch(
          usedGiftActions.getList({
            limit: 25,
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
        dispatch(
          actions.getList({
            limit: 25,
            page: 1,
            userid: userData?.userId
          })
        )
        dispatch(
          usedGiftActions.getList({
            limit: 25,
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
      console.log("POST ERR", err)
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

  return (
    <div className="popup-usegift-container">
      <PopupNotiWrapper width={width * 0.3} height={height * 0.5} />
      <div className="popup-usegift-content-wrapper">
        <h1>{item?.type === "card" ? "Sử dụng thẻ cào" : "Sử dụng Voucher"}</h1>
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
                        console.log("HANDLE CHANGE", val)
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
                    <FormField
                      {...formik}
                      field="phone"
                      placeholder="Số điện thoại"
                      cl
                      className="w-100"
                    />
                    <div
                      className="use-button mt-5"
                      onClick={formik.handleSubmit}
                    >
                      <ButtonWrapperBlue />
                      <p className="use-button-text">Sử dụng</p>
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
