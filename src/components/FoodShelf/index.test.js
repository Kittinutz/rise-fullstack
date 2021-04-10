import { mount, shallow } from "enzyme";
import FoodShelf from "./index.js";

describe("FoodShelf", () => {
  it("render food item item", () => {
    const foodItems = [
      {
        name: "apple",
        price: 300,
      },
    ];
    const wrapper = shallow(<FoodShelf foodItems={foodItems} />);
    const foodItemLength = wrapper.find(".food-item-wrapper").length;
    expect(foodItemLength).toBe(1);
  });
  it("render food add and remove action item item", () => {
    const foodItems = [
      {
        name: "apple",
        price: 300,
      },
      {
        name: "orange",
        price: 300,
      },
    ];
    const selectedItems = {
      apple: {
        quantity: 3,
        price: 300,
      },
    };
    const onRemove = jest.fn();
    const onAdd = jest.fn();
    const wrapper = mount(
      <FoodShelf
        foodItems={foodItems}
        selectedItems={selectedItems}
        onRemoveFromCart={onRemove}
        onAddToCart={onAdd}
      />
    );
    const wrapperFoodItems = wrapper.find(".food-item-wrapper");
    const foodItemLength = wrapperFoodItems.length;
    const appleItmeRemoveAction = wrapperFoodItems.at(0).find(".remove");
    const orangeItemAddAction = wrapperFoodItems.at(1).find(".add");
    appleItmeRemoveAction.simulate("click");
    orangeItemAddAction.simulate("click");
    expect(foodItemLength).toBe(2);
    expect(onAdd).toBeCalledWith({
      name: "orange",
      price: 300,
    });
    expect(onRemove).toBeCalledWith({
      name: "apple",
      price: 300,
    });
  });
});
