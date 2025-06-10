const app = require("../app");
const request = require("supertest");

const User = require("../models/user");
const bcrypt = require("bcrypt");

// Mock the user and bcrypt
jest.mock("../models/user");
jest.mock("bcrypt");

describe("POST /api/login", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("returns 400 when fields are missing", async () => {
    const response = await request(app).post("/api/login").send({});
    expect(response.statusCode).toBe(400);
  });

  test("return 401 if user isnt found", async () => {
    User.findOne.mockResolvedValue(null);

    const response = await request(app).post("/api/login").send({
      username: "test",
      password: "pass123",
    });
    expect(response.statusCode).toBe(401);
  });

  test("returns 401 if password dont match", async () => {
    User.findOne.mockResolvedValue({
      username: "test",
      password: "hash",
      role: "admin",
    });

    bcrypt.compare.mockResolvedValue(false);

    const response = await request(app).post("/api/login").send({
      username: "test",
      password: "pass23",
    });

    expect(response.statusCode).toBe(401);
  });

  test("returns 200 and token when credentials are correct", async () => {
    User.findOne.mockResolvedValue({
      username: "testuser",
      password: "hash",
      role: "viewer",
    });
    bcrypt.compare.mockResolvedValue(true);

    const response = await request(app).post("/api/login").send({
      username: "test",
      password: "password",
    });

    expect(response.statusCode).toBe(200);
  });
});
