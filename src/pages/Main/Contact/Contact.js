import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="row px-5">
      <h1 className="text-success text-center">Contact Us</h1>
      <div className="col-md-6">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Messege</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="success text-center" className="m-3">
            Submit
          </Button>
        </Form>
      </div>
      <div className="col-md-6 p-4">
        <p className="con-title">
          <strong>Conditions: </strong>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis maxime, vel ea tempore praesentium ab totam
          officiis culpa laborum neque nam rerum exercitationem architecto
          inventore necessitatibus, sed doloremque saepe accusantium. Temporibus
          atque modi quisquam dignissimos non praesentium odio aliquam, dicta
          rerum, nostrum adipisci laborum assumenda placeat deleniti mollitia?
          Iusto, impedit.
        </p>
        <br />
        <br />
        <h4 className="con-title">+001610687014</h4>
        <h5 className="con-title">Mohakhali Tower, Road: 17 Block: A</h5>
      </div>
    </div>
  );
};

export default Contact;
