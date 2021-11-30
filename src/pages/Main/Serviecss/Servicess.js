import { Card, Col, Row } from "react-bootstrap";
import useServicess from "../../../Hooks/useServicess";
import Service from "../Service/Service";

const Servicess = () => {
  const { servicess, setServicess } = useServicess();
  return (
    <div className="">
      <h1 className="text-center py-3">Our Servicess</h1>
      <hr />
      <div className="servicess-container container">
        <Row xs={1} md={3} className="g-4">
          {servicess.slice(0, 6).map((service) => (
            <Service key={service.id} serviess={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Servicess;
