import { Button } from "reactstrap"
import React, { useState } from "react"
import OrderSummary from "./OrderSummary"
import useForm from "./userForm"
import { Formik } from "formik"
import uploadImage from "../../../utility/uploadImage"
import moment from "moment"
import Auction from "../../../Firebase/Auction"
import axios from "axios"
import Web3 from "web3"
import { useSelector } from "react-redux"
import { getUserData } from "../../../store/user/selector"
import Web3Infura from "../../../utility/web3Infura"
import LoadingImg from "../assets/Gear.gif"
import SlideInModal from "../../../components/SlideInModal"
import { toast } from "react-toastify"
import { useHistory } from "react-router"
import Categories from "../../../Firebase/Categories"

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <img src={LoadingImg} style={{ width: 100, height: 100 }} />
      <h5
        style={{
          marginLeft: 10
        }}
      >
        Đang khởi tạo, vui lòng không rời trang!
      </h5>
    </div>
  )
}

function CheckoutBody({ total, shipping }) {
  const history = useHistory()
  const [submitLoading, setSubmitLoading] = useState(false)
  const [category, setCategory] = useState([])
  const [listFile, setListFile] = useState([])
  const userData = useSelector(getUserData)

  const fetchListCate = async () => {
    try {
      const res = await Categories.getAllCategori()
      setCategory(res)
    } catch (err) {
      console.log("FETCH LIST CATE ERR", err)
    }
  }

  const handleOnchange = (e, formik) => {
    formik.setFieldValue(e.target.name, e.target.value)
  }

  const getAbiString = async () => {
    try {
      const res = await axios.get("http://localhost:8080/deploy")
      return { abi: res.data?.abi, bytecode: res.data?.bytecode }
    } catch (err) {
      console.log("GET ABI ERR", err)
    }
  }

  const handleDeploy = async (
    prodInfo = "",
    address = "",
    startValue = 0,
    duration = 0,
    cb = () => {}
  ) => {
    if (!address) {
      alert("CONNECT METAMASK TO CONTINUE")
      return
    }
    try {
      const { abi, bytecode } = await getAbiString()
      const web3 = new Web3(window.ethereum)

      const result = await new web3.eth.Contract(abi)
        .deploy({
          data: bytecode,
          arguments: [prodInfo, startValue, duration]
        })
        .send({ gas: "4000000", from: userData?.address })
      console.log(result)
      console.log("Contract deployed to", result.options.address)
      cb(abi, result.options.address)
      return { contract_address: result.options.address, abi: abi }
    } catch (err) {
      console.log("DEPLOY ERROR", err)
    }
  }
  const connectNewAuction = (abi, contractAddress) => {
    const contract_Infura = new Web3Infura.eth.Contract(abi, contractAddress)
    contract_Infura.events.initedAuctionEvent(
      { filter: {}, fromBlock: "latest" },
      (err, data) => {
        if (err) {
          console.log("CATCH EVENT ERR", err)
        } else {
          console.log("DATA EVENT TRA VE", data)
        }
      }
    )
  }

  async function handleSubmit(values) {
    try {
      if (!userData?.address) {
        toast.error("Vui lòng đăng nhập trước khi tạo đấu giá", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        return
      }
      SlideInModal.show(() => {}, <Loading />, "static")

      const times = values?.endDate + " " + values?.endTime
      const dateTemp = moment(times)
      const listPromise = []
      listFile?.map((item, index) => {
        listPromise.push(handleUploadImage(item, index))
      })
      const listImage = await Promise.all(listPromise)

      const productInfo = JSON.stringify({
        images: listImage,
        ...values,
        endDate: dateTemp.valueOf()
      })

      const { contract_address, abi } = await handleDeploy(
        productInfo,
        userData?.address,
        values?.initBidValue * 1,
        800000,
        (dataAbi, dataAddress) => {
          Auction.createAuctions({
            abi: JSON.stringify(dataAbi),
            address: dataAddress,
            owner: userData?.address,
            product_info: productInfo,
            duration: 1
          })
        }
      )
      connectNewAuction(abi, contract_address)
      SlideInModal.hide()
      setTimeout(() => {
        toast.success("Tạo đấu giá thành công", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        history.replace("/")
      }, 500)
    } catch (err) {
      console.log("SUBMIT ERR", err)
      SlideInModal.hide()
      toast.error("Tạo đấu giá thất bại", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } finally {
    }
  }

  const handleUploadImage = async (file, index) => {
    const id = Date.now() + "_" + index
    const fileName = id + ".jpg"
    const blob = await fetch(file?.src).then((res) => res.blob())
    const url = await uploadImage(blob, "auctions/images/abc", fileName)
    return url
  }

  React.useEffect(() => {
    fetchListCate()
  }, [])

  return (
    <section className="checkout-area ptb-100">
      <div className="container">
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            locale: 0,
            savedLocale: "",
            address: "",
            city: "",
            district: "",
            email: "",
            phone: "",
            introduce: "",
            prodName: "",
            initBidValue: "",
            stepValue: "",
            unlockValue: "",
            endDate: "",
            endTime: ""
          }}
        >
          {(formik) => {
            return (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="billing-details">
                      <h3 className="title">Thông tin vật phẩm</h3>
                      <div className="bar"></div>

                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Tên vật phẩm <span className="required">*</span>
                            </label>
                            <input
                              name="prodName"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Xuất xứ <span className="required">*</span>
                            </label>

                            <div className="select-box">
                              <select
                                name="locale"
                                onChange={(e) => {
                                  handleOnchange(e, formik)
                                }}
                                className="form-control"
                              >
                                <option value="5">Việt Nam</option>
                                <option value="1">Mỹ</option>
                                <option value="2">Trung Quốc</option>
                                <option value="0">Nhật Bản</option>
                                <option value="3">Pháp</option>
                                <option value="4">Tây Ban Nha</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Danh mục <span className="required">*</span>
                            </label>

                            <div className="select-box">
                              <select
                                name="category"
                                onChange={(e) => {
                                  handleOnchange(e, formik)
                                }}
                                className="form-control"
                              >
                                {category?.map((item, index) => (
                                  <option value={item?.id} key={index}>
                                    {item?.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Nơi bảo lưu<span className="required">*</span>
                            </label>
                            <input
                              name="savedLocale"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6">
                          <div className="form-group">
                            <label>
                              Địa chỉ <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="address"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-6">
                          <div className="form-group">
                            <label>
                              Tỉnh/Thành phố <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="city"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Quận/Huyện <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              name="district"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              value={formik.values["email"]}
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <label>
                              Điện thoại <span className="required">*</span>
                            </label>
                            <input
                              type="number"
                              name="phone"
                              className="form-control"
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                            />
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Giới thiệu <span className="required">*</span>
                            </label>
                            <textarea
                              onChange={(e) => {
                                handleOnchange(e, formik)
                              }}
                              name="introduce"
                              cols="30"
                              rows="4"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <label>
                              Hình ảnh sản phẩm{" "}
                              <span className="required">*</span>
                            </label>
                            <div className="row mb-2">
                              {listFile?.map((item, index) => (
                                <div className="col-lg-3 col-md-3">
                                  <img
                                    src={item?.src}
                                    key={index}
                                    style={{
                                      width: "100%",
                                      objectFit: "cover"
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                            <input
                              type="file"
                              multiple={false}
                              onChange={(e) => {
                                if (!e.target.files[0]) {
                                  return
                                }
                                let fileSrc = URL.createObjectURL(
                                  e.target.files[0]
                                )
                                setListFile([
                                  ...listFile,
                                  {
                                    data: e.target.files[0],
                                    src: fileSrc
                                  }
                                ])
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <OrderSummary
                    handleOnchange={handleOnchange}
                    handleSubmit={formik.handleSubmit}
                    formik={formik}
                  />
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    </section>
  )
}

export default CheckoutBody
