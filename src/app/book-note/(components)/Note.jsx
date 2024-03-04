import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Note(props) {

  function generateStar(num) {
    const stars = [];
    for (let i = 0; i < num ; i++) {
      stars.push(
        <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B",}} />
      );
    }
    return stars;
  }

  return (
    <>
      <hr />
      <div className="book-note">
        <Row>
          <Col md="4">
            <div className="left-col">
              <div className="book-cover">
                <Image className="image" loader={() => props.cover} src={props.cover} fill={true} alt={props.title}/>
              </div>
              <div className="book-rate">Rating: 
                <div className="stars">
                {generateStar(props.rate)}
                </div>
              </div>
            </div>
          </Col>
          <Col md="8">
            <div className="right-col">
              <h4 className="book-title">{props.title}</h4>
              <p className="book-review">{props.review}</p>
              <div className="detail-button"><Link href={`/book-note/detail/${props.id}`}>view my note</Link></div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
