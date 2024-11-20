import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const CategoryNews = () => {

    const {data: news} = useLoaderData()
    // console.log(news);
    

    return (
        <div>
            <h2 className='font-semibold mb-3'>Dragon News home</h2>
            <p className='text-gray-400 text-sm'>{news.length} News Found on this category</p>
            <div>
            {
               news.map(singleNews => <NewsCard 
                key={singleNews.id}
                news={singleNews}
                >{singleNews.title}</NewsCard>) 
                   
            }
            </div>
        </div>
    );
};

export default CategoryNews;