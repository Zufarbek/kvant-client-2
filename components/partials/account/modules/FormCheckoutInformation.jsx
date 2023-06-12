import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Form, Input } from 'antd';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };

    render() {
        return (
            <Form
                className="ps-form__billing-info"
                onFinish={this.handleLoginSubmit}>
                <h3 className="ps-form__heading">Контактная информация</h3>
                <div className="form-group">
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: false,
                                message:
                                    'Введите номер мобильного телефона!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Номер телефона"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="firstName"
                        rules={[
                            {
                                required: false,
                                message: 'Введите ваше имя!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Имя"
                        />
                    </Form.Item>
                </div>
                <h3 className="ps-form__heading">Адрес доставки</h3>
                <div className="row">
                    <div className="col-sm-6 d-none">
                        <div className="form-group">
                            <Form.Item
                                name="lastName"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Enter your last name!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Form.Item>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: false,
                                message: 'Введите полный адрес!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            placeholder="Address"
                        />
                    </Form.Item>
                </div>
                <div className="ps-form__submit">
                    <div className="ps-block__footer">
                        <button className="ps-btn">Продолжить доставку</button>
                    </div>
                </div>
            </Form>
        );
    }
}

export default FormCheckoutInformation;
