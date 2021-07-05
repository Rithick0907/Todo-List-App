import Card from "../components/Card";
import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp";

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const { sendRequest } = useHttp();

  const applyTask = (data) => {
    const temp = [];
    for (const key in data) {
      temp.push({
        id: key,
        ...data[key]
      });
    }
    setTasks(temp);
  };

  useEffect(() => {
    sendRequest(
      {
        method: "GET",
        url:
          "https://practice-firebase-bd6f2-default-rtdb.firebaseio.com/movieReview.json"
      },
      applyTask
    );
  }, [sendRequest]);
  return <Card />;
};

export default Main;
