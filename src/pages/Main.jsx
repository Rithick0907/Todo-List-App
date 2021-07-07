import { useEffect, useState } from "react";

import Card from "../components/Card";
import { baseURL } from "../service/httpConfig";
import useHttp from "../hooks/useHttp";

const Main = () => {
  const [tasks, setTasks] = useState([]);
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
    sendRequest(
      {
        method: "GET",
        url: baseURL + "tasks.json",
      },
      applyTask
    );
  }, [sendRequest]);
  return <Card />;
};

export default Main;
