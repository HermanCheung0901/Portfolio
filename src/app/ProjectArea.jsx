import Project from "./Project";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function ProjectArea() {
  return (
    <div id="project-area">
      <Container>
        <div id="project-wrapper">
          <Row xs={1} md={2} lg={3}>
          <Col>
            <Project title="Book Note" upperText="A book note application allowing users to take notes, add/update reviews, and sort books by rating, recency, and title." lowerText="ReactJS/NextJS, RESTful API, MongoDB" code={"https://github.com/HermanCheung0901/Portfolio/tree/7eaf8e49d643952ff42f13f910e3c31aba15265b/src/app/book-note"} route={"/book-note"}/>
          </Col>
          <Col>
            <Project title="Wiseway Educ." upperText="A company website for Wiseway Education Centre to provide information of their courses." lowerText="JavaScript, Bootstrap, WordPress, AWS Lightsail" route={"http://wisewayeduc.com/"}/>
          </Col>
          </Row>
        </div> 
      </Container>
    </div>
  );
}
