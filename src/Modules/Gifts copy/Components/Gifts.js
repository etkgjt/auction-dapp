import React, { useState } from "react"
import { Col, Row } from "reactstrap"
import { GiftsHeaderTitle, GoldIcon } from "../assets/icon"
import voi1 from "../assets/images/voicon.png"
import voi2 from "../assets/images/voichamchi.png"
import voi3 from "../assets/images/voidaisu-silver.png"
import voi4 from "../assets/images/voidaisu-gold.png"

const data = [
  {
    title: "Vé quay số tuần 2",
    subtitle: "Ngày quay: xx/09/2021",
    code: "XY34STNHD",
    img: voi1,
    type: "code"
  },
  {
    title: "Thẻ cào điện thoại 20k",
    subtitle: "Hạn sử dụng: xx/09/2021",
    img: voi1,
    type: "voucher",
    value: 30
  },
  {
    title: "E-Voucher 30k",
    subtitle: "Hạn sử dụng: xx/09/2021",
    img: "https://nhamayveston.com/wp-content/uploads/2020/10/1571133630-logo-tiki.png",
    type: "voucher",
    value: 30
  },
  {
    title: "Voucher Tiki 30k",
    subtitle: "Hạn sử dụng: xx/09/2021",
    img: voi1,
    type: "voucher",
    value: 30
  }
]

const Gifts = () => {
  const [activeTab, setActiveTabs] = useState(0)

  return (
    <div className="gifts-container">
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
        {data.map((item, index) => {
          return (
            <div className="d-flex flex-row justify-content-between">
              <div key={index} className="gifts-item-wrapper">
                <div className="d-flex flex-row ticket-left">
                  <img className="gifts-item-image" src={item.img} />
                  <div className="gifts-item-info-wrapper">
                    <p className="gifts-item-title">{item.title}</p>
                    <p className="gifts-item-subtitle">{item.subtitle}</p>
                    {item.type === "code" ? (
                      <span className="d-flex flex-row">
                        <p className="gifts-item-point">{`+${item.code}`}</p>
                        <GoldIcon />
                      </span>
                    ) : (
                      <p className="gifts-item-point">{`+${item.value}k`}</p>
                    )}
                  </div>
                </div>
                {activeTab === 0 ? null : (
                  <div className="ticket-right">
                    <p>
                      Sử <br /> dụng
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Gifts
