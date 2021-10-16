import React, { useEffect, useState } from "react";
import { GiftsHeaderTitle, GoldIcon } from "../assets/icon";
import voi1 from "../assets/images/voicon.png";

import { actions as allGiftActions } from "../Store/AllGifts/reducer";
import { actions as myGiftActions } from "../Store/MyGifts/reducer";
import { actions as usedGiftActions } from "../Store/UsedGifts/reducer";

import {
  getListSelector as getAllGiftsSelector,
  getListLoadingSelector as getAllGiftLoadingSelector,
} from "../Store/AllGifts/selector";

import {
  getListSelector as getMyGiftsSelector,
  getListLoadingSelector as getMyGiftLoadingSelector,
} from "../Store/MyGifts/selector";

import {
  getListSelector as getUsedGiftsSelector,
  getListLoadingSelector as getUsedGiftLoadingSelector,
} from "../Store/UsedGifts/selector";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../store/user/selector";
import GiftItem from "./GiftItem";

import { GIFT_LIST_LIMIT_DETAULT } from "../../../configs/contants";
import { Row } from "reactstrap";
import Pagination from "../../../components/Pagination";

const Gifts = ({ activeTab, setActiveTabs }) => {
  const dispatch = useDispatch();

  const userData = useSelector(getUserData);

  const allGift = useSelector(getAllGiftsSelector);
  const allGiftLoading = useSelector(getAllGiftLoadingSelector);
  const myGift = useSelector(getMyGiftsSelector);
  const myGiftLoading = useSelector(getMyGiftLoadingSelector);
  const usedGift = useSelector(getUsedGiftsSelector);
  const usedGiftLoading = useSelector(getUsedGiftLoadingSelector);

  const listAllGift = allGift?.listData || [];
  const listUsedGift = usedGift?.listData || [];
  const listMyGift = myGift?.listData || [];

  useEffect(() => {
    dispatch(
      allGiftActions.getList({
        page: 1,
        limit: GIFT_LIST_LIMIT_DETAULT,
      })
    );
    dispatch(
      usedGiftActions.getList({
        page: 1,
        limit: GIFT_LIST_LIMIT_DETAULT,
        status: 1,
        userid: userData?.userId,
      })
    );
    dispatch(
      myGiftActions.getList({
        page: 1,
        limit: GIFT_LIST_LIMIT_DETAULT,
        userid: userData?.userId,
      })
    );
  }, []);

  const renderAllGift = React.useMemo(() => {
    return (
      <>
        {listAllGift.map((item, index) => {
          return (
            <GiftItem
              setActiveTab={setActiveTabs}
              item={item}
              index={index}
              key={item?.id}
              isTrade={true}
            />
          );
        })}
      </>
    );
  }, [JSON.stringify(listAllGift)]);
  const renderMyGift = React.useMemo(() => {
    return (
      <>
        {listMyGift?.length ? (
          listMyGift.map((item, index) => {
            return <GiftItem item={item} index={index} key={item?.id} />;
          })
        ) : (
          <p className="text-center mt-2">Không có dữ liệu</p>
        )}
      </>
    );
  }, [JSON.stringify(listMyGift)]);
  const renderUsedGift = React.useMemo(() => {
    return (
      <>
        {listUsedGift?.length ? (
          listUsedGift.map((item, index) => {
            return (
              <GiftItem
                item={item}
                index={index}
                key={item?.id}
                isUsed={true}
              />
            );
          })
        ) : (
          <p className="text-center mt-2">Không có dữ liệu</p>
        )}
      </>
    );
  }, [JSON.stringify(listUsedGift)]);

  const getPaging = () => {
    if (activeTab === 0) {
      return usedGift?.paging;
    }
    if (activeTab === 1) {
      return myGift?.paging;
    }
    return allGift?.paging;
  };

  const onPageChange = ({ selected }) => {
    if (activeTab === 0) {
      dispatch(
        usedGiftActions.getList({
          page: selected + 1,
          limit: GIFT_LIST_LIMIT_DETAULT,
          status: 1,
          userid: userData?.userId,
        })
      );
    } else if (activeTab === 1) {
      dispatch(
        myGiftActions.getList({
          page: selected + 1,
          limit: GIFT_LIST_LIMIT_DETAULT,
          userid: userData?.userId,
        })
      );
    } else {
      dispatch(
        allGiftActions.getList({
          page: selected + 1,
          limit: GIFT_LIST_LIMIT_DETAULT,
        })
      );
    }
  };

  return (
    <div className="gifts-container" id="tab-gift">
      <div className="gifts-top-header-wrapper">
        <GiftsHeaderTitle />
      </div>
      <div className="gifts-tabs-wrapper">
        <span
          className={`${activeTab === 0 && "active"}`}
          onClick={() => setActiveTabs(0)}
        >
          Đã dùng
        </span>
        <span
          className={`${activeTab === 1 && "active"}`}
          onClick={() => setActiveTabs(1)}
        >
          Quà của tôi
        </span>
        <span
          className={`${activeTab === 2 && "active"}`}
          onClick={() => setActiveTabs(2)}
        >
          Tất cả
        </span>
      </div>
      <div className="list-gifts-wrapper">
        {activeTab === 0
          ? renderUsedGift
          : activeTab === 1
          ? renderMyGift
          : renderAllGift}
        {getPaging()?.totalPage > 1 ? (
          <Row className="w-100 mt-2">
            <div className="d-flex flex-row justify-content-center">
              <Pagination
                initialPage={0}
                forcePage={getPaging()?.curPage - 1}
                pageCount={getPaging()?.totalPage}
                containerClassName={"d-flex flex-row"}
                onPageChange={onPageChange}
              />
            </div>
          </Row>
        ) : null}
      </div>
    </div>
  );
};
export default Gifts;
