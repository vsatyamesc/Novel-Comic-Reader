const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.use(express.static(path.join(__dirname, "Storage")));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
