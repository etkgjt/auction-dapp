import React from "react"
import { Row, Col } from "reactstrap"
import {
  RulesTopBannerTitle,
  CalendarIcon,
  FacebookIcon,
  YoutubeIcon,
  DetailButton
} from "../assets/icon"

import coinIcon from "../assets/images/coin-icon.png"
import bangtinhdiem from "../assets/images/table1.png"
import bangtuan from "../assets/images/bangtuan.png"
import bangthang from "../assets/images/bangthang.png"
import bangnam from "../assets/images/bangquy.png"

import {
  getListLoadingSelector,
  getListSelector
} from "../../Home/Store/Rules/selector"
import { actions } from "../../Home/Store/Rules/reducer"
import { useDispatch, useSelector } from "react-redux"

const Rules = () => {
  const dispatch = useDispatch()

  const rules = useSelector(getListSelector)
  const rulesLoading = useSelector(getListLoadingSelector)

  React.useEffect(() => {
    dispatch(actions.getList())
  }, [])

  return (
    <div className="rules-area">
      <Row>
        <Col xl="7" lg="7" md="7">
          <div className="rules-detail-container">
            <div className="rules-detail__title-container">
              <RulesTopBannerTitle />
            </div>
            <div dangerouslySetInnerHTML={{ __html: rules?.value }}></div>
          </div>
        </Col>
        <Col xl="5" lg="5" md="5">
          <div className="event-calendar-container">
            <h1 className="calendar-title">Lịch Sự Kiên</h1>
            <p className="calendar-text-black">
              Tất cả điểm của các bạn
              <br /> được tính đến
            </p>
            <div className="calendar-icon__container">
              <CalendarIcon />
              <img src={coinIcon} alt="img" className="calender-coin-icon" />
            </div>

            <p className="notic">Lưu ý:</p>

            <span className="notic-text-black">
              1. Khi hoàn thành
              <span className="notic-text-white">&nbsp;5 lượt mời&nbsp;</span>
              thành công tính đến 23h59
              <span className="notic-text-white">&nbsp;ngày 23 hàng tháng</span>
              , bạn sẽ có cơ hội nhận một lượt quay số trúng thưởng vào
              <span className="notic-text-white">
                &nbsp;21h tối thứ 5 cuối cùng trong tháng
              </span>
            </span>

            <span className="notic-text-black">
              2. Một lượt quay bạn nhận được chỉ được áp dụng cho
              <span className="notic-text-white mt-2">
                một lần quay số duy nhất trong tháng
              </span>
            </span>
            <span className="notic-text-black my-2">
              3. Các kênh soical bạn có thể theo dõi lượt quay:
            </span>
            <span className="social-link">
              <FacebookIcon size={32} />
              <p>Fanpage Tâm Trí Lực</p>
            </span>
            <span className="social-link">
              <FacebookIcon size={32} />
              <p>Facebook Nguyễn Tùng Phong</p>
            </span>
            <span className="social-link">
              <YoutubeIcon size={32} />
              <p>Youtube Nguyễn Phùng Phong</p>
            </span>
            <span className="social-link">
              <YoutubeIcon size={32} />
              <p>Youtube Siêu Trí Nhớ Học Đường</p>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default Rules
