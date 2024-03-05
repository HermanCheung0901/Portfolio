"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Project({title, upperText, lowerText, route, code}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {upperText}
        </Card.Text>
        <div className="text">
          <span style={{color: "#579BB1", fontWeight: "500"}}>Technologies Used: </span>
          <span>{lowerText}</span>
        </div>
        <div id="button-group">
          {code && <Button href={code} target="_blank">Code</Button>}
          <Button href={route}>Review</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
