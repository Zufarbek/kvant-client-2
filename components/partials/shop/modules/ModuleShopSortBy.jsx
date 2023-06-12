import React from 'react';

const ModuleShopSortBy = () => {
    return (
        <select
            className="ps-select form-control"
            data-placeholder="Сортировка:">
            <option>По умолчанию</option>
            <option>Название (А - Я)</option>
            <option>Название (Я - А)</option>
            <option>Цена (низкая {'>'} высокая)</option>
            <option>Цена (высокая {'>'} низкая)</option>
            <option>Рейтинг (начиная с высокого)</option>
            <option>Рейтинг (начиная с низкого)</option>
            <option>Модель (А - Я)</option>
            <option>Модель (Я - А)</option>
        </select>
    );
};

export default ModuleShopSortBy;
