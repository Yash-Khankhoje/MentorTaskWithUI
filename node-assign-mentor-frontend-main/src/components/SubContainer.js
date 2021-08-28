import { Link } from "react-router-dom";
const SubContainer = ({ title, classes, data }) => {
  return (
    <div className="sub-container col-12 col-md-6 p-2">
      <h2>{title} {title==="Mentors" ? <Link to="/add-mentor"> <button className="button">Add Mentor</button>
          </Link> :  <Link to="/add-student">
            <button className="button">Add Student</button>
          </Link> }</h2>
      <div className={classes}>
      <table  className="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>{title} Name</th>
          <th>EmailId</th>
          
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
             <tr key={item.id}>
              
              
                <td>1</td>
                <td><Link to={item.isMentor ? `/mentor/${item.id}` : `/student/${item.id}`}>{item.name}</Link></td>
                <td>{item.email}</td>
                
              
              
              </tr>
            ))}
        
        
      
      </tbody>
    </table>
        
      </div>
    </div>
  );
};

export default SubContainer;
