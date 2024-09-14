const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.get("/triagle", (req, res) => {
  res.sendFile(__dirname + "/triagle.html");
});

app.post("/triagle", (req, res) => {
  const height = parseFloat(req.body.height);
  const base = parseFloat(req.body.base);
  if (isNaN(height) || isNaN(base)) {
    return res.send("<h2>Invalid or Empty value</h2>");
  }
  const area = 0.5 * height * base;
  res.send(`<h2>Area of Triangle: ${area.toFixed(2)}</h2>`);
});

app.post("/circle", (req, res) => {
  const radius = parseFloat(req.body.radius);
  if (isNaN(radius)) {
    return res.send("<h2>Invalid radius value</h2>");
  }
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of Circle: ${area.toFixed(2)}</h2>`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
