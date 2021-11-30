import { Card, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useServicess from "../../../Hooks/useServicess";
import Header from "../../Shared/Header/Header";
import "./View.css";

const View = () => {
  const { serviceId } = useParams();
  const { servicess } = useServicess();

  const ExactIteam = servicess.find((td) => td.id === parseInt(serviceId));
  console.log(ExactIteam);

  return (
    <>
      <Header></Header>
      <div className="col-md-6 mx-auto">
        <h2 className="text-center my-5">Full details</h2>
        <div className="my-cart">
          <Col>
            <Card>
              <Card.Img variant="top" src={ExactIteam?.img} />
              <Card.Body style={{ border: "none" }}>
                <Card.Title>
                  {" "}
                  <h2 className="text-success">
                    Dr. Name: {ExactIteam?.drName}
                  </h2>{" "}
                </Card.Title>
                <Card.Title>
                  {" "}
                  <h4 className="text-success">
                    Specialist: {ExactIteam?.serviceName}
                  </h4>{" "}
                </Card.Title>
                <Card.Text>
                  <h4>About Service:</h4>
                  <span style={{ color: "gray" }}>
                    {ExactIteam?.serviceDes}
                  </span>
                </Card.Text>
              </Card.Body>
              <Link to="/apointed">
                <button className="apointment-button">Apointment Now</button>
              </Link>
            </Card>
          </Col>
        </div>
      </div>
    </>
  );
};

export default View;
