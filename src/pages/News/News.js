import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FaEye, FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData()
    const { rating, details, image_url, title, total_view, category_id } = news
    return (
        <Card className="mb-5">
            <Card.Body>
                <Card.Title className='mb-4'>{title}</Card.Title>
                <Card.Img
                    src={image_url}
                    className='mb-4'
                />
                <Card.Text>{details}</Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Go to Again into Same Category</Button>
                </Link>
            </Card.Body>
            <Card.Footer>
                <div className='d-flex justify-content-between'>
                    <div className=''>
                        <FaStar className='text-warning me-2' />
                        <span>{rating.number}</span>
                    </div>
                    <div>
                        <FaEye className='me-2'/>
                        <span>{total_view}</span>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default News;