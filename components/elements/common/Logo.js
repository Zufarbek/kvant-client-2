import React from 'react';
import Link from 'next/link';

const Logo = ({ type }) => {
    let data = {
            url: '/',
            img: '/static/img/kvant/Kvant_horz_logo.svg',
    }
    return (
        <Link href={data.url}>
            <a className="ps-logo">
                <img src={data.img} alt="" />
            </a>
        </Link>
    );
};

export default Logo;
