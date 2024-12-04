const express = require("express"); //framework expressjs
const app = express();
const port = 999;
const handlebars = require("express-handlebars"); //template engine
const path = require("path"); //xử lý đường dẫn
const meththodOverride = require("method-override"); //ghi đè phương thức
const session = require("express-session");
const route = require("../routes/index"); //xử lý route

const User = require("../app/models/userModel");

(async () => {
  try {
    await User.sync({ alter: true }); // Sử dụng `alter` để cập nhật bảng mà không làm mất dữ liệu
    console.log("User table synchronized successfully.");
  } catch (err) {
    console.error("Error synchronizing the User table:", err);
  }
})();

app.use(express.static(path.join(__dirname, "../public")));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
