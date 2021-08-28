const db = require("../config/data");

const addMentor = (req, res) => {
  const mentor = {
    id: db.mentors.length + 1,
    name: req.body.name,
    email: req.body.email,
    isMentor: true,
  };

  db.mentors.push(mentor);
  res.json(db.mentors);
};

module.exports.addMentor = addMentor;
