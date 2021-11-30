import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = ({ doctors }) => {
  console.log(doctors);
  const { drName, from, serviceName, serviceDes, img } = doctors;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name: {drName}</Card.Title>
          <Card.Text>
            <h6>
              About: <span style={{ color: "gray" }}>{serviceDes}</span>
            </h6>
          </Card.Text>
        </Card.Body>
        <button className="btn btn-success">View Profile</button>
      </Card>
    </Col>
  );
};

export default Doctor;
