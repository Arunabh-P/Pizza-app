import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { registerUser } from '../action/userAction';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confrimPassword, setConfrimPassword] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);
  const registerhandler = () => {
    if (password !== confrimPassword) {
      alert('Password do not match');
    } else {
      const user = { name, email, password, confrimPassword };
      dispatch(registerUser(user));
    }
  };

  return (
    <>
      <Container>
        <div className="login-register-wrapper mt-5">
          <div className="login-register-card rounded">
            {/* {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="somthing went wrong" />} */}
            <Form>
              <h1 className="text-center mb-4">Register Now </h1>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confrimPassword}
                  onChange={(e) => setConfrimPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="warning"
                className="w-100"
                onClick={registerhandler}
              >
                Register
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterScreen;
