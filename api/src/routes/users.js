const Router = require("restify-router").Router;
const router = new Router();
const sql = require("mssql");
const jsonWebToken = require("jsonwebtoken");

const { config } = require("../config/database");

router.post("/token", async (req, res) => {
  const { user, pass } = req.body;
  try {
    let conn = await sql.connect(config);
    let result = await conn
      .request()
      .input("user", user)
      .input("pass", pass)
      .query(`SELECT * FROM user WHERE user_name = @user AND password = @pass`);
    sql.close();
    if (+result.rowsAffected === 0) {
      res.json(404, { message: "Login failed" });
    } else {
      token = jsonWebToken.sign({ user, pass }, "my-secret-key", {
        expiresIn: "5d"
      });
      res.json(200, { message: "Login success", token: token });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
