import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import menuData from '../../../public/static/data/menu';
import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import MenuCategoriesDropdown from '~/components/shared/menus/MenuCategoriesDropdown';

const mainMenu= [
    {
        title: "О нас",
        path: "/page/about-us",
        id: '1',
    },
    {
        title: "Условия рассрочки",
        path: "/page/terms-of-payments",
        id: '2',
    },
    {
        title: "Сервисы и Услуги",
        path: "/page/service",
        id: '3',
    },
    {
        title: "Контакты",
        path: "/page/contact-us",
        id: '4',
    },
]

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <MenuCategoriesDropdown />
                    </div>
                    <div className="navigation__right">
                        <Menu
                            source={mainMenu}
                            className="menu"/>
                        {/* <ul className="navigation__extra">
                            <li>
                                <LanguageSwicher />
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavigationDefault;
