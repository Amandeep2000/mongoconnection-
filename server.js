const express = require("express");
// require("dotenv").config();
const app = express();
const port=8000
const userroute = require('./src/route')
const serverurl = `http://localhost:${port}`;
app.use(express.json());
app.use(userroute);
app.listen(port,() => {
  console.log(`server is running at ${serverurl}`);
});
