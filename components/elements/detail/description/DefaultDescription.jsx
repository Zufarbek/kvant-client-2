import React from 'react';

import { Tabs } from 'antd';
import PartialDescription from '~/components/elements/detail/description/PartialDescription';
import PartialSpecification from '~/components/elements/detail/description/PartialSpecification';
import PartialVendor from '~/components/elements/detail/description/PartialVendor';
import PartialReview from '~/components/elements/detail/description/PartialReview';
import PartialOffer from '~/components/elements/detail/description/PartialOffer';

const { TabPane } = Tabs;

const DefaultDescription = ({product}) => {
    return (
        <div className="ps-product__content ps-tab-root">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Описание" key="1">
                    <PartialDescription product={product}/>
                </TabPane>
                <TabPane tab="Характеристики" key="2">
                    <PartialSpecification />
                </TabPane>
            </Tabs>
        </div>
    );
};

export default DefaultDescription;
