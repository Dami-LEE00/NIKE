import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user');
    setAuthenticate(true);
    navigate('/');
  }
  
  return (
    <Container className='login-area'>
      <h2>로그인</h2>
      <Form className='login-form' onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ID</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>PW</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className='button' variant="dark" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login
