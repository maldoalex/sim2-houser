require("dotenv").config();
const express = require("express");
const app = express();
const controller = require("./controller");
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("massive connected");
  })
  .catch(error => console.log(error));

app.use(express.json());

app.get("/api/properties", controller.getAllHouses);
app.get("/api/property/:id", controller.getHouse);
app.post("/api/properties/", controller.addHouse);
app.delete("/api/property/:id", controller.deleteHouse);

app.listen(SERVER_PORT, () => {
  console.log(`server is listening port ${SERVER_PORT}`);
});
