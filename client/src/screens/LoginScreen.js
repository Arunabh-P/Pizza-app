import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../action/userAction';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';

const LoginScreen = () => {
  const registerState = useSelector((state) => state.loginUserReducer);
  const { error, success, loading } = registerState;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      navigate('/');
    }
  }, [navigate]);
  const loginHandler = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };
  return (
    <>
      <Container>
        <div className="login-register-wrapper mt-5">
          <div className="login-register-card rounded">
            {loading && <Loader />}
            {success && <Success success="User Login Successfully" />}
            {error && <Error error="Wrong details" />}
            <Form>
              <h1 className="text-center mb-4">Login Now </h1>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </Form.Group>

              <Button
                variant="warning"
                className="w-100"
                onClick={loginHandler}
              >
                Login
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginScreen;
