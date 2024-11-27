const quoteModel = require("../models/quoteModel");

const correctjson = { car_value: 1200, risk_rating: 5 };

test("calculates quote correctly", () => {
  expect(quoteModel.calculateQuotes(correctjson)).toStrictEqual({
    quoteYearly: 60,
    quoteMonthly: 5,
  });
});

test("calculates quote including car_value in string form", () => {
  expect(
    quoteModel.calculateQuotes({ car_value: "1200", risk_rating: 5 })
  ).toStrictEqual({
    quoteYearly: 60,
    quoteMonthly: 5,
  });
});

test("calculates quote including risk rating in string form", () => {
  expect(
    quoteModel.calculateQuotes({ car_value: 1200, risk_rating: "5" })
  ).toStrictEqual({
    quoteYearly: 60,
    quoteMonthly: 5,
  });
});

test("test for empty JSON", () => {
  expect(() => quoteModel.calculateQuotes()).toThrow("Input is empty");
});

test("car_value or risk_rating missing", () => {
  expect(() =>
    quoteModel.calculateQuotes({ car_value: "", risk_rating: 5 })
  ).toThrow("car_value or risk_rating empty");
});

test("car_value negative", () => {
  expect(() =>
    quoteModel.calculateQuotes({ car_value: -10, risk_rating: 5 })
  ).toThrow(
    "car_value cannot be <0, risk_rating must be between 1 and 5 inclusive"
  );
});

test("risk_rating negative", () => {
  expect(() =>
    quoteModel.calculateQuotes({ car_value: 10, risk_rating: -5 })
  ).toThrow(
    "car_value cannot be <0, risk_rating must be between 1 and 5 inclusive"
  );
});

test("risk_rating more than 5", () => {
  expect(() =>
    quoteModel.calculateQuotes({ car_value: 10, risk_rating: 19 })
  ).toThrow(
    "car_value cannot be <0, risk_rating must be between 1 and 5 inclusive"
  );
});

test("risk_rating must be integer", () => {
  expect(() =>
    quoteModel.calculateQuotes({ car_value: 10, risk_rating: 3.1 })
  ).toThrow("risk_rating must be integer");
});

test("car_value not number", () => {
  expect(() =>
    quoteModel.calculateQuotes({ car_value: "hello", risk_rating: 3 })
  ).toThrow("car_value must be a number");
});
