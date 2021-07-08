import { Button, Nav, Navbar } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";

import Card from "../components/Card";
import { MainDiv } from "./styles";
import TaskList from "../components/TaskList";
import UserContext from "../contexts/UserContext";
import { baseURL } from "../service/httpConfig";
import firebase from "../service/firebase.utils";
import useHttp from "../hooks/useHttp";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const { id: userID } = useContext(UserContext);
  const { sendRequest } = useHttp();

  const applyTask = (data) => {
    if (!data.hasOwnProperty("tasks")) return;
    const temp = [];
    for (const key in data.tasks) {
      temp.push({ id: key, content: data.tasks[key] });
    }
    setTasks(temp);
  };

  const handleSubmit = async ({ task }) => {
    let temp = [task];
    const response = await sendRequest({
      url: `${baseURL}/users/${userID}/tasks.json`,
      method: "POST",
      data: temp,
    });
    const { data } = await sendRequest({
      url: `${baseURL}/users/${userID}/tasks.json`,
      method: "GET",
    });
    if (data) applyTask(data);
  };
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      localStorage.removeItem("user");
      window.location = "/login";
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const tempFunc = async () => {
      const { data } = await sendRequest({
        method: "GET",
        url: `${baseURL}/users/${userID}.json`,
      });
      applyTask(data);
    };
    tempFunc();
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
      <Card onSubmit={handleSubmit} />
      <TaskList tasks={tasks} />
    </MainDiv>
  );
};

export default Main;
