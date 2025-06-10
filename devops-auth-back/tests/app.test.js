const app = require("../app");
const request = require("supertest");

// Testing the entry route

describe('Testing for the "/" route', () => {
  test("Get / returns OK and status code 200", async () => {
    const response = await request(app).get("/").send();
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });
});

describe("Testing for the health route", () => {
  test("Get /api/_health returns OK and status code 200", async () => {
    const response = await request(app).get("/api/_health").send();
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });
});
