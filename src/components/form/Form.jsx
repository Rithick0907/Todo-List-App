import { Form } from "react-bootstrap";
import { Formik } from "formik";

const CustomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  ...otherAttributes
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ handleSubmit }) => (
      <Form noValidate onSubmit={handleSubmit} {...otherAttributes}>
        {/*noValidate attribute disable browser specific validation*/}
        {children}
      </Form>
    )}
  </Formik>
);

export default CustomForm;
