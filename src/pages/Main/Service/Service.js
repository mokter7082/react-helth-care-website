import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ serviess }) => {
  const { id, drName, serviceName, serviceDes, from, img } = serviess;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="">Dr. Name: {drName}</Card.Title>
          <Card.Title style={{ color: "gray" }}>
            Working From: {from}
          </Card.Title>
          <Card.Title>Specialist {serviceName}</Card.Title>
          <Card.Text>
            Aboubt it:{" "}
            <span style={{ color: "gray" }}>{serviceDes.slice(0, 80)}</span>{" "}
          </Card.Text>
          <Link to={`/view/${id}`}>
            <button className="btn btn-info btn-block">Read more....</button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
