import * as Yup from "yup";

import { Link, useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";
import CustomForm from "../components/form/Form";
import { Input } from "../components/form";
import { LoginStyles } from "./styles";
import firebase from "../service/firebase.utils";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .label("Password"),
});

const Login = ({ clearUser }) => {
  const history = useHistory();
  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      history.push("/main");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <>
      <Button variant="danger" onClick={() => firebase.auth().signOut()}>
        Logout
      </Button>
      <LoginStyles>
        <div className="item">
          <h1>Sign In</h1>
          <CustomForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Input placeholder="Email" name="email" type="email" />
            <Input placeholder="Password" name="password" type="password" />
            <div className="submit-btn">
              <Button type="submit">Login</Button>
            </div>
          </CustomForm>
          <div className="redirect-link">
            <Link to="/signup">Create an Account</Link>
          </div>
        </div>
      </LoginStyles>
    </>
  );
};
export default Login;
