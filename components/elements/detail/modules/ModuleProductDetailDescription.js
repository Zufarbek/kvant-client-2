import React from 'react';
import Link from 'next/link';

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        <ul className="ps-list--dot">
            <li>{product.description}</li>
        </ul>
    </div>
);

export default ModuleProductDetailDescription;
