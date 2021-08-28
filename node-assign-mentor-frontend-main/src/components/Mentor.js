import { useState, useEffect } from "react";
import { fetchAll, assignMentor } from "../api/netwokHandler";

const Mentor = ({ match }) => {
  const [data, setData] = useState({
    mentors: [],
    students: [],
  });
  const [mentorData, setMentorData] = useState({
    name: "",
    email: "",
  });
  const [assignedStudents, setAssignedStudents] = useState([]);

  const fetchData = async () => {
    const res = await fetchAll();
    setData(res);
    selectMentor(res.mentors);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const selectMentor = (mentors) => {
    let selectedMentor = mentors.find((mentor) => mentor.id == match.params.id);
    setMentorData(selectedMentor);
  };

  const handleAssign = (selectedStudent) => {
    if (assignedStudents.includes(selectedStudent)) {
      setAssignedStudents(
        assignedStudents.filter((item) => item !== selectedStudent)
      );
    } else {
      setAssignedStudents([...assignedStudents, selectedStudent]);
    }
  };

  const handleAssignSubmit = async () => {
    if (assignedStudents.length === 0) {
      alert("Select students");
    } else {
      let obj = {
        mentor: mentorData.name,
        students: assignedStudents,
      };
      let res = await assignMentor(obj);
      setData(res);
      selectMentor(res.mentors);
    }
  };

  const checkUnassignedStudents = () => {
    let unassignedStudents = data.students.filter(
      (student) => student.mentor === ""
    );
    if (unassignedStudents.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="container">
      <div className="mentor-container">
        <div className="mentor-inner">
          <h1>{mentorData.name}</h1>
          <p>{mentorData.email}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="mt-4">Students under {mentorData.name}</h3>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              
              
            </tr>
            </thead>
            <tbody>
            {data.students.map((student,index) => {
              if (student.mentor === mentorData.name) {
                return <tr key={student.id}><td>{index+1}</td><td>{student.name}</td></tr>;
              }
            })}

            </tbody>
            
          </table>
        </div>
        <div className="col-md-6">
          <h3 className="mt-4">Add Unassigned Students</h3>
          {checkUnassignedStudents() && (
            <>
              <div className="row">
                {data.students.map((student) => {
                  if (student.mentor === "") {
                    return (
                      <div
                        key={student.id}
                        className="col-md-3 unassigned-wrapper"
                      >
                        <div
                          className={
                            !assignedStudents.includes(student)
                              ? "unassigned-students"
                              : "unassigned-students add-bg-color"
                          }
                          key={student.id}
                          onClick={() => handleAssign(student)}
                        >
                          {student.name}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <button className="button button-sm" onClick={handleAssignSubmit}>
                Add
              </button>
            </>
          )}
          {!checkUnassignedStudents() && (
            <p>Currently there is no unassigned students</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mentor;
