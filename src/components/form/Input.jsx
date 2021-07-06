import { Form } from "react-bootstrap";
import { useFormikContext } from "formik";

const Input = ({ name, ...otherAttributes }) => {
  const { handleChange, handleBlur, touched, errors } = useFormikContext();
  return (
    <>
      <Form.Control
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched[name] && !errors[name]}
        isInvalid={touched[name] && errors[name]}
        {...otherAttributes}
        autoComplete="off"
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
    </>
  );
};
export default Input;
