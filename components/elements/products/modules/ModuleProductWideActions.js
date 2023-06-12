import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import useProduct from '~/hooks/useProduct';
import useEcomerce from '~/hooks/useEcomerce';

const ModuleProductWideActions = ({ ecomerce, product }) => {
    const { price } = useProduct();
    const { addItem } = useEcomerce();
    function handleAddItemToCart(e) {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
    }

    function handleAddItemToWishlist(e) {
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
        const modal = Modal.success({
            centered: true,
            title: 'Успех!',
            content: `Этот товар добавлен в избранное`,
        });
        modal.update;
    }

    return (
        <div className="ps-product__shopping">
            {price(product)}
            <a
                className="ps-btn"
                href="#"
                onClick={(e) => handleAddItemToCart(e)}>
                В корзину
            </a>
            <ul className="ps-product__actions">
                <li>
                    <a href="#" onClick={(e) => handleAddItemToWishlist(e)}>
                        <i className="icon-heart"></i> Избранное
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default connect((state) => state)(ModuleProductWideActions);
