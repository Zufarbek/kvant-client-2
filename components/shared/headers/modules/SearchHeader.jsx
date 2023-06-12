import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Spin } from 'antd';
import CategoryRepository from '~/repositories/CategoryRepository';
import ProductRepository from '~/repositories/ProductRepository';
import ProductSearchResult from '~/components/elements/products/ProductSearchResult';

// const exampleCategories = [
//     'All',
//     'Babies & Moms',
//     'Books & Office',
//     'Cars & Motocycles',
//     'Clothing & Apparel',
//     ' Accessories',
//     'Bags',
//     'Kid’s Fashion',
//     'Mens',
//     'Shoes',
//     'Sunglasses',
//     'Womens',
//     'Computers & Technologies',
//     'Desktop PC',
//     'Laptop',
//     'Smartphones',
//     'Consumer Electrics',
//     'Air Conditioners',
//     'Accessories',
//     'Type Hanging Cell',
//     'Audios & Theaters',
//     'Headphone',
//     'Home Theater System',
//     'Speakers',
//     'Car Electronics',
//     'Audio & Video',
//     'Car Security',
//     'Radar Detector',
//     'Vehicle GPS',
//     'Office Electronics',
//     'Printers',
//     'Projectors',
//     'Scanners',
//     'Store & Business',
//     'Refrigerators',
//     'TV Televisions',
//     '4K Ultra HD TVs',
//     'LED TVs',
//     'OLED TVs',
//     'Washing Machines',
//     'Type Drying Clothes',
//     'Type Horizontal',
//     'Type Vertical',
//     'Garden & Kitchen',
//     'Cookware',
//     'Decoration',
//     'Furniture',
//     'Garden Tools',
//     'Home Improvement',
//     'Powers And Hand Tools',
//     'Utensil & Gadget',
//     'Health & Beauty',
//     'Equipments',
//     'Hair Care',
//     'Perfumer',
//     'Wine Cabinets',
// ];

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

const SearchHeader = () => {
    const inputEl = useRef(null);
    const [categories, setCategories] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [resultItems, setResultItems] = useState(null);
    const [loading, setLoading] = useState(false);
    const debouncedSearchTerm = useDebounce(keyword, 300);

    function handleClearKeyword() {
        setKeyword('');
        setIsSearch(false);
        setLoading(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push(`/search?keyword=${keyword}`);
    }

    useEffect(() => {
        CategoryRepository.getCategories().then(data => {
            if (data) {
                setCategories(data);
            }
        })
    },[])

    useEffect(() => {
        if (debouncedSearchTerm) {
            setLoading(true);
            if (keyword) {
                const queries = {
                    order:'desc',
                    sort:'views',
                    search: keyword,
                    pageSize: 5
                };
                const products = ProductRepository.getRecords(queries);
                products.then((result) => {
                    setLoading(false);
                    console.log("products in serach", result);
                    setResultItems(result.data);
                    setIsSearch(true);
                });
            } else {
                setIsSearch(false);
                setKeyword('');
            }
            if (loading) {
                setIsSearch(false);
            }
        } else {
            setLoading(false);
            setIsSearch(false);
        }
    }, [debouncedSearchTerm]);

    // Views
    let productItemsView,
        clearTextView,
        selectOptionView,
        loadingView,
        loadMoreView;
    if (!loading) {
        if (resultItems && resultItems.length > 0) {
            if (resultItems.length > 5) {
                loadMoreView = (
                    <div className="ps-panel__footer text-center">
                        <Link href="/search">
                            <a>Все результаты</a>
                        </Link>
                    </div>
                );
            }
            productItemsView = resultItems.map((product) => (
                <ProductSearchResult product={product} key={product.id} />
            ));
        } else {
            productItemsView = <p>Товар не найден</p>;
        }
        if (keyword !== '') {
            clearTextView = (
                <span className="ps-form__action" onClick={handleClearKeyword}>
                    <i className="icon icon-cross2"></i>
                </span>
            );
        }
    } else {
        loadingView = (
            <span className="ps-form__action">
                <Spin size="small" />
            </span>
        );
    }

    selectOptionView = (categories.length > 0) && categories.map((option) => (
        <option value={option.id} key={option.id}>
            {option.title}
        </option>
    ));

    return (
        <form
            className="ps-form--quick-search"
            method="get"
            action="/"
            onSubmit={handleSubmit}>
            <div className="ps-form__categories">
                <select className="form-control">{selectOptionView}</select>
            </div>
            <div className="ps-form__input">
                <input
                    ref={inputEl}
                    className="form-control"
                    type="text"
                    value={keyword}
                    placeholder="Я покупаю..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                {clearTextView}
                {loadingView}
            </div>
            <button onClick={handleSubmit}>Поиск</button>
            <div
                className={`ps-panel--search-result${
                    isSearch ? ' active ' : ''
                }`}>
                <div className="ps-panel__content">{productItemsView}</div>
                {loadMoreView}
            </div>
        </form>
    );
};

export default SearchHeader;
