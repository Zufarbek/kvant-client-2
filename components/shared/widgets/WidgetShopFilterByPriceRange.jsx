import React, { useState } from 'react';
import { Slider, Checkbox } from 'antd';
import { useRouter } from 'next/router';

const WidgetShopFilterByPriceRange = () => {
    const Router = useRouter();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2000);
    const {query} = Router

    function handleChangeRange(value) {
        setMin(value[0]);
        price_lt: value[1], setMax(value[1]);

        /*  const params = {
            price_gt: value[0],
        };*/
    
        Router.push(`/category/${query.categoryId ? query.categoryId : 0 }?priceMin=${value[0]}&priceMax=${value[1]}`);
        /*this.props.dispatch(getProductsByPrice(params));*/
    }

    return (
        <aside className="widget widget_shop">
            <figure>
                <h4 className="widget-title">Цена</h4>
                <Slider
                    range
                    defaultValue={[0, 200000]}
                    max={200000}
                    onAfterChange={(e) => handleChangeRange(e)}
                />
                <p>
                    Цена: UZS {min} - UZS {max}
                </p>
            </figure>
        </aside>
    );
};

export default WidgetShopFilterByPriceRange;
