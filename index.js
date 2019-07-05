const path = require("path");
const express = require("express");
const app = express();

app.use('/public', express.static(path.resolve(__dirname, "public")));
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(8082, () => {
  console.log("listening");
});
