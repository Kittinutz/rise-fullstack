import React from "react";
import {
  getDisCountGrandTotal,
  getDiscountSetCondition,
} from "../../selectors/storeShop";
import { discountDoublesSet } from "../../enums/foodItems";
import "./style.scss";
import { formatPrice } from "../../utils";
const Bill = ({ selectedItems = {}, isMember = false }) => {
  const listItem = Object.keys(selectedItems);
  const isHaveItemList = listItem.length > 0;
  const billWrapperClass = `bill-wrapper ${isHaveItemList && "active"}`;

  const total = listItem.reduce((acc, itemKey) => {
    const price = selectedItems[itemKey].price;
    const quantity = selectedItems[itemKey].quantity;
    const total = price * quantity;
    return (acc += total);
  }, 0);

  const isHaveDiscountItem = getDiscountSetCondition(
    selectedItems,
    discountDoublesSet
  );
  const discountDoubleSet = total * 0.05;
  const totalDiscountDoubleSet = total - discountDoubleSet;
  const disCountFormDeducted = isHaveDiscountItem
    ? (total - discountDoubleSet) * 0.1
    : total * 0.1;

  const grandTotal = getDisCountGrandTotal(total, isHaveDiscountItem, isMember);
  return (
    <div className="bill-item-wrapper">
      <h1>This is bill</h1>
      <table className={billWrapperClass}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {listItem.map((name) => {
            const quantity = selectedItems[name].quantity;
            const price = selectedItems[name].price;
            const totalPrice = quantity * price;
            return (
              <tr key={`${name}-${quantity}-${price}`}>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{formatPrice(totalPrice)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isHaveItemList && (
        <div className="show-total-price-wrapper">
          <div className="show-total">Total</div>
          <div>{formatPrice(total)} ฿</div>
        </div>
      )}
      {isHaveDiscountItem && (
        <div className="show-discount-double-wrapper">
          <span>Discount 5% for doubles set</span>
          <span> - {formatPrice(discountDoubleSet)} ฿</span>
        </div>
      )}
      {isHaveDiscountItem && (
        <div className="show-discount-double-wrapper">
          <span>Total discount form doubles set</span>
          <span>{formatPrice(totalDiscountDoubleSet)}</span>
        </div>
      )}

      {isMember && isHaveItemList && (
        <div className="show-discount-member">
          <span>Discount for member card 10%</span>
          <span>- {formatPrice(disCountFormDeducted)} ฿</span>
        </div>
      )}
      {isHaveItemList && (
        <div className="wrapper-grand-total">
          <span>Grand total</span>
          <span>{formatPrice(grandTotal)} ฿</span>
        </div>
      )}
    </div>
  );
};

export default Bill;
