const app = require("../app");
const request = require("supertest");

jest.mock("../middleware/authentication", () => (req, res, next) => next());

// Authenticated tests
describe("GET conversions valid authentication status code", () => {
  test("return 200 and correct value in the response cidr-mask", async () => {
    const response = await request(app)
      .get("/api/cidr-to-mask?value=24")
      .set("Authorization", "Bearer valid");
    expect(response.statusCode).toBe(200);
    expect(response.body.output).toBe("255.255.255.0");
  });
  test("return 200 and correct value in the response mask-cidr", async () => {
    const response = await request(app)
      .get("/api/mask-to-cidr?value=255.255.0.0")
      .set("Authorization", "Bearer valid");
    expect(response.statusCode).toBe(200);
    expect(response.body.output).toBe(16);
  });
});

describe("GET conversion valid response information", () => {
  test("return correct JSON response cidr-mask", async () => {
    const response = await request(app)
      .get("/api/cidr-to-mask?value=24")
      .set("Authorization", "Bearer valid");
    expect(response.body).toEqual({
      function: "cidrToMask",
      input: "24",
      output: "255.255.255.0",
    });
  });

  test("return correct JSON response mask-cidr", async () => {
    const response = await request(app)
      .get("/api/mask-to-cidr?value=255.255.0.0")
      .set("Authorization", "Bearer valid");
    expect(response.body).toEqual({
      function: "maskToCidr",
      input: "255.255.0.0",
      output: 16,
    });
  });
});
