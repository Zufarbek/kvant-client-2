import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import Newletters from '~/components/partials/commons/Newletters';
import Link from 'next/link';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';

const PaymentSuccessPage = () => {
    const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
        },
        {
            text: 'Корзина',
            url: '/account/shopping-cart',
        },
        {
            text: 'Платеж выполнен успешно',
        }
    ];

    return (
        <>
            <PageContainer footer={<FooterDefault />} title="Платеж выполнен успешно">
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <div className="ps-checkout ps-section--shopping">
                        <div className="container">
                            <div className="ps-section__header">
                                <h1>Платеж выполнен успешно</h1>
                            </div>
                            <div className="ps-section__content">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                        <div className="ps-block--payment-success">
                                            <div className="ps-block__content">
                                                <h3>
                                                    Спасибо! Ваш заказ находится в обработке.
                                                </h3>
                                                <p>
                                                    Номер вашего заказа{' '}
                                                    <strong>123</strong>
                                                </p>
                                                <p>
                                                    Если у вас есть вопросы по поводу покупки, свяжитесь с нами по телефонам {' '}
                                                    <a
                                                        href="tel:977774004"
                                                        className="ps-highlight">
                                                        <strong>
                                                            +998 97 777 40 04
                                                        </strong>
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="ps-block__bottom">
                                                <Link href="/">
                                                    <a className="ps-btn">
                                                        <i className="icon-arrow-left mr-2"></i>
                                                        Магазин
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                                        <div className="ps-form__orders">
                                            <ModulePaymentOrderSummary />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Newletters layout="container" /> */}
            </PageContainer>
        </>
    );
};

export default PaymentSuccessPage;
