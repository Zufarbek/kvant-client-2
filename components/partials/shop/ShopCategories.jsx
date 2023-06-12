import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import CategoryRepository from '~/repositories/CategoryRepository';
import shop_data from '~/public/static/data/shopCategories';

function ShopCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryRepository.getCategories().then(data => {
            if (data?.length > 0) {
                setCategories(data);
            }
        })
    },[])

    return (
        <div className="ps-shop-categories">
            <div className="row align-content-lg-stretch align-items-center">
                {categories.map((category) => (
                    <div
                        className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 "
                        key={category.id}>
                        <div className="ps-block--category-2" data-mh="categories">
                            <div className="ps-block__thumbnail pb-4">
                                <img src={category.image} alt="Kvant" />
                            </div>
                            <div className="ps-block__content">
                                <h4>
                                    <Link href={`/category/${category.id}`} as={`/category/${category.id}`}>
                                        <a>{category.title}</a>
                                    </Link>
                                </h4>
                                <ul>
                                    {category.children &&
                                        category.children.map((child, index) => (
                                            <li key={index}>
                                                <Link href={`/category/${child.id}`} as={`/category/${child.id}`}>
                                                    <a>{child.title}</a>
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ShopCategories;
