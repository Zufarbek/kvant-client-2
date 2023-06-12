import React from 'react';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy; 2023 <a href="http://soff.uz/" target='_blank'>Soff IT Company</a>. Все права защищены</p>
        <p>
            <span>Мы используем безопасный платеж для:</span>
            <a href="#">
                <img width="80px" src="/static/img/payment-method/click.png" alt="Martfury" />
            </a>
            <a href="#">
                <img width="80px" src="/static/img/payment-method/payme-01.png" alt="Martfury" />
            </a>
        </p>
    </div>
);

export default FooterCopyright;
