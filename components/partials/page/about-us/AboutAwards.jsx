import React, { Component } from 'react';

import Slider from 'react-slick';
import Link from 'next/link';
import ShopBrands from '../../shop/ShopBrands';

class AboutAwards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const carouselSetting = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 100,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        infinite: true,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        dots: true,
                        arrows: false,
                    },
                },
            ],
        };
        return (
            <div className="ps-about-awards">
                <div className="container">
                    <div className="ps-section__header">
                        <h4>Награды и признание</h4>
                        <p>
                            Мы уже 15 лет на рынке. Мы занимаемся торговлей генераторов, техники сельского хозяйства, а также промышленных электроинструментов, аккумуляторных, ручных и садовых инструментов, пневматических машин, водяных насосов, сварочного и строительного оборудования и аксессуаров. Мы являемся официальным ритейлером международных компаний таких как PERKINS, ANDELI, INGCO, CROWN, BOSCH. У нас очень большой ассортимент брендовых продуктов. Мы обслуживали и сейчас обслуживаем более 50 разных компаний и они нам доверяют свой комфорт. Доступность, качество и доверие - наш приоритет!
                        </p>
                    </div>

                    <div className="ps-section__content mt-4">
                        <Slider {...carouselSetting} className="ps-carousel">
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img src="/static/img/logolar/andeli.jpg" alt="Kvant partners Logo" />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img src="/static/img/logolar/ingco.jpg" alt="Kvant partners Logo" />                                    
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img src="/static/img/logolar/haomax.jpg" alt="Kvant partners Logo" />                                    
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img src="/static/img/logolar/saneyoo.jpg" alt="Kvant partners Logo" />                                    
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/page/blank">
                                    <a>
                                        <img height={159} src="/static/img/logolar/kingmax.jpeg" alt="Kvant partners Logo" />                                    
                                    </a>
                                </Link>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutAwards;
