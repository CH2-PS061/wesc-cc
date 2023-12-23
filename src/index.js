const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();
const usersRoutes = require("./routes/users");
const featureRoutes = require("./routes/feature");
const db = require("./config/db");

app.get("/", async (req, res) => {
  try {
    await db.authenticate().then(() => {
      res.send("<h1>Server is running, Database is running</h1>").status(200);
    });
  } catch (error) {
    res.send(`<h1>Server is running,</h1><h1>Database has error : ${error}</h1>`).status(500);
  }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/users", usersRoutes);
app.use("/v1/feature", featureRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
