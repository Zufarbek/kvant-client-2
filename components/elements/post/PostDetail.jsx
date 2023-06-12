import React from 'react';
import RecommendProducts from './RecommendProducts';
import Link from 'next/link';

const PostDetail = () => (
    <div className="ps-post--detail">
        <div className="ps-post__header">
            <div className="container">
                <h1>
                СЕРВИСЫ И УСЛУГИ
                </h1>
            </div>
        </div>
        <div className="container">
            <div className="ps-post__content">
                <h4>
                Наша компания KVANT предлагает свои услуги по установке, ремонту и техническому обслуживанию бензиновых и дизельных генераторов.
                </h4>
                <p>
                Если Вам необходимы услуги по установке, ремонту и техническому обслуживанию бензиновых и дизельных генераторов, то наша компания является лучшим выбором. Наши высококвалифицированные специалисты готовы предоставить Вам помощь с техническим обслуживанием бензиновых и дизельных генераторов с помощью современного оборудования и огромного опыта.
                </p>
                <p>
                Мы подходим к каждому клиенту индивидуально и гарантируем высокое качество работы в максимально короткие сроки.
                </p>
                <p>
                Цена обсуждается в зависимости от типа и объёма работы.
                </p>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <img
                            className="mb-30"
                            src="/static/img/kvant/services/1.jpg"
                            alt="martfury"
                        />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <img
                            className="mb-30"
                            src="/static/img/kvant/services/5.jpg"
                            alt="martfury"
                        />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <img
                            className="mb-30"
                            src="/static/img/kvant/services/7.jpg"
                            alt="martfury"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PostDetail;
