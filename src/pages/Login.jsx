import styled from "styled-components";
import CustomForm from "../components/form/Form";
import { Input, SubmitButton } from "../components/form";
import * as Yup from "yup";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > .item {
    width: 100%;
    padding: 0 2rem;
  }
`;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password")
});

const Login = () => {
  const handleSubmit = (val) => {
    console.log(val);
  };
  return (
    <StyledDiv>
      <div className="item">
        <h1 className="text-center">Sign in</h1>
        <CustomForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Input name="email" type="email" />
          <Input name="password" type="password" />
          <SubmitButton type="submit" title="Login" />
        </CustomForm>
      </div>
    </StyledDiv>
  );
};
export default Login;
