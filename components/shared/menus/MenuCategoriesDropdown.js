import React, {useEffect, useState} from 'react';
import menuData from '~/public/static/data/menu.json';
import Menu from '~/components/elements/menu/Menu';
import CategoryRepository from '~/repositories/CategoryRepository';

const MenuCategoriesDropdown = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryRepository.getCategories().then(data => {
            if (data?.length > 0) {
                setCategories(data);
            }
        })
    },[])

    return (
        <div className="menu--product-categories">
            <div className="menu__toggle">
                <i className="icon-menu"></i>
                <span>Все категории</span>
            </div>
            <div className="menu__content">
                <Menu
                    source={categories}
                    className="menu--dropdown"
                />
            </div>
        </div>
    );
};

export default MenuCategoriesDropdown;
