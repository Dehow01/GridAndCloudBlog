import chaiHttp from "chai-http";
import chai from  "chai";
const app = require("./app");

chai.use(chaiHttp);
chai.should();

describe("Server", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("get all posts", (done) => {
            chai.request(app)
                .post('/api/post/getAllPost')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
        it("auth", (done) => {
            chai.request(app)
                .post('/api/user/login')
                .send({ "name": "danil", "username": "dehow", "password": "mail32544"})
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
      it("auth not user", (done) => {
        chai.request(app)
          .post('/api/user/login')
          .send({ "name": "123", "username": "123", "password": "mail32544"})
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
      it("create post", (done) => {
        chai.request(app)
          .post('/api/post/createPost')
          .send({ "title": "123", "description": "123"})
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
      it("delete post", (done) => {
        chai.request(app)
          .post('/api/post/deletePost')
          .send({ "_id": "123"})
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });

    });
});
