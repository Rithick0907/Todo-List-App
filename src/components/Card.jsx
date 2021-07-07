import * as Yup from "yup";

import { Button, Form } from "react-bootstrap";
import { CustomForm, Input } from "./form";
import { useContext, useState } from "react";

import { StyledCard } from "./styles";
import UserContext from "../UserContext";
import { baseURL } from "../service/httpConfig";
import useHttp from "../hooks/useHttp";

const validationSchema = Yup.object().shape({
  task: Yup.string().required("Enter Task before adding"),
});
const Card = () => {
  const [tasks, setTasks] = useState([]);
  const { id: userID } = useContext(UserContext);
  const { sendRequest } = useHttp();
  const handleSubmit = ({ task }) => {
    setTasks((prevTask) => {
      prevTask.push(task);
      sendRequest({
        method: "POST",
        url: `${baseURL}/users/${userID}/tasks.json`,
        data: prevTask,
      });
      return prevTask;
    });
  };
  return (
    <StyledCard>
      <CustomForm
        className="item"
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <h2 className="text-center">Add Tasks</h2>
        <Input className="mt-4" name="task" placeholder="Add Task" />
        <div className="text-center mt-4">
          <Button type="submit">Add</Button>
        </div>
      </CustomForm>
    </StyledCard>
  );
};
export default Card;
