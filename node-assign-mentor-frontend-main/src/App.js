import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import Form from "./components/Form";
import Mentor from "./components/Mentor";
import Student from "./components/Student";
import { fetchAll } from "./api/netwokHandler";

import "./App.css";

function App() {
  const [data, setData] = useState({
    mentors: [],
    students: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetchAll();
      console.log(res);
      setData(res);
    };
    fetchData();
  }, []);

  const refreshData = async () => {
    let res = await fetchAll();
    console.log(res);
    setData(res);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Container data={data} />
              </div>
            )}
          />
          <Route
            exact
            path="/add-mentor"
            component={() => <Form title="Mentor" refreshData={refreshData} />}
          />
          <Route
            exact
            path="/add-student"
            component={() => <Form title="Student" refreshData={refreshData} />}
          />
          <Route exact path="/mentor/:id" component={Mentor} />
          <Route exact path="/student/:id" component={Student} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
