import { LoadingStyle } from "./styles";
import { Spinner } from "react-bootstrap";

const Loading = () => (
  <LoadingStyle>
    <Spinner animation="border" />
  </LoadingStyle>
);

export default Loading;
