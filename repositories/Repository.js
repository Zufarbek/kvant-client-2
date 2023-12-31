import axios from 'axios';

// const baseDomain = 'http://192.168.0.148:3000'; // API for products
// const baseDomain = 'https://api.fibro.uz:3026'; // API for products
// export const basePostUrl = 'http://localhost:1337'; // API for post
// export const baseStoreURL = 'http://localhost:1337'; // API for vendor(store)

export const basePostUrl = process.env.BASE_POST_URL; // API for post
export const baseStoreURL = process.env.BASE_STORE_URL; // API for vendor(store)

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = process.env.BASE_URL;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
