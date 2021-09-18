/* eslint-disable react/jsx-no-bind */
import React, { useRef, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">To-do-List</h2>
              <h4 className="text-center mb-4">Log In</h4>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <br />
                <Button
                  disabled={loading}
                  style={{ backgroundColor: '#db4c3f' }}
                  className="w-100"
                  type="submit"
                >
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password" style={{ color: '#db4c3f' }}>
                  Forgot Password?
                </Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account?{' '}
            <Link to="/signup" style={{ color: '#db4c3f' }}>
              Sign Up
            </Link>
            <br />
            Test account
            <br />
            praveshvyas.18@gmail.com <br />
            qwerty
          </div>
        </div>
      </Container>
    </>
  );
}
