import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1 className='mb-4'>All News {allNews.length}</h1>
            {
                allNews.map(news => {
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

export default Home;