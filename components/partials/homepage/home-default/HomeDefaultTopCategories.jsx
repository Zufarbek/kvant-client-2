import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import CategoryRepository from '~/repositories/CategoryRepository';


function HomeDefaultTopCategories () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryRepository.getCategories().then(data => {
            if (data?.length > 0) {
                setCategories(data);
            }
        })
    },[])
    return (
        <div className="ps-top-categories">
            <div className="ps-container">
                <h3>Лучшие категории месяца</h3>
                <div className="row align-items-center">
                    {
                        categories.map((item, index) => {
                            return (
                                <div className=" col-lg-2 col-md-4 col-sm-4 col-6 ">
                                    <div className="ps-block--category">
                                        <Link href={`/category/${item.id}`}>
                                            <a className="ps-block__overlay"></a>
                                        </Link>
                                        <img src={item.image} alt="martfury" />
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeDefaultTopCategories;
