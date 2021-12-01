import React from "react"

const EndAuctionModal = ({ onSubmit = () => {} }) => {
  return (
    <div style={{ width: "100%", padding: 30 }}>
      <h2 className="text-center text-warning">Thông báo</h2>
      <h5 className="text-center">
        Phiên đấu giá của bạn đã hết thời gian, vui lòng kết thúc đấu giá để
        hoàn thành giao dịch
      </h5>
      <div className="d-flex flex-row justify-content-center mt-4">
        <button onClick={onSubmit} className="btn btn-primary">
          Kết thúc
        </button>
      </div>
    </div>
  )
}
export default EndAuctionModal
