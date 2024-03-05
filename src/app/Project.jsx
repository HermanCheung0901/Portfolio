"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Project({route, code}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Book Note</Card.Title>
        <Card.Text>
          A book note application allowing users to take notes, add/update reviews, and sort books by rating, recency, and title.

        </Card.Text>
        <div className="text">
          <span style={{color: "#579BB1", fontWeight: "500"}}>Technologies Used: </span>
          <span>ReactJS/NextJS, RESTful API, MongoDB</span>
        </div>
        <div id="button-group">
          <Button href={code} target="_blank">Code</Button>
          <Button href={route}>Review</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
