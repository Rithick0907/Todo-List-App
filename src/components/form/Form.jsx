import Formik from "formik";

const CustomForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => <>{children}</>}
  </Formik>
);

export default CustomForm;
