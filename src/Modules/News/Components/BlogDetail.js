import React, { useState } from "react"
import { useParams } from "react-router"
import { Row } from "reactstrap"
import AsyncImage from "../../../components/AsyncImage"
import { RETCODE_SUCCESS } from "../../../configs/contants"
import { ButtonBlue, ButtonOrange } from "../assets/icons"
import { getNewsDetails } from "../Store/News/service"

const BlogDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [dataDetail, setDataDetail] = useState()

  const fetchNewsDetail = async () => {
    try {
      setLoading(true)
      const res = await getNewsDetails(id * 1)
      if (res.data.retCode === RETCODE_SUCCESS) {
        setDataDetail(res.data.data)
      }
    } catch (err) {
    } finally {
      setLoading(false)
    }
  }
  React.useEffect(() => {
    fetchNewsDetail()
  }, [id])
  console.log(dataDetail)
  return (
    <div className="news-detail-area">
      <div className="news-detail-wrapper">
        <div className="news-detail-header">
          <div className="news-detail-image-wrapper">
            <AsyncImage
              src={dataDetail?.urlImage}
              className="news-detail-image"
              placeholderClassName="news-item-image-loading"
            />
          </div>
          <div className="news-detail-info-wrapper w-100">
            <span className="news-detail-date">{dataDetail?.createdAt}</span>
            <h1 className="news-detail-title">{dataDetail?.title}</h1>
            <span className="news-detail-poster">
              Đăng bởi {dataDetail?.userCreated}
            </span>
          </div>
        </div>
        <div className="news-detail-content w-100">
          <p>{dataDetail?.content}</p>
        </div>
        <div className="news-detail-footer">
          <div
            className="news-detail-button-wrapper"
            onClick={() => {
              history.back()
            }}
          >
            <ButtonOrange />
            <span className="news-detail-button__text">Quay về</span>
          </div>
          <div className="news-detail-button-wrapper">
            <ButtonBlue />
            <span className="news-detail-button__text">Chia sẻ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
