<<<<<<< HEAD
import React from "react";

const MyPayment = () => {
  return (
    <div className="tab__content-item">
      <div className="itemhistory">
        <div className="name">Frontend Newbie</div>
        <div className="payment">Chuyển khoản</div>
        <div className="date">05/01/2022</div>
        <div className="money">4.500.000 VND</div>
      </div>
      <div className="itemhistory">
        <div className="name">Web Responsive</div>
        <div className="payment">Tiền mặt</div>
        <div className="date">14/07/2022</div>
        <div className="money">4.900.000 VND</div>
      </div>
=======
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
>>>>>>> 5597a8e (update)
    </div>
  );
};

export default MyPayment;
