// next.config.js
const dotenv = require('dotenv');
/*
* Технические оборудования в разновидности | Kvant
* Author: Zufarbek Abdurahmonov | Soff IT Company
* Homepage: https://soff.uz
* Created at: 2023
* Update at: 

* */

const nextSettings = {
    optimizeFonts: false,
    // disable eslint
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Change your site title here
    env: {
        title: 'Kvant',
        titleDescription: 'Технические оборудования в разновидности | Kvant',
        BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
        BASE_POST_URL: process.env.BASE_POST_URL || 'http://localhost:1337',
        BASE_STORE_URL: process.env.BASE_STORE_URL || 'http://localhost:1337',
    },
};

module.exports = nextSettings;
