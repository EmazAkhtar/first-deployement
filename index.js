require("dotenv").config();
const express = require("express");
const app = express();
// const port = 8081;
const fruitRouter = require("./routes/fruits");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
// connecting with database
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitDB");
  console.log("fruit database connected");
}

app.use(express.static(process.env.STATIC_DIR));
app.use(cors());
app.use(express.json());

app.use("/fruits", fruitRouter.router);
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log("server started at port", process.env.PORT);
});
