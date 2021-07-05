import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import useHttp from "../hooks/useHttp";

const StyledCard = styled.div`
  margin: 2rem 5rem 0 5rem;
  box-shadow: 0 2px 8px gray;
  border-radius: 10px;
  padding: 1rem;

  & > main {
    margin: 10px 0;
  }
`;

const Card = () => {
  const [task, setTask] = useState("");
  const { sendRequest } = useHttp();
  return (
    <StyledCard>
      <header>
        <h2 className="text-center">Add Tasks</h2>
      </header>
      <main>
        <Form.Control
          onChange={(e) => setTask(e.currentTarget.value)}
          type="text"
          placeholder="Enter Your Task"
        />
      </main>
      <footer className="text-center">
        <Button
          onClick={() =>
            sendRequest({
              url:
                "https://practice-firebase-bd6f2-default-rtdb.firebaseio.com/tasks.json",
              method: "POST",
              data: { task, createdAt: new Date() },
              headers: {
                "Content-Type": "application/json"
              }
            })
          }
        >
          Add
        </Button>
      </footer>
    </StyledCard>
  );
};
export default Card;
