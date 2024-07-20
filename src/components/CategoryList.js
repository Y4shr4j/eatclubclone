

import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const categoryLoading = new Array(12).fill(null); // Adjusted for 12 items

    const fetchCategoryProduct = async () => {
        setLoading(true);
        const response = await fetch(SummaryApi.categoryProduct.url);
        const dataResponse = await response.json();
        setLoading(false);
        setCategoryProduct(dataResponse.data);
    };

    useEffect(() => {
        fetchCategoryProduct();
    }, []);

    return (
        <div className='container mx-auto p-10 m-10 popular-brands'>
            <div className='flex flex-col mb-4'>
                <div className='popular-brands-title text-xl font-bold'>Popular Brands</div>
                <div className='popular-brands-description'>
                    Order food from our curated list of handpicked brands.
                </div>
            </div>

            <div className='brands-img-wrapper grid grid-cols-4 gap-8 mt-4'>
                {loading ? (
                    categoryLoading.map((_, index) => (
                        <div className='brands-img h-16 w-16 md:w-20 md:h-20 -full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading" + index}>
                        </div>
                    ))
                ) : (
                    categoryProduct.map((product) => (
                        <Link to={`/product-category?category=${product?.category}`} className='brands-img cursor-pointer' key={product?.category}>
                            <img
                                src={product?.productImage[0]}
                                alt={product?.category}
                                className='w-full h-full'
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default CategoryList;
