import React, { useEffect } from "react"
import QuarterRank from "./QuarterRank"
import MonthRank from "./MonthRank"
import WeekRank from "./WeekRank"

import { actions as quarterRankActions } from "../Store/QuarterRank/reducer"
import { actions as monthRankActions } from "../Store/MonthRank/reducer"
import { actions as weekRankActions } from "../Store/WeekRank/reducer"

import {
  getListSelector as listQuarterRankSelector,
  getListLoadingSelector as listQuarterRankLoadingSelector
} from "../Store/QuarterRank/selector"
import {
  getListSelector as listMonthRankSelector,
  getListLoadingSelector as listMonthRankLoadingSelector
} from "../Store/MonthRank/selector"
import {
  getListSelector as listWeekRankSelector,
  getListLoadingSelector as listWeekRankLoadingSelector
} from "../Store/WeekRank/selector"
import { useDispatch, useSelector } from "react-redux"

const RankingTable = () => {
  const dispatch = useDispatch()

  const listQuarterRank = useSelector(listQuarterRankSelector)
  const listQuarterRankLoading = useSelector(listQuarterRankLoadingSelector)

  const listMonthRank = useSelector(listMonthRankSelector)
  const listMonthRankLoading = useSelector(listMonthRankLoadingSelector)

  const listWeekRank = useSelector(listWeekRankSelector)
  const listWeekRankLoading = useSelector(listWeekRankLoadingSelector)

  useEffect(() => {
    dispatch(quarterRankActions.getList({}))
    dispatch(monthRankActions.getList({}))
    dispatch(weekRankActions.getList({}))
  }, [])

  return (
    <div className="ranking-area">
      <QuarterRank data={listQuarterRank} />
      <MonthRank data={listMonthRank} />
      <WeekRank data={listWeekRank} />
    </div>
  )
}
export default RankingTable
