import {
  getIsDiscountSetCondition,
  onAddToCart,
  onRemoveFormCart,
  getDisCountGrandTotal,
} from "./storeShop";

describe("stotre shop selector", () => {
  describe("onAddToCart", () => {
    const setSelectItem = jest.fn();
    it("add new item", () => {
      const selectedItem = {};
      const data = {
        name: "Apple",
        price: 300,
      };
      onAddToCart(selectedItem, setSelectItem)(data);
      expect(setSelectItem).toBeCalledWith({
        Apple: {
          price: 300,
          quantity: 1,
        },
      });
    });
    it("add add one item", () => {
      const selectedItem = {
        Apple: {
          price: 3000,
          quantity: 3,
        },
      };
      const data = {
        name: "Apple",
        price: 300,
      };
      onAddToCart(selectedItem, setSelectItem)(data);
      expect(setSelectItem).toBeCalledWith({
        Apple: {
          price: 300,
          quantity: 4,
        },
      });
    });
  });
  describe("onRemoveFormCart", () => {
    const setSelectItem = jest.fn();
    it("remove item is not in selected", () => {
      const selectedItem = {};
      const data = {
        name: "Apple",
        price: 300,
      };
      onRemoveFormCart(selectedItem, setSelectItem)(data);
      expect(setSelectItem).toBeCalledWith({
        Apple: {
          price: 300,
          quantity: 0,
        },
      });
    });

    it("remove from zero", () => {
      const selectedItem = {
        Apple: {
          price: 3000,
          quantity: 0,
        },
      };
      const data = {
        name: "Apple",
        price: 300,
      };
      onRemoveFormCart(selectedItem, setSelectItem)(data);
      expect(setSelectItem).toBeCalledWith({
        Apple: {
          price: 300,
          quantity: 0,
        },
      });
    });

    it("remove 3 item", () => {
      const selectedItem = {
        Apple: {
          price: 3000,
          quantity: 3,
        },
      };
      const data = {
        name: "Apple",
        price: 300,
      };
      onRemoveFormCart(selectedItem, setSelectItem)(data);
      expect(setSelectItem).toBeCalledWith({
        Apple: {
          price: 300,
          quantity: 2,
        },
      });
    });
  });
  describe("getIsDiscountSetCondition", () => {
    it("is not more than 2 item", () => {
      const selectedItem = {
        Apple: {
          quantity: 1,
        },
      };

      const itemNameCondition = ["Apple"];
      const result = getIsDiscountSetCondition(selectedItem, itemNameCondition);
      expect(result).toBeFalsy();
    });

    it("is  more than 2 item", () => {
      const selectedItem = {
        Apple: {
          quantity: 2,
        },
      };

      const itemNameCondition = ["Apple"];
      const result = getIsDiscountSetCondition(selectedItem, itemNameCondition);
      expect(result).toBeTruthy();
    });
  });
  describe("getDisCountGrandTotal", () => {
    it("have this count from item condition 5%", () => {
      const result = getDisCountGrandTotal(1000, true, false);
      expect(result).toBe(950);
    });
    it("have this count from member 10%", () => {
      const result = getDisCountGrandTotal(1000, false, true);
      expect(result).toBe(900);
    });
    it("have this count from itme 5% and member 10% form total deducted", () => {
      const result = getDisCountGrandTotal(1000, true, true);
      expect(result).toBe(855);
    });
  });
});
