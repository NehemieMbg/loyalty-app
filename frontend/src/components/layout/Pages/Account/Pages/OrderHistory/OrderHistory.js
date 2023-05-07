import React from "react";
import Pen from "../UI/Pen";
import "./OrderHistory.scss";

const users = require("../Users/users.json");
const user1 = users[0];
const userEmail = user1.orders;

const OrderHistory = () => {
  return (
    <div className="orders-history-section">
      <table className="orders-history__table">
        <tr className="orders-history__table-headings">
          <th className="table-heading__item-1">Date</th>
          <th className="table-heading__item-2">Car</th>
          <th className="table-heading__item-3">Period</th>
          <th className="table-heading__item-4">Discount</th>
          <th className="table-heading__item-5">Total Price</th>
        </tr>

        {userEmail.map((order, idx) => {
          return (
            <tr
              className={`orders-history__table-data ${
                idx % 2 === 0 ? "table-data-darken" : ""
              }`}
            >
              <th className="table-data__item-1">{order.purchaseDate}</th>
              <th className="table-data__item-2">{order.car}</th>
              <th className="table-data__item-3">{`${order.period.from} to ${order.period.to}`}</th>
              <th className="table-data__item-4">{`${order.discount}`}</th>
              <th className="table-data__item-5">{`${order.totalPrice}€`}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default OrderHistory;
