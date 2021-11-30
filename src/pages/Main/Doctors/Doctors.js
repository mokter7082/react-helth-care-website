import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="text-center text-success my-4">Our Doctors</h2>
      <Row xs={1} md={2} className="g-4">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctors={doctor}></Doctor>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
