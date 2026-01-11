import app from "./src/app.js";
import request from "supertest";
import { calculateDiscount } from "./src/utils/calculateDiscount.js";

describe("App", () => {
  it("should return 200 status on GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("welcome to auth service");
  });

  it("should return correct discount number", () => {
    const discount = calculateDiscount(100, 10);
    expect(discount).toBe(90);
  });
});
