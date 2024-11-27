const request = require("supertest");
const app = require("../index");

describe("POST /api/riskRating", () => {
  test("should return risk rating of 3", async () => {
    // test 1: valid claim history
    const claimHistory = {
      claimHistory:
        "I had a crash into my letterbox and got a scratch and a bump",
    };

    const response = await request(app)
      .post("/api/riskRating") //api endpoint
      .send(claimHistory);

    //run & compare output to expected output

    expect(response.status).toBe(200); // check if response statuis is okay
    expect(response.body.riskRating).toBe(3); // check if returned risk rating is 3
  });

  test("should return an error for empty claim history", async () => {
    // test 2: empty claim history
    const claimHistory = {
      claimHistory: "", //empty string
    };

    const response = await request(app)
      .post("/api/riskRating") //api endpoint
      .send(claimHistory);

    //run & compare output to expected output

    expect(response.status).toBe(400); // check if response statuis is okay
    expect(response.body.error).toBe(
      "Invalid input: Claim history cannot be empty"
    );
  });

  test("should return an error for non string (invalid DT)", async () => {
    // test 3: non-strings
    const claimHistory = {
      claimHistory: 12345, //invalid DT
    };

    const response = await request(app)
      .post("/api/riskRating") //api endpoint
      .send(claimHistory);

    //run & compare output to expected output

    expect(response.status).toBe(400); // bad request
    expect(response.body.error).toBe(
      "Invalid input: claim history must be string"
    );
  });
  test("should return risk rating of 5 for 5 of more occurences", async () => {
    // test 4: maximum rating 5
    const claimHistory = {
      claimHistory: "scratch bump collide smash crash collide smash bump", //mor ethan 5 occurences
    };

    const response = await request(app)
      .post("/api/riskRating") //api endpoint
      .send(claimHistory);

    //run & compare output to expected output

    expect(response.status).toBe(200); // OK
    expect(response.body.riskRating).toBe(5); // maximum of 5
  });
  test("should return risk rating of 1", async () => {
    // test 5: risk rating 1
    const claimHistory = {
      claimHistory: "i had had no claims", //no keywords
    };

    const response = await request(app)
      .post("/api/riskRating") //api endpoint
      .send(claimHistory);

    //run & compare output to expected output

    expect(response.status).toBe(200); // OK
    expect(response.body.riskRating).toBe(1); // risk rating 1
  });
  test("multiple of one word", async () => {
    // test 6: word duplicates
    const claimHistory = {
      claimHistory: "i had a scratch and another scratch", //2 scratch keywords
    };

    const response = await request(app)
      .post("/api/riskRating") //api endpoint
      .send(claimHistory);

    //run & compare output to expected output

    expect(response.status).toBe(200); // OK
    expect(response.body.riskRating).toBe(2); // risk rating 2
  });
});
