const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let data = "Initial Data";

app.get("/getData", (req, res) => {
  res.send({ data });
});

// Use post/put to update
app.get("/updateData", (req, res) => {
  data = "Updated Data" + Math.random();
  res.send({ data });
});

const PORT = 5011;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
