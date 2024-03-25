import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import moment from "moment";
import formatNumber from "../../utils/formatCurrency";

const MyPayment = () => {
  const { paymentInfo, handleGetProfilePayment } = useAuthContext();
  useEffect(() => {
    if (paymentInfo?.length === 0) {
      handleGetProfilePayment();
    }
  }, []);

  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      {!!!paymentInfo.length && <p>Không có dữ liệu.</p>}
      {!!paymentInfo.length &&
        paymentInfo.map((item, index) => {
          const { id, paymentMethod, createdAt, course } = item;
          return (
            <div
              key={id || new Date().getTime() + index}
              className="itemhistory"
            >
              <div className="name">{course?.name}</div>
              <div className="payment">{paymentMethod}</div>
              <div className="date">
                {moment(createdAt).format("DD/MM/YYYY")}
              </div>
              <div className="money">{formatNumber(course?.price)}</div>
            </div>
          );
        })}
    </div>
  );
};

export default MyPayment;
