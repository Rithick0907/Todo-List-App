import { useFormikContext } from "formik";
import { Button } from "react-bootstrap";

const SubmitButton = ({ title, ...otherAttributes }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button onClick={handleSubmit} {...otherAttributes}>
      {title}
    </Button>
  );
};

export default SubmitButton;
