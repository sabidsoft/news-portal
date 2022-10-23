import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => console.log('Logout successfull'))
            .catch(err => console.error('error:', err))
    }

    return (
        <Navbar bg="light" expand="lg" className='mb-5' sticky='top'>
            <Container>
                <Navbar.Brand><Link to='/'>News Portal</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        {
                            user?.uid ? (
                                <div className='ms-5 d-flex align-items-center'>
                                    <p className='me-3 m-0'>{user?.displayName}</p>
                                    {
                                        user?.photoURL ? (
                                            <Image
                                                src={user?.photoURL}
                                                width={30}
                                                height={30}
                                                roundedCircle
                                            />
                                        ) : (
                                            <FaUser />
                                        )
                                    }
                                    <Button onClick={() => handleLogout()} className='ms-3' variant="light">Logout</Button>
                                </div>
                            ) : (
                                <>
                                    <Link to={'/login'}>
                                        <Button className='ms-3' variant="primary">Login</Button>
                                    </Link>
                                    <Link to={'/register'}>
                                        <Button className='ms-3' variant="primary">Register</Button>
                                    </Link>
                                </>
                            )
                        }
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;