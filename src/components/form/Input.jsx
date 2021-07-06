import { Form } from "react-bootstrap";
import { ErrorMessage, useFormikContext } from "formik";

const Input = ({ name, ...otherAttributes }) => {
  const { handleChange, handleBlur } = useFormikContext();
  return (
    <>
      <Form.Control
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        {...otherAttributes}
      />
      <ErrorMessage name={name} className="text-danger" component="div" />
    </>
  );
};
export default Input;
