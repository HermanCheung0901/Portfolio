import Project from "./Project";
import { Container } from "react-bootstrap";

export default function ProjectArea() {
  return (
    <div id="project-area">
      <Container>
        <div id="project-wrapper">
          <Project route={"/book-note"}/>
        </div> 
      </Container>
    </div>
  );
}
