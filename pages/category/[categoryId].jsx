import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ProductRepository from '~/repositories/ProductRepository';
import { useRouter } from 'next/router';
import ProductItems from '~/components/partials/product/ProductItems';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import CategoryRepository from '~/repositories/CategoryRepository';

const ProductCategoryScreen = () => {
    const Router = useRouter();
    const { categoryId }  = Router.query;
    const [category, setCategory] = useState(null);
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getCategry() {
        setLoading(true);
        let paramsObj = Router.query
        let paramsString = ''
        for (const property in paramsObj) {
            if(paramsString === ''){
                paramsString = `?${property}=${ paramsObj[property]}`
            } else {
                paramsString += `&${property}=${ paramsObj[property]}`
            }
        }
        console.log(paramsString);
        console.log("Router.query", Router.query);
        if (categoryId) {

            const responseData = await ProductRepository.getProductsByCategory(
                paramsString
            );
            if (responseData) {
                console.log("responseData caregory", responseData);
                setCategory(responseData);
                setTimeout(
                    function () {
                        setLoading(false);
                    }.bind(this),
                    250
                );
            }
        } else {
            // await Router.push('/shop');
        }
    }

    async function getCategories() {
        setLoading(true);
        const responseData = await CategoryRepository.getCategories();
        const categoryArr = responseData?.filter(category => {
            return category.id == categoryId
        })
        console.log("fasdfasdf categoryArr", categoryArr);

        if (categoryArr.length > 0) {
            if(categoryArr[0].children) {
                setCategories(categoryArr[0]);
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
        getCategry();
        getCategories();
    }, [Router.query ]);

    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Каталог',
            url: '/shop',
        },
        {
            text: categories ? categories.title : 'Категория товара',
        },
    ];

    //Views
    let productItemsViews;

    if (!loading) {
        if (category && category.data.length > 0) {
            productItemsViews = (
                <ProductItems columns={4} products={category.data}/>
            );
        } else {
            productItemsViews = <p>Товар не найден.</p>;
        }
    } else {
        productItemsViews = <p>Загрузка...</p>;
    }

    return (
        <PageContainer
            footer={<FooterDefault />}
            title={categories ? categories.title : 'Категория'}
            boxed={true}>
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <div className="ps-layout--shop ps-shop--category">
                        <div className="ps-layout__left">
                            {categories && <WidgetShopCategories categories={categories.children}/>}
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            <h3 className="ps-shop__heading">
                                {categories && categories.title}
                            </h3>
                            {productItemsViews}
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};
export default ProductCategoryScreen;
