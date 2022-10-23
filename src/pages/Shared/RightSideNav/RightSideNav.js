import React, { useContext } from 'react';
import { Button, ListGroup, Carousel } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import firstImage from '../../../assets/images/sabid.jpg'
import secondImage from '../../../assets/images/hasan.jpeg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
    const { googleSignIn } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
        .then(result => {
            console.log('Login successful')
        })
        .catch(err => console.error('error:', err.code)) 
    }

    return (
        <div>
            <div className='mb-4'>
                <Button onClick={() => handleGoogleSignIn()} variant="outline-primary" className='d-block w-100 mb-2'><FaGoogle className='me-2' />Login via Google</Button>
                <Button variant="outline-dark" className='d-block w-100'><FaGithub className='me-2' />Login via Github</Button>
            </div>
            <h5>Find on us</h5>
            <ListGroup className='mb-4'>
                <ListGroup.Item><FaFacebook className='me-2' /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaWhatsapp className='me-2' /> WhatsApp</ListGroup.Item>
                <ListGroup.Item><FaTwitter className='me-2' /> Twitter</ListGroup.Item>
                <ListGroup.Item><FaTwitch className='me-2' /> Twitch</ListGroup.Item>
            </ListGroup>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstImage}
                        alt="First slide"
                        height={200}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondImage}
                        alt="Third slide"
                        height={200}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default RightSideNav;