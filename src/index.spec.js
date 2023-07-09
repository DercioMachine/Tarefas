const request = require("supertest")
const app = require('./server')



test("POST /send", (done) => {
    request(app)
      .post("/send")
      .expect("Content-Type", /json/)
      .send({
        titulo:"Enviar as 2h",
      })
      .expect(201)
      .expect((res) => {
        res.body.data.length = 2;
        res.body.data[0].titulo = "Enviar as 23h";
        res.body.data[1].titulo = "Enviar as 23h";
      })
      .end((err, res) => {
        if (err) return done(err);
        elementId = res.body.data[1].id;
        return done();
      });
  });