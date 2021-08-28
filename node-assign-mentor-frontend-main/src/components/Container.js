import SubContainer from "./SubContainer";

const Container = ({ data }) => {
  return (
    <div className="container text-center">
      <img src="logo.png" alt="logo" className="img-fluid"/>
      <div className="row intro-section">
        
        <h1>Mentor & Student with no database</h1>
        
        
      </div>
      <div className="row">
        <SubContainer title="Mentors" classes="row" data={data.mentors} />
        <SubContainer
          title="Students"
          classes="row student-row"
          data={data.students}
        />
      </div>
    </div>
  );
};

export default Container;
