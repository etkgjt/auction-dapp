import React from "react"
import { Col, Row } from "reactstrap"
import banner from "../assets/images/rule-top-banner.png"

import { HornorTable, ButtonSvg } from "../assets/icon"
import { useHistory } from "react-router"

import {
  getListLoadingSelector,
  getListSelector
} from "../Store/Rules/selector"

import {
  getListLoadingSelector as getListRankLoadingSelector,
  getListSelector as getListRankSelector
} from "../Store/Ranking/selector"

import { actions } from "../Store/Rules/reducer"
import { actions as rankActions } from "../Store/Ranking/reducer"
import { useDispatch, useSelector } from "react-redux"
import AsyncImage from "../../../components/AsyncImage"

const data = [
  {
    level: 10,
    name: "Trần Thanh Nguyên",
    point: 432000
  },
  {
    level: 9,
    name: "Trần Thanh Nguyên",
    point: 425000
  },
  {
    level: 9,
    name: "Trần Thanh Nguyên",
    point: 412500
  },
  {
    level: 8,
    name: "Trần Thanh Nguyên",
    point: 232000
  },
  {
    level: 7,
    name: "Trần Thanh Nguyên",
    point: 132000
  }
]
const getHornorTableWidth = () => {
  const width = window.innerWidth
  const paddingWidth = width * 0.8
  return (paddingWidth / 12) * 5
}
const getHornorTableHeight = () => {
  const ratio = 461 / 841
  return getHornorTableWidth() / ratio
}

const Rules = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const rules = useSelector(getListSelector)
  const rulesLoading = useSelector(getListLoadingSelector)

  const listRank = useSelector(getListRankSelector)
  const listRankLoading = useSelector(getListRankLoadingSelector)

  const onSeemorePress = () => {
    history.push("/rules")
  }

  React.useEffect(() => {
    dispatch(actions.getList())
    dispatch(rankActions.getList())
  }, [])

  return (
    <div className="rules-area">
      <div className="rules-container">
        <Row>
          <Col xl="7" lg="7" md="7">
            <div className="rules-board">
              <img src={banner} alt="banner" className="rule-top-banner" />
              <div dangerouslySetInnerHTML={{ __html: rules?.description }} />
              <div className="seemore-button" onClick={onSeemorePress}>
                <ButtonSvg />
                <p className="seemore-button__text">Xem thêm</p>
              </div>
            </div>
          </Col>
          <Col xl="5" lg="5" md="5">
            <div className="hornor-table-container">
              <HornorTable
                width={getHornorTableWidth()}
                height={getHornorTableHeight()}
              />
              <div
                className="seemore-button"
                onClick={() => {
                  history.push("/rankings")
                }}
              >
                <ButtonSvg />
                <p className="seemore-button__text">Xem thêm</p>
              </div>
              <div className="hornor-table-list-container">
                <h1 className="hornor-table-list__title">
                  Bảng <br />
                  xếp hạng
                </h1>
                {listRank?.map((item, index) => (
                  <div key={index} className="hornor-item-wrapper">
                    <p className="item-rank">{index + 1}</p>
                    <div className="item-avatar">
                      <AsyncImage
                        src={item?.avatar}
                        className="item-rank-avatar-img"
                        placeholderClassName="item-rank-avatar-loading"
                      />
                    </div>
                    <div className="item-info">
                      <span className="item-level">
                        {item?.level?.name || ""}
                      </span>
                      <span className="item-name">{item.fullName}</span>
                      <span className="item-point">{`${item.totalPoint}k`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Rules
