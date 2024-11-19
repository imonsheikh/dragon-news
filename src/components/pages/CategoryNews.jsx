import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {

    const {data} = useLoaderData()
    console.log(data);
    

    return (
        <div>
            category newsssss {data.length} sd
        </div>
    );
};

export default CategoryNews;