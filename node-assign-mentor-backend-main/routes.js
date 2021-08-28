const addStudent = require("./routes/addStudent");
const addMentor = require("./routes/addMentor");
const assignMentor = require("./routes/assignMentor");
const changeMentor = require("./routes/changeMentor");

module.exports.addStudent = addStudent.addStudent;
module.exports.addMentor = addMentor.addMentor;
module.exports.assignMentor = assignMentor.assignMentor;
module.exports.changeMentor = changeMentor.changeMentor;
