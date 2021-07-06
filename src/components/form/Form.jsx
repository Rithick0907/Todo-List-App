import { Form } from "react-bootstrap";
import { Formik } from "formik";

const CustomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ handleSubmit }) => (
      <Form noValidate onSubmit={handleSubmit}>
        {/*noValidate attribute disable browser specific validation*/}
        {children}
      </Form>
    )}
  </Formik>
);

export default CustomForm;
