const app = require("./index"); // Your Express app instance
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Login API", () => {
  it("should return a JWT token upon successful login", (done) => {
    const credentials = {
      email: "nandigamharsha@gmail.com",
      password: "Sj@15634",
    };

    chai
      .request(app)
      .post("/api/users/login")
      .send(credentials)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("user");
        done();
      });
  });

  it("should return an error for invalid credentials", (done) => {
    const credentials = {
      email: "nandigamharsha@gmail.com",
      password: "Sj@15634",
    };

    chai
      .request(app)
      .post("/api/users/login")
      .send(credentials)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property("message", "Authentication failed.");
        done();
      });
  });
});
