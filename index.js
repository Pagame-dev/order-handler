const express = require("express");
const app = express();

app.use(express.json());

app.post("/order", (req, res) => {
  const order = req.body;
  console.log("New Order:", order);
  res.status(200).send("Order received!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port", port);
});
