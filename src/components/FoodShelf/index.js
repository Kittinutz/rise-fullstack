import React from "react";
import "./style.scss";
const FoodShelf = ({
  foodItems = [],
  onAddToCart,
  onRemoveFromCart,
  selectedItems,
}) => {
  const handleAddToCart = (data) => (e) => {
    onAddToCart({
      name: data.name,
      price: data.price,
    });
  };

  const handleRemoveFromCart = (data) => () => {
    onRemoveFromCart({
      name: data.name,
      price: data.price,
    });
  };

  return (
    <div className="show-item-wrapper">
      <div className="item-container">
        {foodItems.map(({ name, price }) => {
          const quantity =
            selectedItems &&
            selectedItems[name] &&
            selectedItems[name].quantity;
          return (
            <div key={name} className="food-item-wrapper">
              <div>{name}</div>
              <div>{price} ฿</div>
              <div className="item-action">
                {quantity > 0 && (
                  <button
                    className="btn remove"
                    onClick={handleRemoveFromCart({ name, price })}
                  >
                    -
                  </button>
                )}
                <button
                  className="btn add"
                  onClick={handleAddToCart({ name, price })}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FoodShelf;
