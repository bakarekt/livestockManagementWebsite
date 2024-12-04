const searchRouter = require("./searchRoutes");
const editRouter = require("./editRoutes");
const siteRouter = require("./site");
const userRouter = require("./userRoutes");

function route(app) {
  app.use("/user", userRouter);

  app.use("/edit", editRouter);

  app.use("/search", searchRouter);

  app.use("/", siteRouter);

  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.post("/login", (req, res) => {
    res.send("login");
  });
}

module.exports = route;
