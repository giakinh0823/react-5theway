import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'antd';
import ThumnailCart from './ThumnailCart';
import { Typography } from 'antd';
import { formatPrice } from '../../../utils/common';
import Text from 'antd/lib/typography/Text';
import useCategorys from '../../../Hooks/useData/useCategorys';
import useService from '../../../Hooks/useData/useService';


CartMini.propTypes = {
    cart: PropTypes.object,
};

CartMini.defaultProps = {
    cart: {},
}

function CartMini(props) {
    const { cart } = props
    const { Title } = Typography
    const {categorys} = useCategorys()
    const {services } = useService()
    const indexCategory = categorys.findIndex(item => item.id === cart.product.category)
    const indexService = services.findIndex(item => item.id === cart.product.service)
    return (
        <div>
            <Row gutter={12}>
                <Col span={8}>
                    <ThumnailCart product={cart.product} />
                </Col>
                <Col span={16}>
                    <Row>
                        <Text style={{ fontSize: "12px" }} type="secondary">{services[indexService]?.name}</Text>
                    </Row>
                    <Row>
                        <Title level={5} style={{margin: 0}}>{cart.product.title}</Title>
                    </Row>
                    <Row>
                        <Text style={{ fontSize: "12px" }}>{categorys[indexCategory]?.name}</Text>
                    </Row>
                    <Row>
                        <Text style={{fontSize: "14px", marginRight: "10px" }}>Giá: {formatPrice(cart.product.price)}</Text>
                        <Text style={{fontSize: "14px" }}>Số lượng: {cart.quantity}</Text>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default CartMini;