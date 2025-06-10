const app = require("../app");
const request = require("supertest");

// invalid authentication tests

describe("GET conversions invalid auth", () => {
  test("return 401 when no token is provided cidr-mask", async () => {
    const response = await request(app).get("/api/cidr-to-mask?value=24");
    expect(response.statusCode).toBe(401);
  });
  test("return 401 when no token is provided mask-cidr", async () => {
    const response = await request(app).get(
      "/api/mask-to-cidr?value=255.255.0.0"
    );
    expect(response.statusCode).toBe(401);
  });

  test("return 401 when token is incorrect cidr-mask", async () => {
    const response = await request(app)
      .get("/api/cidr-to-mask?value=24")
      .set("Authorization", "Bearer invalid");
    expect(response.statusCode).toBe(401);
  });
  test("return 401 when token is incorrect mask-cidr", async () => {
    const response = await request(app)
      .get("/api/mask-to-cidr?value=255.255.0.0")
      .set("Authorization", "Bearer invalid");
    expect(response.statusCode).toBe(401);
  });
});
