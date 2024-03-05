import Project from "./Project";
import { Container } from "react-bootstrap";

export default function ProjectArea() {
  return (
    <div id="project-area">
      <Container>
        <div id="project-wrapper">
          <Project code={"https://github.com/HermanCheung0901/Portfolio/tree/7eaf8e49d643952ff42f13f910e3c31aba15265b/src/app/book-note"} route={"/book-note"}/>
        </div> 
      </Container>
    </div>
  );
}
