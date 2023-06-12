import React from 'react';
import Link from 'next/link';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';

const Shipping = () => {
    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                <div className="ps-section__header">
                    <h1>Информация об отправке</h1>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="ps-block--shipping">
                                <div className="ps-block__panel">
                                    <figure>
                                        <small>Контакт</small>
                                        <p>test@gmail.com</p>
                                        <Link href="/account/checkout">
                                            <a>Изменить</a>
                                        </Link>
                                    </figure>
                                    <figure>
                                        <small>Отправка на</small>
                                        <p>2015 South Street, Midland, Texas</p>
                                        <Link href="/account/checkout">
                                            <a>Изменить</a>
                                        </Link>
                                    </figure>
                                </div>
                                <h4>Метод доставки</h4>
                                <div className="ps-block__panel">
                                    <figure>
                                        <small>Международный доставка</small>
                                        <strong>$20.00</strong>
                                    </figure>
                                </div>
                                <div className="ps-block__footer">
                                    <Link href="/account/checkout">
                                        <a>
                                            <i className="icon-arrow-left mr-2"></i>
                                            Назад к информации
                                        </a>
                                    </Link>
                                    <Link href="/account/payment">
                                        <a className="ps-btn">
                                            Продолжить оплату
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <div className="ps-form__orders">
                                <ModulePaymentOrderSummary shipping={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
