import { formatPrice } from ".";

describe("utils", () => {
  describe("formatPrice", () => {
    it("2000 should return 2,000", () => {
      const result = formatPrice(2000);
      expect(result).toBe("2,000");
    });
  });
});
