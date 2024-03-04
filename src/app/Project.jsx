"use client";

import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Project({route}) {
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
          <Button><Link href="/">Code</Link></Button>
          <Button><Link href={route}>Review</Link></Button>
        </div>
      </Card.Body>
    </Card>
  );
}
