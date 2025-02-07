const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let data = "Initial Data";
const waitingClients = [];

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
  }
});

// Use post/put to update
app.get("/updateData", (req, res) => {
  data = req.query.data;
  while (waitingClients?.length > 0) {
    const client = waitingClients.pop();
    client.json({ data });
  }
  res.send({ success: "Data updated successfully" });
});

const PORT = 5011;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
