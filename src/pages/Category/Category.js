import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            <h1 className='mb-4'>News found {categoryNews.length}</h1>
            {
                categoryNews.map(news => {
                    return (
                        <NewsSummaryCard
                            key={news._id}
                            news={news}
                        />
                    )
                })
            }
        </div>
    );
};

export default Category;