const mentors = [
  {
    id: 1,
    name: "Mentor 1",
    email: "mentor1@example.com",
    isMentor: true,
  },
  {
    id: 2,
    name: "Mentor 2",
    email: "mentor2@example.com",
    isMentor: true,
  },
  {
    id: 3,
    name: "Mentor 3",
    email: "mentor3@example.com",
    isMentor: true,
  },
];
const students = [
  {
    id: 1,
    name: "Student 1",
    email: "student1@example.com",
    mentor: "Mentor 1",
  },
  {
    id: 2,
    name: "Student 2",
    email: "student2@example.com",
    mentor: "",
  },
  {
    id: 3,
    name: "Student 3",
    email: "student3@example.com",
    mentor: "",
  },
];
exports.mentors = mentors;
exports.students = students;
