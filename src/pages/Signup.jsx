import * as Yup from "yup";

import { CustomForm, Input } from "../components/form";
import { Link, useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";
import { SignupStyles } from "./styles";
import { addUserToDB } from "../service/firebase.utils";
import firebase from "../service/firebase.utils";
import useHttp from "../hooks/useHttp";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  dob: Yup.string().required().label("Date of Birth"),
  mobileNo: Yup.string()
    .required()
    .matches(/^[6-9]\d{9}$/, "Mobile Number in India alone accepted")
    .label("Mobile Number"),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
const Signup = () => {
  const { sendRequest } = useHttp();
  const history = useHistory();

  const handleSubmit = async (val, { resetForm }) => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(val.email, val.password);
      await addUserToDB(sendRequest, user, {
        dob: val.dob,
        mobileNo: val.mobileNo,
      });
      history.push("/main");
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <SignupStyles>
      <div className="item">
        <h1>Sign Up</h1>
        <CustomForm
          initialValues={{
            email: "",
            dob: "",
            mobileNo: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Input placeholder="Email" name="email" />
          <Input placeholder="DOB" name="dob" type="date" />
          <Input placeholder="Mobile Number" name="mobileNo" />
          <Input placeholder="Password" name="password" type="password" />
          <Input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <div className="submit-btn">
            <Button variant="success" type="submit">
              Sign Up
            </Button>
          </div>
        </CustomForm>
        <div className="redirect-link">
          <Link to="/login">Already Have an account</Link>
        </div>
      </div>
    </SignupStyles>
  );
};

export default Signup;
