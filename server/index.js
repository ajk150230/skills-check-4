const express = require("express");
const massive = require("massive");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");
const {register, login, getPosts} = require("./controller")
dotenv.config();
const app = express();
app.use(express.json());

massive(process.env.CONNECTION_STRING).then((db) => {
  app.set("db", db);
  console.log("db is connected");
});
app.listen(process.env.SERVER_PORT, () =>
  console.log(`Listening on port ${process.env.SERVER_PORT} `)
);

app.post("/auth/register", register)
app.post("/auth/login", login)
app.get("/api/post", getPosts)