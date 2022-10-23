import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

    const { register, updateUserProfile, verifyEmail } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleOnSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const profileURL = event.target.profileURL.value
        const email = event.target.email.value
        const password = event.target.password.value

        const profile = {
            displayName: name,
            photoURL: profileURL
        }

        register(email, password)
            .then(result => {
                console.log('User created')
                navigate('/')
                event.target.reset()

                updateUserProfile(profile)
                    .then(() => console.log('Profile updated'))
                    .catch(err => console.error('error', err.code))

                verifyEmail()
                    .then(() => console.log('Email verification link sent to your email address'))
                    .catch(err => console.error('error', err.code))
            })
            .catch(err => {
                console.error('error:', err)
                setError(err.code)
            })
    }

    return (
        <Form onSubmit={(e) => handleOnSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name='name'
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicProfileURL">
                <Form.Label>Profile URL</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter profile URL"
                    name='profileURL'
                />
            </Form.Group>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    label={<>Acceept <Link to={'/terms-conditions'}>Terms and Conditions</Link></>}
                    onClick={(e) => {
                        setAccepted(e.target.checked)
                        console.log(e.target.checked)
                    }}
                />
            </Form.Group>
            {
                error && <p className='text-danger'>{error}</p>
            }
            <Button variant="primary" type="submit" disabled={!accepted}>Register</Button>
        </Form>
    );
};

export default Register;