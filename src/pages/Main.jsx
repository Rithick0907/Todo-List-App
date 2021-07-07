import { useContext, useEffect, useState } from "react";

import Card from "../components/Card";
import TaskList from "../components/TaskList";
import UserContext from "../UserContext";
import { baseURL } from "../service/httpConfig";
import useHttp from "../hooks/useHttp";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const { id: userID } = useContext(UserContext);
  const { sendRequest } = useHttp();

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
    <>
      <Card />
      <TaskList tasks={tasks} />
    </>
  );
};

export default Main;
