import { Button, Nav, Navbar } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import Card from "../components/Card";
import { MainDiv } from "./styles";
import TaskList from "../components/TaskList";
import UserContext from "../UserContext";
import { baseURL } from "../service/httpConfig";
import useHttp from "../hooks/useHttp";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const { id: userID } = useContext(UserContext);
  const { sendRequest } = useHttp();

  const handleLogout = () => {
    localStorage.removeItem("user");
    firebase.auth().signOut();
    window.location = "/login";
  };

  const applyTask = (data) => {
    const temp = [];
    for (const key in data) {
      temp.push({
        id: key,
        ...data[key],
      });
    }
    setTasks(temp);
  };

  useEffect(() => {
    const data = sendRequest(
      {
        method: "GET",
        url: `${baseURL}/users/${userID}/tasks.json`,
      },
      applyTask
    );
    console.log(data);
  }, [sendRequest]);
  return (
    <MainDiv>
      <Navbar bg="dark" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Card />
      <TaskList tasks={tasks} />
    </MainDiv>
  );
};

export default Main;
