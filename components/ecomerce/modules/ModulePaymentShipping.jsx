import React from 'react';
import Link from 'next/link';

const ModulePaymentShipping = () => {
    return (
        <>

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

        </>
    );
};

export default ModulePaymentShipping;
