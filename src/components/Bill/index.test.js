import { mount } from "enzyme";
import Bill from "./index";

describe("Bill", () => {
  it("render selected item", () => {
    const selectedItems = {
      apple: {
        quantity: 2,
        price: 300,
      },
      orange: {
        quantity: 2,
        price: 300,
      },
    };

    const wrapper = mount(<Bill selectedItems={selectedItems} />);
    const itemLengths = wrapper.find(".item-selected").length;
    const grandTotal = wrapper.find(".grand-total-wrapper").at(0).text();
    expect(itemLengths).toBe(2);
    expect(grandTotal).toBe("1,200 ฿");
  });

  it("render item discount item", () => {
    const selectedItems = {
      "Red set": {
        quantity: 2,
        price: 50,
      },
    };

    const wrapper = mount(<Bill selectedItems={selectedItems} />);
    const itemLengths = wrapper.find(".item-selected").length;
    const grandTotal = wrapper.find(".grand-total-wrapper").at(0).text();
    expect(itemLengths).toBe(1);
    expect(grandTotal).toBe("95 ฿");
  });

  it("render item discount item and member", () => {
    const selectedItems = {
      "Red set": {
        quantity: 2,
        price: 50,
      },
    };

    const wrapper = mount(<Bill selectedItems={selectedItems} isMember />);
    const itemLengths = wrapper.find(".item-selected").length;
    const grandTotal = wrapper.find(".grand-total-wrapper").at(0).text();
    expect(itemLengths).toBe(1);
    expect(grandTotal).toBe("85.50 ฿");
  });
});
