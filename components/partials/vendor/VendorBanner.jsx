import React from 'react';
import Link from 'next/link';
const VendorBanner = () => (
    <div
        className="ps-vendor-banner bg--cover"
        style={{ backgroundImage: "url('/static/img/bg/vendor.jpg')" }}
    >
        <div className="ps-vendor-banner">
            <div className="container">
                <h2>
                    УСЛОВИЯ РАССРОЧКИ
                </h2>
                <Link href="#terms">
                    <a className="ps-btn ps-btn--lg" href="#">
                        Подробнее
                    </a>
                </Link>
            </div>
        </div>
    </div>
);

export default VendorBanner;
