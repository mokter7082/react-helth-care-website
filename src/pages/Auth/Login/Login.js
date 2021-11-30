import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { googleSignin, handleRegister, error, handleLogin, setLoading } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const toggleLogin = (e) => {
    setIsLogged(e.target.checked);
    console.log(isLogged);
  };
  const userLogg = (e) => {
    e.preventDefault();
    {
      !isLogged
        ? handleRegister(email, password)
        : handleLogin(email, password);
    }
  };
  const test = () => {
    googleSignin()
      .then((result) => {
        history.push(location.state?.from || "/home");
      })
      .finally(() => setLoading(false));
  };
  return (
    <>
      <h2 className="text-success text-center mt-5">
        {isLogged ? "Please Login" : "Please Register"}
      </h2>
      <div className="col-md-4 mx-auto login-area">
        <Form onSubmit={userLogg}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={handleEmail}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handlePassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={toggleLogin}
              type="checkbox"
              label="Already Registered"
            />
          </Form.Group>
          {error ? <Alert variant="danger">{error}</Alert> : ""}
          <Button variant="primary" type="submit">
            {isLogged ? "Login" : "Register"}
          </Button>
        </Form>
        <button onClick={test} className="btn btn-warning mt-3 mx-3">
          Logg with Google
        </button>
        <button className="btn btn-warning mt-3 mx-3">Logg with Google</button>
      </div>
    </>
  );
};

export default Login;
