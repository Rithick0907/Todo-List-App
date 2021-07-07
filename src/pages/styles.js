import styled from "styled-components";

export const StyledDiv = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 1rem;
  h1 {
    text-align: center;
  }

  & input {
    margin-top: 25px;
  }
  & > .item {
    border-radius: 10px;
    box-shadow: 0 2px 8px gray;
    flex: 0 1 600px;
    padding: 2rem;
  }
  & .submit-btn,
  & .redirect-link {
    margin-top: 20px;
    text-align: center;
  }
`;
export const MainDiv = styled.div`
  .navbar-nav > .btn {
    text-decoration: none;
    margin-right: 4rem;
  }
`;
export const LoginStyles = styled(StyledDiv)``;

export const SignupStyles = styled(StyledDiv)``;
