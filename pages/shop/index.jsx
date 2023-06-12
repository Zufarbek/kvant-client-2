import React, {useEffect, useState} from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopItems from '~/components/partials/shop/ShopItems';
import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';
import ShopCategories from '~/components/partials/shop/ShopCategories';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import PageContainer from '~/components/layouts/PageContainer';
import Newletters from '~/components/partials/commons/Newletters';
import ProductRepository from '~/repositories/ProductRepository';

const ShopDefaultPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Магазин',
        },
    ];

    const [mostViewed, setMostViewed] = useState([])

    useEffect(() => {
        getProductsmostViewed()
    }, [])

    async function getProductsmostViewed() {
        const responseData = await ProductRepository.getProductsmostViewed();
        if (responseData) {
            setMostViewed(responseData.data)
        }
    }

    return (
        <PageContainer title="Shop">
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    <ShopBrands />
                    <ShopCategories />
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WidgetShopCategories />
                            <WidgetShopFilterByPriceRange />
                        </div>
                        <div className="ps-layout__right">
                            {
                                (mostViewed.length > 0) && 
                                <ProductGroupByCarousel
                                    collectionSlug="shop-best-seller-items"
                                    title="Топ продуктов месяца"
                                    data={mostViewed}
                                />
                            }
                            <ProductGroupByCarousel
                                collectionSlug="shop-recommend-items"
                                title="Рекомендуемые товары"
                            />
                            {/* <ShopItems columns={6} pageSize={18} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};
export default ShopDefaultPage;
