import * as Yup from "yup";

import { Button, Form } from "react-bootstrap";
import { CustomForm, Input } from "./form";

import { StyledCard } from "./styles";

const validationSchema = Yup.object().shape({
  task: Yup.string().required("Enter Task before adding"),
});
const Card = ({ onSubmit }) => {
  return (
    <StyledCard>
      <CustomForm
        className="item"
        initialValues={{ task: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
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
