const CarValueModel = require("../models/carValueModel");

describe("CarValueModel.calculateCarValue", () => {
  test("converts a simple word to numeric value", () => {
    expect(CarValueModel.calculateCarValue("abc", 0)).toBe(6); // a=1, b=2, c=3 => 1+2+3=6
  });

  test("handles uppercase letters", () => {
    expect(CarValueModel.calculateCarValue("ABC", 0)).toBe(6); // A=1, B=2, C=3 => 1+2+3=6
  });

  test("handles mixed case letters", () => {
    expect(CarValueModel.calculateCarValue("aBc", 0)).toBe(6); // a=1, B=2, c=3 => 1+2+3=6
  });

  test("ignores non-alphabetic characters", () => {
    expect(CarValueModel.calculateCarValue("a1b2c3", 0)).toBe(6); // a=1, b=2, c=3 => 1+2+3=6
  });

  test("returns 0 for an empty string", () => {
    expect(CarValueModel.calculateCarValue("", 0)).toBe(0);
  });

  test("ignores spaces and special characters", () => {
    expect(CarValueModel.calculateCarValue("a b!@#$%^&*()", 0)).toBe(3); // a=1, b=2 => 1+2=3
  });

  test("handles long words correctly", () => {
    expect(
      CarValueModel.calculateCarValue("abcdefghijklmnopqrstuvwxyz", 0)
    ).toBe(351); // Sum of 1 through 26
  });

  test("adds the year to the calculated value", () => {
    expect(CarValueModel.calculateCarValue("abc", 2023)).toBe(2029); // Word value 6 + Year 2023
  });
});
