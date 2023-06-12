import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import categories from '../../../public/static/data/static-categories.json';
import CategoryRepository from '~/repositories/CategoryRepository';

const { SubMenu } = Menu;

class PanelCategories extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
        categories: []
    };

    componentDidMount() {
        CategoryRepository.getCategories().then(data => {
            if (data?.length > 0) {
                this.setState({categories: data});
            }
        })
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                {this.state.categories.map(category => (
                    <Menu.Item key={category.id}>
                        <Link href={'/category/' + category.id}>
                            <a>
                                {category.icon && <img className='mr-3' src={category.icon} width={30} alt={category.title}/>}
                                {category.title}
                            </a>
                        </Link>
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}

export default PanelCategories;
