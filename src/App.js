import foodItems from "./enums/foodItems";
import FoodShelf from "./components/FoodShelf";
import Bill from "./components/Bill";

import logo from "./logo.svg";

import "./App.css";
import { useState } from "react";
import { onAddToCart, onRemoveFormCart } from "./selectors/storeShop";

function App() {
  /**
   * selectedItems
   * {
   *   'Red set': {
   *    quantity: 1,
   *    price: 50,
   * }
   * }
   */
  const [selectedItems, selectItem] = useState({});
  const [isHaveMember, setHaveMember] = useState(false);
  const handleAddToCart = onAddToCart(selectedItems, selectItem);
  const handleRemoveFromCart = onRemoveFormCart(selectedItems, selectItem);
  const handleAddMember = () => {
    setHaveMember(!isHaveMember);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="food-items-wrapper">
          <FoodShelf
            foodItems={foodItems}
            selectedItems={selectedItems}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
          />
          <Bill selectedItems={selectedItems} isMember={isHaveMember} />
          <label>
            <input
              type="checkbox"
              checked={isHaveMember}
              onChange={handleAddMember}
            />
            <span>Are you have member ship?</span>
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
