import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CategoryRepository from '~/repositories/CategoryRepository';

const WidgetShopCategories = () => {
    const Router = useRouter();
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);

    const { categoryId } = Router.query;

    async function getCategories() {
        setLoading(true);
        const responseData = await CategoryRepository.getCategories();

        if(categoryId){
            const categoryArr = responseData?.filter(category => {
                return category.id == categoryId
            })
            if (categoryArr.length > 0) {
                if(categoryArr[0].children) {
                    setCategories(categoryArr[0].children);
                    setTimeout(
                        function () {
                            setLoading(false);
                        }.bind(this),
                        250
                    );
                }
            }
        }

        if(!categoryId){
            if (responseData.length > 0) {
                setCategories(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.id}
                    className={item.id == categoryId ? 'active' : ''}>
                    <Link href={`/category/${item.id}`}>{item.title}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Загрузка...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Категории</h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetShopCategories;
