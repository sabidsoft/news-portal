import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://news-portal-server-peach.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <h5 className='mb-4'>All Categories</h5>
            {
                categories.map(category => {
                    return (
                        <Link
                            to={`/category/${category.id}`}
                            className='d-block mb-2'
                            key={category.id}
                        >
                            {category.name}
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default LeftSideNav;