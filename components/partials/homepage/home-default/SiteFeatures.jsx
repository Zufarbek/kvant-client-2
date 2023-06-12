import React from 'react';

const SiteFeatures = () => (
    <div className="ps-site-features">
        <div className="ps-container">
            <div className="ps-block--site-features">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-rocket"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Бесплатная доставка по Ташкенту</h4>
                        {/* <p>Для всех заказов свыше 2 000 000 сумов</p> */}
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-3d-rotate"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>90 дней возврата</h4>
                        <p>Если товар имеет проблемы</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-credit-card"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Безопасная оплата</h4>
                        <p>100% безопасный платеж</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className="icon-bubbles"></i>
                    </div>
                    <div className="ps-block__right">
                        <h4>Поддержка 24/7</h4>
                        <p>Специальная поддержка</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SiteFeatures;
