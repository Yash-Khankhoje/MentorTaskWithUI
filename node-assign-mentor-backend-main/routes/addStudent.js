const db = require("../config/data");

const addStudent = (req, res) => {
  const student = {
    id: db.students.length + 1,
    name: req.body.name,
    email: req.body.email,
    mentor: "",
  };

  db.students.push(student);
  console.log(db);
  res.json(student);
};

module.exports.addStudent = addStudent;
