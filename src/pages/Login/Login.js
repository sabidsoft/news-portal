import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')

    const { login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleOnSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        login(email, password)
            .then(result => {
                console.log('Login successfull')
                navigate(location.state?.pathname || '/', { replace: true })
                event.target.reset()
            })
            .catch(err => {
                console.error('error:', err)
                setError(err.code)
            })
    }

    return (
        <Form onSubmit={(e) => handleOnSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name='email'
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name='password'
                    required
                />
            </Form.Group>
            {
                error && <p className='text-danger'>{error}</p>
            }
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    );
};

export default Login;