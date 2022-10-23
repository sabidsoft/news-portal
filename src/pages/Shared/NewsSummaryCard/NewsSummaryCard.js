import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { BsBookmark, BsShareFill } from "react-icons/bs";
import { FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    const { _id, author, rating, details, image_url, title, total_view } = news
    return (
        <Card className="mb-5">
            <Card.Header>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image
                            src={author?.img}
                            width={60}
                            height={60}
                            roundedCircle
                        />
                        <div className='ms-2'>
                            <p className='m-0'>{author?.name}</p>
                            <p className='m-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <BsBookmark className='me-2' />
                        <BsShareFill />
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='mb-4'>{title}</Card.Title>
                <Card.Img
                    src={image_url}
                    className='mb-4'
                />
                <Card.Text>
                    {
                        details.length > 250 ? (
                            <>
                                {details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link>
                            </>
                        ) : details
                    }
                </Card.Text>
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

export default NewsSummaryCard;