import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import MediaRepository from '~/repositories/MediaRepository';

const ShopBanner =()=>  {
    const carouselSetting = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const [bannerItems, setBannerItems] = useState(null);

    async function getBannerItems() {
        const responseData = await MediaRepository.getBannersBySlug(
            'full-banner-images'
        );
        if (responseData) {
            setBannerItems(responseData);
        }
    }

    useEffect(() => {
        getBannerItems();
    }, []);

    return (
        <div className="ps-shop-banner">
            <Slider {...carouselSetting} fade={true} className="ps-carousel">
                {
                    bannerItems && bannerItems.map((item, index) => {
                        return (
                            <img height={333} key={index} src={item.url} alt="Kvant products" />
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default ShopBanner;
