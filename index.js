const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const PORT = 4063;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all("/", (req, res) => {
  res.status(200).json({
    msg: "it's running!!",
  });
});

app.get("/api", async (req, res) => {
  req = req.query;
  const response = await axios.get(req.url, {
    params: req,
  });

  res.json(response.data);
});

app.post("/api", async (req, res) => {
  req = req.body;
  const response = await axios.post(req.url, req);

  res.json(response.data);
});

app.listen(PORT, () => console.log("running at http://localhost:" + PORT));
