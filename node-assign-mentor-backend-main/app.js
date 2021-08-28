const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const db = require("./config/data");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(db);
});

app.get("/fetch-all", (req, res) => {
  res.json(db);
});

app.post("/add-student", (req, res) =>{

 routes.addStudent(req, res)}
 );

app.post("/add-mentor", (req, res) => {
  routes.addMentor(req, res)
});

app.post("/assign-mentor", (req, res) => {
  routes.assignMentor(req, res)
});

app.post("/change-mentor", (req, res) =>{
  routes.changeMentor(req, res)
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log("Server started running on", PORT);
  }
});
