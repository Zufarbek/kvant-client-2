import React, { useState } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';

const ModulePaymentMethods = () => {
    const Router = useRouter();
    const [method, setMethod] = useState("Click");

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    return (
        <>
            <h4>Способы оплаты</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value='Click'>
                            <img width="80px" src="/static/img/payment-method/click.png" alt="Click" />
                        </Radio>
                        <Radio value="Payme">
                            <img width="80px" src="/static/img/payment-method/payme-01.png" alt="Payme" />
                        </Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                        <div className="ps-block__tab">
                            <a
                                className="ps-btn"
                                href="https://my.click.uz/services/pay/443B6EC0ED274CDDA6F662F63560637B"
                                target="_blank">
                                Процесс с {method}
                            </a>
                        </div>
                </div>
            </div>
        </>
    );
};

export default ModulePaymentMethods;
