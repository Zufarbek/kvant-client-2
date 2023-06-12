import React, {useState, useEffect} from 'react';
import SiteFeatures from '~/components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '~/components/partials/homepage/home-default/HomeAdsColumns';
import HomeAds from '~/components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '~/components/partials/commons/DownLoadApp';
import NewArrivals from '~/components/partials/homepage/home-default/NewArrivals';
import Newletters from '~/components/partials/commons/Newletters';
import HomeDefaultDealOfDay from '~/components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultTopCategories from '~/components/partials/homepage/home-default/HomeDefaultTopCategories';
import HomeDefaultProductListing from '~/components/partials/homepage/home-default/HomeDefaultProductListing';
import HomeDefaultBanner from '~/components/partials/homepage/home-default/HomeDefaultBanner';
import PageContainer from '~/components/layouts/PageContainer';
import CategoryRepository from '~/repositories/CategoryRepository';
import ProductRepository from '~/repositories/ProductRepository';
import ShopBrands from '~/components/partials/shop/ShopBrands';

const HomepageDefaultPage = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        CategoryRepository.getBanners().then(data => {
            if (data?.length > 0) {
                for (let index = 0; index < data.length; index++) {
                    getProductsByCategory(data[index].id)
                        .then(dataBanners => {
                            data[index].data = dataBanners.data
                        })
                }
                setTimeout(() => {
                    setBanners(data);
                }, 250);
            }
        })
    },[])

    async function getProductsByCategory(pid) {
        let params = `?categoryId=${pid}`
        const responseData = await ProductRepository.getProductsByCategory(params);
        if (responseData) {
            return responseData;
        }
    }
    return (
        <PageContainer title="Технические оборудования в разновидности | Kvant">
            <main id="homepage-1">
                <HomeDefaultBanner />
                <SiteFeatures />
                {/* <HomeDefaultDealOfDay collectionSlug="deal-of-the-day" /> */}
                <HomeAdsColumns />
                <HomeDefaultTopCategories />

                {
                    banners.map((item, index) => {
                        return <HomeDefaultProductListing key={index}
                                    collectionSlug="consumer-electronics"
                                    title={item.title}
                                    data={item}
                                />
                    })
                }

                <ShopBrands />
                {/* <HomeAds /> */}
                {/* <DownLoadApp /> */}
                {/* <NewArrivals collectionSlug="new-arrivals-products" /> */}
                {/* <Newletters /> */}
            </main>
        </PageContainer>
    );
};

export default HomepageDefaultPage;
