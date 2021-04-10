export const onAddToCart = (selectedItems, setSelectItem) => (data) => {
  const { name, price } = data;
  if (selectedItems[name]) {
    setSelectItem({
      ...selectedItems,
      [name]: {
        price: price,
        quantity: (selectedItems[name]["quantity"] += 1),
      },
    });
  } else {
    setSelectItem({
      ...selectedItems,
      [name]: {
        price: price,
        quantity: 1,
      },
    });
  }
};

export const onRemoveFormCart = (selectedItems, setSelectItem) => (data) => {
  const { name, price } = data;
  if (selectedItems[name]) {
    setSelectItem({
      ...selectedItems,
      [name]: {
        price: price,
        quantity: (selectedItems[name]["quantity"] -= 1),
      },
    });
  } else {
    setSelectItem({
      ...selectedItems,
      [name]: {
        price: price,
        quantity: 1,
      },
    });
  }
};
export const getDiscountSetCondition = (selectedItem, discountDoublesSet) => {
  let isDiscount = false;
  for (let i = 0; i < discountDoublesSet.length; i++) {
    const key = discountDoublesSet[i];
    const item = selectedItem[key];
    if (item && item.quantity >= 2) {
      isDiscount = true;
    }
  }
  return isDiscount;
};

export const getDisCountGrandTotal = (total, isHaveDiscountItem, isMmber) => {
  let tempTotal = total;
  if (isHaveDiscountItem) {
    tempTotal = tempTotal - tempTotal * 0.05;
  }
  if (isMmber) {
    tempTotal = tempTotal - tempTotal * 0.1;
  }
  return tempTotal;
};
